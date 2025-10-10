import { groq } from "next-sanity";
import { client } from "@/sanity.client";
import Image from "next/image";

// ✅ Generate Static Slugs for Netlify build (SSG)
export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(groq`
    *[_type == "procedure" && defined(slug.current)][].slug.current
  `);
  return slugs.map((slug) => ({ slug }));
}

// ✅ Sanity GROQ Query
const procedureQuery = groq`
  *[_type == "procedure" && slug.current == $slug][0]{
    title,
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
    faqs[] {
      question,
      answer
    },
    seo {
      metaTitle,
      metaDescription,
      keywords
    },
    image {
      asset->{
        url
      }
    }
  }
`;

// ✅ Type-safe page props
type ProcedureProps = {
  params: Promise<{ slug: string }>;
};

// ✅ Main Component
export default async function ProcedurePage({ params }: ProcedureProps) {
  const { slug } = await params; // ✅ Await params to fix Netlify build type issue

  const procedure = await client.fetch(procedureQuery, { slug });

  if (!procedure) {
    return (
      <div className="text-center py-24 text-gray-600">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">
          Procedure Not Found
        </h2>
        <p>The requested procedure was not found or has been removed.</p>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-blue-500 via-purple-500 to-blue-100 py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-16">
        {/* 🟣 Header Section */}
        <div className="text-center space-x-4 px-6">
          <h1
  className="text-4xl sm:text-5xl md:text-6xl font-extrabold 
             text-white text-center leading-tight tracking-tight 
             inline-block overflow-visible pb-[4px]"
>
  {procedure.title}
</h1>
          {procedure.department && (
            <p className="text-lg text-blue-800 font-semibold">
              Department: {procedure.department}
            </p>
          )}
          {procedure.description && (
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              {procedure.description}
            </p>
          )}
        </div>

        {/* 🖼️ Image */}
{procedure.image?.asset?.url && (
  <div className="flex justify-center">
    <div className="relative w-full sm:w-2/3 h-[400px] bg-white rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
      <Image
        src={procedure.image.asset.url}
        alt={procedure.title}
        fill
        className="object-contain p-2"
      />
    </div>
  </div>
)}


        {/* 📘 All Details */}
        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-50 rounded-3xl shadow-xl p-10 space-y-8 text-gray-800">
          {procedure.content && (
            <div>
              <h2 className="text-3xl font-bold text-purple-800 mb-3">
                Detailed Overview
              </h2>
              <p className="leading-relaxed whitespace-pre-line">
                {procedure.content}
              </p>
            </div>
          )}

          {procedure.benefits && (
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                Benefits
              </h3>
              <p>{procedure.benefits}</p>
            </div>
          )}

          {procedure.preparation && (
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                Preparation
              </h3>
              <p>{procedure.preparation}</p>
            </div>
          )}

          {procedure.recovery && (
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                Recovery
              </h3>
              <p>{procedure.recovery}</p>
            </div>
          )}

          {procedure.duration && (
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                Duration
              </h3>
              <p>{procedure.duration}</p>
            </div>
          )}

          {procedure.anesthesia && (
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                Anesthesia
              </h3>
              <p>{procedure.anesthesia}</p>
            </div>
          )}

          {procedure.indications && procedure.indications.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                Indications
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {procedure.indications.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {procedure.risks && procedure.risks.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold text-red-700 mb-2">
                Risks
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {procedure.risks.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {procedure.faqs && procedure.faqs.length > 0 && (
            <div>
              <h3 className="text-3xl font-bold text-purple-800 mb-4">FAQs</h3>
              <div className="space-y-6">
                {procedure.faqs.map(
                  (faq: { question: string; answer: string }, i: number) => (
                    <div key={i} className="bg-white rounded-xl shadow-md p-6">
                      <h4 className="text-xl font-semibold text-blue-700">
                        {faq.question}
                      </h4>
                      <p className="text-gray-700 mt-2">{faq.answer}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        {procedure.seo?.metaTitle && (
          <div className="text-sm text-center text-gray-500">
            <p>SEO Title: {procedure.seo.metaTitle}</p>
            <p>Description: {procedure.seo.metaDescription}</p>
          </div>
        )}
      </div>
    </section>
  );
}
