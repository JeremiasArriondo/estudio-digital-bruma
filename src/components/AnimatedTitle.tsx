"use client";

import { motion, useInView } from "framer-motion";
import type { ReactNode } from "preact/compat";
import { useRef } from "preact/hooks";

interface AnimatedTitleProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedTitle({
  children,
  className = "",
  delay = 0,
}: AnimatedTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.95 }
      }
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
