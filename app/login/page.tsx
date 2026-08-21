import { LoginButtons } from "./login-buttons";

export default function LoginPage() {
  return <main className="login-shell">
    <section className="login-story">
      <div className="login-brand"><span className="brand-mark">N</span><strong>nextedge</strong></div>
      <div className="login-message">
        <p>CAREER INTELLIGENCE · BUILT FOR STUDENTS</p>
        <h1>Build skills the market is moving toward.</h1>
        <div className="login-signal"><span>+42%</span><p><strong>Generative AI engineering</strong>12-month demand growth</p></div>
      </div>
      <p className="login-caption">Evidence-backed trends. Personalized learning paths. A portfolio that grows with you.</p>
    </section>
    <section className="login-panel">
      <div className="login-card">
        <span className="secure-pill">Institution access</span>
        <h2>Welcome to your next edge.</h2>
        <p>Sign in with your university account to continue.</p>
        <LoginButtons />
        <div className="login-divider"><span>Verified institutional accounts only</span></div>
        <p className="login-terms">By continuing, you agree to the platform terms and acknowledge the student data privacy notice.</p>
      </div>
      <p className="login-help">Can&apos;t access your account? <a href="mailto:support@nextedge.app">Contact your institution administrator</a></p>
    </section>
  </main>;
}
