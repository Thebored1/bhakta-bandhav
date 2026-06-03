import LoginForm from "@/components/admin/LoginForm";

export default function LoginPage() {
  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <span className="admin-logo-mark">ব</span>
        </div>
        <h1 className="admin-login-title">Bhakta Bandhav</h1>
        <p className="admin-login-sub">Admin Panel</p>
        <LoginForm />
      </div>
    </div>
  );
}
