"use client";

import type React from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
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
