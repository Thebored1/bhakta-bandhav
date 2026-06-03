import Link from "next/link";
import { logoutAction } from "@/lib/auth/actions";

export default function AdminNav() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-logo">
        <span className="admin-logo-mark">ব</span>
        <span className="admin-logo-text">Admin</span>
      </div>
      <nav className="admin-nav-links">
        <Link href="/admin/posts" className="admin-nav-link">Posts</Link>
        <Link href="/admin/events" className="admin-nav-link">Events</Link>
      </nav>
      <form action={logoutAction} className="admin-logout">
        <button type="submit" className="admin-logout-btn">Log out</button>
      </form>
    </aside>
  );
}
