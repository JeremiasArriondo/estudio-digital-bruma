"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "Diseños adaptados a lo que ofrecés",
  "Sostenemos los mejores precios",
  "Programamos tu web y diseñamos tu marca",
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#575373] to-[#7A6F9C] bg-clip-text text-transparent"
        >
          {phrases[current]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
