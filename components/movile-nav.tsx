"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button
          onClick={toggleMenu}
          className="text-[#6C668A] dark:text-[#9A8FC0] p-2 hover:bg-[#EAE6F6] dark:hover:bg-slate-800 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#6C668A] to-[#9A8FC0] dark:from-slate-900 dark:to-slate-800 z-50 flex flex-col justify-center items-center space-y-8 shadow-lg"
            >
              <button
                onClick={closeMenu}
                aria-label="Cerrar menú"
                className="absolute top-6 right-6 text-white hover:text-[#E0D7FF] transition-colors"
              >
                <X size={28} />
              </button>
              <nav className="flex flex-col items-center space-y-6 text-lg font-semibold text-white">
                {[
                  { href: "#inicio", label: "Inicio" },
                  { href: "#que-hacemos", label: "Qué hacemos" },
                  { href: "#categorias", label: "Categorías" },
                  { href: "#diseno", label: "Diseño gráfico" },
                  { href: "#contacto", label: "Contacto" },
                  { href: "#faq", label: "Preguntas frecuentes" },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    className="hover:text-[#E0D7FF] transition-colors duration-300 text-2xl"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
