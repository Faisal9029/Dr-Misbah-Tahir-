"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/src/sanity/lib/sanity.client";
import { urlFor } from "@/sanity.image";

export default function BlogPosters() {
  const [posts, setPosts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "blog"] | order(_createdAt desc){
        title,
        posterImage
      }`;
      const data = await client.fetch(query);
      setPosts(data);
    };
    fetchData();
  }, []);

  // Filter posts by title
  const filteredPosts = posts.filter(
    (p) => p.title && p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Search Bar */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <input
          type="text"
          placeholder="Search posters..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto p-4">
        {filteredPosts.map((post, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden bg-white cursor-pointer group border transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-blue-700"
            onClick={() => setModalImage(urlFor(post.posterImage).url())}
          >
            {post?.posterImage && (
              <div
                className="w-full relative"
                style={{ aspectRatio: "1 / 1.414" }} // A4 ratio
              >
                <Image
                  src={urlFor(post.posterImage).url()}
                  alt={post.title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
            {/* Title Below Image */}
            <h2 className="text-center text-lg font-bold mt-2 mb-4 p-2 bg-black/30 text-white rounded">
              {post.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setModalImage(null)}
        >
          <div className="relative w-full max-w-[800px] max-h-[90vh]">
            <Image
              src={modalImage}
              alt="Full Poster"
              width={500}
              height={500}
              className="object-contain rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={() => setModalImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
