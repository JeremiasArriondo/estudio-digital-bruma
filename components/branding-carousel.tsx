"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface BrandingService {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const services: BrandingService[] = [
  {
    icon: (
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
    ),
    title: "Diseño de Logo",
    description:
      "Creamos la identidad visual de tu marca con un logo profesional y memorable.",
    gradient:
      "from-purple-600 to-fuchsia-600 dark:from-purple-500 dark:to-fuchsia-500",
  },
  {
    icon: (
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
    ),
    title: "Branding Completo",
    description:
      "Desarrollamos todos los elementos visuales para que tu marca sea consistente.",
    gradient:
      "from-purple-500 to-fuchsia-500 dark:from-purple-400 dark:to-fuchsia-400",
  },
  {
    icon: (
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
    ),
    title: "Mockups",
    description:
      "Visualizá cómo se verá tu marca en diferentes aplicaciones y formatos.",
    gradient:
      "from-fuchsia-600 to-pink-600 dark:from-fuchsia-500 dark:to-pink-500",
  },
];

export function BrandingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto px-4"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {services.map((service, index) => (
            <div key={index} className="min-w-full px-4 py-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-purple-200 dark:border-slate-700 h-full">
                <div
                  className={`h-16 w-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-6 transition-colors shadow-lg`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#7A6F9C] dark:text-purple-400 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-lg text-purple-900/70 dark:text-purple-300/70 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white/90 dark:bg-slate-800/90 border-purple-300 dark:border-slate-600 hover:bg-purple-100 dark:hover:bg-slate-700 shadow-lg z-10"
        onClick={prevSlide}
        aria-label="Anterior"
      >
        <ChevronLeft className="h-6 w-6 text-purple-600 dark:text-purple-400" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white/90 dark:bg-slate-800/90 border-purple-300 dark:border-slate-600 hover:bg-purple-100 dark:hover:bg-slate-700 shadow-lg z-10"
        onClick={nextSlide}
        aria-label="Siguiente"
      >
        <ChevronRight className="h-6 w-6 text-purple-600 dark:text-purple-400" />
      </Button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-gradient-to-r from-purple-600 to-fuchsia-600 dark:from-purple-500 dark:to-fuchsia-500"
                : "w-2.5 bg-purple-300 dark:bg-slate-600 hover:bg-purple-400 dark:hover:bg-slate-500"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
