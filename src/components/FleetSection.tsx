"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Truck, ShieldCheck, Cpu, ArrowRight, Gauge, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface FleetSectionProps {
  isFullPage?: boolean;
}

export function FleetSection({ isFullPage = false }: FleetSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {!isFullPage && (
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-extrabold tracking-widest text-[#D32F2F] uppercase bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              High Capacity Carriers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
              Modern Fleet for Every Need
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg">
              Engineered payload capacity, verified mechanical reliability, and continuous GPS telematics.
            </p>
          </div>
        )}

        {/* Alternating Fleet Cards */}
        <div className="space-y-12 md:space-y-16">
          {SITE_CONFIG.fleet.map((item, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 md:p-10 rounded-3xl bg-zinc-50 border border-zinc-200/80 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image container */}
                <div
                  className={`lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-md group ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Details container */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="inline-block text-xs font-bold text-[#D32F2F] tracking-widest uppercase bg-red-100/70 border border-red-200 px-3.5 py-1.5 rounded-full">
                    {item.payload}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
                    {item.title}
                  </h3>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center shrink-0 mt-0.5">
                        <Truck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                          Vehicle Specs:
                        </div>
                        <p className="text-sm text-zinc-600 leading-relaxed mt-0.5">
                          {item.specs}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center shrink-0 mt-0.5">
                        <Gauge className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                          Primary Logistics Use:
                        </div>
                        <p className="text-sm text-zinc-600 leading-relaxed mt-0.5">
                          {item.logisticsUse}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {item.features.map((feat) => (
                      <span
                        key={feat}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 px-3 py-1.5 rounded-lg"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D32F2F]" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Fleet Assurance Pillars */}
        <div className="mt-20 pt-12 border-t border-zinc-200 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
            <div className="w-14 h-14 rounded-2xl bg-white border-2 border-red-100 flex items-center justify-center text-[#D32F2F] mb-4 shadow-sm">
              <Cpu className="w-7 h-7 text-[#D32F2F]" />
            </div>
            <h4 className="text-lg font-bold text-zinc-900 mb-2">
              GPS Integrated Fleet
            </h4>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Every truck is tracked in real-time, sending automated milestone updates and proactive dispatch alerts.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
            <div className="w-14 h-14 rounded-2xl bg-white border-2 border-red-100 flex items-center justify-center text-[#D32F2F] mb-4 shadow-sm">
              <ShieldCheck className="w-7 h-7 text-[#D32F2F]" />
            </div>
            <h4 className="text-lg font-bold text-zinc-900 mb-2">
              Strict Vehicle Mandates
            </h4>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Rigorous mechanical audits, routine driver background checks, and strict roadworthiness certification.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
            <div className="w-14 h-14 rounded-2xl bg-white border-2 border-red-100 flex items-center justify-center text-[#D32F2F] mb-4 shadow-sm">
              <Truck className="w-7 h-7 text-[#D32F2F]" />
            </div>
            <h4 className="text-lg font-bold text-zinc-900 mb-2">
              Insured Transit Operations
            </h4>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Comprehensive cargo liability protection, minimizing risk profiles for heavy and sensitive freight.
            </p>
          </div>
        </div>

        {!isFullPage && (
          <div className="mt-12 text-center">
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white font-bold rounded-xl text-sm hover:bg-[#D32F2F] transition-all shadow-lg"
            >
              <span>Explore Fleet Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
