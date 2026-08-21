import type { Metadata } from "next";
import "./globals.css";
import "./login.css";

export const metadata: Metadata = {
  title: "Nextedge — Career intelligence for students",
  description:
    "Discover emerging skills, build a personalized learning roadmap, and turn progress into a recruiter-ready portfolio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
