import Link from "next/link";
import { getPosts } from "@/lib/supabase/queries";
import PostsTable from "@/components/admin/PostsTable";

export default async function AdminPostsPage() {
  const posts = await getPosts();
  return (
    <div>
      <div className="admin-page-head">
        <div>
          <h1 className="admin-page-title">Posts</h1>
          <p className="admin-page-sub">{posts.length} post{posts.length !== 1 ? "s" : ""}</p>
        </div>
        <Link href="/admin/posts/new" className="admin-btn-primary">+ New post</Link>
      </div>
      <PostsTable posts={posts} />
    </div>
  );
}
