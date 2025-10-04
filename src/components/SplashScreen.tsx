"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const splashShown = sessionStorage.getItem("splashShown");
    if (splashShown) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("splashShown", "true");
    }, 3500); // ⏱️ 3.5 sec splash

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center h-screen bg-black"
        >
          <div className="relative w-64 h-64">
            {/* Logo / Image */}
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden bg-transparent">
              <Image
                src="/1.png"
                alt="Dr Misbah"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Neon Pulsing Border */}
            <motion.div
              className="absolute inset-0 rounded-2xl z-0 border-4 border-cyan-400"
              animate={{ 
                boxShadow: [
                  "0 0 15px #0ff, 0 0 30px #0ff",
                  "0 0 40px #0ff, 0 0 80px #0ff"
                ] 
              }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
