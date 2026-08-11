"use client";

import Image from "next/image";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import { DOCTOR_NAME, SOCIAL_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative z-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-16">
      <div className="container mx-auto px-6 py-10 text-center">
        <h2 className="text-2xl font-bold">{DOCTOR_NAME}</h2>
        <p className="mt-2 text-sm opacity-90">Compassion • Expertise • Trust</p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-6 text-2xl">
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dr. Misbah Tahir on YouTube"
            className="hover:scale-110 transition inline-flex text-red-600"
          >
            <FaYoutube />
          </a>

          {/* TikTok Image Icon */}
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dr. Misbah Tahir on TikTok"
            className="hover:scale-110 transition inline-flex"
          >
            <Image
              src="/tiktok-icon.png"
              alt="TikTok"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dr. Misbah Tahir on LinkedIn"
            className="hover:scale-110 transition inline-flex text-blue-400"
          >
            <FaLinkedin />
          </a>

          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dr. Misbah Tahir on Instagram"
            className="hover:scale-110 transition inline-flex text-pink-500"
          >
            <FaInstagram />
          </a>

          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dr. Misbah Tahir on Facebook"
            className="hover:scale-110 transition inline-flex text-blue-600"
          >
            <FaFacebook />
          </a>
        </div>

        <p className="mt-6 text-sm opacity-75">
          © {new Date().getFullYear()} {DOCTOR_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
