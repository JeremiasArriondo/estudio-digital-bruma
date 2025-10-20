import { AnimatedSection } from "@/components/animated-section";
import { AnimatedTitle } from "@/components/animated-title";
import { BrandingCarousel } from "@/components/branding-carousel";
import { CategoryAccordion } from "@/components/category-accordion";
import { FaqAccordion } from "@/components/faq-accordion";
import { HeroCarousel } from "@/components/hero-carousel";
import { Marquee, MarqueeItem } from "@/components/marquee";
import { MobileNav } from "@/components/movile-nav";
import { ParallaxBackground } from "@/components/parallax-background";
import { ParallaxSection } from "@/components/parallax-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  BriefcaseBusiness,
  Building,
  ChevronsLeftRightEllipsis,
  MessageCircle,
  Rss,
  Send,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF5FF] via-[#F3E8FF] to-[#575373] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] font-['Poppins',sans-serif] transition-colors duration-500">
      {/* <TopBar /> */}
      <WhatsAppButton />

      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-900/80 border-b border-purple-200 dark:border-slate-700 transition-colors duration-300 shadow-sm">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-violet-primary dark:text-purple-400 text-xl flex items-center gap-2">
              <Image
                src="/icon0.svg"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain text-violet-primary"
                priority
              />
              Bruma
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#inicio"
              className="text-violet-secondary dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              href="#que-hacemos"
              className="text-violet-secondary dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium"
            >
              Qué hacemos
            </Link>
            <Link
              href="#categorias"
              className="text-violet-secondary dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium"
            >
              Categorías
            </Link>
            <Link
              href="#diseno"
              className="text-violet-secondary dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium"
            >
              Diseño gráfico
            </Link>
            <Link
              href="#contacto"
              className="text-violet-secondary dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium"
            >
              Contacto
            </Link>
            <Link
              href="#faq"
              className="text-violet-secondary dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors font-medium"
            >
              Preguntas frecuentes
            </Link>
            <ThemeToggle />
          </nav>
          <MobileNav />
        </div>
      </header>

      <section className="fog relative overflow-hidden">
        <ParallaxBackground speed={0.3} className="absolute-bg" />
        <div className="fog-container">
          <ParallaxBackground speed={0.15} className="fog-img fog-img-first" />
          <ParallaxBackground speed={0.25} className="fog-img fog-img-second" />
        </div>

        <section
          id="inicio"
          className="relative min-h-[600px] py-6 md:py-32 overflow-hidden"
        >
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
              <div className="space-y-6 text-center md:text-left">
                <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-[#6C668A] to-[#9A8FC0] dark:from-slate-700 dark:to-slate-400 text-white transition-colors shadow-lg">
                  Diseño web profesional
                </div>
                <div className="h-24 md:h-32">
                  <HeroCarousel />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link href="#contacto">
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-[#6C668A] to-[#9A8FC0] hover:from-purple-700 hover:to-fuchsia-700 dark:from-slate-700 dark:to-slate-400 dark:hover:from-purple-600 dark:hover:to-fuchsia-600 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Quiero mi web ahora
                    </Button>
                  </Link>
                  <Link href="#categorias">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-2 border-[#7A6F9C] dark:border-slate-700 text-[#7A6F9C] dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-slate-800 hover:text-purple-900 dark:hover:text-purple-300 transition-all duration-300 bg-transparent font-semibold"
                    >
                      Ver categorías
                    </Button>
                  </Link>
                </div>
              </div>
              <ParallaxSection
                speed={0.1}
                className="hidden md:block relative h-[300px] md:h-[400px] animate-fade-in"
              >
                <Image
                  src="/bruma.jpeg?height=600&width=500"
                  alt="Diseño web profesional en smartphone"
                  fill
                  className="object-contain dark:opacity-90"
                  priority
                />
              </ParallaxSection>
            </div>
          </div>
        </section>
      </section>
      {/* What We Do Section */}
      <section
        id="que-hacemos"
        className="py-16 px-4 bg-white/50 dark:bg-slate-900/50 transition-colors"
      >
        <div className="flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <AnimatedTitle>
              <h2 className="text-3xl md:text-4xl font-bold  text-violet-primary dark:text-purple-400">
                Diseñamos webs que trabajan para vos
              </h2>
            </AnimatedTitle>
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-purple-900/80 dark:text-purple-300/80">
                Diseñamos sitios que se adaptan a tus necesidades, que
                representan lo que hacés, y que te ayudan a crecer. Cada web es
                única, como vos y tu proyecto. Creamos sitios modernos,
                funcionales y claros. También diseñamos tu identidad visual.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section id="categorias" className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <AnimatedTitle>
                <h2 className="text-3xl md:text-4xl font-bold text-violet-primary dark:text-purple-400">
                  Categorías
                </h2>
              </AnimatedTitle>
              <Marquee speed="normal" pauseOnHover>
                <MarqueeItem>
                  <div className="flex items-center gap-2 px-4">
                    <ShoppingBag />
                    <span className="font-semibold text-violet-secondary dark:text-purple-300">
                      Tienda online
                    </span>
                  </div>
                </MarqueeItem>
                <MarqueeItem>
                  <div className="flex items-center gap-2 px-4">
                    <BriefcaseBusiness />
                    <span className="font-semibold text-violet-secondary dark:text-purple-300">
                      Portfolio
                    </span>
                  </div>
                </MarqueeItem>
                <MarqueeItem>
                  <div className="flex items-center gap-2 px-4">
                    <Building />
                    <span className="font-semibold text-violet-secondary dark:text-purple-300">
                      Sitio empresarial
                    </span>
                  </div>
                </MarqueeItem>
                <MarqueeItem>
                  <div className="flex items-center gap-2 px-4">
                    <Rss />
                    <span className="font-semibold text-violet-secondary dark:text-purple-300">
                      Blogs
                    </span>
                  </div>
                </MarqueeItem>
                <MarqueeItem>
                  <div className="flex items-center gap-2 px-4">
                    <ChevronsLeftRightEllipsis />
                    <span className="font-semibold text-violet-secondary dark:text-purple-300">
                      Sitio web
                    </span>
                  </div>
                </MarqueeItem>
              </Marquee>
              <AnimatedSection delay={0.3}>
                <p className="text-lg text-purple-900/80 dark:text-purple-300/80">
                  Tocá tu categoría para ver lo que incluye 👇
                </p>
              </AnimatedSection>
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
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <AnimatedTitle>
              <h2 className="text-3xl md:text-4xl font-bold text-violet-primary dark:text-purple-400">
                ¿También necesitás tu marca?
              </h2>
            </AnimatedTitle>
            <AnimatedSection delay={0.3}>
              <p className="text-lg text-purple-900/80 dark:text-purple-300/80">
                Te ayudamos con el diseño de tu identidad visual, creación de
                logo, branding, mockups y más.
              </p>
            </AnimatedSection>
            <div className="pt-8">
              <BrandingCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border-2 border-purple-200 dark:border-slate-700 transition-colors">
            <div className="text-center space-y-4 mb-6">
              <AnimatedTitle>
                <h2 className="text-2xl md:text-3xl font-bold text-destructive dark:text-purple-400">
                  Quiero que me contacten
                </h2>
              </AnimatedTitle>
              <p className="text-purple-900/70 dark:text-purple-300/70">
                Dejanos tus datos y te enviaremos información
              </p>
            </div>
            <form className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-violet-secondary dark:text-purple-400"
                >
                  Nombre
                </label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  className="border-2 border-purple-200 dark:border-slate-600 focus:border-purple-600 dark:focus:border-purple-500 focus:ring-purple-600 dark:focus:ring-purple-500 dark:bg-slate-900 dark:text-purple-200"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact"
                  className="text-sm font-medium text-violet-secondary dark:text-purple-400"
                >
                  Email o teléfono
                </label>
                <Input
                  id="contact"
                  placeholder="Tu email o teléfono"
                  className="border-2 border-purple-200 dark:border-slate-600 focus:border-purple-600 dark:focus:border-purple-500 focus:ring-purple-600 dark:focus:ring-purple-500 dark:bg-slate-900 dark:text-purple-200"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-[#6C668A] to-[#9A8FC0] hover:from-purple-700 hover:to-fuchsia-700 dark:from-purple-500 dark:to-fuchsia-500 dark:hover:from-purple-600 dark:hover:to-fuchsia-600 transition-colors shadow-lg hover:shadow-xl text-white">
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
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <AnimatedTitle>
                <h2 className="text-3xl md:text-4xl font-bold text-violet-primary dark:text-purple-400">
                  Preguntas frecuentes
                </h2>
              </AnimatedTitle>
              <AnimatedSection delay={0.3}>
                <p className="text-lg text-purple-900/80 dark:text-purple-300/80">
                  ✨ Respondemos todo lo que necesitás saber antes de dar el
                  paso.
                </p>
              </AnimatedSection>
            </div>
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* Closing Phrases */}
      <section className="py-16 bg-gradient-to-r from-[#6C668A] to-[#9A8FC0] dark:from-purple-900 dark:to-fuchsia-900 transition-colors shadow-xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <AnimatedTitle>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                ¿Listo para destacarte?
              </h2>
            </AnimatedTitle>
            <p className="text-xl text-white/95">
              Muchos profesionales aún no tienen una web, o usan herramientas
              limitadas como Linktree. Nosotros hacemos que cada página trabaje
              para vos, te represente y te ayude a crecer.
            </p>
            <p className="text-xl text-white/95">
              Ya hiciste lo más difícil: empezar. Ahora te ayudamos a mostrarlo
              como se merece.
            </p>
            <Button className="bg-white text-violet-primary hover:bg-purple-100 dark:bg-purple-200 dark:text-purple-900 dark:hover:bg-purple-300 mt-4 transition-colors shadow-lg hover:shadow-xl font-semibold">
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
              <p className="text-sm text-violet-primary/70 dark:text-purple-400/70">
                © {new Date().getFullYear()} BrumaDesign
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="#inicio"
                className="text-sm text-violet-primary dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 font-medium"
              >
                Inicio
              </Link>
              <Link
                href="#contacto"
                className="text-sm text-violet-primary dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 font-medium"
              >
                Contacto
              </Link>
              <Link
                href="#faq"
                className="text-sm text-violet-primary dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 font-medium"
              >
                Preguntas frecuentes
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
