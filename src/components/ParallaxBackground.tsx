"use client";

import { useEffect, useRef } from "preact/hooks";

interface ParallaxBackgroundProps {
  speed?: number;
  className?: string;
}

export function ParallaxBackground({
  speed = 0.3,
  className = "",
}: ParallaxBackgroundProps) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;

      const scrolled = window.scrollY;
      const yPos = scrolled * speed;
      bgRef.current.style.transform = `translateY(${yPos}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return <div ref={bgRef} className={className} />;
}
