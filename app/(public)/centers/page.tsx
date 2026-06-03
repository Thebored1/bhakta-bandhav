import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Centers — Bhakta Bandhav",
  description: "Ashrams, temples, and spiritual communities from Vrindavan to California, Europe to Canada.",
  alternates: { canonical: "https://bhakta.org/centers" },
  openGraph: {
    title: "Centers — Bhakta Bandhav",
    description: "Ashrams, temples, and spiritual communities from Vrindavan to California, Europe to Canada.",
    url: "https://bhakta.org/centers",
    siteName: "Bhakta Bandhav",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centers — Bhakta Bandhav",
    description: "Ashrams, temples, and spiritual communities from Vrindavan to California, Europe to Canada.",
  },
};

const regions = [
  {
    name: "India & Nepal",
    centers: [
      { name: "Bhakta Bandhav Dham (Radhe Kunj)", location: "Vrindavan, India", leader: "B.B. Giridhari Maharaja", hq: true },
      { name: "Sri Narayana Gosvami Matha", location: "Pokhara, Nepal", leader: "B.B. Krsna-karunya Maharaja" },
      { name: "Sri Radha-Govinda Matha", location: "Bangalore, India", leader: "B.B. Mahayogi Maharaja" },
      { name: "Sri Narayana Gosvami Matha", location: "Varanasi, India", leader: "Amritananda Prabhuji" },
    ],
  },
  {
    name: "Europe",
    centers: [
      { name: "Sri Mayapura Seva Ashram", location: "Germany", leader: "Saci Devi & Kanhaiya Lala Prabhu" },
      { name: "Sri Madhuri Kunj", location: "Lithuania", leader: "Vasanta Prabhuji" },
      { name: "Sri Gangamata Matha", location: "Wales, U.K.", leader: "Sita & Kamala Devi Dasi" },
    ],
  },
  {
    name: "USA",
    centers: [
      { name: "Bhakta Bandhav Dham", location: "Upstate New York", leader: "B.B. Rasikananda Maharaja" },
      { name: "Bhakta Bandhav NYC", location: "Queens, New York", leader: "B.B. Rasikananda Maharaja" },
      { name: "New Braj Dham", location: "Badger, California", leader: "Nitya Prabhu & Nanda Gopal Prabhu" },
    ],
  },
  {
    name: "Canada",
    centers: [
      { name: "Bhakta Bandhav Serve Love", location: "Toronto", leader: "Abhishek Prabhuji" },
      { name: "Bhakta Bandhav", location: "Vancouver", leader: "Rupa Raghunatha Prabhuji" },
    ],
  },
];

export default function CentersPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Centers"
        title="Ashrams and temples around the world."
        subtitle="We have Ashrams and Temples developing around the world. Everyone is welcome to join and be part of this, and be represented on our website as a local contact."
        tint="mint"
      />

      <section className="section centers-intro">
        <div className="wrap">
          <div className="about-section-inner" style={{ marginBottom: 64 }}>
            <div className="about-section-aside reveal">
              <span className="eyebrow">Our Presence</span>
              <h2>From Vrindavan to Vancouver.</h2>
            </div>
            <div className="prose">
              <p className="reveal">
                In Vrindavan, our headquarters is Bhakta Bandhav Radhe Kunj. We have temples in
                Varanasi, Bangalore, and Pokhara, Nepal. We have ashrams in Lithuania, Germany,
                London, Wales, New York state, New York City, and Brazil.
              </p>
              <p className="reveal d1">
                In California, we have centers in San Francisco and Badger. Our centers also extend
                to Hawaii, on the Big Island and Maui. Moreover, we are developing a network of
                spiritual leaders in different places who are hosting home programs and outreach.
              </p>
              <p className="reveal d1">
                We are developing the mission in Toronto, Vancouver, and in the greater northeast,
                Long Island and other places. Everyone is welcome to join and be part of this.
              </p>
              <div className="about-foot reveal d2">
                <a className="btn btn-primary" href="mailto:bhaktabandhav@gmail.com">
                  Contact a center <span className="arr"><Icon name="arrow" size={16} /></span>
                </a>
              </div>
            </div>
          </div>

          {regions.map((region) => (
            <div className="region-block reveal" key={region.name}>
              <div className="region-label">{region.name}</div>
              <div className="centers-grid">
                {region.centers.map((center) => (
                  <div className="center-card" key={center.name + center.location}>
                    {center.hq && (
                      <div style={{ marginBottom: 8 }}>
                        <span className="event-tag">Headquarters</span>
                      </div>
                    )}
                    <div className="cc-name">{center.name}</div>
                    <div className="cc-location">
                      <Icon name="pin" size={13} /> {center.location}
                    </div>
                    <div className="cc-leader">{center.leader}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
