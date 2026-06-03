import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Marcellus,
  Mukta,
} from "next/font/google";
import "react-quill-new/dist/quill.snow.css";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mukta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhakta.org"),
  title: "Bhakta Bandhav · Serve Love — A Spiritual Family of Pure Bhakti",
  description:
    "A worldwide spiritual family of devotees in the line of Lord Chaitanya, sharing the path of pure Bhakti and the teachings of Srila B.V. Narayana Gosvami.",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-palette="peach"
      className={`${cormorant.variable} ${marcellus.variable} ${mukta.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bhakta Bandhav",
              url: "https://bhakta.org",
              contactPoint: {
                "@type": "ContactPoint",
                email: "bhaktabandhav@gmail.com",
                contactType: "customer service",
              },
              sameAs: ["https://www.instagram.com/bhakta.bandhav"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
