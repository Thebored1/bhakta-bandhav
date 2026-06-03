import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Calendar — Bhakta Bandhav",
  description: "Our Vaiṣṇava calendar, its rationale, mobile app, and the full Māyāpura PDF.",
  alternates: { canonical: "https://bhakta.org/calendar" },
  openGraph: {
    title: "Calendar — Bhakta Bandhav",
    description: "Our Vaiṣṇava calendar, its rationale, mobile app, and the full Māyāpura PDF.",
    url: "https://bhakta.org/calendar",
    siteName: "Bhakta Bandhav",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calendar — Bhakta Bandhav",
    description: "Our Vaiṣṇava calendar, its rationale, mobile app, and the full Māyāpura PDF.",
  },
};

export default function CalendarPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Vaiṣṇava Calendar"
        title="Sacred days in the Surya-siddhanta tradition."
        subtitle="Our community follows the Surya-siddhanta almanac for observing sacred days and festivals, in keeping with the standard received through our siksha lineage."
        tint="lavender"
      />

      {/* Rationale */}
      <section className="section calendar-section" id="rationale">
        <div className="wrap">
          <div className="about-section-inner">
            <div className="about-section-aside reveal">
              <span className="eyebrow">Rationale &amp; Methodology</span>
              <h2>Why this calendar?</h2>
            </div>
            <div className="prose">
              <p className="reveal">
                Our community follows the Surya-siddhanta almanac for observing sacred days and
                festivals, in keeping with the standard received through our siksha line from the
                time of Srila Bhaktisiddhanta Saraswati Prabhupada.
              </p>
              <p className="reveal d1">
                We accept and honor other respected ways of determining and observing these holy
                days. Our intention is not to create separation or segregation, but simply to remain
                faithful to the guidance we have received. Most important is that each devotee
                sincerely follows their diksha and siksha lines.
              </p>
              <div className="pull reveal d1">
                Most important is that each devotee sincerely follows their diksha and siksha lines.
              </div>
              <p className="reveal d2">
                The Surya-siddhanta is one of the oldest surviving astronomical texts of the Vedic
                tradition, providing detailed computations for the positions of celestial bodies and
                the calculation of auspicious dates. It forms the backbone of the traditional
                Panchanga — the five-limbed almanac — from which all Vaiṣṇava observances are derived.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section className="section calendar-section" id="app">
        <div className="wrap">
          <span className="eyebrow reveal">Mobile App</span>
          <h2 className="reveal d1" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", marginBottom: 16, maxWidth: "18ch" }}>
            Bhakta Bandhav Calendar App
          </h2>
          <p className="reveal d1" style={{ color: "var(--muted)", maxWidth: "52ch", marginBottom: 36 }}>
            Download the official Bhakta Bandhav Calendar app and carry all sacred observances,
            Ekadasi dates, and festival days in your pocket.
          </p>
          <div className="app-download-grid reveal d2">
            <a
              className="app-download-card"
              href="https://apps.apple.com/us/app/bhakta-bandhav-calendar/id6470683443"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="adc-icon">🍎</div>
              <div className="adc-text">
                <div className="a-sm">Download on the</div>
                <div className="a-lg">App Store</div>
              </div>
            </a>
            <a
              className="app-download-card"
              href="https://play.google.com/store/apps/details?id=com.gaura.calendar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="adc-icon">▶</div>
              <div className="adc-text">
                <div className="a-sm">Get it on</div>
                <div className="a-lg">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* PDF */}
      <section className="section calendar-section" id="pdf">
        <div className="wrap">
          <span className="eyebrow reveal">Calendar PDF</span>
          <h2 className="reveal d1" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", marginBottom: 16, maxWidth: "22ch" }}>
            Māyāpura Vaiṣṇava Calendar 2026–2027
          </h2>
          <p className="reveal d1" style={{ color: "var(--muted)", maxWidth: "52ch", marginBottom: 36 }}>
            Access the full printable PDF of the Māyāpura Vaiṣṇava Calendar for 2026–2027,
            complete with all sacred observances, festivals, and Ekadasi days.
          </p>
          <a
            className="pdf-card reveal d2"
            href="https://bhakta.org/wp-content/uploads/2026/03/Mayapur-Calendar_2026-27.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="pdf-icon">PDF</div>
            <div className="pdf-body">
              <h4>Māyāpura Calendar 2026–27</h4>
              <p>Full year · All observances · Printable</p>
            </div>
            <Icon name="arrow" size={20} style={{ marginLeft: "auto", color: "var(--saffron-deep)", flexShrink: 0 }} />
          </a>
        </div>
      </section>
    </main>
  );
}
