"use client";

import Link from "next/link";
import { deletePost } from "@/lib/admin/actions";
import type { PostRow } from "@/lib/supabase/types";

export default function PostsTable({ posts }: { posts: PostRow[] }) {
  if (posts.length === 0) {
    return <p className="admin-empty">No posts yet. <Link href="/admin/posts/new">Create the first one.</Link></p>;
  }
  return (
    <div className="admin-table-wrap">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Tag</th>
            <th>Tint</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="admin-td-title">{post.title}</td>
              <td><span className="admin-chip">{post.tag}</span></td>
              <td><span className={`admin-tint-dot tint-${post.tint}`} /></td>
              <td className="admin-td-date">{new Date(post.created_at).toLocaleDateString()}</td>
              <td className="admin-td-actions">
                <Link href={`/admin/posts/${post.id}`} className="admin-action-link">Edit</Link>
                <form action={deletePost.bind(null, post.id)} style={{ display: "inline" }}>
                  <button
                    type="submit"
                    className="admin-action-delete"
                    onClick={(e) => { if (!confirm("Delete this post?")) e.preventDefault(); }}
                  >
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
