import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";

// New modern font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Muhammad Misbah Tahir",
  description: "Official Medical Website of Dr. Misbah Tahir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

        {/* Floating WhatsApp */}
        <FloatingWhatsApp />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
