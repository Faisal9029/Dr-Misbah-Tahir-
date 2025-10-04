"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStethoscope, FaHeartbeat, FaUserMd } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-700 to-purple-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Doctor Image with Glow Card */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80 rounded-3xl p-[3px] bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="w-full h-full bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/3.jpg"
                alt="Dr. Muhammad Misbah Tahir"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Meet Dr. Muhammad Misbah Tahir
          </h2>

          {/* New bilingual description */}
          <p className="leading-relaxed mb-4 text-gray-200">
            Dr. Muhammad Misbah Tahir is an experienced Interventional Radiologist who
            performs modern, minimally invasive procedures — often <strong>without cutting</strong>
            and <strong>with minimal pain</strong>, using fine needles and catheters to treat
            vascular and non-vascular conditions.
          </p>

          <p className="leading-relaxed mb-6 text-gray-200">
             بغیر تکلیف، بغیر کٹ کے اور چھوٹی سوئی/فائن کیتھیٹر کے ذریعے جدید طریقۂ علاج کرتے ہیں، تاکہ مریض کو تیز بحالی اور کم تکلیف ملے۔
          </p>

          {/* Highlights with stagger effect */}
          <motion.div
            className="grid sm:grid-cols-3 gap-6 mb-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              {
                icon: <FaUserMd className="text-3xl text-blue-300 mb-2" />,
                label: "Qualified Doctor",
              },
              {
                icon: <FaStethoscope className="text-3xl text-purple-300 mb-2" />,
                label: "Expert Care",
              },
              {
                icon: <FaHeartbeat className="text-3xl text-pink-400 mb-2" />,
                label: "Patient First",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-md"
              >
                {item.icon}
                <p className="font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Book Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
