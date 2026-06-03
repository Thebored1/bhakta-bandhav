import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Plate from "@/components/Plate";
import { getPosts } from "@/lib/supabase/queries";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Blog — Bhakta Bandhav",
  description: "Reflections, teachings, and stories from the path of pure Bhakti.",
  alternates: { canonical: "https://bhakta.org/blog" },
  openGraph: {
    title: "Blog — Bhakta Bandhav",
    description: "Reflections, teachings, and stories from the path of pure Bhakti.",
    url: "https://bhakta.org/blog",
    siteName: "Bhakta Bandhav",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Bhakta Bandhav",
    description: "Reflections, teachings, and stories from the path of pure Bhakti.",
  },
};

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <main>
      <PageHeader
        eyebrow="From the Blog"
        title="Reflections on the path of devotion."
        subtitle="Teachings, stories, and glimpses of life from our spiritual family around the world."
        tint="rose"
      />

      <section className="section blog-page">
        <div className="wrap">
          {posts.length === 0 ? (
            <p style={{ color: "var(--muted)", textAlign: "center", padding: "48px 0" }}>
              No posts yet — check back soon.
            </p>
          ) : (
            <div className="blog-page-grid">
              {posts.map((post, idx) => (
                <article className={"post reveal d" + Math.min((idx % 3) + 1, 3)} key={post.id}>
                  <Plate tint={post.tint} src={post.image} alt={post.title} mandala={false} sizes="(max-width: 640px) 90vw, (max-width: 1020px) 45vw, 30vw" />
                  <div className="post-body">
                    <div className="post-tag">
                      {post.tag} <span className="dot" /> 6 min read
                    </div>
                    <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                    <p>{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="post-more">
                      Read more <Icon name="arrow" size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
