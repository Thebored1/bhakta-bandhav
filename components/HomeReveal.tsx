"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal for the home page. Self-contained (doesn't rely on the shared
 * ClientLayout IntersectionObserver): it reveals any `.bb-reveal` element once
 * it scrolls into view by toggling `.is-visible`. Uses plain scroll/resize
 * detection so it works even where IntersectionObserver misbehaves. The actual
 * fade/slide (and its reduced-motion variant) lives in home.css.
 */
export default function HomeReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".bb-reveal")
    );
    if (!els.length) return;

    const reveal = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      let remaining = false;
      for (const el of els) {
        if (el.classList.contains("is-visible")) continue;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.88 && r.bottom > 0) {
          el.classList.add("is-visible");
        } else {
          remaining = true;
        }
      }
      return remaining;
    };

    const onScroll = () => {
      if (!reveal()) teardown();
    };
    const teardown = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    // Reveal above-the-fold content immediately. This effect runs after the
    // initial opacity:0 paint, so adding `.is-visible` still triggers the
    // CSS transition — no requestAnimationFrame needed (and it can't leave
    // content stuck invisible if rAF is throttled in a background tab).
    reveal();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return teardown;
  }, []);

  return null;
}
