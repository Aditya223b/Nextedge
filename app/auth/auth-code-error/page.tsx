import Link from "next/link";

export default function AuthCodeErrorPage() {
  return <main className="login-error-page"><div><span className="brand-mark">N</span><h1>We couldn&apos;t complete sign in.</h1><p>The authorization link may have expired or the provider is not configured yet. Return to login and try again.</p><Link href="/login">Back to login</Link></div></main>;
}
