import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Media & Links — Bhakta Bandhav",
  description: "The Bhakti Essentials Series, social channels, and ways to support the mission.",
  alternates: { canonical: "https://bhakta.org/media" },
  openGraph: {
    title: "Media & Links — Bhakta Bandhav",
    description: "The Bhakti Essentials Series, social channels, and ways to support the mission.",
    url: "https://bhakta.org/media",
    siteName: "Bhakta Bandhav",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & Links — Bhakta Bandhav",
    description: "The Bhakti Essentials Series, social channels, and ways to support the mission.",
  },
};

const essentials = [
  { n: "1", title: "Bhakti Yoga: The Path of Devotion",          href: "https://bhakta.org/wp-content/uploads/2026/03/BES-1-Bhakti-Yoga.pdf" },
  { n: "2", title: "The Mahāmantra: A Love Song from the Soul",  href: "https://bhakta.org/wp-content/uploads/2026/03/BES-2-Mahamantra.pdf" },
  { n: "3", title: "Kīrtan: When Music Becomes Prayer",           href: "https://bhakta.org/wp-content/uploads/2026/03/BES-3-Kirtan.pdf" },
  { n: "4", title: "Japa Meditation: One Bead at a Time",        href: "https://bhakta.org/wp-content/uploads/2026/03/BES-4-Japa-Meditation.pdf" },
  { n: "5", title: "Everyday Bhakti: Bringing Devotion into Daily Life", href: "https://bhakta.org/wp-content/uploads/2026/03/BES-5-Everyday-Bhakti.pdf" },
  { n: "6", title: "Rādhā-Kṛṣṇa: The Divine Feminine and Masculine", href: "https://bhakta.org/wp-content/uploads/2026/03/BES-6-Radha-Krishna.pdf" },
  { n: "7", title: "A Saint of Pure Love in the Modern World: Śrīla Bhaktivedānta Nārāyana Gosvāmī Mahārāja", href: "https://bhakta.org/wp-content/uploads/2026/03/BES-7-A-Saint-of-Pure-Love-in-the-Modern-World.pdf" },
];

const youtube = [
  { name: "Rasikananda Swami",  handle: "@RasikanandaSwami", href: "https://www.youtube.com/@RasikanandaSwami" },
  { name: "Guru Bhakti",        handle: "@guru-bhakti",       href: "https://www.youtube.com/@guru-bhakti" },
  { name: "Krsna Karunya",      handle: "@krsnakarunya",      href: "https://www.youtube.com/@krsnakarunya" },
];

const instagram = [
  { name: "Rasikananda Swami",        handle: "@rasikanandaswami",       href: "https://www.instagram.com/rasikanandaswami" },
  { name: "Bhakta Bandhav",           handle: "@bhakta.bandhav",         href: "https://www.instagram.com/bhakta.bandhav" },
  { name: "Bhakta Bandhav NYC",       handle: "@bhaktabandhavnyc",       href: "https://www.instagram.com/bhaktabandhavnyc" },
  { name: "Bhakta Bandhav Canada",    handle: "@bhaktabandhav.canada",   href: "https://www.instagram.com/bhaktabandhav.canada" },
  { name: "Radhe Kunj Temple",        handle: "@radhe_kunj",             href: "https://www.instagram.com/radhe_kunj" },
  { name: "Bhakta Bandhav Gurukulam", handle: "@bhakta.bandhava",        href: "https://www.instagram.com/bhakta.bandhava" },
  { name: "Madhuri Kunj",             handle: "@madhuri_kunj",           href: "https://www.instagram.com/madhuri_kunj" },
  { name: "New Braj",                 handle: "@newbraj",                href: "https://www.instagram.com/newbraj" },
];

export default function MediaPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Media & Links"
        title="Deepen your practice and stay connected."
        subtitle="Free booklets, video teachings, social channels, and ways to support the mission of spreading pure Bhakti."
        tint="blossom"
      />

      {/* Bhakti Essentials */}
      <section className="section media-section" id="bhakti-essentials">
        <div className="wrap">
          <span className="eyebrow reveal">Bhakti Essentials Series</span>
          <h2 className="reveal d1" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", marginBottom: 16, maxWidth: "22ch" }}>
            Seven booklets for seekers on the path.
          </h2>
          <p className="reveal d1" style={{ color: "var(--muted)", maxWidth: "58ch", marginBottom: 40 }}>
            The Bhakti Essentials Series is a collection of short booklets designed for those new
            to the Bhakti Yoga path. Each book describes the introductory concepts through
            easy-to-understand language for any and all spiritual seekers.
          </p>
          <div className="essentials-grid">
            {essentials.map((b) => (
              <a className="essential-card reveal" href={b.href} target="_blank" rel="noopener noreferrer" key={b.n}>
                <div className="essential-num">{b.n}.</div>
                <h3>{b.title}</h3>
                <span className="textlink" style={{ fontSize: 11 }}>
                  Read free PDF <Icon name="arrow" size={12} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section media-section" id="social">
        <div className="wrap">
          <span className="eyebrow reveal">Social Links</span>
          <h2 className="reveal d1" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", marginBottom: 40, maxWidth: "18ch" }}>
            Watch, listen &amp; follow.
          </h2>

          <div className="social-grid-2col">
            <div>
              <div className="social-platform reveal">
                <h3><Icon name="yt" size={24} /> YouTube</h3>
                <div className="social-links">
                  {youtube.map((s) => (
                    <a className="social-link" href={s.href} target="_blank" rel="noopener noreferrer" key={s.handle}>
                      <span className="sl-icon"><Icon name="yt" size={18} /></span>
                      <span className="sl-name">{s.name}</span>
                      <span className="sl-handle">{s.handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="social-platform reveal d1">
                <h3><Icon name="ig" size={24} /> Instagram</h3>
                <div className="social-links">
                  {instagram.map((s) => (
                    <a className="social-link" href={s.href} target="_blank" rel="noopener noreferrer" key={s.handle}>
                      <span className="sl-icon"><Icon name="ig" size={17} /></span>
                      <span className="sl-name">{s.name}</span>
                      <span className="sl-handle">{s.handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section className="section media-section" id="donate">
        <div className="wrap">
          <span className="eyebrow reveal">Donation Links</span>
          <h2 className="reveal d1" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", marginBottom: 16, maxWidth: "22ch" }}>
            Support the mission of pure Bhakti.
          </h2>
          <p className="reveal d1" style={{ color: "var(--muted)", maxWidth: "54ch", marginBottom: 40 }}>
            Your support helps maintain our ashrams, publish books, run programs for youth, and
            serve the local community around Sri Radhe Kunj.
          </p>
          <div className="donate-grid">
            <a className="donate-card reveal" href="https://www.patreon.com/cw/servelove" target="_blank" rel="noopener noreferrer">
              <h3>Patreon</h3>
              <p>Become a monthly patron and sustain the mission with a recurring contribution.</p>
              <span className="textlink">Donate on Patreon <Icon name="arrow" size={13} /></span>
            </a>
            <a className="donate-card reveal d1" href="https://givebutter.com/tokrishna" target="_blank" rel="noopener noreferrer">
              <h3>GiveButter</h3>
              <p>Make a one-time or recurring gift directly to the Bhakta Bandhav mission.</p>
              <span className="textlink">Donate on GiveButter <Icon name="arrow" size={13} /></span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
