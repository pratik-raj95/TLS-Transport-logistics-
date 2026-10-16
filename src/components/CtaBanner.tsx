"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface CtaBannerProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: "dark" | "red-gradient";
}

export function CtaBanner({
  title,
  subtitle,
  primaryButtonText = "REQUEST AN INSTANT QUOTE",
  primaryButtonHref = "/quote",
  secondaryButtonText,
  secondaryButtonHref = "/contact",
  variant = "dark",
}: CtaBannerProps) {
  if (variant === "red-gradient") {
    return (
      <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-r from-[#b71c1c] via-[#D32F2F] to-[#8E0000] text-white text-center overflow-hidden">
        {/* Subtle background glow & texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-normal">
            {subtitle}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryButtonHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-900 font-extrabold text-sm uppercase tracking-wider rounded-xl hover:bg-zinc-100 transition-all shadow-xl active:scale-95"
            >
              <span>{primaryButtonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {secondaryButtonText && (
              <a
                href={SITE_CONFIG.phoneLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/80 bg-white/10 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>{secondaryButtonText}</span>
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Dark variant (used in Industries, About, Fleet, Services)
  return (
    <section className="relative py-24 px-4 sm:px-6 bg-[#0B0B0B] text-white text-center border-t border-zinc-900 overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D32F2F]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-5">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          {title}
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryButtonHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D32F2F] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl hover:bg-[#b71c1c] transition-all shadow-lg shadow-red-900/30 active:scale-95"
          >
            <span>{primaryButtonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {secondaryButtonText && (
            <Link
              href={secondaryButtonHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-zinc-700 bg-white/5 text-zinc-200 font-extrabold text-sm uppercase tracking-wider rounded-xl hover:bg-white/10 hover:border-zinc-500 transition-all active:scale-95"
            >
              <span>{secondaryButtonText}</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
