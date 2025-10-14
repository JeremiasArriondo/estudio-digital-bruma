"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const phrases = [
  "Diseñamos webs personalizadas que se adaptan a vos y a lo que ofrecés",
  "Sostenemos los mejores precios, 100% confiables, tenemos experiencia y buenas referencias",
  "Programamos tu web y diseñamos tu marca",
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % phrases.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-700 to-fuchsia-700 dark:from-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent"
        >
          {phrases[current]}
        </motion.h1>
      </AnimatePresence>
    </div>
  )
}
