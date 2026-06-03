import Plate from "./Plate";
import type { PlateTint } from "@/lib/data";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tint?: PlateTint;
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  tint = "peach",
}: PageHeaderProps) {
  return (
    <div className="page-header">
      <Plate tint={tint} className="page-header-bg" mandala />
      <div className="wrap page-header-inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p className="page-header-sub">{subtitle}</p>}
      </div>
    </div>
  );
}
