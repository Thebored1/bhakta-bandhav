import PostForm from "@/components/admin/PostForm";

export default function NewPostPage() {
  return (
    <div>
      <div className="admin-page-head">
        <h1 className="admin-page-title">New post</h1>
      </div>
      <PostForm />
    </div>
  );
}
