"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { createPost, updatePost } from "@/lib/admin/actions";
import type { PostRow } from "@/lib/supabase/types";
import Link from "next/link";
import RichTextEditor from "@/components/admin/RichTextEditor";
import ImageUpload from "@/components/admin/ImageUpload";

const TINTS = ["rose", "peach", "mint", "lavender", "gold", "blossom"] as const;

function clientSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function PostForm({ post }: { post?: PostRow }) {
  const action = post ? updatePost.bind(null, post.id) : createPost;
  const [state, formAction, isPending] = useActionState(action, null);

  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugManual, setSlugManual] = useState(!!post?.slug);
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (slugManual) return;
    const input = titleRef.current;
    if (!input) return;
    const handler = () => setSlug(clientSlug(input.value));
    input.addEventListener("input", handler);
    return () => input.removeEventListener("input", handler);
  }, [slugManual]);

  return (
    <form action={formAction} className="admin-form">
      <div className="admin-form-grid">
        <label className="admin-label">
          Tag
          <input name="tag" className="admin-input" defaultValue={post?.tag} placeholder="e.g. Teachings" required />
        </label>
        <label className="admin-label">
          Tint colour
          <select name="tint" className="admin-input" defaultValue={post?.tint ?? "peach"}>
            {TINTS.map((t) => (
              <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="admin-label">
        Title
        <input ref={titleRef} name="title" className="admin-input" defaultValue={post?.title} placeholder="Post title" required />
      </label>

      <label className="admin-label">
        Slug
        <input
          name="slug"
          className="admin-input"
          value={slug}
          placeholder="auto-generated-from-title"
          onChange={(e) => { setSlug(e.target.value); setSlugManual(true); }}
        />
        <span style={{ fontSize: 12, color: "var(--muted)", fontFamily: "var(--font-mukta), sans-serif", textTransform: "none", letterSpacing: 0, fontWeight: 400 }}>
          Public URL: /blog/{slug || "…"}
        </span>
      </label>

      <label className="admin-label">
        Excerpt
        <textarea name="excerpt" className="admin-textarea" defaultValue={post?.excerpt} placeholder="Short preview shown on the card" rows={3} required />
      </label>

      <label className="admin-label">
        Image
        <ImageUpload name="image" defaultValue={post?.image ?? ""} />
      </label>

      <label className="admin-label">
        Article content
        <RichTextEditor name="content" defaultValue={post?.content ?? ""} placeholder="Write the full article here…" />
      </label>

      {state?.error && <p className="admin-error">{state.error}</p>}

      <div className="admin-form-actions">
        <button type="submit" className="admin-btn-primary" disabled={isPending}>
          {isPending ? "Saving…" : post ? "Update post" : "Create post"}
        </button>
        <Link href="/admin/posts" className="admin-btn-ghost">Cancel</Link>
      </div>
    </form>
  );
}
