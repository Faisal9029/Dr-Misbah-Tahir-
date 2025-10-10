"use client";

import { useState } from "react";

export default function ProcedureContent({ procedure }: { procedure: any }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-12">
      {/* Detailed Content */}
      {procedure.content && (
        <div className="bg-gradient-to-r from-blue-200 via-purple-200 to-blue-100 rounded-2xl p-6 shadow-xl">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Detailed Overview</h2>
          <p className="text-gray-800 whitespace-pre-line">{procedure.content}</p>
        </div>
      )}

      {/* Benefits / Preparation / Recovery / Duration / Anesthesia */}
      <div className="grid md:grid-cols-2 gap-6">
        {procedure.benefits && (
          <Card title="Benefits" content={procedure.benefits} />
        )}
        {procedure.preparation && (
          <Card title="Preparation" content={procedure.preparation} />
        )}
        {procedure.recovery && (
          <Card title="Recovery" content={procedure.recovery} />
        )}
        {procedure.duration && (
          <Card title="Duration" content={procedure.duration} />
        )}
        {procedure.anesthesia && (
          <Card title="Anesthesia" content={procedure.anesthesia} />
        )}
      </div>

      {/* Indications / Risks */}
      <div className="grid md:grid-cols-2 gap-6">
        {procedure.indications?.length > 0 && (
          <CardList title="Indications" items={procedure.indications} />
        )}
        {procedure.risks?.length > 0 && (
          <CardList title="Risks" items={procedure.risks} />
        )}
      </div>

      {/* FAQs */}
      {procedure.faqs?.length > 0 && (
        <div className="bg-gradient-to-r from-purple-200 via-blue-200 to-purple-100 rounded-2xl p-6 shadow-xl">
          <h3 className="text-2xl font-semibold mb-4 text-purple-700">FAQs</h3>
          <div className="space-y-3">
            {procedure.faqs.map((faq: any, i: number) => (
              <div key={i} className="border-b border-purple-300">
                <button
                  className="w-full text-left py-2 text-gray-800 font-medium flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.question}
                  <span>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <p className="mt-2 text-gray-800">{faq.answer || "Answer not provided."}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Reusable Card Component
function Card({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-purple-200 to-blue-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
      <h3 className="text-xl font-semibold mb-2 text-purple-700">{title}</h3>
      <p className="text-gray-800">{content}</p>
    </div>
  );
}

// Reusable Card List Component
function CardList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-gradient-to-r from-purple-200 via-blue-200 to-purple-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
      <h3 className="text-xl font-semibold mb-2 text-purple-700">{title}</h3>
      <ul className="list-disc list-inside text-gray-800">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
