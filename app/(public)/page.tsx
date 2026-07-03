import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { About, Publications, Festivals, Events, Blog } from "@/components/Sections";
import Join from "@/components/Join";

export const metadata: Metadata = {
  alternates: { canonical: "https://bhakta.org" },
  openGraph: {
    title: "Bhakta Bandhav · A Spiritual Family of Pure Bhakti",
    description:
      "A worldwide spiritual family of devotees in the line of Lord Chaitanya, sharing the path of pure Bhakti and the teachings of Srila B.V. Narayana Gosvami.",
    url: "https://bhakta.org",
    siteName: "Bhakta Bandhav",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhakta Bandhav · A Spiritual Family of Pure Bhakti",
    description:
      "A worldwide spiritual family of devotees in the line of Lord Chaitanya, sharing the path of pure Bhakti and the teachings of Srila B.V. Narayana Gosvami.",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Publications />
      <Festivals />
      <Events />
      <Blog />
      <Join />
    </main>
  );
}
