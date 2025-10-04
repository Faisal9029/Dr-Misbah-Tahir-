"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "src/sanity/lib/sanity.client";
import Link from "next/link"; 
import { urlFor } from "src/sanity.image";

interface Blog {
  _id: string;
  title: string;
  posterImage?: any;
}

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data: Blog[] = await client.fetch(
          `*[_type == "blog"] | order(_createdAt desc)[0...6]{
            _id, title, posterImage
          }`
        );
        setBlogs(data);
      } catch (error) {
        console.error("❌ Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <p className="text-purple-400 font-medium tracking-wide uppercase mb-3">
          Read • Learn • Discover
        </p>
        <h2 className="text-4xl font-bold mb-6">
          Latest Interventional Radiology Blogs
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-12">
          Explore insights, innovations, and educational articles in
          Interventional Radiology authored by Dr. Muhammad Misbah Tahir.
        </p>

        {/* ✅ Blog Cards Grid (1 row = 2 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
          {loading
            ? [...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="h-72 rounded-2xl bg-white/10 animate-pulse"
                />
              ))
            : blogs.slice(0, 2).map((blog) => (
                <div
                  key={blog._id}
                  onClick={() =>
                    setSelectedImage(urlFor(blog.posterImage).url())
                  }
                  className="cursor-pointer group relative p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg
                  hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-purple-700
                  hover:shadow-lg hover:shadow-purple-400/30
                  transition-all duration-300 transform hover:-translate-y-2"
                >
                  {blog?.posterImage && (
                    <div className="aspect-[4/3] mb-4 overflow-hidden rounded-xl">
                      <Image
                        src={urlFor(blog.posterImage).url()}
                        alt={blog.title}
                        width={600}
                        height={400}
                        className="w-full h-full rounded-xl object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <h4 className="font-semibold text-lg mb-1 group-hover:text-white">
                    {blog.title}
                  </h4>
                </div>
              ))}
        </div>

        {/* ✅ View More Button */}
        <div className="flex justify-center">
          <Link
            href="/blog"
            className="relative inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/40 overflow-hidden group transition"
          >
            <span className="relative z-10">View More Blogs</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out"></span>
          </Link>
        </div>
      </div>

      {/* ✅ Modal for Zoomed Image (height controlled) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <Image
              src={selectedImage}
              alt="Zoomed Blog"
              width={1200}
              height={800}
              className="max-h-[80vh] w-[80vw] mx-auto rounded-xl object-contain"
            />
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-black/60 text-white rounded-full px-3 py-1 hover:bg-black transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
