import React from "react";
import Image from "next/image";
import { ShieldCheck, Users, Award } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { SITE_CONFIG } from "@/config/site";
import { MotionHero, MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/motion/MotionWrapper";

export const metadata = {
  title: `About Us | ${SITE_CONFIG.brandName}`,
  description:
    "Learn about TLS Transport, our central fleet depot in MET City Jhajjar, and our unwavering commitment to India's supply chain.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Header Hero (Dark) */}
      <section className="relative pt-36 md:pt-44 pb-20 bg-black text-white overflow-hidden border-b border-zinc-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D32F2F]/15 rounded-full blur-[140px] pointer-events-none" />

        <MotionHero
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4"
          eyebrow={
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold tracking-[0.2em] text-white uppercase bg-white/5 backdrop-blur-md">
              OUR LEGACY & JOURNEY
            </div>
          }
          heading={
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              About <span className="text-[#D32F2F]">{SITE_CONFIG.brandName}</span>
            </h1>
          }
          description={
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
              Pioneering enterprise logistics with dedicated carrier fleet, and nationwide connectivity.
            </p>
          }
        />
      </section>

      {/* 2. Our History & Commitment Section */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Image with Overlapping Badge */}
            <div className="lg:col-span-6 relative">
              <MotionReveal direction="right" distance={20} duration={0.6}>
                <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-zinc-100">
                  <Image
                    src="/images/about-logistics.jpg"
                    alt="TLS Transport Commercial Fleet"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Overlapping Years Badge matching reference screenshot */}
                <div className="absolute -bottom-6 -right-4 sm:bottom-4 sm:right-4 bg-[#D32F2F] text-white p-6 rounded-2xl shadow-2xl text-center min-w-[140px] border-2 border-white">
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    15+
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-0.5">
                    YEARS OF TRUST
                  </div>
                </div>
              </MotionReveal>
            </div>

            {/* Right Column: History Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <MotionReveal direction="left" distance={20} duration={0.6}>
                <span className="text-xs font-extrabold tracking-widest text-[#D32F2F] uppercase">
                  OUR HISTORY
                </span>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 leading-tight mt-2">
                  An Unwavering Commitment to India&apos;s Supply Chain
                </h2>

                <div className="pl-6 border-l-4 border-[#D32F2F] my-4">
                  <p className="text-zinc-700 text-base leading-relaxed font-medium">
                    Established with a clear vision to redefine reliability in road transport and freight movement,
                    {SITE_CONFIG.brandName} operates from our central hub at MET City, Jhajjar, Haryana.
                  </p>
                </div>

                <p className="text-zinc-600 text-base leading-relaxed">
                  Today, we are proud to stand as a trusted logistics partner for manufacturing plants, infrastructure projects, and commercial enterprises.
                </p>

                <p className="text-zinc-600 text-base leading-relaxed">
                  We believe that modern businesses need more than just carrier space; they need a proactive, responsive,
                  and accountable supply chain partner. That is why we invest in disciplined dispatch protocols, real-time
                  telematics tracking, and automated operations to guarantee consistent, safe, and on-time transit every single time.
                </p>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What Drives Us (Core Principles) */}
      <section className="py-20 md:py-28 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <MotionReveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold tracking-widest text-[#D32F2F] uppercase">
              OUR PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
              What Drives Us
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg">
              Our operations are rooted in these core principles to ensure elite logistical delivery.
            </p>
          </MotionReveal>

          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Safety & Compliance */}
            <MotionStaggerItem className="h-full">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between h-full">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#D32F2F] flex items-center justify-center mb-6">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-zinc-900 mb-3">
                    Safety & Compliance
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Every container, load, and transport job is managed using strictly verified transit protocols, audited
                    equipment, and vetted commercial drivers.
                  </p>
                </div>
              </div>
            </MotionStaggerItem>

            {/* Card 2: Customer First Focus */}
            <MotionStaggerItem className="h-full">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between h-full">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#D32F2F] flex items-center justify-center mb-6">
                    <Users className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-zinc-900 mb-3">
                    Customer First Focus
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    We assign dedicated account representatives to manage and streamline communication, reporting, and transit
                    optimization for you.
                  </p>
                </div>
              </div>
            </MotionStaggerItem>

            {/* Card 3: Operational Excellence */}
            <MotionStaggerItem className="h-full">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between h-full">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#D32F2F] flex items-center justify-center mb-6">
                    <Award className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-zinc-900 mb-3">
                    Operational Excellence
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Continuous investments into vehicle maintenance and automated road diagnostics ensure top-tier transit uptime.
                  </p>
                </div>
              </div>
            </MotionStaggerItem>
          </MotionStagger>
        </div>
      </section>

      {/* 4. Bottom CTA Banner */}
      <CtaBanner
        variant="red-gradient"
        title="Ready to Optimize Your Logistics?"
        subtitle="Partner with TLS Transport for dedicated vehicle availability, competitive freight pricing, and punctual delivery."
        primaryButtonText="GET A QUOTE"
        primaryButtonHref="/quote"
        secondaryButtonText="SPEAK TO AN EXPERT"
        secondaryButtonHref={SITE_CONFIG.phoneLink}
      />
    </div>
  );
}
