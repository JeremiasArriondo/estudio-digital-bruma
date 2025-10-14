import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { HeroCarousel } from "@/components/hero-carousel"
import { CategoryAccordion } from "@/components/category-accordion"
import { FaqAccordion } from "@/components/faq-accordion"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TopBar } from "@/components/top-bar"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF5FF] via-[#F3E8FF] to-[#E9D5FF] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] font-['Poppins',sans-serif] transition-colors duration-500">
      <TopBar />
      <WhatsAppButton />

      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-900/80 border-b border-purple-200 dark:border-slate-700 transition-colors duration-300 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-fuchsia-600 dark:from-purple-500 dark:to-fuchsia-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <span className="font-bold text-purple-700 dark:text-purple-400 text-xl">WebDesign</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#inicio"
              className="text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              href="#que-hacemos"
              className="text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium"
            >
              Qué hacemos
            </Link>
            <Link
              href="#categorias"
              className="text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium"
            >
              Categorías
            </Link>
            <Link
              href="#diseno"
              className="text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium"
            >
              Diseño gráfico
            </Link>
            <Link
              href="#contacto"
              className="text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium"
            >
              Contacto
            </Link>
            <Link
              href="#faq"
              className="text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium"
            >
              Preguntas frecuentes
            </Link>
            <ThemeToggle />
          </nav>
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button className="text-purple-700 dark:text-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 dark:from-purple-500 dark:to-fuchsia-500 text-white transition-colors shadow-lg">
                Diseño web profesional
              </div>
              <div className="h-24 md:h-32">
                <HeroCarousel />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="#contacto">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 dark:from-purple-500 dark:to-fuchsia-500 dark:hover:from-purple-600 dark:hover:to-fuchsia-600 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Quiero mi web ahora
                  </Button>
                </Link>
                <Link href="#categorias">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-purple-600 dark:border-purple-500 text-purple-700 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-slate-800 hover:text-purple-900 dark:hover:text-purple-300 transition-all duration-300 bg-transparent font-semibold"
                  >
                    Ver categorías
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] animate-fade-in">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Diseño web profesional en smartphone"
                fill
                className="object-contain dark:opacity-90"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="que-hacemos" className="py-16 bg-white/50 dark:bg-slate-900/50 transition-colors">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400">
              Diseñamos webs que trabajan para vos
            </h2>
            <p className="text-lg text-purple-900/80 dark:text-purple-300/80">
              Diseñamos sitios que se adaptan a tus necesidades, que representan lo que hacés, y que te ayudan a crecer.
              Cada web es única, como vos y tu proyecto. Creamos sitios modernos, funcionales y claros. También
              diseñamos tu identidad visual.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categorias" className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400">Categorías</h2>
              <p className="text-lg text-purple-900/80 dark:text-purple-300/80">
                Tocá tu categoría para ver lo que incluye 👇
              </p>
            </div>
            <CategoryAccordion />
          </div>
        </div>
      </section>

      {/* Visual Identity Section */}
      <section
        id="diseno"
        className="py-16 bg-gradient-to-br from-purple-100/50 to-fuchsia-100/50 dark:from-slate-900/50 dark:to-slate-800/50 transition-colors"
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400">
              ¿También necesitás tu marca?
            </h2>
            <p className="text-lg text-purple-900/80 dark:text-purple-300/80">
              Te ayudamos con el diseño de tu identidad visual, creación de logo, branding, mockups y más.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-purple-200 dark:border-slate-700 hover:scale-105 transform duration-300">
                <div className="h-12 w-12 bg-gradient-to-br from-purple-600 to-fuchsia-600 dark:from-purple-500 dark:to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-palette"
                  >
                    <circle cx="13.5" cy="6.5" r="2.5"></circle>
                    <path d="M19 2.5H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5.5a3 3 0 0 0-3-3Z"></path>
                    <path d="M13.5 9a4 4 0 0 1 0 8h-3a4 4 0 0 1 0-8h3Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">Diseño de Logo</h3>
                <p className="text-purple-900/70 dark:text-purple-300/70">
                  Creamos la identidad visual de tu marca con un logo profesional y memorable.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-purple-200 dark:border-slate-700 hover:scale-105 transform duration-300">
                <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 dark:from-purple-400 dark:to-fuchsia-400 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-layout-grid"
                  >
                    <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                    <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">Branding Completo</h3>
                <p className="text-purple-900/70 dark:text-purple-300/70">
                  Desarrollamos todos los elementos visuales para que tu marca sea consistente.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-purple-200 dark:border-slate-700 hover:scale-105 transform duration-300">
                <div className="h-12 w-12 bg-gradient-to-br from-fuchsia-600 to-pink-600 dark:from-fuchsia-500 dark:to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    className="dark:stroke-white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">Mockups</h3>
                <p className="text-purple-900/70 dark:text-purple-300/70">
                  Visualizá cómo se verá tu marca en diferentes aplicaciones y formatos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border-2 border-purple-200 dark:border-slate-700 transition-colors">
            <div className="text-center space-y-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-700 dark:text-purple-400">
                Quiero que me contacten
              </h2>
              <p className="text-purple-900/70 dark:text-purple-300/70">
                Dejanos tus datos y te enviaremos información
              </p>
            </div>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-purple-700 dark:text-purple-400">
                  Nombre
                </label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  className="border-2 border-purple-200 dark:border-slate-600 focus:border-purple-600 dark:focus:border-purple-500 focus:ring-purple-600 dark:focus:ring-purple-500 dark:bg-slate-900 dark:text-purple-200"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact" className="text-sm font-medium text-purple-700 dark:text-purple-400">
                  Email o teléfono
                </label>
                <Input
                  id="contact"
                  placeholder="Tu email o teléfono"
                  className="border-2 border-purple-200 dark:border-slate-600 focus:border-purple-600 dark:focus:border-purple-500 focus:ring-purple-600 dark:focus:ring-purple-500 dark:bg-slate-900 dark:text-purple-200"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 dark:from-purple-500 dark:to-fuchsia-500 dark:hover:from-purple-600 dark:hover:to-fuchsia-600 transition-colors shadow-lg hover:shadow-xl text-white">
                <Send className="mr-2 h-4 w-4" /> Enviarme info
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-16 bg-gradient-to-b from-purple-50 to-fuchsia-50 dark:from-slate-900 dark:to-slate-800 transition-colors"
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400">
                Preguntas frecuentes
              </h2>
              <p className="text-lg text-purple-900/80 dark:text-purple-300/80">
                ✨ Respondemos todo lo que necesitás saber antes de dar el paso.
              </p>
            </div>
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* Closing Phrases */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-fuchsia-700 dark:from-purple-900 dark:to-fuchsia-900 transition-colors shadow-xl">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">¿Listo para destacarte?</h2>
            <p className="text-xl text-white/95">
              Muchos profesionales aún no tienen una web, o usan herramientas limitadas como Linktree. Nosotros hacemos
              que cada página trabaje para vos, te represente y te ayude a crecer.
            </p>
            <p className="text-xl text-white/95">
              Ya hiciste lo más difícil: empezar. Ahora te ayudamos a mostrarlo como se merece.
            </p>
            <Button className="bg-white text-purple-700 hover:bg-purple-100 dark:bg-purple-200 dark:text-purple-900 dark:hover:bg-purple-300 mt-4 transition-colors shadow-lg hover:shadow-xl font-semibold">
              <MessageCircle className="mr-2 h-4 w-4" /> Contactanos ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-slate-900 border-t border-purple-200 dark:border-slate-800 transition-colors">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-purple-700/70 dark:text-purple-400/70">
                © {new Date().getFullYear()} WebDesign. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="#inicio"
                className="text-sm text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 font-medium"
              >
                Inicio
              </Link>
              <Link
                href="#contacto"
                className="text-sm text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 font-medium"
              >
                Contacto
              </Link>
              <Link
                href="#faq"
                className="text-sm text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 font-medium"
              >
                Preguntas frecuentes
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
