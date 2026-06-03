import { unstable_cache } from "next/cache";
import { createServerSupabaseClient } from "./server";
import type { PostRow, EventRow } from "./types";

export const getPosts = unstable_cache(
  async (): Promise<PostRow[]> => {
    try {
      const supabase = createServerSupabaseClient();
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) return [];
      return data ?? [];
    } catch {
      return [];
    }
  },
  ["posts"],
  { revalidate: 3600, tags: ["posts"] }
);

export const getEvents = unstable_cache(
  async (): Promise<EventRow[]> => {
    try {
      const supabase = createServerSupabaseClient();
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) return [];
      return data ?? [];
    } catch {
      return [];
    }
  },
  ["events"],
  { revalidate: 3600, tags: ["events"] }
);

export const getPostBySlug = unstable_cache(
  async (slug: string): Promise<PostRow | null> => {
    try {
      const supabase = createServerSupabaseClient();
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();
      if (error) return null;
      return data ?? null;
    } catch {
      return null;
    }
  },
  ["post-by-slug"],
  { revalidate: 3600, tags: ["posts"] }
);

export const getEventById = unstable_cache(
  async (id: string): Promise<EventRow | null> => {
    try {
      const supabase = createServerSupabaseClient();
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", id)
        .single();
      if (error) return null;
      return data ?? null;
    } catch {
      return null;
    }
  },
  ["event-by-id"],
  { revalidate: 3600, tags: ["events"] }
);
