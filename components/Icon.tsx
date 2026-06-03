import React from "react";

type IconName =
  | "chevron" | "arrow" | "arrowL" | "menu" | "close"
  | "pin" | "clock" | "check" | "yt" | "ig" | "fb" | "wa"
  | "mail" | "lotus" | "heart";

interface IconProps {
  name: IconName;
  size?: number;
  style?: React.CSSProperties;
}

export default function Icon({ name, size = 18, style }: IconProps) {
  const p = {
    className: "ic",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    style,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "chevron": return <svg {...p}><polyline points="6 9 12 15 18 9" /></svg>;
    case "arrow":   return <svg {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;
    case "arrowL":  return <svg {...p}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>;
    case "menu":    return <svg {...p}><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></svg>;
    case "close":   return <svg {...p}><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>;
    case "pin":     return <svg {...p}><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" /><circle cx="12" cy="10" r="2.4" /></svg>;
    case "clock":   return <svg {...p}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15.5 14" /></svg>;
    case "check":   return <svg {...p} strokeWidth={2.2}><polyline points="4 12.5 9.5 18 20 6.5" /></svg>;
    case "yt":      return <svg {...p}><rect x="2.5" y="6" width="19" height="12" rx="3.5" /><polygon points="10 9.2 15 12 10 14.8" fill="currentColor" stroke="none" /></svg>;
    case "ig":      return <svg {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg>;
    case "fb":      return <svg {...p}><path d="M14.5 8.5H17V5.5h-2.5c-2 0-3.5 1.5-3.5 3.6V11H8.5v3H11v6.5h3V14h2.4l.6-3H14V9.6c0-.7.4-1.1 1-1.1Z" /></svg>;
    case "wa":      return <svg {...p}><path d="M4 20l1.3-4A8 8 0 1 1 9 19.4L4 20Z" /><path d="M9 9.5c.3 2.3 2.2 4.2 4.5 4.5.6.1 1.2-.4 1.3-1l.1-.7-2-.9-.8.8a4.6 4.6 0 0 1-1.6-1.6l.8-.8-.9-2-.7.1c-.6.1-1.1.7-1 1.3Z" fill="currentColor" stroke="none" /></svg>;
    case "mail":    return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></svg>;
    case "lotus":   return <svg {...p}><path d="M12 4c1.6 2 1.6 4.6 0 7-1.6-2.4-1.6-5 0-7Z" /><path d="M12 11c-2.6-.8-4.2 0-5.5 1.6 1.9 1.2 3.8 1.3 5.5.4" /><path d="M12 11c2.6-.8 4.2 0 5.5 1.6-1.9 1.2-3.8 1.3-5.5.4" /><path d="M4.5 13.5c1 3 4 5 7.5 5s6.5-2 7.5-5" /></svg>;
    case "heart":   return <svg {...p}><path d="M12 20s-6.5-4.3-8.5-8C2 9 3.5 6 6.5 6c1.8 0 3 .9 3.5 2 .5-1.1 1.7-2 3.5-2 3 0 4.5 3 3 6-2 3.7-8.5 8-8.5 8Z" /></svg>;
    default: return null;
  }
}
