"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

function GoogleMark() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.4Z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1a5.8 5.8 0 0 1-5.4-4H3.3v2.6A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.6 14.1a6 6 0 0 1 0-4.2V7.3H3.3a10 10 0 0 0 0 9.4l3.3-2.6Z"/><path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.8A9.7 9.7 0 0 0 3.3 7.3l3.3 2.6a5.8 5.8 0 0 1 5.4-4Z"/></svg>;
}

function MicrosoftMark() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#f25022" d="M2 2h9.5v9.5H2z"/><path fill="#7fba00" d="M12.5 2H22v9.5h-9.5z"/><path fill="#00a4ef" d="M2 12.5h9.5V22H2z"/><path fill="#ffb900" d="M12.5 12.5H22V22h-9.5z"/></svg>;
}

export function LoginButtons() {
  const [pending, setPending] = useState<"google" | "azure" | null>(null);
  const [error, setError] = useState("");

  async function signIn(provider: "google" | "azure") {
    setPending(provider);
    setError("");
    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
        ...(provider === "azure" ? { scopes: "email" } : {}),
      },
    });
    if (signInError) {
      setError(signInError.message);
      setPending(null);
    }
  }

  return <div className="login-actions">
    <button onClick={() => signIn("google")} disabled={pending !== null}><GoogleMark/><span>{pending === "google" ? "Connecting…" : "Continue with Google"}</span></button>
    <button onClick={() => signIn("azure")} disabled={pending !== null}><MicrosoftMark/><span>{pending === "azure" ? "Connecting…" : "Continue with Microsoft"}</span></button>
    {error && <p className="login-error" role="alert">{error}</p>}
  </div>;
}
