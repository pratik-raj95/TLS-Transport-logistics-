import React from "react";
import { ServicesSection } from "@/components/ServicesSection";
import { CtaBanner } from "@/components/CtaBanner";
import { SITE_CONFIG } from "@/config/site";
import { MotionHero } from "@/components/motion/MotionWrapper";

export const metadata = {
  title: `Our Logistics Services | ${SITE_CONFIG.brandName}`,
  description:
    "Reliable, secure, and fully verified fleet solutions customized for your exact supply chain operations across India.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Header Hero (Dark) */}
      <section className="relative pt-36 md:pt-44 pb-20 bg-black text-white overflow-hidden border-b border-zinc-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D32F2F]/15 rounded-full blur-[140px] pointer-events-none" />

        <MotionHero
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4"
          eyebrow={
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold tracking-[0.2em] text-white uppercase bg-white/5 backdrop-blur-md">
              ENTERPRISE LOGISTICS
            </div>
          }
          heading={
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Our <span className="text-[#D32F2F]">Logistics Services</span>
            </h1>
          }
          description={
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
              Reliable, secure, and fully verified fleet solutions customized for your exact supply chain operations.
            </p>
          }
        />
      </section>

      {/* 2. Full 13-Service Grid */}
      <ServicesSection limit={13} showHeading={false} />

      {/* 3. CTA Banner */}
      <CtaBanner
        variant="dark"
        title="Need Custom Fleet Movements?"
        subtitle="Whether you require specialized container transportation or reliable full truck loads, our logistics team is on-standby to organize every movement."
        primaryButtonText="REQUEST CUSTOMIZED QUOTE"
        primaryButtonHref="/quote"
        secondaryButtonText="CALL DISPATCH DESK"
        secondaryButtonHref={SITE_CONFIG.phoneLink}
      />
    </div>
  );
}
