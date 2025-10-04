"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactNMC() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    "Assalamualaikum, I would like to book an appointment with Dr. Misbah Tahir."
  );
  const [sending, setSending] = useState(false);

  // ✅ Real WhatsApp Numbers
  const whatsappNumbers = ["923158243395", "923082393881", "923003455626"];

  // ✅ Message Template
  const messageTemplate = (nameVal: string, phoneVal: string, msgVal: string) =>
    `Assalamualaikum,
Name: ${nameVal || "—"}
Contact: ${phoneVal || "—"}
Message: ${msgVal}
Please schedule during OPD timings: Mon, Tue, Fri, Sat 6 PM to 8 PM.
Thank you.`;

  // ✅ Send to all 3 WhatsApp numbers automatically
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name before sending.");
      return;
    }

    setSending(true);
    const msg = messageTemplate(name, phone, message);

    whatsappNumbers.forEach((num, i) => {
      setTimeout(() => {
        const url = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank");
        if (i === whatsappNumbers.length - 1) {
          setTimeout(() => setSending(false), 1000);
        }
      }, i * 700);
    });
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
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border p-2 border-white/30 bg-white/10 text-white placeholder-white focus:outline-none focus:border-blue-400 focus:ring-blue-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Phone (optional)
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full rounded-md border p-2 border-white/30 bg-white/10 text-white placeholder-white focus:outline-none focus:border-blue-400 focus:ring-blue-400"
              placeholder="0300XXXXXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
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
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            National Medical Centre (NMC)
          </h2>

          {/* Address & OPD Timing */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-400 mt-1" />
              <div>
                <h3 className="font-semibold text-white">
                  National Medical Centre (NMC)
                </h3>
                <p>
                  A-5/A National Highway, near Kala Pull Road, D.H.A. Phase 1,
                  Karachi, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-blue-400 mt-1" />
              <div>
                <p className="font-semibold">OPD Timings:</p>
                <p>Mon, Tue, Fri, Sat — 6 PM to 8 PM</p>
              </div>
            </div>

            {/* Clickable WhatsApp Numbers */}
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-400 mt-1" />
              <div className="space-y-1">
                <a
                  href={`https://wa.me/923003455626?text=${encodeURIComponent("Assalamualaikum, I would like to book an appointment with Dr. Misbah Tahir.")}`}
                  target="_blank"
                  className="hover:text-green-400 transition block"
                >
                  +92 300 3455626 (WhatsApp)
                </a>
                <a
                  href={`https://wa.me/923158243395?text=${encodeURIComponent("Assalamualaikum, I would like to book an appointment with Dr. Misbah Tahir.")}`}
                  target="_blank"
                  className="hover:text-green-400 transition block"
                >
                  +92 315 8243395 (WhatsApp)
                </a>
                <a
                  href={`https://wa.me/923082393881?text=${encodeURIComponent("Assalamualaikum, I would like to book an appointment with Dr. Misbah Tahir.")}`}
                  target="_blank"
                  className="hover:text-green-400 transition block"
                >
                  +92 308 2393881 (WhatsApp)
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-400 mt-1" />
              <div>
                <p>misbahtahir1975@yahoo.com</p>
              </div>
            </div>
          </div>

          {/* Google Map (Correct NMC location + Directions) */}
          <div className="rounded-xl overflow-hidden border border-white/20 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57925.71556707875!2d67.0568963!3d24.851646199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c2f193bc701%3A0x74df56d087bf03c2!2sNational%20Medical%20Centre%20(NMC)!5e0!3m2!1sen!2s!4v1759585230515!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
