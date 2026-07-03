"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
}

export default function FestivalGallery({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const n = photos.length;

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) => setOpen((cur) => (cur === null ? cur : (cur + dir + n) % n)),
    [n],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, go]);

  return (
    <>
      <div className="fest-grid reveal d1">
        {photos.map((p, i) => (
          <button
            className="fest-cell"
            key={i}
            onClick={() => setOpen(i)}
            aria-label={`Expand photo: ${p.alt}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 700px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button className="lightbox-close" aria-label="Close" onClick={close}>
            &times;
          </button>
          {n > 1 && (
            <button
              className="lightbox-nav prev"
              aria-label="Previous photo"
              onClick={(e) => { e.stopPropagation(); go(-1); }}
            >
              &lsaquo;
            </button>
          )}
          <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[open].src}
              alt={photos[open].alt}
              fill
              sizes="92vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          {n > 1 && (
            <button
              className="lightbox-nav next"
              aria-label="Next photo"
              onClick={(e) => { e.stopPropagation(); go(1); }}
            >
              &rsaquo;
            </button>
          )}
          <p className="lightbox-cap">{photos[open].alt}</p>
        </div>
      )}
    </>
  );
}
