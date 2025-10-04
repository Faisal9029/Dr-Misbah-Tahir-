// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import { client } from "@/sanity.client"; // tumhara Sanity client
import { groq } from "next-sanity";

type Props = {
  params: { slug: string };
};

// Metadata fetch
export async function generateMetadata({ params }: Props) {
  const procedure = await client.fetch(
    groq`*[_type=="procedure" && slug.current==$slug][0]`,
    { slug: params.slug }
  );

  if (!procedure) return { title: "Procedure Not Found" };

  return {
    title: `${procedure.title} | Interventional Radiology`,
    description: procedure.description || "",
  };
}

// Page component
export default async function ProcedurePage({ params }: Props) {
  const procedure = await client.fetch(
    groq`*[_type=="procedure" && slug.current==$slug][0]`,
    { slug: params.slug }
  );

  if (!procedure) return notFound();

  return (
    <section className="relative py-20 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">{procedure.title}</h1>

        <p className="text-blue-400 font-medium mb-4">
          Department: {procedure.department}
        </p>

        <p className="text-lg leading-relaxed">{procedure.description}</p>

        {procedure.faqs && procedure.faqs.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <ul className="space-y-4">
              {procedure.faqs.map((faq: any, i: number) => (
                <li key={i} className="bg-gray-800 p-4 rounded-lg">
                  <p className="font-bold text-white">{faq.question}</p>
                  <p className="text-gray-300">{faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
