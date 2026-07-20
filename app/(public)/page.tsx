import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, getEvents } from "@/lib/supabase/queries";
import HomeReveal from "@/components/HomeReveal";
import HomeHero from "@/components/HomeHero";
import "./home.css";

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

const NAV_LINKS = [
  { label: "About ▾", href: "/about" },
  { label: "Seva", href: "/sevas" },
  { label: "Blog", href: "/blog" },
  { label: "Books", href: "/books" },
  { label: "Academy", href: "/academy" },
  { label: "Media ▾", href: "/media" },
  { label: "Centers", href: "/centers" },
  { label: "Events", href: "/events" },
  { label: "Calendar ▾", href: "/calendar" },
];

const BOOK_IMAGES = [
  "/images/home/book-1.webp",
  "/images/home/book-2.webp",
  "/images/home/book-3.webp",
  "/images/home/book-4.webp",
  "/images/home/book-5.webp",
  "/images/home/book-6.webp",
];

const STATS = [
  { num: "120", lbl: "Books Published" },
  { num: "15", lbl: "Traveling Sannyasis" },
  { num: "~1000", lbl: "Centers Worldwide" },
];

const FEST_IMAGES = [
  { src: "/images/home/fest-kirtan.webp", alt: "Devotees gathered for kirtan beneath a canopy of flowers" },
  { src: "/images/home/kirtan.webp", alt: "Devotees absorbed in ecstatic kirtan" },
  { src: "/images/home/fest-dancing.webp", alt: "Devotees dancing before the deities during the festival" },
  { src: "/images/home/fest-lamps.webp", alt: "The festival hall aglow with lamps and garlands" },
  { src: "/images/home/fest-harikatha.webp", alt: "Hari-katha and kirtan with the assembled devotees" },
];

const FALLBACK_EVENTS = [
  { id: "", d: "14", m: "JUN", title: "Kartik Vrindavan Parikrama", place: "Sri Radhe Kunj, Vrindavan", time: "Daily 6:00 AM" },
  { id: "", d: "28", m: "JUN", title: "Online Satsang & Hari-kathā", place: "Live on Zoom & YouTube", time: "7:00 PM EST" },
  { id: "", d: "09", m: "JUL", title: "Bhakta Youth Retreat", place: "New Braj Dham, Badger CA", time: "Weekend" },
];

const FALLBACK_POSTS = [
  {
    slug: "",
    tag: "Centers",
    title: "A Visit to New Braj Dham",
    excerpt:
      "New Braj Dham in Badger, California is a sanctuary of devotion nestled in the hills, where community and practice meet.",
    image: "/images/home/blog-new-braj.webp",
  },
  {
    slug: "",
    tag: "Lineage",
    title: "The Legacy of Srila Narayana Gosvami",
    excerpt:
      "How Bhakta Bandhav Srila Gurudeva spread the path of pure love across the world through tireless travel and teaching.",
    image: "/images/home/blog-lineage.webp",
  },
  {
    slug: "",
    tag: "Practice",
    title: "Beginning Japa Meditation",
    excerpt:
      "A gentle guide to the practice of chanting on beads — how to start, how to sustain, and what to expect on the journey inward.",
    image: "/images/home/blog-japa.png",
  },
];

export default async function Home() {
  const [dbEvents, dbPosts] = await Promise.all([getEvents(), getPosts()]);

  const events =
    dbEvents.length > 0
      ? dbEvents.slice(0, 3).map((e) => ({
          id: e.id,
          d: e.d,
          m: e.m.toUpperCase(),
          title: e.title,
          place: e.place,
          time: e.time,
        }))
      : FALLBACK_EVENTS;

  const posts =
    dbPosts.length > 0
      ? dbPosts.slice(0, 3).map((p) => ({
          slug: p.slug,
          tag: p.tag,
          title: p.title,
          excerpt: p.excerpt,
          image: p.image,
        }))
      : FALLBACK_POSTS;

  return (
    <div className="bb-home">
      <HomeReveal />
      {/* utility bar */}
      <div className="bb-util">
        <span className="bb-sanskrit">
          वसुधैव कुटुम्बकम् · <em>The world is one family</em>
        </span>
        <div className="bb-util-links">
          <Link href="/contact">Contact</Link>
          <Link href="#join" className="bb-donate">
            DONATE
          </Link>
        </div>
      </div>

      {/* main nav */}
      <header className="bb-nav">
        <Link href="/" className="bb-brand">
          <img src="/images/home/logo.png" alt="Bhakta Bandhav" />
          <span className="bb-brand-name">
            <b>Bhakta Bandhav</b>
            <span>FAMILY OF LORD CHAITANYA</span>
          </span>
        </Link>
        <nav className="bb-navlinks">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href}>
              {l.label}
            </Link>
          ))}
          <Link href="#join" className="bb-btn-donate">
            DONATE
          </Link>
        </nav>
        <Link href="#join" className="bb-navmenu">
          DONATE
        </Link>
      </header>

      {/* hero */}
      <HomeHero />

      {/* darshana */}
      <section className="bb-sec bb-sec--alt">
        <div className="bb-darshana">
          <span className="bb-eyebrow bb-reveal">Darshana</span>
          <div className="bb-darshana-title bb-reveal bb-d1">Sri Sri Radha Ramana Jiu</div>
          <div className="bb-darshana-frame bb-reveal bb-d1">
            <img
              src="/images/home/altar.webp"
              alt="Altar of Sri Sri Radha Ramana Jiu with the gopis and manjaris, and the murtis of Srila Gurudeva and Srila Prabhupada"
            />
          </div>
          <p className="bb-darshana-cap bb-reveal bb-d2">
            Sri Radha Ramana with the sakhis and manjaris, attended by our
            beloved Srila Gurudeva and Srila Prabhupada — the heart of our
            family&rsquo;s worship.
          </p>
        </div>
      </section>

      {/* who are we */}
      <section className="bb-sec bb-sec--bg">
        <div className="bb-grid2">
          <div className="bb-reveal">
            <span className="bb-eyebrow">Who Are We?</span>
            <h2>A family devoted to the path of pure love.</h2>
            <p>
              We are a spiritual family of devotees from around the world,
              followers of Lord Chaitanya — the savior of this age and combined
              incarnation of Sri Radha-Krishna. We are connected to His unbroken
              lineage by Srila B.V. Narayana Gosvami and Srila B.V. Swami
              Prabhupada.
            </p>
            <p style={{ marginBottom: 26 }}>
              He welcomed everyone without discrimination, embracing the most
              fallen and the righteous with equal compassion, and taught us to
              see beyond the body into the pure nature of the soul.
            </p>
            <Link href="/about" className="bb-textlink">
              Read our full story →
            </Link>
            <div className="bb-about-sign">— Bhakta Bandhav Parivar</div>
          </div>
          <div className="bb-about-media bb-reveal bb-d1">
            <div className="bb-about-main">
              <img
                src="/images/home/about-family.webp"
                alt="Our devotee family gathered together at a waterfall"
              />
            </div>
            <div className="bb-about-float">
              <img src="/images/home/kirtan.webp" alt="Devotees in kirtan" />
            </div>
          </div>
        </div>
      </section>

      {/* books + stats */}
      <section className="bb-sec bb-sec--alt">
        <div className="bb-grid2 bb-grid2--books">
          <div
            className="bb-books bb-reveal"
            aria-label="A selection of Bhakta Bandhav publications"
          >
            {BOOK_IMAGES.map((src, i) => (
              <span className="bb-book" key={src}>
                <img src={src} alt={`Bhakta Bandhav publication ${i + 1}`} />
              </span>
            ))}
          </div>
          <div className="bb-reveal bb-d1">
            <span className="bb-eyebrow">Books &amp; Publications</span>
            <h2>Preserving the teachings, in print.</h2>
            <p style={{ marginBottom: 6 }}>
              Since 2012 we have published 120 books — primarily the teachings of
              Srila B.V. Narayana Gosvami, as well as our Guru-varga and their
              followers — empowering the youth to become the spiritual
              servant-leaders of tomorrow.
            </p>
            <div className="bb-stats">
              {STATS.map((s) => (
                <div className="bb-stat" key={s.lbl}>
                  <div className="bb-num">{s.num}</div>
                  <div className="bb-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
            <Link href="/books" className="bb-btn bb-btn-maroon">
              Visit the bookstore
            </Link>
          </div>
        </div>
      </section>

      {/* festivals */}
      <section className="bb-sec bb-sec--bg">
        <div className="bb-fest-head bb-reveal">
          <span className="bb-eyebrow">Festivals &amp; Kirtan</span>
          <h2>Celebrating together in song and dance.</h2>
          <p>
            Throughout the year our family gathers for festivals, kirtan, and
            hari-kathā — the temple hall filling with flowers, lamps, and the
            sweet sound of the Holy Names.
          </p>
        </div>
        <div className="bb-fest-grid bb-reveal bb-d1">
          {FEST_IMAGES.map((f) => (
            <img key={f.src} src={f.src} alt={f.alt} />
          ))}
        </div>
      </section>

      {/* events */}
      <section className="bb-sec bb-sec--maroon">
        <div className="bb-events-head bb-reveal">
          <div>
            <span className="bb-eyebrow">Upcoming Events</span>
            <h2>Gather, serve, and celebrate together.</h2>
          </div>
          <Link href="/events">All events →</Link>
        </div>
        <div className="bb-event-list">
          {events.map((ev, i) => (
            <div
              className={`bb-event-row bb-reveal bb-d${Math.min(i + 1, 3)}`}
              key={ev.id || `${ev.title}-${i}`}
            >
              <div className="bb-event-date">
                <div className="bb-d">{ev.d}</div>
                <div className="bb-m">{ev.m}</div>
              </div>
              <div className="bb-event-info">
                <h3>{ev.title}</h3>
                <p>
                  {ev.place} · {ev.time}
                </p>
              </div>
              <Link
                href={ev.id ? `/events/${ev.id}` : "/events"}
                className="bb-details"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* blog */}
      <section className="bb-sec bb-sec--bg">
        <div className="bb-blog-head bb-reveal">
          <div>
            <span className="bb-eyebrow">From the Blog</span>
            <h2>Reflections on the path of devotion.</h2>
          </div>
          <Link href="/blog">Read all posts →</Link>
        </div>
        <div className="bb-blog-grid">
          {posts.map((post, i) => {
            const href = post.slug ? `/blog/${post.slug}` : "/blog";
            return (
              <article
                className={`bb-blog-card bb-reveal bb-d${Math.min(i + 1, 3)}`}
                key={post.slug || `${post.title}-${i}`}
              >
                <img src={post.image} alt={post.title} />
                <div className="bb-blog-tag">{post.tag} · 6 min read</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link href={href} className="bb-more">
                  Read more →
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* join */}
      <section className="bb-join" id="join">
        <div className="bb-join-glow" />
        <div className="bb-join-inner bb-reveal">
          <span className="bb-eyebrow">Join the Family</span>
          <h2>Everyone is most welcome.</h2>
          <p className="bb-join-lead">
            Anyone interested in being part of this spiritual family is warmly
            welcomed. Get in touch and we will connect you to servant-leaders who
            can guide you in your practice and loving service.
          </p>
          <p className="bb-join-note">
            Receive satsang invitations, new publications, and the Vaiṣṇava
            calendar — straight to your inbox.
          </p>
          <div className="bb-join-form">
            <input placeholder="Your email" aria-label="Your email" />
            <Link href="/contact">GET IN TOUCH</Link>
          </div>
          <p className="bb-join-fine">
            We honor your privacy. No spam — only nourishment for the soul.
          </p>
        </div>
      </section>

      {/* footer */}
      <footer className="bb-footer">
        <div className="bb-footer-brand">
          <div className="bb-footer-brand-row">
            <img src="/images/home/logo.png" alt="Bhakta Bandhav" />
            <span>
              <b>Bhakta Bandhav</b>
              <small>SERVE · LOVE</small>
            </span>
          </div>
          <p>
            A worldwide family of devotees practicing and sharing the path of
            pure Bhakti-yoga, in the line of Srila B.V. Narayana Gosvami. Our
            headquarters is Sri Radhe Kunj, Vrindavan.
          </p>
        </div>
        <div className="bb-footer-col">
          <h4>EXPLORE</h4>
          <div className="bb-links">
            <Link href="/about">Who Are We?</Link>
            <Link href="/about#mission">Our Mission</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/books">Books &amp; Publications</Link>
            <Link href="/events">Events</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        <div className="bb-footer-col">
          <h4>CONNECT</h4>
          <div className="bb-links">
            <Link href="/centers">Our Centers</Link>
            <Link href="/media#bhakti-essentials">Bhakti Essentials</Link>
            <Link href="/calendar#pdf">Calendar (PDF)</Link>
            <Link href="#join">Donate</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="bb-footer-col">
          <h4>GET IN TOUCH</h4>
          <p>Questions or seva enquiries? We would love to hear from you.</p>
          <Link href="/contact" className="bb-footer-contact">
            Contact Us
          </Link>
        </div>
      </footer>
      <div className="bb-footer-bottom">
        <span>
          © 2026 Bhakta Bandhav Parivar. All glories to Sri Guru &amp; Sri
          Gauranga.
        </span>
        <span className="bb-legal">
          <Link href="/faqs">Privacy Policy</Link>
          <Link href="/faqs">Cookies</Link>
          <Link href="#join">Donate</Link>
        </span>
      </div>
    </div>
  );
}
