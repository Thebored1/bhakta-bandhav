import type { PlateTint } from "@/lib/data";

export interface PostRow {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  tint: PlateTint;
  image: string;
  content: string;
  slug: string;
  created_at: string;
}

export interface EventRow {
  id: string;
  d: string;
  m: string;
  title: string;
  place: string;
  time: string;
  tag: string;
  description: string;
  created_at: string;
}
