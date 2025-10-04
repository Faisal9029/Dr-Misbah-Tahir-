"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl p-[3px] bg-gradient-to-r from-blue-400 to-purple-500 shadow-xl">
            <Image
              src="/about.jpg"
              alt="Dr. Muhammad Misbah Tahir"
              width={500}
              height={500}
              className="rounded-2xl object-cover"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            About Dr. Muhammad Misbah Tahir
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-200">
            Dr. Muhammad Misbah Tahir is an{" "}
            <b>Associate Professor of Radiology & Imaging at Liaquat National Hospital & Medical College</b>, 
            with an MBBS, MCPS, FCPS, and Fellowship in Interventional Radiology. 
            He specializes in minimally invasive, image-guided procedures that provide safer 
            alternatives to conventional surgery.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-gray-200">
            His expertise spans <b>vascular and non-vascular interventions</b>, including 
            treatment of peripheral vascular malformations, endovascular management of vascular injuries, 
            dialysis access procedures, and tumor embolization. 
            He is recognized for combining clinical excellence with compassionate patient care.
          </p>

          {/* CTA */}
          <a
            href="/contact"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:scale-105 transition inline-block font-semibold"
          >
            Book an Appointment
          </a>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mt-20">
        <h3 className="text-2xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
          Professional Journey
        </h3>

        <div className="relative border-l-4 border-purple-400 ml-6">
          {[
            {
              title: "Education",
              desc: "MBBS, MCPS, FCPS (Radiology), and Fellowship in Interventional Radiology.",
            },
            {
              title: "Experience",
              desc: "Extensive experience in diagnostic imaging and advanced interventional procedures at leading hospitals in Pakistan.",
            },
            {
              title: "Research & Publications",
              desc: "Authored multiple research papers on vascular malformations, dialysis catheter outcomes, and endovascular trauma management.",
            },
            {
              title: "Teaching & Mentorship",
              desc: "Associate Professor at LNHMC, actively involved in training postgraduate radiology students and young doctors.",
            },
            {
              title: "Patient Care",
              desc: "Known for patient-centered care, ensuring accurate diagnosis, safe procedures, and compassionate support throughout treatment.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut"}}
              viewport={{ once: true }}
              className="mb-10 ml-6 relative"
            >
              <div className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full -left-8 top-2 shadow-md"></div>
              <h4 className="text-xl font-semibold text-blue-100">
                {item.title}
              </h4>
              <p className="mt-2 text-gray-200">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
