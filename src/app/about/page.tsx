import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dr. Muhammad Misbah Tahir — Associate Professor of Radiology & Imaging at Liaquat National Hospital & Medical College, with 15+ years of expertise in Interventional Radiology.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
