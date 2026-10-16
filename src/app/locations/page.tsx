import React from "react";
import { LocationsDirectory } from "@/components/LocationsDirectory";
import { CtaBanner } from "@/components/CtaBanner";
import { SITE_CONFIG } from "@/config/site";
import { Star, Award, ShieldCheck } from "lucide-react";

export const metadata = {
  title: `Operational Hubs & Cities | ${SITE_CONFIG.brandName}`,
  description:
    "Explore TLS Transport's nationwide network spanning 500+ Indian cities with central fleet dispatch from MET City, Jhajjar, Haryana.",
};

export default function LocationsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Header Hero (Dark) */}
      <section className="relative pt-36 md:pt-44 pb-20 bg-black text-white overflow-hidden border-b border-zinc-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D32F2F]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold tracking-[0.2em] text-white uppercase bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
            PAN-INDIA COVERAGE
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Operational <span className="text-[#D32F2F]">Hubs & Cities</span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Operating across 500+ major expressways, industrial hubs, and commercial corridors with reliable dispatch nodes.
          </p>
        </div>
      </section>

      {/* 2. 3 Location Feature Pillars */}
      <section className="py-12 md:py-16 bg-white relative z-20 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-[#D32F2F]/30 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-zinc-100 flex items-center justify-center mb-6 text-[#D32F2F]">
                <Star className="w-6 h-6 text-[#D32F2F]" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Pan-India Reach</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Serving 500+ active metropolitan and remote logistics sectors across the nation.
              </p>
            </div>

            <div className="flex flex-col p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-[#D32F2F]/30 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-zinc-100 flex items-center justify-center mb-6 text-[#D32F2F]">
                <Award className="w-6 h-6 text-[#D32F2F]" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">24/7 Terminals</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Central corporate dispatch hub at MET City Jhajjar coordinating active driver tracking and route audits.
              </p>
            </div>

            <div className="flex flex-col p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-[#D32F2F]/30 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-zinc-100 flex items-center justify-center mb-6 text-[#D32F2F]">
                <ShieldCheck className="w-6 h-6 text-[#D32F2F]" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Safe Road Clearances</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Standardized route survey compliance and zero-delay interstate clearance support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Locations Directory & Network */}
      <section className="py-16 md:py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-zinc-900 mb-2">
              Our Transport Network
            </h2>
            <p className="text-zinc-500 text-sm">
              Search by city or filter by regional zone across India.
            </p>
          </div>
          <LocationsDirectory />
        </div>
      </section>

      {/* 4. CTA Banner */}
      <CtaBanner
        variant="red-gradient"
        title="Ready to Dispatch Cargo Nationwide?"
        subtitle="Our central dispatch desk organizes dedicated vehicle placement across any industrial belt in India."
        primaryButtonText="REQUEST ROUTE BOOKING"
        primaryButtonHref="/quote"
        secondaryButtonText="CALL DISPATCH DESK"
        secondaryButtonHref={SITE_CONFIG.phoneLink}
      />
    </div>
  );
}
