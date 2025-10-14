"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "¿Por qué es importante tener una web?",
    answer:
      "Tener una página web te brinda visibilidad 24/7, transmite profesionalismo, genera confianza y te permite organizar tus servicios o productos. También podés ofrecer turnos online, mostrar tu catálogo, recibir pagos o conectar tus redes, todo desde un mismo lugar.",
  },
  {
    question: "¿Qué necesito para comenzar con mi página web?",
    answer:
      "Solo necesitás tener una idea clara de lo que hacés, tus redes o datos de contacto, y si tenés: tu logo, fotos o referencias. Si no tenés nada, nosotros también te ayudamos a definir tu identidad visual y armar todo desde cero.",
  },
  {
    question: "¿El sitio va a ser mío o tendré que pagar una mensualidad?",
    answer:
      "La web será tuya. No cobramos mensualidades obligatorias. Una vez que la terminamos y te la entregamos, es tuya. Si querés un mantenimiento opcional, también lo ofrecemos, pero no es obligatorio.",
  },
  {
    question: "¿Puedo editar la web después de que esté terminada?",
    answer:
      "Sí. Podés pedirnos cambios, o te explicamos cómo hacer modificaciones simples por tu cuenta. Nos adaptamos a lo que necesites.",
  },
  {
    question: "¿Cuánto tarda en estar lista mi web?",
    answer:
      "Depende de la complejidad, pero una web básica puede estar lista en 7 a 10 días hábiles. Si necesitás algo más completo o con branding incluido, te informamos los tiempos al iniciar.",
  },
  {
    question: "¿Mi web va a estar optimizada para celulares?",
    answer:
      "Sí. Todas nuestras páginas son responsive, es decir, se adaptan automáticamente a cualquier pantalla (celular, tablet o PC). Se ven y funcionan perfecto en todos los dispositivos.",
  },
  {
    question: "¿La web va a aparecer en Google?",
    answer:
      "Sí, preparamos tu sitio para que Google pueda encontrarlo y mostrarlo. También podemos ayudarte a mejorar tu presencia si querés que más personas lo vean al buscar lo que ofrecés.",
  },
  {
    question: "¿Puedo vender productos o cobrar por la web?",
    answer:
      "Sí. Podés tener tienda online, botones de pago, links a pasarelas de cobro como MercadoPago, PayPal, etc. Si no sabés cómo hacerlo, nosotros lo armamos por vos.",
  },
  {
    question: "¿Qué pasa si necesito ayuda más adelante?",
    answer:
      "Siempre estamos disponibles para ayudarte. Podés escribirnos para soporte, modificaciones o incluso para sumar nuevas funcionalidades cuando crezcas.",
  },
  {
    question: "¿Qué pasa si ya tengo una web pero es básica?",
    answer:
      "¡Podemos actualizarla! Rediseñamos, mejoramos, o transformamos tu web actual en algo moderno, funcional y que represente lo que hacés hoy. Sin perder lo que ya tenés, le damos un nuevo aire.",
  },
];

export function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg overflow-hidden border-2 border-purple-200 dark:border-slate-700 transition-all"
        >
          <button
            onClick={() => toggleFaq(index)}
            className="w-full p-4 flex items-center justify-between text-left"
          >
            <span className="font-semibold text-violet-primary dark:text-purple-400">
              {faq.question}
            </span>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 dark:from-purple-500 dark:to-fuchsia-500 scale-110"
                  : "bg-violet-primary dark:bg-purple-500 hover:scale-110"
              }`}
            >
              <motion.span
                animate={{
                  rotate: activeIndex === index ? 45 : 0,
                  opacity: activeIndex === index ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="text-white font-bold text-xl absolute"
              >
                +
              </motion.span>
              <motion.span
                animate={{
                  rotate: activeIndex === index ? 0 : 45,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="text-white font-bold text-xl absolute"
              >
                −
              </motion.span>
            </div>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 pt-0 border-t-2 border-purple-200 dark:border-slate-700">
                  <p className="text-violet-secondary dark:text-purple-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
