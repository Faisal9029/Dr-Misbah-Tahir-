"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/src/sanity/lib/sanity.client";

export default function LatestVideos() {
  const [homeVideos, setHomeVideos] = useState<any[]>([]);

  // Robust YouTube ID extraction for normal and short URLs
  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await client.fetch(
        `*[_type == "video"] | order(_createdAt desc)[0...3]{  // Only 3 latest videos
          _id, title, youtubeUrl, department
        }`
      );
      setHomeVideos(data);
    };
    fetchVideos();
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <p className="text-blue-400 font-medium tracking-wide uppercase mb-3">
          Learn • Heal • Advance
        </p>
        <h2 className="text-4xl font-bold mb-6">
          Latest Interventional Radiology Videos
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-12">
          Explore cutting-edge interventional radiology techniques, procedures, and insights 
          shared by Dr. Muhammad Misbah Tahir.
        </p>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {homeVideos.length === 0 ? (
            <p className="text-white/50">Loading videos...</p>
          ) : (
            homeVideos.map((video) => {
              const videoId = getYouTubeId(video.youtubeUrl);
              if (!videoId) return null;

              return (
                <div
                  key={video._id}
                  aria-label={`Video card: ${video.title}`}
                  className="group relative p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg
                  hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-blue-700
                  hover:shadow-lg hover:shadow-blue-400/30
                  transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                >
                  <div className="aspect-video mb-4 overflow-hidden rounded-xl">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={video.title}
                      allowFullScreen
                      loading="lazy"
                      className="rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-1 transition-colors duration-300 group-hover:text-white">
                    {video.title}
                  </h4>
                  {video.department && (
                    <p className="text-sm italic text-white/60 transition-colors duration-300 group-hover:text-white/80">
                      {video.department}
                    </p>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <Link
            href="/videos"
            className="relative inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 
            text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/40 
            overflow-hidden group transition"
          >
            <span className="relative z-10">View More Videos</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
              translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
