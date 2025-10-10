import { client } from "@/sanity.client";
import { groq } from "next-sanity";
import Image from "next/image";

const procedureQuery = groq`
  *[_type == "procedure" && slug.current == $slug][0]{
    title,
    description,
    department,
    content,
    benefits,
    preparation,
    recovery,
    duration,
    anesthesia,
    indications,
    risks,
    faqs[] {
      _key,
      question,
      answer
    },
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }
`;

export default async function ProcedurePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const procedure = await client.fetch(procedureQuery, { slug });

  if (!procedure) {
    return (
      <div className="text-center py-24 text-gray-600">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Procedure Not Found</h2>
        <p>The requested procedure was not found or has been removed.</p>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-blue-50 via-purple-50 to-blue-100 py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-blue-600">
            {procedure.title}
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">{procedure.description}</p>
        </div>

        {/* Image */}
        {procedure.imageUrl && (
          <div className="flex justify-center">
            <div className="relative w-full sm:w-2/3 h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={procedure.imageUrl}
                alt={procedure.imageAlt || procedure.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-50 rounded-3xl shadow-xl p-10 space-y-8 text-gray-800">
          {procedure.content && (
            <div>
              <h2 className="text-3xl font-bold text-purple-800 mb-3">Detailed Overview</h2>
              <p className="leading-relaxed">{procedure.content}</p>
            </div>
          )}

          {procedure.benefits && (
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Benefits</h3>
              <p>{procedure.benefits}</p>
            </div>
          )}

          {procedure.preparation && (
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Preparation</h3>
              <p>{procedure.preparation}</p>
            </div>
          )}

          {procedure.recovery && (
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Recovery</h3>
              <p>{procedure.recovery}</p>
            </div>
          )}

          {procedure.duration && (
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Duration</h3>
              <p>{procedure.duration}</p>
            </div>
          )}

          {procedure.anesthesia && (
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Anesthesia</h3>
              <p>{procedure.anesthesia}</p>
            </div>
          )}

          {procedure.indications && (
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Indications</h3>
              <p>{procedure.indications}</p>
            </div>
          )}

          {procedure.risks && (
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Risks</h3>
              <p>{procedure.risks}</p>
            </div>
          )}

          {/* ✅ FAQ Section Fixed */}
          {procedure.faqs && procedure.faqs.length > 0 && (
            <div>
              <h3 className="text-3xl font-bold text-purple-800 mb-4">FAQs</h3>
              <div className="space-y-6">
                {procedure.faqs.map((faq: any) => (
                  <div key={faq._key} className="bg-white rounded-xl shadow-md p-6">
                    <h4 className="text-xl font-semibold text-blue-700">{faq.question}</h4>
                    <p className="text-gray-700 mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
