import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore 300+ Interventional Radiology procedures offered by Dr. Muhammad Misbah Tahir — vascular, oncological, and non-vascular interventions.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
