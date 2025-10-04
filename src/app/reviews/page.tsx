"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { client } from "@/sanity.client";

type Review = {
  _id: string;
  name: string;
  content?: string;
  media?: {
    asset: {
      url: string;
      mimeType: string;
    };
  };
};

export default function ReviewsGrid() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data: Review[] = await client.fetch(
          `*[_type == "review"] | order(_createdAt desc){
            _id,
            name,
            content,
            media{
              asset->{
                url,
                mimeType
              }
            }
          }`
        );
        setReviews(data);
      } catch (error) {
        console.error("❌ Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="relative py-20 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Patient Reviews</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{review.name}</h3>

              {review.content && (
                <p className="text-white/90 mb-4">{review.content}</p>
              )}

              {/* ✅ Media Render */}
              {review.media && review.media.asset.mimeType.startsWith("image/") && (
                <Image
                  src={review.media.asset.url}
                  alt={review.name}
                  width={240}
                  height={240}
                  className="rounded-lg mx-auto"
                />
              )}

              {review.media && review.media.asset.mimeType.startsWith("video/") && (
                <video
                  controls
                  className="mx-auto mt-4 rounded-lg"
                  width={240}
                  height={240}
                >
                  <source src={review.media.asset.url} type={review.media.asset.mimeType} />
                  Your browser does not support the video tag.
                </video>
              )}

              {review.media && review.media.asset.mimeType.startsWith("audio/") && (
                <audio controls className="mx-auto mt-4">
                  <source src={review.media.asset.url} type={review.media.asset.mimeType} />
                  Your browser does not support the audio element.
                </audio>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
