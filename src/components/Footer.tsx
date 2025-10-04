"use client";

import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const whatsappNumber = "923003455626";

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Assalamualaikum, I would like to book an appointment with Dr. Misbah Tahir.")}`}
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>

      {/* Footer */}
      <footer className="relative z-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-16">
        <div className="container mx-auto px-6 py-10 text-center">
          <h2 className="text-2xl font-bold">Dr. Muhammad Misbah Tahir</h2>
          <p className="mt-2 text-sm opacity-90">Compassion • Expertise • Trust</p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-6 text-2xl">
            <a
              href="https://youtube.com/@misbahtahir-u1k?si=aHocmnlMtrECcGu5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition inline-flex text-red-600"
            >
              <FaYoutube />
            </a>

            {/* TikTok Image Icon */}
            <a
              href="https://www.tiktok.com/@dr.mmisbahtahir?_t=ZS-8zzv0Zf01YN&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition inline-flex"
            >
              <img src="/tiktok-icon.png" alt="TikTok" className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition inline-flex text-blue-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition inline-flex text-pink-500"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition inline-flex text-blue-600"
            >
              <FaFacebook />
            </a>
          </div>

          <p className="mt-6 text-sm opacity-75">
            © {new Date().getFullYear()} Dr. Misbah Tahir. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
