"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar, FaAward, FaUserMd, FaHandHoldingHeart } from "react-icons/fa";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section with Elegant Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/3.jpg"
                  alt="Dr. Muhammad Misbah Tahir"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              
              {/* Floating Experience Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-2xl shadow-2xl"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-200 text-sm mx-0.5" />
                    ))}
                  </div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm font-medium">Years Experience</div>
                </div>
              </motion.div>

              {/* Qualification Badge */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <FaAward className="text-amber-400 text-2xl" />
                  <div>
                    <div className="font-bold text-white">FCPS, VIR</div>
                    <div className="text-blue-200 text-sm">Fellowship</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              >
                Dr.{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Muhammad Misbah Tahir
                </span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-200 font-light"
              >
                Senior Consultant Interventional Radiologist
              </motion.p>
            </div>

            {/* Main Description */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg leading-relaxed text-gray-200">
                A distinguished interventional radiologist with over <strong>15 years of expertise</strong> in 
                performing advanced minimally invasive procedures. Specializing in cutting-edge techniques 
                that eliminate the need for traditional surgery.
              </p>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <p className="text-blue-200 font-semibold text-lg mb-2">💡 Modern Medical Approach</p>
                <p className="text-gray-200">
                  <strong>No surgical cuts • Minimal pain • Faster recovery</strong> through precision 
                  interventions using fine needles and advanced imaging guidance.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20 text-right">
                <p className="text-green-300 font-semibold text-lg mb-2">🩺 جدید ترین علاج</p>
                <p className="text-green-200 leading-relaxed">
                  بغیر کٹ اور بغیر تکلیف کے جدید طریقہ علاج۔ چھوٹی سوئی کے ذریعے تیز بحالی
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: FaUserMd, label: "FCPS Qualified", value: "Specialist" },
                { icon: FaAward, label: "Fellowship", value: "VIR Certified" },
                { icon: FaHandHoldingHeart, label: "Patient Care", value: "15+ Years" },
                { icon: FaStar, label: "Experience", value: "Expert" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-4 text-center border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <item.icon className="text-2xl text-blue-400 mx-auto mb-2" />
                  <div className="font-semibold text-white text-sm">{item.label}</div>
                  <div className="text-blue-300 text-xs">{item.value}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <FaHandHoldingHeart className="text-xl" />
                <span className="text-lg">Book Your Consultation</span>
              </a>
              <p className="text-blue-200 text-sm mt-3">
                Experience world-class interventional radiology care
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}