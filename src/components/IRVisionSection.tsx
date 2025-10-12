"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function IRVisionSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 py-20">
      {/* 🔹 Subtle pattern background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#ffffff33_1px,transparent_0)] bg-[length:20px_20px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* 🩻 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
        >
          Vision & Expertise in Interventional Radiology
        </motion.h2>

        {/* ✍️ Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          Skilled to perform more than{" "}
          <span className="text-blue-300 font-semibold">
            300 different Interventional Radiology procedures
          </span>{" "}
          from head to toe. Our vision is to introduce{" "}
          <span className="text-purple-300 font-semibold">
            innovative and minimally invasive techniques
          </span>{" "}
          that ensure patient safety and drive healthcare advancement.
        </motion.p>

        {/* 🔘 Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10"
        >
          <Link
            href="/services"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
