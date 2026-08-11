"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  CLINIC,
  CONTACT_EMAIL,
  WHATSAPP_NUMBERS,
  PRIMARY_WHATSAPP_NUMBER,
  whatsappLink,
} from "@/lib/site";

function formatNumber(num: string) {
  return `+${num.slice(0, 2)} ${num.slice(2, 5)} ${num.slice(5)}`;
}

export default function ContactContent() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    "Assalamualaikum, I would like to book an appointment with Dr. Misbah Tahir."
  );
  const [sending, setSending] = useState(false);

  const messageTemplate = (nameVal: string, phoneVal: string, msgVal: string) =>
    `Assalamualaikum,
Name: ${nameVal || "—"}
Contact: ${phoneVal || "—"}
Message: ${msgVal}
Please schedule during OPD timings: ${CLINIC.opdTimings}.
Thank you.`;

  // Opens a single WhatsApp chat (primary number) with the filled-in message.
  // Opening multiple tabs at once gets blocked by browser popup blockers, so
  // we only trigger one reliable window.open() directly from the click handler.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name before sending.");
      return;
    }

    setSending(true);
    const msg = messageTemplate(name, phone, message);
    window.open(whatsappLink(PRIMARY_WHATSAPP_NUMBER, msg), "_blank", "noopener,noreferrer");
    setSending(false);
  };

  return (
    <section className="min-h-screen bg-transparent px-4 py-20 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        {/* 🔹 Appointment Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-8 w-full md:w-1/2 space-y-4 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-center text-blue-400 mb-6">
            Book Appointment with Dr. Misbah Tahir
          </h2>

          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border p-2 border-white/30 bg-white/10 text-white placeholder-white focus:outline-none focus:border-blue-400 focus:ring-blue-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium">
              Phone (optional)
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full rounded-md border p-2 border-white/30 bg-white/10 text-white placeholder-white focus:outline-none focus:border-blue-400 focus:ring-blue-400"
              placeholder="0300XXXXXXX"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full rounded-md border p-2 border-white/30 bg-white/10 text-white placeholder-white focus:outline-none focus:border-blue-400 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className={`w-full py-2 rounded-md shadow-md text-white transition ${
              sending
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {sending ? "Sending..." : "Send Appointment via WhatsApp"}
          </button>
        </form>

        {/* 🔹 Contact Info + Map */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">{CLINIC.name}</h2>

          {/* Address & OPD Timing */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-400 mt-1" />
              <div>
                <h3 className="font-semibold text-white">{CLINIC.name}</h3>
                <p>{CLINIC.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-blue-400 mt-1" />
              <div>
                <p className="font-semibold">OPD Timings:</p>
                <p>{CLINIC.opdTimings}</p>
              </div>
            </div>

            {/* Clickable WhatsApp Numbers */}
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-400 mt-1" />
              <div className="space-y-1">
                {WHATSAPP_NUMBERS.map((num) => (
                  <a
                    key={num}
                    href={whatsappLink(num)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition block"
                  >
                    {formatNumber(num)} (WhatsApp)
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-400 mt-1" />
              <div>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-green-400 transition">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Google Map (NMC location only) */}
          <div className="rounded-xl overflow-hidden border border-white/20 shadow-lg">
            <iframe
              src={CLINIC.mapEmbedUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map to ${CLINIC.name}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
