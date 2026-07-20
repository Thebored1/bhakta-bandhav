"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { SITE } from "@/lib/data";

function smoothScroll(selector: string, e: React.MouseEvent) {
  e.preventDefault();
  const el = document.querySelector(selector);
  if (el) {
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
  }
}

export function UtilityBar() {
  return (
    <div className="utility">
      <div className="wrap">
        <span className="sanskrit">वसुधैव कुटुम्बकम् · The world is one family</span>
        <div className="util-links">
          <a href="/#join">Donate</a>
          <a href="/contact">Contact</a>
          <div className="util-socials">
            <a href="#" aria-label="YouTube"><Icon name="yt" size={17} /></a>
            <a href="#" aria-label="Instagram"><Icon name="ig" size={15} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDrawer({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  const [openGroup, setOpenGroup] = useState(-1);

  const go = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith("#")) smoothScroll(href, e);
    onClose();
  };

  return (
    <>
      <div
        className={"drawer-backdrop" + (show ? " show" : "")}
        onClick={onClose}
      />
      <aside className={"drawer" + (show ? " show" : "")} aria-hidden={!show}>
        <div className="drawer-head">
          <span className="brand">
            <span className="mark">ব</span>
            <span className="name">
              <b>Bhakta Bandhav</b>
              <span>Family of Lord Chaitanya</span>
            </span>
          </span>
          <button className="drawer-close" aria-label="Close menu" onClick={onClose}>
            <Icon name="close" size={26} />
          </button>
        </div>

        {SITE.nav.map((item, i) => (
          <div className="m-group" key={item.label}>
            {item.items ? (
              <>
                <button
                  className={"m-top" + (openGroup === i ? " open" : "")}
                  onClick={() => setOpenGroup(openGroup === i ? -1 : i)}
                >
                  {item.label} <Icon name="chevron" size={20} />
                </button>
                <div className={"m-sub" + (openGroup === i ? " open" : "")}>
                  {item.items.map((s) => (
                    <a key={s.t} href={s.href} onClick={go(s.href)}>
                      {s.t}
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <button className="m-top" onClick={go(item.href ?? "#")}>
                {item.label}
              </button>
            )}
          </div>
        ))}

        <div className="drawer-cta">
          <a className="btn btn-primary" href="/#join" onClick={go("/#join")}>
            Donate <Icon name="heart" size={15} />
          </a>
        </div>
      </aside>
    </>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [openIdx, setOpenIdx] = useState(-1);
  const [drawer, setDrawer] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawer]);

  const open = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIdx(i);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenIdx(-1), 140);
  };

  const go = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith("#")) smoothScroll(href, e);
    setDrawer(false);
    setOpenIdx(-1);
  };

  return (
    <>
      <nav className={"nav" + (scrolled ? " scrolled" : "")}>
        <div className="wrap bar">
          <a className="brand" href="/" onClick={go("/")}>
            <span className="mark">ব</span>
            <span className="name">
              <b>Bhakta Bandhav</b>
              <span>Family of Lord Chaitanya</span>
            </span>
          </a>

          <ul className="menu">
            {SITE.nav.map((item, i) => (
              <li
                key={item.label}
                className={openIdx === i ? "open" : ""}
                onMouseEnter={() => item.items && open(i)}
                onMouseLeave={() => item.items && scheduleClose()}
              >
                <a
                  className="top-link"
                  href={item.href ?? "#"}
                  onClick={item.items ? (e) => e.preventDefault() : go(item.href ?? "#")}
                >
                  {item.label}
                  {item.items && (
                    <Icon name="chevron" size={15} style={{ marginLeft: 1 }} />
                  )}
                </a>
                {item.items && (
                  <ul className="dropdown">
                    {item.items.map((s) => (
                      <li key={s.t}>
                        <a href={s.href} onClick={go(s.href)}>
                          <b>{s.t}</b>
                          <small>{s.d}</small>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <a className="btn btn-primary" href="/#join" onClick={go("/#join")}>
              Donate <Icon name="heart" size={15} />
            </a>
            <button
              className="hamburger"
              aria-label="Open menu"
              onClick={() => setDrawer(true)}
            >
              <Icon name="menu" size={26} />
            </button>
          </div>
        </div>
      </nav>

      <MobileDrawer show={drawer} onClose={() => setDrawer(false)} />
    </>
  );
}
