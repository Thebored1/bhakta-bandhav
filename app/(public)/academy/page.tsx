import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Academy — Bhakta Bandhav",
  description:
    "The Bhakta Bandhav Gurukulam in Vrindavan — a charitable school offering free education, a Vedic-based curriculum, and loving care for marginalized children.",
  alternates: { canonical: "https://bhakta.org/academy" },
  openGraph: {
    title: "Academy — Bhakta Bandhav",
    description:
      "The Bhakta Bandhav Gurukulam in Vrindavan — a charitable school offering free education and loving care for children.",
    url: "https://bhakta.org/academy",
    siteName: "Bhakta Bandhav",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academy — Bhakta Bandhav",
    description:
      "The Bhakta Bandhav Gurukulam in Vrindavan — free education and loving care for children.",
  },
};

export default function AcademyPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Academy"
        title="Educating the servant-leaders of tomorrow."
        subtitle="The Bhakta Bandhav Gurukulam is a charitable school in the heart of Vrindavan — providing free educational scholarships and loving support for children to grow in a safe, healthy, and spiritual environment."
        tint="mint"
      />

      <section className="section">
        <div className="wrap">
          <div className="about-section-inner">
            <div className="about-section-aside reveal">
              <span className="eyebrow">Bhakta Bandhav Gurukulam</span>
              <h2>One brick at a time.</h2>
            </div>
            <div className="prose">
              <p className="reveal">
                A project close to the heart of our Premananda Prabhuji, the Gurukulam offers a
                Vedic-based curriculum alongside Sanskrit shlokas, Hindi and English courses,
                practical skills like computer and sewing, and a balanced daily meal — with 100% of
                donations going directly to the scholarship program.
              </p>
              <p className="reveal d1">
                In partnership with the Sri Yashoda Nandan Seva Trust, the school reached full
                enrollment in 2025 and is now raising funds to build a new school house, &ldquo;one
                brick at a time.&rdquo;
              </p>

              <div className="donate-box">
                <h4>Donate to the scholarship program</h4>
                <dl>
                  <dt>Trust</dt><dd>Sri Yashoda Nandan Seva Trust</dd>
                  <dt>A/C No.</dt><dd>50200067838183</dd>
                  <dt>IFSC</dt><dd>HDFC0000942 &middot; Current A/C</dd>
                  <dt>Online</dt><dd>PayPal &amp; UPI via bbgurukul.org &middot; tax exemption available</dd>
                </dl>
              </div>

              <div className="about-foot reveal d2">
                <a className="btn btn-primary" href="https://www.bbgurukul.org" target="_blank" rel="noopener noreferrer">
                  Donate &amp; get involved <span className="arr"><Icon name="arrow" size={16} /></span>
                </a>
                <a className="textlink" href="https://www.bbgurukul.org" target="_blank" rel="noopener noreferrer">
                  Visit bbgurukul.org <Icon name="arrow" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
