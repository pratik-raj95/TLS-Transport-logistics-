"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "./motion/MotionWrapper";

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <MotionReveal className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-xs font-extrabold tracking-widest text-[#D32F2F] uppercase bg-red-50 border border-red-100 px-4 py-1.5 rounded-full">
            CLIENT SATISFACTION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Trusted By India&apos;s Leaders
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            Verifiable feedback from industrial shippers, plant logistics heads, and distribution partners.
          </p>
        </MotionReveal>

        <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.1}>
          {SITE_CONFIG.testimonials.map((t) => (
            <MotionStaggerItem
              key={t.name}
              className="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-zinc-200" />
                </div>

                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm sm:text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs text-zinc-500 font-medium">
                    {t.company}
                  </p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D32F2F] bg-red-50 px-2.5 py-1 rounded-md">
                  {t.sector}
                </span>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
