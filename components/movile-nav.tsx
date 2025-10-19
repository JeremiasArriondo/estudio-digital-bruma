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
          className="text-purple-700 dark:text-purple-400 p-2 hover:bg-purple-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 top-16"
              onClick={closeMenu}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-16 bottom-0 w-64 bg-white dark:bg-slate-900 shadow-xl z-50 border-l border-purple-200 dark:border-slate-700"
            >
              <nav className="flex flex-col p-6 space-y-4">
                <Link
                  href="#inicio"
                  onClick={closeMenu}
                  className="text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium py-2 px-4 hover:bg-purple-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  Inicio
                </Link>
                <Link
                  href="#que-hacemos"
                  onClick={closeMenu}
                  className="text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium py-2 px-4 hover:bg-purple-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  Qué hacemos
                </Link>
                <Link
                  href="#categorias"
                  onClick={closeMenu}
                  className="text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium py-2 px-4 hover:bg-purple-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  Categorías
                </Link>
                <Link
                  href="#diseno"
                  onClick={closeMenu}
                  className="text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium py-2 px-4 hover:bg-purple-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  Diseño gráfico
                </Link>
                <Link
                  href="#contacto"
                  onClick={closeMenu}
                  className="text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium py-2 px-4 hover:bg-purple-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  Contacto
                </Link>
                <Link
                  href="#faq"
                  onClick={closeMenu}
                  className="text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium py-2 px-4 hover:bg-purple-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  Preguntas frecuentes
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
