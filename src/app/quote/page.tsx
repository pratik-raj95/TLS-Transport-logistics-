import React from "react";
import { QuotePlannerForm } from "@/components/QuotePlannerForm";
import { ShieldCheck, Clock, Truck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const metadata = {
  title: `Get a Transport Quote | ${SITE_CONFIG.brandName}`,
  description:
    "Request an instant enterprise freight and truck transportation quote from TLS Transport MET City Jhajjar hub.",
};

export default function QuotePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Header Hero (Dark) */}
      <section className="relative pt-36 md:pt-44 pb-20 bg-black text-white overflow-hidden border-b border-zinc-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D32F2F]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold tracking-[0.2em] text-white uppercase bg-white/5 backdrop-blur-md">
            INSTANT LOGISTICS ESTIMATE
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Request an Enterprise <span className="text-[#D32F2F]">Freight Quote</span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Fast, transparent pricing tailored to your exact payload, route, and transit urgency.
          </p>
        </div>
      </section>

      {/* 2. Form & Assurance Section */}
      <section className="py-16 md:py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-extrabold tracking-widest text-[#D32F2F] uppercase">
                WHY GET A QUOTE WITH TLS
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 leading-snug">
                Transparent Freight Rates With Dedicated Carrier Reliability
              </h2>

              <p className="text-zinc-600 text-sm leading-relaxed">
                Whether you need a single 32ft container truck or regular multi-axle trailer dispatches,
                our pricing structure is completely transparent with zero hidden highway surcharges.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-zinc-200">
                  <Clock className="w-5 h-5 text-[#D32F2F] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">
                      15–30 Minute Turnaround
                    </h4>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Prompt rate indications and vehicle confirmation during operations hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-zinc-200">
                  <ShieldCheck className="w-5 h-5 text-[#D32F2F]" />
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">
                      Insured Carrier Operations
                    </h4>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Standardized cargo protection protocols for high-value merchandise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-zinc-200">
                  <Truck className="w-5 h-5 text-[#D32F2F]" />
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">
                      Direct Hub Placement
                    </h4>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Vehicles positioned directly from MET City Jhajjar depot to your loading dock.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0B0B0B] text-white space-y-2">
                <div className="text-xs text-[#D32F2F] font-bold uppercase tracking-wider">
                  Need Urgent Placement?
                </div>
                <div className="text-lg font-bold">
                  Call Our Dispatch Desk Directly:
                </div>
                <a
                  href={SITE_CONFIG.phoneLink}
                  className="inline-block text-xl font-extrabold text-white hover:text-red-400 transition-colors"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Right Column: Freight Transport Planner Form */}
            <div className="lg:col-span-7">
              <QuotePlannerForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
