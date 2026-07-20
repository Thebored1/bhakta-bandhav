import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Teachers — Bhakta Bandhav",
  description:
    "The teachers and servant-leaders of the Bhakta Bandhav family, guiding devotees on the path of pure Bhakti around the world.",
  alternates: { canonical: "https://bhakta.org/teachers" },
  openGraph: {
    title: "Teachers — Bhakta Bandhav",
    description:
      "The teachers and servant-leaders of the Bhakta Bandhav family, guiding devotees on the path of pure Bhakti.",
    url: "https://bhakta.org/teachers",
    siteName: "Bhakta Bandhav",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teachers — Bhakta Bandhav",
    description:
      "The teachers and servant-leaders of the Bhakta Bandhav family.",
  },
};

// TODO: fill in each teacher's real website in `site` (e.g. site: "https://…").
// Teachers with a `site` link out to their website; the rest fall back to an
// email contact link so every card stays clickable.
type Teacher = { name: string; role: string; site?: string };

const teachers: Teacher[] = [
  { name: "B.B. Rasikananda Maharaja", role: "Traveling teacher · USA & Canada" },
  { name: "B.B. Giridhari Maharaja", role: "Vrindavan · Radhe Kunj" },
  { name: "B.B. Krsna-karunya Maharaja", role: "Pokhara, Nepal" },
  { name: "B.B. Mahayogi Maharaja", role: "Bangalore, India" },
];

export default function TeachersPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Teachers"
        title="Guided by servant-leaders of pure Bhakti."
        subtitle="Our teachers travel and serve around the world, sharing the teachings of Srila B.V. Narayana Gosvami and guiding devotees in their practice and loving service."
        tint="lavender"
      />

      <section className="section">
        <div className="wrap">
          <div className="centers-grid">
            {teachers.map((t) => {
              const href = t.site
                ? t.site
                : `mailto:bhaktabandhav@gmail.com?subject=${encodeURIComponent("Connect with " + t.name)}`;
              const external = Boolean(t.site);
              return (
                <a
                  className="center-card"
                  key={t.name}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <div className="cc-name">{t.name}</div>
                  <div className="cc-location">
                    <Icon name="lotus" size={13} /> {t.role}
                  </div>
                  <div className="cc-link">
                    <Icon name={external ? "globe" : "mail"} size={13} />{" "}
                    {external ? "Visit website" : "Get in touch"}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
