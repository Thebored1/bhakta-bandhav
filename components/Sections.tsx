import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import Plate from "./Plate";
import { getPosts, getEvents } from "@/lib/supabase/queries";

export function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap grid">
        <div>
          <span className="eyebrow reveal">Who Are We?</span>
          <h2 className="reveal d1">A family devoted to the path of pure love.</h2>
          <p className="first reveal d1">
            We are a spiritual family of devotees from around the world, followers of Lord Chaitanya
            — the savior of this age and combined incarnation of Sri Radha-Krishna. We are connected
            to His unbroken lineage by the modern saints Srila B.V. Narayana Gosvami and Srila B.V.
            Swami Prabhupada.
          </p>
          <p className="reveal d2">
            Lord Chaitanya welcomed everyone without discrimination, embracing the most fallen and
            the righteous with equal compassion. He taught us to see beyond bodily differences, into
            the pure nature of the soul — and showed, through His own example, how everyone can awaken
            ecstatic love of God by chanting the Holy Names under the shelter of advanced devotees.
          </p>
          <div className="about-foot reveal d2">
            <a className="textlink" href="/about">
              Read our full story <Icon name="arrow" size={14} />
            </a>
            <span className="sign">— Bhakta Bandhav Parivar</span>
          </div>
        </div>
        <div className="about-img reveal d1">
          <Plate
            className="main"
            tint="blossom"
            src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
            alt="Temple courtyard in India"
            sizes="(max-width: 900px) 100vw, 45vw"
          />
          <Plate
            className="float"
            tint="mint"
            src="https://images.unsplash.com/photo-1600177770140-c72d30918b1f?auto=format&fit=crop&w=600&q=80"
            alt="Flower offering in Vrindavan"
            mandala={false}
            sizes="20vw"
          />
        </div>
      </div>
    </section>
  );
}


// Bhakta Bandhav / Srila B.V. Narayana Gosvami titles. Each cover is drawn with a
// devotional motif chosen for the book's theme. Add `src` (a path under
// /images/books/*.webp) to any entry to show a real cover photo instead.
type BookMotif = "lotus" | "mandala" | "om" | "feather" | "tulasi" | "flute";
const BOOKS: { title: string; spine: "saffron" | "maroon" | "accent"; motif: BookMotif; src?: string }[] = [
  { title: "Jaiva Dharma", spine: "maroon", motif: "lotus" },
  { title: "The Nectar of Govinda-līlā", spine: "saffron", motif: "flute" },
  { title: "Śrī Śikṣāṣṭaka", spine: "accent", motif: "om" },
  { title: "Beyond Nirvāṇa", spine: "saffron", motif: "mandala" },
  { title: "Bhakti-rasāyana", spine: "accent", motif: "tulasi" },
  { title: "Pinnacle of Devotion", spine: "maroon", motif: "feather" },
];

function BookArt({ motif }: { motif: BookMotif }) {
  const s = {
    viewBox: "0 0 100 100",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (motif) {
    case "lotus":
      return (
        <svg {...s}>
          <path d="M50 26C57 39 57 52 50 63 43 52 43 39 50 26Z" />
          <path d="M50 63C44 51 35 45 26 47 29 58 39 64 50 63Z" />
          <path d="M50 63C56 51 65 45 74 47 71 58 61 64 50 63Z" />
          <path d="M50 63C43 56 32 55 23 60 28 68 40 70 50 63Z" />
          <path d="M50 63C57 56 68 55 77 60 72 68 60 70 50 63Z" />
          <path d="M22 67C34 73 66 73 78 67" />
        </svg>
      );
    case "mandala":
      return (
        <svg {...s}>
          <circle cx="50" cy="50" r="7" />
          <circle cx="50" cy="50" r="16" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <path key={a} d="M50 34C54 27 54 21 50 16 46 21 46 27 50 34Z" transform={`rotate(${a} 50 50)`} />
          ))}
          <circle cx="50" cy="50" r="36" strokeDasharray="1.5 4" />
        </svg>
      );
    case "om":
      return (
        <svg viewBox="0 0 100 100">
          <text x="50" y="73" textAnchor="middle" fontSize="66" fill="currentColor" fontFamily="var(--font-cormorant), serif">ॐ</text>
        </svg>
      );
    case "feather":
      return (
        <svg {...s}>
          <path d="M50 88C50 70 49 52 50 40" />
          <ellipse cx="50" cy="34" rx="15" ry="21" />
          <ellipse cx="50" cy="36" rx="8" ry="12" />
          <path d="M50 44C46 40 46 32 50 28 54 32 54 40 50 44Z" />
          <path d="M50 56 36 50M50 62 33 58M50 56 64 50M50 62 67 58" />
        </svg>
      );
    case "tulasi":
      return (
        <svg {...s}>
          <path d="M50 86C50 66 50 44 50 24" />
          <path d="M50 32C41 28 33 32 31 41 40 43 47 40 50 32Z" />
          <path d="M50 32C59 28 67 32 69 41 60 43 53 40 50 32Z" />
          <path d="M50 50C42 47 34 51 33 60 41 61 47 57 50 50Z" />
          <path d="M50 50C58 47 66 51 67 60 59 61 53 57 50 50Z" />
          <path d="M50 66C44 64 38 67 37 74 44 75 49 71 50 66Z" />
          <path d="M50 66C56 64 62 67 63 74 56 75 51 71 50 66Z" />
        </svg>
      );
    case "flute":
      return (
        <svg {...s}>
          <line x1="20" y1="66" x2="76" y2="36" />
          <line x1="74" y1="34" x2="78" y2="38" />
          <circle cx="34" cy="60" r="1.8" fill="currentColor" stroke="none" />
          <circle cx="42" cy="56" r="1.8" fill="currentColor" stroke="none" />
          <circle cx="50" cy="51" r="1.8" fill="currentColor" stroke="none" />
          <circle cx="58" cy="47" r="1.8" fill="currentColor" stroke="none" />
          <path d="M66 22V34" />
          <ellipse cx="63" cy="34" rx="3.4" ry="2.6" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

export function Publications() {
  const stats = [
    { num: "120", lbl: "Books Published" },
    { num: "15", lbl: "Traveling Sannyasis" },
    { num: "~1000", lbl: "Centers Worldwide" },
  ];
  return (
    <section className="section pubs" id="publications">
      <div className="wrap grid">
        <div className="books-collage reveal" aria-label="A selection of Bhakta Bandhav publications">
          {BOOKS.map((b) => (
            <div className={`book-cover spine-${b.spine}`} key={b.title}>
              {b.src ? (
                <Image src={b.src} alt={`${b.title} — book cover`} fill sizes="(max-width: 900px) 30vw, 16vw" style={{ objectFit: "cover" }} />
              ) : (
                <>
                  <span className="cover-frame" aria-hidden="true" />
                  <span className="cover-art" aria-hidden="true"><BookArt motif={b.motif} /></span>
                  <span className="cover-rule" aria-hidden="true" />
                  <span className="b-title">{b.title}</span>
                </>
              )}
            </div>
          ))}
        </div>
        <div>
          <span className="eyebrow reveal">Books &amp; Publications</span>
          <h2 className="reveal d1">Preserving the teachings, in print.</h2>
          <p className="reveal d1">
            Since 2012 we have published 120 books — primarily the teachings of Srila B.V. Narayana
            Gosvami, as well as our Guru-varga and their followers. Our focus is empowering the youth
            to become the spiritual servant-leaders of tomorrow.
          </p>
          <div className="stats reveal d2">
            {stats.map((s) => (
              <div className="stat" key={s.lbl}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
          <a className="btn btn-primary reveal d2" href="/books">
            Visit the bookstore{" "}
            <span className="arr">
              <Icon name="arrow" size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export async function Events() {
  const events = await getEvents();
  const preview = events.slice(0, 3);
  return (
    <section className="section events" id="events">
      <div className="wrap">
        <div className="section-head">
          <div className="sh-text">
            <span className="eyebrow reveal">Upcoming Events</span>
            <h2 className="reveal d1">Gather, serve, and celebrate together.</h2>
            <p className="reveal d1">
              Festivals, satsangs, and retreats hosted by our centers and online.
            </p>
          </div>
          <a className="textlink reveal d1" href="/events">
            All events <Icon name="arrow" size={14} />
          </a>
        </div>
        <div className="event-list">
          {preview.map((ev, idx) => (
            <div
              className={"event-row reveal d" + Math.min(idx + 1, 3)}
              key={ev.id}
            >
              <div className="event-date">
                <div className="d">{ev.d}</div>
                <div className="m">{ev.m}</div>
              </div>
              <div className="event-info">
                <h3>{ev.title}</h3>
                <div className="meta">
                  <span>
                    <Icon name="pin" size={15} /> {ev.place}
                  </span>
                  <span>
                    <Icon name="clock" size={15} /> {ev.time}
                  </span>
                </div>
              </div>
              <div className="event-rsvp">
                <Link href={`/events/${ev.id}`} className="btn btn-ghost">
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function Blog() {
  const posts = await getPosts();
  const preview = posts.slice(0, 3);
  return (
    <section className="section blog" id="blog">
      <div className="wrap">
        <div className="section-head">
          <div className="sh-text">
            <span className="eyebrow reveal">From the Blog</span>
            <h2 className="reveal d1">Reflections on the path of devotion.</h2>
          </div>
          <a className="textlink reveal d1" href="/blog">
            Read all posts <Icon name="arrow" size={14} />
          </a>
        </div>
        <div className="blog-grid">
          {preview.map((post, idx) => (
            <article
              className={"post reveal d" + Math.min(idx + 1, 3)}
              key={post.id}
            >
              <Plate tint={post.tint} src={post.image} alt={post.title} mandala={false} sizes="(max-width: 920px) 90vw, 30vw" />
              <div className="post-body">
                <div className="post-tag">
                  {post.tag} <span className="dot" /> 6 min read
                </div>
                <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="post-more">
                  Read more <Icon name="arrow" size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
