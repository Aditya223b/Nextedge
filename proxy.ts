import { createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";

const ROLE_PATHS: Record<string, string[]> = {
  student: ["/dashboard", "/roadmap", "/marketplace", "/talent-profile", "/trends", "/risk-radar", "/portfolio", "/quests"],
  teacher: ["/teacher"],
  hod: ["/admin"],
  tpo_admin: ["/admin"],
};
const PROTECTED_PREFIXES = Object.values(ROLE_PATHS).flat();

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (isProtected && !user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (user && isProtected) {
    // Service-role lookup, not the session client: role/institution JWT claims only exist once
    // the Custom Access Token Hook is enabled in the Supabase dashboard (see PRD-Google-Integration
    // style setup guide) — this routing check can't depend on that being done first.
    const admin = createSupabaseClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } },
    );
    const { data: appUser } = await admin
      .from("users")
      .select("role")
      .eq("auth_user_id", user.id)
      .maybeSingle();
    const role = appUser?.role ?? "student";
    const allowedPaths = ROLE_PATHS[role] ?? ROLE_PATHS.student;

    if (!allowedPaths.some((path) => pathname.startsWith(path))) {
      return NextResponse.redirect(new URL(allowedPaths[0], request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/roadmap/:path*",
    "/marketplace/:path*",
    "/talent-profile/:path*",
    "/trends/:path*",
    "/risk-radar/:path*",
    "/portfolio/:path*",
    "/quests/:path*",
    "/teacher/:path*",
    "/admin/:path*",
  ],
};
