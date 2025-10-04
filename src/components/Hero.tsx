"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
  });

  const [paused, setPaused] = useState(false);

  // Auto-play with pause on hover
  useEffect(() => {
    if (!slider) return;
    let interval: NodeJS.Timeout;
    if (!paused) {
      interval = setInterval(() => {
        slider.current?.next();
      }, 5000); // har 5 sec me next slide
    }
    return () => clearInterval(interval);
  }, [slider, paused]);

  const slides = [
    {
      title: "Healing Without Surgery",
      desc: "Advanced interventional radiology — treating diseases through tiny incisions with maximum precision.",
    },
    {
      title: "Big Results with Small Needles",
      desc: "Minimally invasive procedures ensuring comfort, safety, and faster recovery.",
    },
    {
      title: "No Cuts, No Pain",
      desc: "Image-guided treatments performed without traditional surgery or large scars.",
    },
    {
      title: "Precision-Guided Care",
      desc: "Targeted treatment with less risk, less pain, and better patient outcomes.",
    },
    {
      title: "Modern Medicine, Without the Scalpel",
      desc: "Where advanced imaging meets healing — delivering world-class care without surgery.",
    },
  ];

  return (
    <section
      className="relative h-[90vh] flex items-center justify-center 
                 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 
                 text-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Keen Slider */}
      <div ref={sliderRef} className="keen-slider w-full h-full">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="keen-slider__slide flex flex-col items-center justify-center text-center px-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 opacity-90 leading-relaxed">
              {slide.desc}
            </p>
            <a
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
                         text-white font-semibold rounded-lg shadow-lg 
                         hover:opacity-90 transition"
            >
              Book Appointment
            </a>
          </motion.div>
        ))}
      </div>

      {/* Prev/Next buttons */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-6">
        <button
          onClick={() => slider.current?.prev()}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 
                     text-white shadow-md hover:opacity-90 transition"
        >
          ⬅
        </button>
        <button
          onClick={() => slider.current?.next()}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 
                     text-white shadow-md hover:opacity-90 transition"
        >
          ➡
        </button>
      </div>
    </section>
  );
}
