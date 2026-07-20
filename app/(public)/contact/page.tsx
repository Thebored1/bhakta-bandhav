import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Get in Touch — Bhakta Bandhav",
  description:
    "Are you feeling low? Reach out to the Bhakta Bandhav family. Email us or call us — a devotee is here to listen.",
  alternates: { canonical: "https://bhakta.org/contact" },
  openGraph: {
    title: "Get in Touch — Bhakta Bandhav",
    description:
      "Are you feeling low? Reach out to the Bhakta Bandhav family. Email us or call us — a devotee is here to listen.",
    url: "https://bhakta.org/contact",
    siteName: "Bhakta Bandhav",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get in Touch — Bhakta Bandhav",
    description: "Are you feeling low? Email us or call us — a devotee is here to listen.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Get in Touch"
        title="Are you feeling low?"
        subtitle="You are not alone. Whatever you are going through, a member of our family is here to listen with love — reach out any time."
        tint="rose"
      />

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <a className="contact-card reveal" href="mailto:bhaktabandhav@gmail.com?subject=Get%20in%20Touch">
              <span className="contact-icon"><Icon name="mail" size={26} /></span>
              <h3>Email us</h3>
              <p>Write to us and a devotee will reach out with a warm hello.</p>
              <span className="textlink">bhaktabandhav@gmail.com <Icon name="arrow" size={13} /></span>
            </a>

            <a className="contact-card reveal d1" href="tel:+18444242584">
              <span className="contact-icon"><Icon name="wa" size={26} /></span>
              <h3>Call us</h3>
              <p>Speak with someone who cares. We are here for you.</p>
              <span className="textlink">+1 844-4BHAKTI &middot; 844-424-2584 <Icon name="arrow" size={13} /></span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
