"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/923003455626?text=Hello%20Dr%20Misbah%2C%20I%20would%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 group z-50"
    >
      {/* WhatsApp Button */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1], 
          boxShadow: [
            "0 0 10px rgba(0,255,0,0.6)", 
            "0 0 20px rgba(0,255,0,0.8)", 
            "0 0 10px rgba(0,255,0,0.6)"
          ]
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={28} />
      </motion.div>

      {/* Tooltip */}
      <span className="absolute right-16 bottom-1/2 translate-y-1/2 px-3 py-1 text-sm text-white bg-black/70 rounded-md opacity-0 group-hover:opacity-100 transition">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
