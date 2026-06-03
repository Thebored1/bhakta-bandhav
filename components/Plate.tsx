import React from "react";
import Image from "next/image";
import type { PlateTint } from "@/lib/data";

const PLATE_TINTS: Record<PlateTint, [string, string, string]> = {
  rose:     ["#EDC8D6", "#F3E0BA", "#D6EAD2"],
  peach:    ["#EDD0BC", "#EFE0C4", "#E8D0DC"],
  mint:     ["#C8DED0", "#DDEAC8", "#D4E4EE"],
  lavender: ["#D8CDE8", "#EDD8E4", "#CCDCE8"],
  gold:     ["#EDE0B4", "#EDD4BC", "#DCEACC"],
  blossom:  ["#EAC0D0", "#E4CCEA", "#F5EACC"],
};

function rgba(hex: string, a: number) {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

interface PlateProps {
  label?: string;
  tint?: PlateTint;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  mandala?: boolean;
  src?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
}

export default function Plate({
  label,
  tint = "peach",
  className = "",
  style,
  children,
  mandala = true,
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw",
}: PlateProps) {
  const [a, b, c] = PLATE_TINTS[tint] ?? PLATE_TINTS.peach;
  const bg = [
    `radial-gradient(58% 55% at 22% 24%, ${rgba(a, 0.92)}, transparent 60%)`,
    `radial-gradient(54% 50% at 84% 26%, ${rgba(b, 0.85)}, transparent 60%)`,
    `radial-gradient(70% 66% at 74% 90%, ${rgba(c, 0.85)}, transparent 66%)`,
    `radial-gradient(58% 60% at 14% 94%, ${rgba(a, 0.6)}, transparent 66%)`,
    `radial-gradient(40% 45% at 50% 50%, ${rgba(b, 0.35)}, transparent 70%)`,
    `linear-gradient(135deg, #FFFFFF 0%, #FCF4F7 100%)`,
  ].join(", ");

  return (
    <div
      className={"plate " + className}
      style={src ? style : { background: bg, ...style }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? label ?? ""}
          fill
          sizes={sizes}
          style={{ objectFit: "cover" }}
          priority={priority}
        />
      ) : (
        <>
          <div className="tex" />
          {mandala && (
            <div
              className="mandala"
              style={{ width: "46%", aspectRatio: "1", right: "-8%", top: "-12%" }}
            />
          )}
          {label && <span className="plate-label">{label}</span>}
        </>
      )}
      {children}
    </div>
  );
}
