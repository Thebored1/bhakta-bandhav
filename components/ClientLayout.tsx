"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Nav, { UtilityBar } from "./Nav";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    els.forEach((el) => el.classList.remove("in"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // The home page ("/") is a self-contained redesign that renders its own
  // utility bar, nav, and footer, so we skip the shared chrome there.
  if (pathname === "/") {
    return <>{children}</>;
  }

  return (
    <>
      <UtilityBar />
      <Nav />
      {children}
      <Footer />
    </>
  );
}
