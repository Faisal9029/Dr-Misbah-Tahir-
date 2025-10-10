"use client";

export default function ProcedureContent({ procedure }: { procedure: any }) {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-12 text-gray-700">
      {procedure.content && (
        <div className="bg-gradient-to-r from-blue-200 via-purple-200 to-blue-100 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Detailed Content</h2>
          <p className="text-lg leading-relaxed">{procedure.content}</p>
        </div>
      )}

      {procedure.benefits && (
        <div className="bg-gradient-to-r from-purple-200 via-blue-200 to-purple-100 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Benefits</h2>
          <p className="text-lg leading-relaxed">{procedure.benefits}</p>
        </div>
      )}

      {procedure.preparation && (
        <div className="bg-gradient-to-r from-blue-200 via-purple-200 to-blue-100 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Preparation</h2>
          <p className="text-lg leading-relaxed">{procedure.preparation}</p>
        </div>
      )}

      {procedure.recovery && (
        <div className="bg-gradient-to-r from-purple-200 via-blue-200 to-purple-100 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Recovery</h2>
          <p className="text-lg leading-relaxed">{procedure.recovery}</p>
        </div>
      )}

      {procedure.duration && (
        <div className="bg-gradient-to-r from-purple-200 via-blue-200 to-purple-100 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Duration</h2>
          <p className="text-lg leading-relaxed">{procedure.duration}</p>
        </div>
      )}

      {procedure.anesthesia && (
        <div className="bg-gradient-to-r from-blue-200 via-purple-200 to-blue-100 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Anesthesia</h2>
          <p className="text-lg leading-relaxed">{procedure.anesthesia}</p>
        </div>
      )}

      {procedure.indications?.length > 0 && (
        <div className="bg-gradient-to-r from-purple-200 via-blue-200 to-purple-100 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Indications</h2>
          <ul className="list-disc pl-5 space-y-2">
            {procedure.indications.map((ind: string, idx: number) => (
              <li key={idx}>{ind}</li>
            ))}
          </ul>
        </div>
      )}

      {procedure.risks?.length > 0 && (
        <div className="bg-gradient-to-r from-blue-200 via-purple-200 to-blue-100 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Risks</h2>
          <ul className="list-disc pl-5 space-y-2">
            {procedure.risks.map((risk: string, idx: number) => (
              <li key={idx}>{risk}</li>
            ))}
          </ul>
        </div>
      )}

      {procedure.faqs?.length > 0 && (
        <div className="bg-gradient-to-r from-purple-200 via-blue-200 to-purple-100 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">FAQs</h2>
          <ul className="list-disc pl-5 space-y-2">
            {procedure.faqs.map((faq: any, idx: number) => (
              <li key={idx}>
                <strong>{faq.question}</strong> - {faq.answer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
