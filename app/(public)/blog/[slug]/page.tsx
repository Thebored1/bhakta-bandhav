import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug } from "@/lib/supabase/queries";
import Icon from "@/components/Icon";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — Bhakta Bandhav`,
    description: post.excerpt,
    alternates: { canonical: `https://bhakta.org/blog/${slug}` },
    openGraph: {
      title: `${post.title} — Bhakta Bandhav`,
      description: post.excerpt,
      url: `https://bhakta.org/blog/${slug}`,
      siteName: "Bhakta Bandhav",
      type: "article",
      publishedTime: post.created_at,
      ...(post.image ? { images: [{ url: post.image, alt: post.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — Bhakta Bandhav`,
      description: post.excerpt,
      ...(post.image ? { images: [post.image] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main>
      {/* Hero */}
      <div className="blog-post-hero">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="blog-post-hero-overlay" />
        <div className="wrap blog-post-hero-inner">
          <nav className="blog-post-breadcrumb">
            <Link href="/blog">Blog</Link>
            <Icon name="arrow" size={11} />
            <span>{post.tag}</span>
          </nav>
          <span className="eyebrow">{post.tag}</span>
          <h1>{post.title}</h1>
          <p className="blog-post-excerpt">{post.excerpt}</p>
          <p className="blog-post-meta">
            {new Date(post.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Article body */}
      <section className="section blog-post-body">
        <div className="wrap-narrow">
          {post.content && post.content !== "<p></p>" ? (
            <div
              className="rich-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p style={{ color: "var(--muted)", fontStyle: "italic" }}>
              Full article coming soon.
            </p>
          )}

          <div className="blog-post-back">
            <Link href="/blog" className="textlink">
              <span style={{ display: "inline-flex", transform: "rotate(180deg)" }}>
                <Icon name="arrow" size={13} />
              </span>
              Back to all posts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
