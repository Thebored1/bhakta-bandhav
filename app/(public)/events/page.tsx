import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import { getEvents } from "@/lib/supabase/queries";

export const metadata: Metadata = {
  title: "Events — Bhakta Bandhav",
  description: "Upcoming festivals, satsangs, retreats, and celebrations hosted by our centers and online.",
  alternates: { canonical: "https://bhakta.org/events" },
  openGraph: {
    title: "Events — Bhakta Bandhav",
    description: "Upcoming festivals, satsangs, retreats, and celebrations hosted by our centers and online.",
    url: "https://bhakta.org/events",
    siteName: "Bhakta Bandhav",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events — Bhakta Bandhav",
    description: "Upcoming festivals, satsangs, retreats, and celebrations hosted by our centers and online.",
  },
};

export default async function EventsPage() {
  const events = await getEvents();
  return (
    <main>
      <PageHeader
        eyebrow="Upcoming Events"
        title="Gather, serve, and celebrate together."
        subtitle="Festivals, satsangs, and retreats hosted by our centers worldwide and online. All are welcome."
        tint="peach"
      />

      <section className="section events-page">
        <div className="wrap">
          <div className="event-list">
            {events.map((ev, idx) => (
              <Link
                href={`/events/${ev.id}`}
                className={"event-row reveal d" + Math.min((idx % 3) + 1, 3)}
                key={ev.id}
              >
                <div className="event-date">
                  <div className="d">{ev.d}</div>
                  <div className="m">{ev.m}</div>
                </div>
                <div className="event-info">
                  <div><span className="event-tag">{ev.tag}</span></div>
                  <h3>{ev.title}</h3>
                  <div className="meta">
                    <span><Icon name="pin" size={15} /> {ev.place}</span>
                    <span><Icon name="clock" size={15} /> {ev.time}</span>
                  </div>
                </div>
                <div className="event-rsvp">
                  <span className="btn btn-ghost">View details</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="rsvp-banner reveal">
            <div>
              <h3>Host an event near you</h3>
              <p>
                Interested in organising a home satsang, kirtan evening, or retreat in your area?
                Connect with a servant-leader in our network and we will help you set it up.
              </p>
            </div>
            <a className="btn btn-primary" href="mailto:bhaktabandhav@gmail.com">
              Get in touch <span className="arr"><Icon name="arrow" size={16} /></span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
