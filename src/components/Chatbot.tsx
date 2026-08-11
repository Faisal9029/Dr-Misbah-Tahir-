"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import {
  CLINIC,
  CONTACT_EMAIL,
  DOCTOR_NAME,
  PRIMARY_WHATSAPP_NUMBER,
  WHATSAPP_NUMBERS,
  whatsappLink,
} from "@/lib/site";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  whatsapp?: boolean;
  servicesLink?: boolean;
};

type FaqEntry = {
  keywords: string[];
  answer: string;
  whatsapp?: boolean;
  servicesLink?: boolean;
};

// Rule-based FAQ knowledge base — no API key / running cost required.
const FAQS: FaqEntry[] = [
  {
    keywords: ["time", "timing", "hour", "opd", "schedule", "open", "close"],
    answer: `OPD timings: ${CLINIC.opdTimings} at ${CLINIC.name}.`,
  },
  {
    keywords: ["address", "location", "where", "clinic", "hospital", "map", "situated"],
    answer: `${CLINIC.name} — ${CLINIC.address}`,
  },
  {
    keywords: ["appointment", "book", "booking", "visit", "slot"],
    answer:
      "Aap seedha WhatsApp par appointment book kar sakte hain — button neeche hai, hum jald confirm kar denge.",
    whatsapp: true,
  },
  {
    keywords: ["service", "procedure", "treatment", "ir", "interventional", "surgery", "operation"],
    answer: `${DOCTOR_NAME} 300+ Interventional Radiology procedures perform karte hain — vascular, oncological aur non-vascular interventions. Poori list Services page par dekhein.`,
    servicesLink: true,
  },
  {
    keywords: ["contact", "number", "phone", "call", "whatsapp"],
    answer: `WhatsApp / Call: ${WHATSAPP_NUMBERS.map((n) => `+${n.slice(0, 2)} ${n.slice(2, 5)} ${n.slice(5)}`).join(", ")}`,
  },
  {
    keywords: ["fee", "cost", "price", "charges", "kitna"],
    answer:
      "Consultation fee OPD ke hisaab se vary kar sakti hai — please WhatsApp ya call par clinic se confirm kar lein.",
    whatsapp: true,
  },
  {
    keywords: ["email", "mail"],
    answer: `Email: ${CONTACT_EMAIL}`,
  },
  {
    keywords: ["hi", "hello", "salam", "assalam", "hey"],
    answer: `Assalamualaikum! Main ${DOCTOR_NAME} ki clinic assistant hoon. Aap OPD timings, location, services ya appointment ke baare mein pooch sakte hain.`,
  },
];

const FALLBACK: FaqEntry = {
  answer:
    "Iska exact jawab abhi mere paas nahi hai — chalein aapko seedha clinic ke WhatsApp se connect kar dete hain.",
  keywords: [],
  whatsapp: true,
};

const QUICK_REPLIES = ["OPD Timings", "Location", "Services", "Book Appointment", "Contact Number"];

function findAnswer(query: string): FaqEntry {
  const q = query.toLowerCase();
  const match = FAQS.find((faq) => faq.keywords.some((k) => q.includes(k)));
  return match ?? FALLBACK;
}

let idCounter = 1;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: idCounter++,
      from: "bot",
      text: `Assalamualaikum! Main ${DOCTOR_NAME} ki clinic assistant hoon. Neeche diye gaye options try karein ya apna sawal type karein.`,
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const respond = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;

    const userMsg: Message = { id: idCounter++, from: "user", text: trimmed };
    const faq = findAnswer(trimmed);
    const botMsg: Message = {
      id: idCounter++,
      from: "bot",
      text: faq.answer,
      whatsapp: faq.whatsapp,
      servicesLink: faq.servicesLink,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    respond(input);
  };

  return (
    <>
      {/* Toggle button — bottom-left so it doesn't collide with the WhatsApp button on the right */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={open}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        {open ? <X size={26} /> : <MessageCircle size={26} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-label="Clinic FAQ chat assistant"
            className="fixed bottom-24 left-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[28rem] flex flex-col rounded-2xl overflow-hidden border border-white/20 bg-slate-900/95 backdrop-blur-lg shadow-2xl"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <p className="font-semibold">Clinic Assistant</p>
              <p className="text-xs opacity-80">Usually replies instantly</p>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-xl px-3 py-2 leading-relaxed ${
                      m.from === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-white/10 text-white rounded-bl-none"
                    }`}
                  >
                    <p>{m.text}</p>
                    {m.whatsapp && (
                      <a
                        href={whatsappLink(PRIMARY_WHATSAPP_NUMBER)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-700 text-white text-xs font-semibold transition"
                      >
                        Chat on WhatsApp
                      </a>
                    )}
                    {m.servicesLink && (
                      <Link
                        href="/services"
                        className="mt-2 inline-block px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold transition"
                      >
                        View Services
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick replies */}
            <div className="px-3 pb-2 flex flex-wrap gap-2">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => respond(q)}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/90 hover:bg-white/10 transition"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-white/10">
              <label htmlFor="chatbot-input" className="sr-only">
                Type your question
              </label>
              <input
                id="chatbot-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Apna sawal type karein..."
                className="flex-1 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
