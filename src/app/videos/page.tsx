"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity.client";

export default function VideosPage() {
  const [videos, setVideos] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await client.fetch(
        `*[_type == "video"]{ _id, title, youtubeUrl }`
      );
      setVideos(data);
    };
    fetchVideos();
  }, []);

  // ✅ Safe filter without department
  const filteredVideos = videos.filter(
    (v) => (v.title?.toLowerCase() || "").includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">All Interventional Radiology Videos</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search videos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-8 px-4 py-2 rounded-lg border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredVideos.map((video) => {
          const videoId = video.youtubeUrl?.split("v=")[1];
          return (
            <div
              key={video._id}
              className="group relative p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg
              hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-blue-700
              hover:shadow-lg hover:shadow-blue-400/30
              transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-video mb-4 overflow-hidden rounded-xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={video.title || "Video"}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-semibold text-lg mb-1 transition-colors duration-300 group-hover:text-white">
                {video.title || "Untitled"}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
