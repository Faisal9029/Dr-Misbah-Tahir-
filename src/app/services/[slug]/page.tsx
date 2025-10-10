import Image from "next/image";
import { client } from "@/sanity.client";
import { groq } from "next-sanity";
import ProcedureContent from "@/components/ProcedureContent";
import { notFound } from "next/navigation";

const procedureQuery = groq`
  *[_type=="procedure" && slug.current==$slug][0]{
    _id,
    title,
    slug,
    department,
    description,
    content,
    benefits,
    preparation,
    recovery,
    duration,
    anesthesia,
    indications,
    risks,
    faqs,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }
`;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = await client.fetch(procedureQuery, { slug: params.slug });
  if (!data) return { title: "Procedure Not Found" };

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function ProcedurePage({ params }: { params: { slug: string } }) {
  const procedure = await client.fetch(procedureQuery, { slug: params.slug });

  if (!procedure) return notFound();

  return (
    <section className="bg-gradient-to-b from-blue-50 via-purple-50 to-blue-100 py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-purple-800 mb-4">
            {procedure.title}
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
            {procedure.description}
          </p>

          {/* Center Image */}
          {procedure.imageUrl && (
            <div className="relative w-full max-w-3xl h-[400px] mx-auto mt-8 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={procedure.imageUrl}
                alt={procedure.imageAlt || procedure.title}
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Content */}
        <ProcedureContent procedure={procedure} />
      </div>
    </section>
  );
}
