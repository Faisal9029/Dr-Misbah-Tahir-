import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book an appointment with Dr. Muhammad Misbah Tahir at National Medical Centre (NMC), Karachi. OPD: Mon, Tue, Fri, Sat — 6 PM to 8 PM.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
