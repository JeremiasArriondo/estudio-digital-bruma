"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const categories = [
  {
    title: "Profesionales de la salud",
    subtitle: "(Psicólogos, nutricionistas, kinesiólogos, etc.)",
    benefits: [
      "Web con presentación profesional",
      "Turnos online o contacto directo",
      "Secciones de servicios, testimonios y contacto",
      "Transmite confianza y credibilidad",
      "Blog o sección de recursos (opcional)",
      "Adaptada a celular",
    ],
  },
  {
    title: "Emprendedores",
    subtitle: "",
    benefits: [
      "Web para mostrar productos, servicios o ambos",
      "Contacto directo por WhatsApp",
      "Secciones de presentación, catálogo, testimonios, contacto",
      "Integración con redes sociales",
      "Posibilidad de ventas online",
    ],
  },
  {
    title: "Tiendas y marcas",
    subtitle: "",
    benefits: [
      "Catálogo visual",
      "Integración con medios de pago",
      "Seguimiento de pedidos",
      "Conexión con redes y WhatsApp",
      "Formulario de contacto",
    ],
  },
  {
    title: "Artistas, docentes, freelancers",
    subtitle: "",
    benefits: [
      "Portafolio visual",
      "Agenda de actividades o servicios",
      "Contacto profesional directo",
      "Diseño a medida de tu identidad creativa",
    ],
  },
  {
    title: "Educadores y formadores",
    subtitle: "",
    benefits: [
      "Presentación de cursos o talleres",
      "Formularios de inscripción",
      "Enlaces a plataformas educativas o canales",
      "Sección de recursos y contacto",
    ],
  },
  {
    title: "Gastronomía y delivery",
    subtitle: "",
    benefits: [
      "Carta visual online",
      "Botón de pedidos por WhatsApp",
      "Sección destacada con fotos",
      "Horarios de atención",
      "Adaptado a celular",
    ],
  },
  {
    title: "Servicios personales",
    subtitle: "(Peluquería, estética, spa, masajes, uñas, barberías…)",
    benefits: [
      "Servicios, turnos, contacto",
      "Muestra visual del trabajo",
      "Integración con redes",
    ],
  },
];

export function CategoryAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <button
            onClick={() => toggleCategory(index)}
            className={`w-full p-4 flex items-center justify-between text-left rounded-lg transition-all duration-300 ${
              activeIndex === index
                ? "bg-gradient-to-r from-[#6C668A] to-[#9A8FC0] dark:from-purple-700 dark:to-fuchsia-700 text-white"
                : "bg-purple-100 dark:bg-slate-800 hover:bg-purple-200 dark:hover:bg-slate-700 text-[#575373] dark:text-purple-300"
            }`}
          >
            <span className="font-semibold">{category.title}</span>
            <motion.div
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-1 rounded-full ${
                activeIndex === index
                  ? "bg-white/20 dark:bg-white/20"
                  : "bg-violet-primary dark:bg-purple-500"
              }`}
            >
              <ChevronDown size={16} className="text-white" />
            </motion.div>
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
                <div className="p-4 bg-white dark:bg-slate-800 border-2 border-purple-200 dark:border-slate-700 rounded-b-lg transition-colors">
                  {category.subtitle && (
                    <p className="text-sm text-purple-700/70 dark:text-purple-400/70 mb-3">
                      {category.subtitle}
                    </p>
                  )}
                  <ul className="space-y-2">
                    {category.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-purple-600 dark:text-purple-400 mr-2 text-lg">
                          ✅
                        </span>
                        <span className="text-purple-900 dark:text-purple-300">
                          {benefit}
                        </span>
                      </li>
                    ))}
                    <li className="flex items-start">
                      <span className="text-purple-600 dark:text-purple-400 mr-2 text-lg">
                        ✅
                      </span>
                      <span className="text-purple-900 dark:text-purple-300">
                        etc.
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
