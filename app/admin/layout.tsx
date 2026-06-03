import type { Metadata } from "next";
import AdminNav from "@/components/admin/AdminNav";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin — Bhakta Bandhav",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-shell">
      <AdminNav />
      <main className="admin-main">{children}</main>
    </div>
  );
}
