import { notFound } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import PostForm from "@/components/admin/PostForm";
import type { PostRow } from "@/lib/supabase/types";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createServerSupabaseClient();
  const { data } = await supabase.from("posts").select("*").eq("id", id).single();
  if (!data) notFound();
  return (
    <div>
      <div className="admin-page-head">
        <h1 className="admin-page-title">Edit post</h1>
      </div>
      <PostForm post={data as PostRow} />
    </div>
  );
}
