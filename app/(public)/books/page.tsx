import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Books & Publications — Bhakta Bandhav",
  description: "120 books preserving and spreading the teachings of Srila B.V. Narayana Gosvami and our Guru-varga.",
  alternates: { canonical: "https://bhakta.org/books" },
  openGraph: {
    title: "Books & Publications — Bhakta Bandhav",
    description: "120 books preserving and spreading the teachings of Srila B.V. Narayana Gosvami and our Guru-varga.",
    url: "https://bhakta.org/books",
    siteName: "Bhakta Bandhav",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Books & Publications — Bhakta Bandhav",
    description: "120 books preserving and spreading the teachings of Srila B.V. Narayana Gosvami and our Guru-varga.",
  },
};

const stats = [
  { num: "120", lbl: "Books Published" },
  { num: "15",  lbl: "Traveling Sannyasis" },
  { num: "~1000", lbl: "Centers Worldwide" },
];

export default function BooksPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Books & Publications"
        title="Preserving the teachings, in print."
        subtitle="Since 2012 we have published 120 books — primarily the teachings of Srila B.V. Narayana Gosvami, as well as our Guru-varga and their followers."
        tint="gold"
      />

      {/* Introduction */}
      <section className="section books-intro">
        <div className="wrap">
          <div className="about-section-inner">
            <div className="about-section-aside reveal">
              <span className="eyebrow">Our Publications</span>
              <h2>Knowledge that nourishes the soul.</h2>
            </div>
            <div className="prose">
              <p className="reveal">
                Since 2012, we have published 120 books, primarily the teachings of Srila BV
                Narayana Gosvami, as well as of our Guru-varga and their followers in our lineage.
                In our mission, we have 15 sannyasis traveling, teaching, and maintaining the temples
                and ashrams.
              </p>
              <p className="reveal d1">
                Our focus is on empowering and training the youth to be the spiritual servant leaders
                of tomorrow. Therefore, we are starting Bhakta Youth programs online and in person,
                to help them develop confidence in sharing their Dharma.
              </p>
              <p className="reveal d1">
                To purchase individual Bhakta Bandhav publications at retail price, or to inquire
                about bulk orders, please contact Tyāgī Mahārāja:{" "}
                <a href="tel:+917983690967" style={{ color: "var(--saffron-deep)" }}>+91 79836 90967</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section books-stats">
        <div className="wrap">
          <div className="stats-3col reveal">
            {stats.map((s) => (
              <div className="stat" key={s.lbl}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storefront */}
      <section className="section books-store">
        <div className="wrap">
          <span className="eyebrow reveal">Bookstore</span>
          <h2 className="reveal d1" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", marginBottom: 12 }}>
            Shop our full catalogue
          </h2>
          <p className="reveal d1" style={{ color: "var(--muted)", maxWidth: "58ch", marginBottom: 28 }}>
            Our Bhakta Bandhav titles are available worldwide through our Lulu storefront, and in
            person at our bookstore in Sri Dhama Vrindavan — which also carries a wide variety of
            devotional books, from the writings of our Guru-varga to the great acharyas of our line.
          </p>

          <figure className="store-photo reveal d1">
            <Image
              src="/images/bookstore.webp"
              alt="Inside the Bhakta Bandhav bookstore in Vrindavan, shelves stocked with devotional books beneath a hand-painted floral ceiling"
              fill
              sizes="(max-width: 1240px) 92vw, 1240px"
              style={{ objectFit: "cover" }}
            />
            <figcaption>Our bookstore in Sri Dhama Vrindavan</figcaption>
          </figure>

          <div className="ship-grid reveal d1">
            <div className="ship-card">
              <div className="cc-icon"><Icon name="lotus" size={22} /></div>
              <h4>Bhakta Bandhav titles</h4>
              <p>
                The teachings of Srila B.V. Narayana Gosvami and our Guru-varga — published with care
                and available to devotees everywhere.
              </p>
            </div>
            <div className="ship-card">
              <div className="cc-icon"><Icon name="book" size={22} /></div>
              <h4>A wider library in Vrindavan</h4>
              <p>
                Visiting Vrindavan? Our store stocks a broad selection of devotional literature
                beyond our own publications — something for every stage of the path.
              </p>
            </div>
            <div className="ship-card">
              <div className="cc-icon"><Icon name="globe" size={22} /></div>
              <h4>Shipped internationally</h4>
              <p>
                We ship worldwide. For international orders, shipping rates, or bulk enquiries,
                contact Tyāgī Mahārāja and we&rsquo;ll gladly help.
              </p>
            </div>
          </div>

          <a
            className="btn btn-primary reveal d1"
            href="https://www.lulu.com/spotlight/servelove"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginBottom: 56 }}
          >
            Open the bookstore <span className="arr"><Icon name="arrow" size={16} /></span>
          </a>

          <div className="contact-card reveal d2">
            <div className="cc-icon"><Icon name="mail" size={22} /></div>
            <div className="cc-body">
              <h4>Bulk orders &amp; enquiries</h4>
              <p>
                Contact Tyāgī Mahārāja for bulk pricing and shipping:{" "}
                <a href="tel:+917983690967">+91 79836 90967</a>
              </p>
              <p style={{ marginTop: 8 }}>
                Sri Radhe Kunj Chaitanya Vihar, Rajpur Khadar,<br />
                near Parikrama Marg, Vrindavan, U.P. 281121
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
