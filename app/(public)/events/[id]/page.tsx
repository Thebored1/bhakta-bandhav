import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getEventById } from "@/lib/supabase/queries";
import Icon from "@/components/Icon";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const ev = await getEventById(id);
  if (!ev) return { title: "Event not found" };
  const description = `${ev.title} on ${ev.d} ${ev.m} at ${ev.place}. ${ev.time}.`;
  return {
    title: `${ev.title} — Bhakta Bandhav Events`,
    description,
    alternates: { canonical: `https://bhakta.org/events/${id}` },
    openGraph: {
      title: `${ev.title} — Bhakta Bandhav Events`,
      description,
      url: `https://bhakta.org/events/${id}`,
      siteName: "Bhakta Bandhav",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${ev.title} — Bhakta Bandhav Events`,
      description,
    },
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params;
  const ev = await getEventById(id);
  if (!ev) notFound();

  return (
    <main>
      {/* Header */}
      <div className="page-header">
        <div
          className="page-header-bg"
          style={{
            background:
              "radial-gradient(60% 120% at 100% 0%, color-mix(in oklab, var(--saffron) 35%, transparent), transparent 55%), radial-gradient(60% 100% at 0% 100%, color-mix(in oklab, var(--accent) 20%, transparent), transparent 55%), var(--cream-2)",
          }}
        />
        <div className="wrap page-header-inner">
          <nav className="event-detail-breadcrumb">
            <Link href="/events">Events</Link>
            <Icon name="arrow" size={11} />
            <span>{ev.tag}</span>
          </nav>
          <span className="eyebrow">{ev.tag}</span>
          <h1>{ev.title}</h1>
        </div>
      </div>

      {/* Meta + body */}
      <section className="section">
        <div className="wrap-narrow">
          {/* Meta strip */}
          <div className="event-detail-meta">
            <div className="event-detail-date">
              <span className="event-date-big">{ev.d}</span>
              <span className="event-month-big">{ev.m}</span>
            </div>
            <div className="event-detail-info">
              <div className="meta">
                <span><Icon name="pin" size={16} /> {ev.place}</span>
                <span><Icon name="clock" size={16} /> {ev.time}</span>
              </div>
            </div>
          </div>

          {/* Rich description */}
          {ev.description && ev.description !== "<p></p>" && (
            <div
              className="rich-content"
              style={{ marginTop: 40 }}
              dangerouslySetInnerHTML={{ __html: ev.description }}
            />
          )}

          {/* RSVP CTA */}
          <div className="event-detail-cta">
            <a
              href={`mailto:bhaktabandhav@gmail.com?subject=RSVP: ${encodeURIComponent(ev.title)}`}
              className="btn btn-primary"
            >
              RSVP for this event{" "}
              <span className="arr"><Icon name="arrow" size={16} /></span>
            </a>
            <Link href="/events" className="btn btn-ghost">
              All events
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
