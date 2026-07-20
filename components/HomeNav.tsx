"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About ▾", href: "/about" },
  { label: "Seva", href: "/sevas" },
  { label: "Blog", href: "/blog" },
  { label: "Books", href: "/books" },
  { label: "Academy", href: "/academy" },
  { label: "Media ▾", href: "/media" },
  { label: "Centers", href: "/centers" },
  { label: "Events", href: "/events" },
  { label: "Calendar ▾", href: "/calendar" },
];

/** Strip the dropdown caret for the plain mobile menu list. */
const plain = (label: string) => label.replace(/\s*▾$/, "");

export default function HomeNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="bb-nav">
      <Link href="/" className="bb-brand" onClick={close}>
        <img src="/images/home/logo.png" alt="Bhakta Bandhav" />
        <span className="bb-brand-name">
          <b>Bhakta Bandhav</b>
          <span>FAMILY OF LORD CHAITANYA</span>
        </span>
      </Link>

      <nav className="bb-navlinks">
        {NAV_LINKS.map((l) => (
          <Link key={l.label} href={l.href}>
            {l.label}
          </Link>
        ))}
        <Link href="#join" className="bb-btn-donate">
          DONATE
        </Link>
      </nav>

      <button
        type="button"
        className="bb-navtoggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="bb-mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="bb-mobile-menu"
        className={"bb-mobilemenu" + (open ? " open" : "")}
      >
        {NAV_LINKS.map((l) => (
          <Link key={l.label} href={l.href} onClick={close}>
            {plain(l.label)}
          </Link>
        ))}
        <Link href="#join" className="bb-mobilemenu-donate" onClick={close}>
          DONATE
        </Link>
      </div>
    </header>
  );
}
