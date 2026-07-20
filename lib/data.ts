export type PlateTint = "rose" | "peach" | "mint" | "lavender" | "gold" | "blossom";

export interface NavItem {
  label: string;
  href?: string;
  items?: { t: string; d: string; href: string }[] | null;
}

export const SITE: {
  nav: NavItem[];
  events: { d: string; m: string; title: string; place: string; time: string; tag: string }[];
  posts: { tag: string; title: string; excerpt: string; tint: PlateTint; image: string }[];
} = {
  nav: [
    {
      label: "About",
      items: [
        { t: "Who Are We?",          d: "Our spiritual family & lineage",   href: "/about#who-are-we" },
        { t: "Our Values & Mission", d: "The world is one family",          href: "/about#values" },
        { t: "What Is Our Mission?", d: "Krishna Prema Seva in the world",  href: "/about#mission" },
        { t: "FAQs",                 d: "Common questions on the path",     href: "/faqs" },
      ],
    },
    { label: "Seva",    items: null, href: "/sevas" },
    { label: "Events", items: null, href: "/events" },
    { label: "Blog",   items: null, href: "/blog" },
    { label: "Books",   items: null, href: "/books" },
    {
      label: "Media",
      items: [
        { t: "Bhakti Essentials Series", d: "7 short booklets for seekers", href: "/media#bhakti-essentials" },
        { t: "Social Links",             d: "YouTube & Instagram",           href: "/media#social" },
        { t: "Donation Links",           d: "Support the mission",           href: "/media#donate" },
      ],
    },
    { label: "Centers", items: null, href: "/centers" },
    { label: "Academy", items: null, href: "/academy" },
    { label: "Teachers", items: null, href: "/teachers" },
    { label: "Get in Touch", items: null, href: "/contact" },
    {
      label: "Calendar",
      items: [
        { t: "Rationale & Methodology", d: "The Surya-siddhanta almanac",           href: "/calendar#rationale" },
        { t: "Mobile App",               d: "Bhakta Bandhav Calendar — iOS & Android", href: "/calendar#app" },
        { t: "Māyāpura Calendar PDF",    d: "Full 2026–2027 calendar",               href: "/calendar#pdf" },
      ],
    },
  ],

  events: [
    { d: "14", m: "Jun", title: "Kartik Vrindavan Parikrama",      place: "Sri Radhe Kunj, Vrindavan",          time: "Daily · 6:00 AM",   tag: "Pilgrimage" },
    { d: "28", m: "Jun", title: "Online Satsang & Hari-kathā",     place: "Live on Zoom & YouTube",             time: "7:00 PM EST",       tag: "Online" },
    { d: "09", m: "Jul", title: "Bhakta Youth Retreat",            place: "New Braj Dham, Badger CA",           time: "Weekend",           tag: "Retreat" },
    { d: "21", m: "Jul", title: "Guru Purnima Celebration",        place: "Sri Radhe Kunj, Vrindavan",          time: "All Day",           tag: "Festival" },
    { d: "03", m: "Aug", title: "Janmashtami Mahotsava",           place: "Multiple Centers Worldwide",         time: "Evening Programme", tag: "Festival" },
    { d: "16", m: "Aug", title: "Bhakti Study Weekend",            place: "Bhakta Bandhav, Upstate New York",   time: "Weekend",           tag: "Study" },
  ],

  posts: [
    {
      tag: "Hari-kathā",
      title: "The Sweetness of Service",
      excerpt: "On how loving service to the Divine purifies the heart and awakens our eternal relationship with Sri Radha-Krishna.",
      tint: "rose",
      image: "https://images.unsplash.com/photo-1601824096525-954268b9eb72?auto=format&fit=crop&w=800&q=80",
    },
    {
      tag: "Teachings",
      title: "Watering the Root of the Tree",
      excerpt: "Bhakti is described as nourishing every living being — like watering the roots of the tree of all existence.",
      tint: "mint",
      image: "https://images.unsplash.com/photo-1685085510913-89f1c78861d8?auto=format&fit=crop&w=800&q=80",
    },
    {
      tag: "Pilgrimage",
      title: "A Day in Sri Radhe Kunj",
      excerpt: "Glimpses of daily life at our Vrindavan headquarters, where over 100 students study, serve, and chant together.",
      tint: "gold",
      image: "https://images.unsplash.com/photo-1662376107358-21296a9234f1?auto=format&fit=crop&w=800&q=80",
    },
    {
      tag: "Practice",
      title: "Beginning Japa Meditation",
      excerpt: "A gentle guide to the practice of chanting on beads — how to start, how to sustain, and what to expect on the journey inward.",
      tint: "lavender",
      image: "https://images.unsplash.com/photo-1648577773985-aaf649a0d43f?auto=format&fit=crop&w=800&q=80",
    },
    {
      tag: "Lineage",
      title: "The Legacy of Srila Narayana Gosvami",
      excerpt: "A reflection on how Bhakta Bandhav Srila Gurudeva spread the path of pure love across the world in just 32 years of traveling.",
      tint: "peach",
      image: "https://images.unsplash.com/photo-1598090216740-eb040d8c3f82?auto=format&fit=crop&w=800&q=80",
    },
    {
      tag: "Centers",
      title: "A Visit to New Braj Dham",
      excerpt: "New Braj Dham in Badger, California is a sanctuary of devotion nestled in the hills — a place where community and practice meet.",
      tint: "blossom",
      image: "https://images.unsplash.com/photo-1706186839147-0d708602587b?auto=format&fit=crop&w=800&q=80",
    },
  ],
};
