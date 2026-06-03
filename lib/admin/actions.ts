"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// ─── POSTS ────────────────────────────────────────────────────────────────────

export async function createPost(
  _prev: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  const supabase = createServerSupabaseClient();
  const title   = formData.get("title") as string;
  const rawSlug = (formData.get("slug") as string ?? "").trim();
  const slug    = rawSlug || generateSlug(title);
  const { error } = await supabase.from("posts").insert({
    tag:     formData.get("tag") as string,
    title,
    excerpt: formData.get("excerpt") as string,
    tint:    formData.get("tint") as string,
    image:   formData.get("image") as string,
    content: formData.get("content") as string,
    slug,
  });
  if (error) return { error: error.message };
  revalidateTag("posts");
  redirect("/admin/posts");
}

export async function updatePost(
  id: string,
  _prev: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  const supabase = createServerSupabaseClient();
  const title   = formData.get("title") as string;
  const rawSlug = (formData.get("slug") as string ?? "").trim();
  const slug    = rawSlug || generateSlug(title);
  const { error } = await supabase.from("posts").update({
    tag:     formData.get("tag") as string,
    title,
    excerpt: formData.get("excerpt") as string,
    tint:    formData.get("tint") as string,
    image:   formData.get("image") as string,
    content: formData.get("content") as string,
    slug,
  }).eq("id", id);
  if (error) return { error: error.message };
  revalidateTag("posts");
  redirect("/admin/posts");
}

export async function deletePost(id: string) {
  const supabase = createServerSupabaseClient();
  await supabase.from("posts").delete().eq("id", id);
  revalidateTag("posts");
}

// ─── EVENTS ───────────────────────────────────────────────────────────────────

export async function createEvent(
  _prev: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  const supabase = createServerSupabaseClient();
  const { error } = await supabase.from("events").insert({
    d:           formData.get("d") as string,
    m:           formData.get("m") as string,
    title:       formData.get("title") as string,
    place:       formData.get("place") as string,
    time:        formData.get("time") as string,
    tag:         formData.get("tag") as string,
    description: formData.get("description") as string,
  });
  if (error) return { error: error.message };
  revalidateTag("events");
  redirect("/admin/events");
}

export async function updateEvent(
  id: string,
  _prev: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  const supabase = createServerSupabaseClient();
  const { error } = await supabase.from("events").update({
    d:           formData.get("d") as string,
    m:           formData.get("m") as string,
    title:       formData.get("title") as string,
    place:       formData.get("place") as string,
    time:        formData.get("time") as string,
    tag:         formData.get("tag") as string,
    description: formData.get("description") as string,
  }).eq("id", id);
  if (error) return { error: error.message };
  revalidateTag("events");
  redirect("/admin/events");
}

export async function deleteEvent(id: string) {
  const supabase = createServerSupabaseClient();
  await supabase.from("events").delete().eq("id", id);
  revalidateTag("events");
}
