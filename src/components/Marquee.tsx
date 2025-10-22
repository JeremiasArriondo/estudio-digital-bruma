"use client";

import type { ReactNode } from "preact/compat";
import { cn } from "../lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
}: MarqueeProps) {
  const speedMap = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  };

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden [--gap:1rem] gap-(--gap)",
        className
      )}
    >
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent" />

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent" />

      <div
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)] animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          direction === "right" && "[animation-direction:reverse]"
        )}
        style={{
          animationDuration: speedMap[speed],
        }}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)] animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          direction === "right" && "[animation-direction:reverse]"
        )}
        style={{
          animationDuration: speedMap[speed],
        }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

interface MarqueeItemProps {
  children: React.ReactNode;
  className?: string;
}

export function MarqueeItem({ children, className }: MarqueeItemProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-4 py-2 rounded-lg bg-white dark:bg-slate-800 shadow-md border border-purple-200 dark:border-slate-700 transition-all hover:scale-105 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
