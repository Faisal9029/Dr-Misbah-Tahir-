import type { Metadata } from "next";
import VideosContent from "./VideosContent";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch Interventional Radiology procedure videos and educational content by Dr. Muhammad Misbah Tahir.",
  alternates: { canonical: "/videos" },
};

export default function VideosPage() {
  return <VideosContent />;
}
