import { notFound } from "next/navigation";
import { client } from "@/sanity.client";
import { groq } from "next-sanity";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const procedure = await client.fetch(
    groq`*[_type=="procedure" && slug.current==$slug][0]{
      title,
      description,
      department
    }`,
    { slug }
  );

  if (!procedure) return { title: "Procedure Not Found" };

  return {
    title: `${procedure.title} | Interventional Radiology`,
    description: procedure.description || `Learn about ${procedure.title} in ${procedure.department}`,
  };
}

export default async function ProcedurePage({ params }: PageProps) {
  const { slug } = await params;
  
  // ✅ COMPLETE QUERY - Saari fields include karein
  const procedure = await client.fetch(
    groq`*[_type=="procedure" && slug.current==$slug][0]{
      _id,
      title,
      slug,
      department,
      description,
      content,           // Detailed content
      image,            // Procedure image
      benefits,         // Benefits array
      risks,            // Risks array
      preparation,      // Preparation steps
      procedureSteps,   // Procedure steps
      recovery,         // Recovery information
      faqs[] {         // FAQs array
        question,
        answer
      },
      duration,         // Procedure duration
      anesthesia,       // Anesthesia type
      "imageUrl": image.asset->url  // Image URL bhi le aayein
    }`,
    { slug }
  );

  if (!procedure) return notFound();

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-900 to-purple-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ✅ Procedure Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {procedure.title}
          </h1>
          <p className="text-xl text-blue-300 font-medium">
            {procedure.department}
          </p>
        </div>

        {/* ✅ Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* ✅ Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Description */}
            {procedure.description && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">Overview</h2>
                <p className="text-lg leading-relaxed text-white/90">
                  {procedure.description}
                </p>
              </div>
            )}

            {/* Detailed Content */}
            {procedure.content && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">Detailed Information</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/90 leading-relaxed">{procedure.content}</p>
                </div>
              </div>
            )}

            {/* Procedure Steps */}
            {procedure.procedureSteps && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">Procedure Steps</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/90 leading-relaxed">{procedure.procedureSteps}</p>
                </div>
              </div>
            )}

            {/* FAQs */}
            {procedure.faqs && procedure.faqs.length > 0 && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-semibold mb-6 text-blue-300">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {procedure.faqs.map((faq: any, index: number) => (
                    <div key={index} className="border-l-4 border-blue-400 pl-4">
                      <h3 className="font-semibold text-lg text-white mb-2">Q: {faq.question}</h3>
                      <p className="text-white/80">A: {faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ✅ Right Column - Sidebar Information */}
          <div className="space-y-6">
            
            {/* Quick Info Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Quick Facts</h3>
              
              {procedure.duration && (
                <div className="mb-3">
                  <span className="text-white/70">Duration: </span>
                  <span className="text-white">{procedure.duration}</span>
                </div>
              )}
              
              {procedure.anesthesia && (
                <div className="mb-3">
                  <span className="text-white/70">Anesthesia: </span>
                  <span className="text-white">{procedure.anesthesia}</span>
                </div>
              )}
            </div>

            {/* Benefits */}
            {procedure.benefits && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Benefits</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/90">{procedure.benefits}</p>
                </div>
              </div>
            )}

            {/* Preparation */}
            {procedure.preparation && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Preparation</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/90">{procedure.preparation}</p>
                </div>
              </div>
            )}

            {/* Recovery */}
            {procedure.recovery && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Recovery</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/90">{procedure.recovery}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ✅ Empty State - Agar koi content nahi hai */}
        {!procedure.description && !procedure.content && !procedure.faqs?.length && (
          <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-xl text-white/70 mb-4">Content Coming Soon</p>
            <p className="text-white/50">
              Detailed information about {procedure.title} is being prepared.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}