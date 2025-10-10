"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity.client";
import Image from "next/image";
import { groq } from "next-sanity";

const procedureQuery = groq`
  *[_type == "procedure" && slug.current == $slug][0]{
    title,
    shortDescription,
    content,
    image {
      asset->{
        url
      }
    }
  }
`;

export default function ProcedureContent({ slug }: { slug: string }) {
  const [procedure, setProcedure] = useState<any>(null);

  useEffect(() => {
    if (!slug) return;
    client.fetch(procedureQuery, { slug }).then(setProcedure);
  }, [slug]);

  // 🟦 Loading State
  if (!procedure) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="animate-pulse text-blue-500 text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-12 text-gray-700">
      {/* 🟣 Title */}
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
        {procedure.title || "Untitled Procedure"}
      </h1>

      {/* 🖼️ Image Centered */}
      {procedure.image?.asset?.url && (
        <div className="flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl w-full sm:w-2/3">
            <Image
              src={procedure.image.asset.url}
              alt={procedure.title || "Procedure Image"}
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}

      {/* 📝 Short Description */}
      {procedure.shortDescription && (
        <p className="text-lg leading-relaxed text-center text-gray-800">
          {procedure.shortDescription}
        </p>
      )}

      {/* 📘 Main Content */}
      {procedure.content && (
        <div className="bg-gradient-to-r from-blue-200 via-purple-200 to-blue-100 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Detailed Information</h2>
          <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
            {procedure.content}
          </p>
        </div>
      )}
    </div>
  );
}
