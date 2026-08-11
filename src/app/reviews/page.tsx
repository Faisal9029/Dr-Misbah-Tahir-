import type { Metadata } from "next";
import ReviewsContent from "./ReviewsContent";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read what patients say about their experience with Dr. Muhammad Misbah Tahir at National Medical Centre (NMC), Karachi.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return <ReviewsContent />;
}
