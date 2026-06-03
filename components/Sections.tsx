import Link from "next/link";
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


export function Publications() {
  const stats = [
    { num: "120", lbl: "Books Published" },
    { num: "15", lbl: "Traveling Sannyasis" },
    { num: "~1000", lbl: "Centers Worldwide" },
  ];
  return (
    <section className="section pubs" id="publications">
      <div className="wrap grid">
        <div className="books reveal">
          <div className="book b1">
            <span className="b-title">Jaiva Dharma</span>
          </div>
          <div className="book b2">
            <span className="b-title">The Nectar of Govinda-līlā</span>
          </div>
          <div className="book b3">
            <span className="b-title">Śikṣāṣṭaka</span>
          </div>
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
