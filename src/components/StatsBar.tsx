"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface StatItemConfig {
  target: number;
  suffix: string;
  label: string;
  subtext: string;
  delayMs: number;
  durationMs: number;
}

function StatCounter({
  target,
  suffix,
  delayMs,
  durationMs,
  startTrigger,
  reducedMotion,
}: {
  target: number;
  suffix: string;
  delayMs: number;
  durationMs: number;
  startTrigger: boolean;
  reducedMotion: boolean;
}) {
  const [displayValue, setDisplayValue] = useState<string>(`${target}${suffix}`);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (reducedMotion || !startTrigger || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    let animationFrameId: number;
    const timer = setTimeout(() => {
      // Start from 0 when delay triggers
      setDisplayValue("0");
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / durationMs);

        // Smooth cubic ease-out: 1 - (1 - t)^3
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);

        if (progress < 1) {
          setDisplayValue(String(current));
          animationFrameId = requestAnimationFrame(updateCounter);
        } else {
          setDisplayValue(`${target}${suffix}`);
        }
      };

      animationFrameId = requestAnimationFrame(updateCounter);
    }, delayMs);

    return () => {
      clearTimeout(timer);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [startTrigger, target, suffix, delayMs, durationMs, reducedMotion]);

  return (
    <span className="inline-block tabular-nums min-w-[3.2ch]">
      {displayValue}
    </span>
  );
}

export function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion() ?? false;

  const stats: StatItemConfig[] = [
    {
      target: 15,
      suffix: "+",
      label: "YEARS OF EXCELLENCE",
      subtext: "Established industry legacy & verified operations",
      delayMs: 0,
      durationMs: 1850,
    },
    {
      target: 500,
      suffix: "+",
      label: "CITIES CONNECTED",
      subtext: "Robust nationwide arterial freight corridors",
      delayMs: 150,
      durationMs: 1950,
    },
    {
      target: 100,
      suffix: "K+",
      label: "COMPLETED DELIVERIES",
      subtext: "Secure, scheduled, and on-time shipments",
      delayMs: 300,
      durationMs: 2000,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-[#0B0B0B] border-y border-zinc-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D32F2F]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-zinc-800/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-zinc-850">
          {stats.map((st) => (
            <div
              key={st.label}
              className="flex flex-col items-center text-center px-4 py-4"
            >
              <div className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-2">
                <StatCounter
                  target={st.target}
                  suffix={st.suffix}
                  delayMs={st.delayMs}
                  durationMs={st.durationMs}
                  startTrigger={isInView}
                  reducedMotion={shouldReduceMotion}
                />
              </div>
              <div className="text-xs md:text-sm font-bold text-[#D32F2F] uppercase tracking-[0.2em] mb-1">
                {st.label}
              </div>
              <div className="text-xs text-zinc-400 font-normal">
                {st.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
