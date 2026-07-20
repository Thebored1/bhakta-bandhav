"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Plate from "./Plate";
import type { PlateTint } from "@/lib/data";

const SLIDES: { tint: PlateTint; label: string; src: string }[] = [
  {
    tint: "blossom",
    label: "Srimati Radharani adorned with flowers and garlands",
    src: "/images/hero-1.webp",
  },
  {
    tint: "rose",
    label: "Sri Krishna playing the flute amid flower offerings",
    src: "/images/hero-2.webp",
  },
  {
    tint: "lavender",
    label: "A garlanded murti of a revered acharya",
    src: "/images/hero-3.webp",
  },
  {
    tint: "peach",
    label: "A garlanded murti of Srila Swami Prabhupada",
    src: "/images/hero-4.webp",
  },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const n = SLIDES.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const reset = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setI((p) => (p + 1) % n), 6500);
  }, [n]);

  useEffect(() => {
    reset();
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [reset]);

  const goTo = (idx: number) => { setI(((idx % n) + n) % n); reset(); };

  const scrollTo = (sel: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(sel);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
  };

  return (
    <header className="hero" id="top">
      <div className="slides">
        {SLIDES.map((s, idx) => (
          <div key={idx} className={"slide" + (idx === i ? " active" : "")}>
            <Plate
              tint={s.tint}
              label={s.label}
              src={s.src}
              alt={s.label}
              priority={idx === 0}
              sizes="100vw"
              mandala={false}
              style={{ position: "absolute", inset: 0 }}
            />
          </div>
        ))}
      </div>

      <div className="wrap hero-inner">
        <span className="eyebrow">A Spiritual Family in the Line of Lord Chaitanya</span>
        <h1>
          Awakening divine <em>love</em> in every heart.
        </h1>
        <p className="hero-sub">
          We are devotees from around the world, followers of Lord Chaitanya, dedicated to the
          path of pure Bhakti — sharing the teachings of Srila B.V. Narayana Gosvami and serving
          the practice of love and devotion to Sri Radha-Krishna.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#about" onClick={scrollTo("#about")}>
            Discover our mission{" "}
            <span className="arr"><Icon name="arrow" size={16} /></span>
          </a>
          <a className="btn btn-accent" href="#join" onClick={scrollTo("#join")}>
            Get Involved
          </a>
        </div>

        <div className="hero-controls">
          <div className="dots">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                className={idx === i ? "active" : ""}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
          <div className="arrows">
            <button aria-label="Previous" onClick={() => goTo(i - 1)}>
              <Icon name="arrowL" size={18} />
            </button>
            <button aria-label="Next" onClick={() => goTo(i + 1)}>
              <Icon name="arrow" size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
