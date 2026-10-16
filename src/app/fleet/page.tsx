import React from "react";
import { FleetSection } from "@/components/FleetSection";
import { CtaBanner } from "@/components/CtaBanner";
import { SITE_CONFIG } from "@/config/site";
import { MotionHero } from "@/components/motion/MotionWrapper";

export const metadata = {
  title: `Active Commercial Fleet | ${SITE_CONFIG.brandName}`,
  description:
    "Equipped with modern specifications, safety equipment, and GPS tracking to handle every logistics requirement across India.",
};

export default function FleetPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Header Hero (Dark) */}
      <section className="relative pt-36 md:pt-44 pb-20 bg-black text-white overflow-hidden border-b border-zinc-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D32F2F]/15 rounded-full blur-[140px] pointer-events-none" />

        <MotionHero
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4"
          eyebrow={
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold tracking-[0.2em] text-white uppercase bg-white/5 backdrop-blur-md">
              HIGH CAPACITY CARRIERS
            </div>
          }
          heading={
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              {SITE_CONFIG.brandName} <span className="text-[#D32F2F]">Active Fleet</span>
            </h1>
          }
          description={
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
              Equipped with modern specifications, safety equipment, and GPS tracking to handle every logistics requirement.
            </p>
          }
        />
      </section>

      {/* 2. Full Alternating Fleet Showcase with Pillars */}
      <FleetSection isFullPage={true} />

      {/* 3. CTA Banner */}
      <CtaBanner
        variant="dark"
        title="Schedule Your Commercial Fleet Load"
        subtitle="Work with India's premium transport enterprise. Connect with our dedicated fleet managers to reserve standard and containers on-demand."
        primaryButtonText="REQUEST A FLEET BOOKING"
        primaryButtonHref="/quote"
        secondaryButtonText="CONTACT LOGISTICS DESK"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
