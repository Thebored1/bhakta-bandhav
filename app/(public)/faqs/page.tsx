import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import Icon from "@/components/Icon";
import { FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQs — Bhakta Bandhav",
  description: "Common questions about our spiritual family, the path of Bhakti, and how to get involved.",
  alternates: { canonical: "https://bhakta.org/faqs" },
  openGraph: {
    title: "FAQs — Bhakta Bandhav",
    description: "Common questions about our spiritual family, the path of Bhakti, and how to get involved.",
    url: "https://bhakta.org/faqs",
    siteName: "Bhakta Bandhav",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs — Bhakta Bandhav",
    description: "Common questions about our spiritual family, the path of Bhakti, and how to get involved.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a.join(" "),
    },
  })),
};

export default function FaqsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        eyebrow="Frequently Asked Questions"
        title="Common questions on the path."
        subtitle="Answers to the most common questions about our lineage, the path of Bhakti, and how to join our spiritual family."
        tint="lavender"
      />

      <section className="section faq-section">
        <div className="wrap">
          <div className="faq-layout">
            <div className="faq-aside reveal" style={{ position: "sticky", top: 110 }}>
              <span className="eyebrow">Got a question?</span>
              <h2 style={{ fontSize: "clamp(26px,3vw,40px)", marginBottom: 24 }}>
                We&rsquo;re here to help.
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: 28, fontSize: 15.5 }}>
                If your question isn&rsquo;t answered here, reach out to us directly.
              </p>
              <a className="btn btn-primary" href="mailto:bhaktabandhav@gmail.com">
                Email us <span className="arr"><Icon name="arrow" size={16} /></span>
              </a>
              <div style={{ marginTop: 16 }}>
                <a className="textlink" href="https://wa.me/18456331906" target="_blank" rel="noopener">
                  WhatsApp <Icon name="arrow" size={13} />
                </a>
              </div>
            </div>

            <FaqAccordion />
          </div>
        </div>
      </section>
    </main>
  );
}
