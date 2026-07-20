import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Seva & Projects — Bhakta Bandhav",
  description:
    "The sevas and projects of our Bhakta Bandhav family — from food distribution and the Gurukulam in Vrindavan to the service of devotees across the US, Canada, and beyond.",
  alternates: { canonical: "https://bhakta.org/sevas" },
  openGraph: {
    title: "Seva & Projects — Bhakta Bandhav",
    description:
      "The sevas and projects of our Bhakta Bandhav family — from food distribution and the Gurukulam in Vrindavan to the service of devotees across the US, Canada, and beyond.",
    url: "https://bhakta.org/sevas",
    siteName: "Bhakta Bandhav",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seva & Projects — Bhakta Bandhav",
    description:
      "The sevas and projects of our Bhakta Bandhav family in Vrindavan, the US, Canada, and beyond.",
  },
};

export default function SevasPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Seva & Projects"
        title="Serving Radha-Krishna, together."
        subtitle="Our hope is to bring the Bhakta Bandhav family together and highlight the sevas and projects our devotees pour their hearts into — in Vrindavan, across the US and Canada, and wherever we serve as a family of Lord Chaitanya."
        tint="gold"
      />

      <section className="section">
        <div className="wrap">
          <div className="sevas-list">

            {/* Food Distribution — dearest seva, placed first */}
            <article className="seva">
              <div className="seva-media placeholder" aria-hidden="true">
                <Icon name="lotus" size={72} />
              </div>
              <div>
                <span className="eyebrow">Vrindavan · Prasadam Seva</span>
                <h3>Food distribution in Vrindavan</h3>
                <p className="seva-lead">
                  The dearest seva of our beloved Prabhuji in Vrindavan, who tirelessly cooks with
                  love in the kitchen and carries Sri Sri Radha-Krishna&rsquo;s mercy all across the
                  holy dhama — feeding so many, and beyond, with sweet prasadam.
                </p>
                <p>
                  Every plate is an offering: prasadam prepared with devotion, sanctified, and shared
                  freely with pilgrims, sadhus, and the families of Vraja. To support this seva or to
                  help in the kitchen, please reach out to us and we will connect you.
                </p>
                <div className="seva-actions">
                  <a className="btn btn-primary" href="mailto:bhaktabandhav@gmail.com?subject=Food%20Distribution%20Seva%20in%20Vrindavan">
                    Support this seva <span className="arr"><Icon name="arrow" size={16} /></span>
                  </a>
                </div>
              </div>
            </article>

            {/* Bhakta Bandhav Gurukulam */}
            <article className="seva">
              <div className="seva-media">
                <Image
                  src="/images/gurukulam.webp"
                  alt="A student of the Bhakta Bandhav Gurukulam in Vrindavan"
                  fill
                  sizes="(max-width: 900px) 92vw, 460px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <span className="eyebrow">Vrindavan · Education</span>
                <h3>Bhakta Bandhav Gurukulam</h3>
                <p className="seva-lead">
                  A charitable school in the heart of Vrindavan — a project close to the heart of our
                  Premananda Prabhuji — providing free educational scholarships and support for
                  marginalized children to thrive and grow in a safe, healthy, and spiritual
                  environment.
                </p>
                <p>
                  In partnership with the Sri Yashoda Nandan Seva Trust, the Gurukulam offers a
                  Vedic-based curriculum alongside Sanskrit shlokas, Hindi and English courses,
                  practical skills like computer and sewing, and a balanced daily meal — with 100% of
                  donations going directly to the scholarship program. In 2025 the school reached full
                  enrollment, and is now raising funds to build a new school house, &ldquo;one brick at
                  a time.&rdquo;
                </p>

                <div className="seva-meta">
                  <span><Icon name="pin" size={15} /> 4th Floor, Ganga Matta Bldg, Sri Radhe Kunj Ashram, Vrindavan</span>
                  <span><Icon name="wa" size={15} /> <a href="tel:+918439175634">+91 84391 75634</a></span>
                  <span><Icon name="mail" size={15} /> <a href="mailto:bhaktabgurukul@gmail.com">bhaktabgurukul@gmail.com</a></span>
                  <span><Icon name="globe" size={15} /> <a href="https://www.bbgurukul.org" target="_blank" rel="noopener noreferrer">www.bbgurukul.org</a></span>
                </div>

                <div className="donate-box">
                  <h4>Donate to the scholarship program</h4>
                  <dl>
                    <dt>Trust</dt><dd>Sri Yashoda Nandan Seva Trust</dd>
                    <dt>A/C No.</dt><dd>50200067838183</dd>
                    <dt>IFSC</dt><dd>HDFC0000942 &middot; Current A/C</dd>
                    <dt>Online</dt><dd>PayPal &amp; UPI via bbgurukul.org &middot; tax exemption available</dd>
                  </dl>
                </div>

                <div className="seva-actions">
                  <a className="btn btn-primary" href="https://www.bbgurukul.org" target="_blank" rel="noopener noreferrer">
                    Donate &amp; get involved <span className="arr"><Icon name="arrow" size={16} /></span>
                  </a>
                  <a className="btn btn-ghost" href="https://www.bbgurukul.org" target="_blank" rel="noopener noreferrer">
                    Visit bbgurukul.org
                  </a>
                </div>
              </div>
            </article>

            {/* New York — Thakurji Clothes Seva */}
            <article className="seva">
              <div className="seva-media placeholder" aria-hidden="true">
                <Icon name="lotus" size={72} />
              </div>
              <div>
                <span className="eyebrow">New York · Deity Seva</span>
                <h3>Thakurji&rsquo;s clothes &amp; adornment</h3>
                <p className="seva-lead">
                  Offering fresh garments, garlands, and ornaments to our beloved Thakurji at Bhakta
                  Bandhav NYC — dressing the Deities with love through every season and festival.
                </p>
                <p>
                  Your contribution helps sew and offer new outfits, flowers, and paraphernalia for
                  the daily worship of Sri Sri Radha-Krishna in New York.
                </p>
                <div className="seva-actions">
                  {/* TODO: replace with the real donation link for Thakurji clothes seva */}
                  <a className="btn btn-primary" href="mailto:bhaktabandhav@gmail.com?subject=Thakurji%20Clothes%20Seva%20(New%20York)">
                    Support this seva <span className="arr"><Icon name="arrow" size={16} /></span>
                  </a>
                </div>
              </div>
            </article>

            {/* New York — Free Meal Distribution */}
            <article className="seva">
              <div className="seva-media placeholder" aria-hidden="true">
                <Icon name="lotus" size={72} />
              </div>
              <div>
                <span className="eyebrow">New York · Prasadam Seva</span>
                <h3>Free meal distribution</h3>
                <p className="seva-lead">
                  Preparing and distributing free sanctified meals in the New York community — sharing
                  Krishna&rsquo;s prasadam freely with all who come.
                </p>
                <p>
                  Every gift helps cover ingredients, cooking, and distribution so that no one is
                  turned away from a warm, loving plate of prasadam.
                </p>
                <div className="seva-actions">
                  {/* TODO: replace with the real donation link for free meal distribution */}
                  <a className="btn btn-primary" href="mailto:bhaktabandhav@gmail.com?subject=Free%20Meal%20Distribution%20Seva%20(New%20York)">
                    Support this seva <span className="arr"><Icon name="arrow" size={16} /></span>
                  </a>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
    </main>
  );
}
