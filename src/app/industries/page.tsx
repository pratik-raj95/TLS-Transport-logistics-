import React from "react";
import { IndustriesSection } from "@/components/IndustriesSection";
import { CtaBanner } from "@/components/CtaBanner";
import { SITE_CONFIG } from "@/config/site";
import { MotionHero } from "@/components/motion/MotionWrapper";

export const metadata = {
  title: `Industries We Serve | ${SITE_CONFIG.brandName}`,
  description:
    "Specialized logistics solutions powering the core sectors of the Indian economy: Manufacturing, Automobile, Construction, Retail & FMCG, Heavy Machinery, and Pharmaceuticals.",
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Header Hero (Dark) */}
      <section className="relative pt-36 md:pt-44 pb-20 bg-black text-white overflow-hidden border-b border-zinc-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D32F2F]/15 rounded-full blur-[140px] pointer-events-none" />

        <MotionHero
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4"
          eyebrow={
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold tracking-[0.2em] text-white uppercase bg-white/5 backdrop-blur-md">
              INDUSTRY EXPERTISE
            </div>
          }
          heading={
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Industries <span className="text-[#D32F2F]">We Serve</span>
            </h1>
          }
          description={
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
              Specialized logistics solutions powering the core sectors of the Indian economy.
            </p>
          }
        />
      </section>

      {/* 2. Full 8-Industry Grid */}
      <IndustriesSection isFullPage={true} />

      {/* 3. CTA Banner */}
      <CtaBanner
        variant="dark"
        title="Scale Your Industry Operations"
        subtitle="Partner with us to build a robust, seamless, and highly efficient supply chain for your sector."
        primaryButtonText="Request an Industry Quote"
        primaryButtonHref="/quote"
        secondaryButtonText="DISCUSS WITH SPECIALISTS"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
