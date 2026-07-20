"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

const SLIDES = [
  {
    src: "/images/home/hero-radharani.webp",
    alt: "Srimati Radharani adorned with flowers and garlands",
  },
  {
    src: "/images/hero-2.webp",
    alt: "Sri Krishna playing the flute amid flower offerings",
  },
  {
    src: "/images/hero-3.webp",
    alt: "A garlanded murti of a revered acharya",
  },
  {
    src: "/images/hero-4.webp",
    alt: "A garlanded murti of Srila Swami Prabhupada",
  },
];

const INTERVAL = 6000;

export default function HomeHero() {
  const [i, setI] = useState(0);
  const n = SLIDES.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const reset = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setI((p) => (p + 1) % n), INTERVAL);
  }, [n]);

  useEffect(() => {
    reset();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [reset]);

  const goTo = (idx: number) => {
    setI(((idx % n) + n) % n);
    reset();
  };

  return (
    <section className="bb-hero">
      {SLIDES.map((s, idx) => (
        <img
          key={s.src}
          className={"bb-hero-slide" + (idx === i ? " on" : "")}
          src={s.src}
          alt={s.alt}
          aria-hidden={idx !== i}
        />
      ))}
      <div className="bb-hero-scrim" />
      <div className="bb-hero-inner">
        <span className="bb-eyebrow bb-reveal">
          A Spiritual Family in the Line of Lord Chaitanya
        </span>
        <h1 className="bb-hero-title bb-reveal bb-d1">
          Awakening divine <em>love</em> in every heart.
        </h1>
        <p className="bb-hero-sub bb-reveal bb-d1">
          We are devotees from around the world, followers of Lord Chaitanya,
          dedicated to the path of pure Bhakti — sharing the teachings of Srila
          B.V. Narayana Gosvami and serving love and devotion to Sri
          Radha-Krishna.
        </p>
        <div className="bb-hero-cta bb-reveal bb-d2">
          <Link href="/about" className="bb-btn bb-btn-gold">
            Discover our mission
          </Link>
          <Link href="#join" className="bb-btn bb-btn-outline">
            Join the family
          </Link>
        </div>
      </div>
      <div className="bb-hero-dots">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={idx === i ? "on" : ""}
            aria-label={`Show slide ${idx + 1}`}
            aria-current={idx === i}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>
    </section>
  );
}
