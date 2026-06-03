import { MetadataRoute } from "next";
import { getPosts, getEvents } from "@/lib/supabase/queries";

const BASE = "https://bhakta.org";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, events] = await Promise.all([getPosts(), getEvents()]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/books`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/calendar`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/centers`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/events`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/faqs`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/media`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.created_at),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const eventRoutes: MetadataRoute.Sitemap = events.map((e) => ({
    url: `${BASE}/events/${e.id}`,
    lastModified: new Date(e.created_at),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...postRoutes, ...eventRoutes];
}
