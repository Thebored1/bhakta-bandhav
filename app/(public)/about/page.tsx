import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "About — Bhakta Bandhav",
  description: "Who we are, our values and mission, and what we are here to do in the world.",
  alternates: { canonical: "https://bhakta.org/about" },
  openGraph: {
    title: "About — Bhakta Bandhav",
    description: "Who we are, our values and mission, and what we are here to do in the world.",
    url: "https://bhakta.org/about",
    siteName: "Bhakta Bandhav",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Bhakta Bandhav",
    description: "Who we are, our values and mission, and what we are here to do in the world.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title="A family devoted to the path of pure love."
        subtitle="We are devotees from around the world, connected to the unbroken lineage of Lord Chaitanya through Srila B.V. Narayana Gosvami and Srila B.V. Swami Prabhupada."
        tint="blossom"
      />

      {/* Who Are We */}
      <section className="section about-page-section" id="who-are-we">
        <div className="wrap">
          <div className="about-section-inner">
            <div className="about-section-aside reveal">
              <span className="eyebrow">Who Are We?</span>
              <h2>Our lineage &amp; spiritual family.</h2>
            </div>
            <div className="prose">
              <p className="reveal">
                We are a spiritual family of devotees from around the world, who are followers of
                Lord Chaitanya, the savior of this age and combined incarnation of Sri Radha-Krishna.
                We are connected to Lord Chaitanya's unbroken lineage by the modern saints Srila B.V.
                Narayana Gosvami and Srila B.V. Swami Prabhupada.
              </p>
              <p className="reveal d1">
                Lord Chaitanya is the most magnanimous incarnation. He welcomed everyone without
                discrimination, embracing the most fallen and the righteous with equal compassion and
                love. He taught us to see beyond bodily differences, into the pure nature of the soul
                as part and parcel of the Supreme, eternally one and different, with our highest goal
                of life being the awakening of divine love of the Sweet Absolute, Sri Radha-Krishna.
                He showed through His own example how everyone can awaken ecstatic love of God, by
                chanting the Holy Names of Sri Radha-Krishna, under the shelter of advanced devotees
                who are themselves immersed in pure love.
              </p>
              <p className="reveal d1">
                Srila Swami Prabhupada fulfilled the prophecy of Lord Chaitanya that the holy names
                of Sri Radha-Krishna would be distributed throughout the whole world. Srila Narayana
                Gosvami followed in the footsteps of Srila Swami Prabhupada, fulfilling the Lord's
                desire to spread the path of spontaneous love of God throughout the world.
              </p>
              <p className="reveal d2">
                In twelve short years, from 1965–1977, Srila Swami Prabhupada created a worldwide
                Bhakti movement with over 100 ISKCON centers. He wrote and published over 80 volumes
                of spiritual literature, distributed in the tens of millions. Since his departure,
                through his spiritual presence, he has continued to inspire his followers to spread
                the mission of Lord Chaitanya, and now there are close to 1000 centers.
              </p>
              <p className="reveal d2">
                In 1947, Srila B.V. Narayana Gosvami was honored by his Guru with the title Bhakta
                Bandhav, or dearmost friend of the devotees. He was a siksa disciple and bosom friend
                of Srila Swami Prabhupada. Swami Prabhupada entrusted him with performing his sacred
                Samadhi ceremony and asked him to guide his disciples after his departure. From 1996
                to 2010, Srila Narayana Gosvami Maharaja travelled the world sharing the teachings of
                pure bhakti and awakening divine love in the hearts of devotees everywhere he went.
                In 2003, he was glorified by the Vrajacarya Pith and the World Religious Parliament
                with the title: Yuga Acarya – preceptor of the age.
              </p>
              <p className="reveal d2">
                In present times, our Bhakta Bandhav Parivar, or Family of Lord Chaitanya, is being
                guided by the spiritual successor of Srila BV Narayana Gosvami Maharaja, Srila
                Sevaratna Premananda Prabhuji, a Vaisnava of the highest caliber, who has served our
                Guru-varga, building and maintaining their temples and caring for all the devotees for
                over 50 years. Under his guidance, Bhakta Bandhav Ashrams, Temples, and communities
                are developing around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values & Mission */}
      <section className="section about-page-section" id="values">
        <div className="wrap">
          <div className="about-section-inner">
            <div className="about-section-aside reveal">
              <span className="eyebrow">Our Values</span>
              <h2>The spirit of Sanatana Dharma.</h2>
            </div>
            <div className="prose">
              <p className="reveal">
                Our Gurus emphasize the spirit of Sanatana Dharma enshrined in the aphorisms:
                <em> Vasudhaiva kutumbakam</em> — the world is one family; and
                <em> Lokah samastah sukhino bhavantu</em> — may all beings in the world be happy.
              </p>
              <p className="reveal d1">
                Lord Chaitanya taught that real happiness or Ananda is awakened when we realize our
                relationship of pure love with the Supreme, Sri Radha-Krishna, and that this is the
                fifth and highest goal of humanity — pancama-purusartha krishna-prema.
              </p>
              <div className="pull reveal d1">
                dharmo raksati raksitah — dharma protects its&rsquo; protectors.
              </div>
              <p className="reveal d2">
                To work towards this goal, it is our sacred duty given by our Gurus to uphold and
                preserve the spiritual science, teachings, and practice of Sanatana Dharma and pure
                Bhakti-yoga. Dharma means to support or uphold and to maintain balance and harmony in
                existence. Our Guru-varga encourage us to serve together in a spirit of harmony to
                uplift society and create a platform for developing pure love of God.
              </p>
              <p className="reveal d2">
                Anyone who is interested in joining or being part of this spiritual family is most
                welcome. We have a membership online, and from there, we will connect you to
                servant-leaders who can guide you in further development and loving service.
              </p>
              <div className="about-foot reveal d2">
                <a className="btn btn-primary" href="/faqs">
                  Read our FAQs <span className="arr"><Icon name="arrow" size={16} /></span>
                </a>
                <a className="textlink" href="/#join">
                  Get Involved <Icon name="arrow" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Our Mission */}
      <section className="section about-page-section" id="mission">
        <div className="wrap">
          <div className="about-section-inner">
            <div className="about-section-aside reveal">
              <span className="eyebrow">Our Mission</span>
              <h2>Krishna Prema Seva in the world.</h2>
            </div>
            <div className="prose">
              <p className="reveal">
                We are here to practice and propagate this message of love of God and service,
                Krishna Prema Seva, throughout the world. Where many religious groups are fighting
                over sectarian principles because of differences of external culture, and bodily or
                societal dharmas, our focus is serving the universal dharma of the soul.
              </p>
              <p className="reveal d1">
                For this, we publish books, produce media and focus on helping people practice
                Sanatana Dharma in their homes. We also focus on training the youth to be the
                spiritual servant leaders of tomorrow.
              </p>
              <p className="reveal d1">
                Wherever enough families work together in uplifting their communities and societies,
                then they will also naturally build temples and ashrams for the continuation and
                propagation of Sanatana Dharma.
              </p>
              <div className="about-foot reveal d2" style={{ marginTop: 32 }}>
                <a className="btn btn-primary" href="/centers">
                  Our centers <span className="arr"><Icon name="arrow" size={16} /></span>
                </a>
                <a className="btn btn-accent" href="/books">
                  Our publications
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
