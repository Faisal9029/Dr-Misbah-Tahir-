import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  DOCTOR_NAME,
  CLINIC,
} from "@/lib/site";

// New modern font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const defaultTitle = `${SITE_NAME} | Interventional Radiologist in Karachi`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Dr Misbah Tahir",
    "Interventional Radiologist Karachi",
    "Interventional Radiology Pakistan",
    "Vascular and Interventional Radiology",
    "Liaquat National Hospital Radiologist",
    "National Medical Centre Karachi",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    images: [{ url: "/about.jpg", width: 1200, height: 630, alt: DOCTOR_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    images: ["/about.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const physicianJsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: DOCTOR_NAME,
    image: `${SITE_URL}/about.jpg`,
    url: SITE_URL,
    medicalSpecialty: "Interventional Radiology",
    address: {
      "@type": "PostalAddress",
      name: CLINIC.name,
      streetAddress: CLINIC.address,
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC.latitude,
      longitude: CLINIC.longitude,
    },
    openingHours: "Mo,Tu,Fr,Sa 18:00-20:00",
  };

  return (
    <html lang="en">
      <head>
        {/* Google AdSense — rendered as a literal <script> tag in the
            server HTML <head> (not via next/script, which only registers a
            client-side loader and never emits this literal tag). Google's
            site-verification crawler does a plain HTML fetch and looks for
            this exact tag, so it must be present in the raw markup. */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6462611446094651"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${poppins.className} relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white`}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/70 to-blue-800/70 z-0"></div>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="pt-24 relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
          {children}
        </main>

        {/* Floating WhatsApp (single instance, site-wide) */}
        <FloatingWhatsApp />

        {/* FAQ Chatbot */}
        <Chatbot />

        {/* Footer */}
        <Footer />

        {/* Structured data for Google (Physician / local business) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
        />
      </body>
    </html>
  );
}
