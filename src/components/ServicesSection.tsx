"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface ServicesSectionProps {
  limit?: number;
  showHeading?: boolean;
}

export function ServicesSection({
  limit = 0,
  showHeading = true,
}: ServicesSectionProps) {
  const displayedServices = limit > 0
    ? SITE_CONFIG.services.slice(0, limit)
    : SITE_CONFIG.services;

  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-extrabold tracking-widest text-[#D32F2F] uppercase bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg">
              End-to-end transportation capabilities engineered for enterprise scale.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((svc, index) => {
            const indexNumber = String(index + 1).padStart(2, "0");

            return (
              <div key={svc.slug} className="h-full">
                <Link
                  href={`/services/${svc.slug}`}
                  className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-zinc-200/80 shadow-sm hover:shadow-2xl hover:shadow-red-900/10 hover:-translate-y-1.5 transition-all duration-500 h-full"
                >
                  {/* Top Image with dark gradient and badge */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-100">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-[#D32F2F] px-3 py-1.5 rounded-full shadow-md">
                        {svc.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 md:p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-3 group-hover:text-[#D32F2F] transition-colors leading-snug">
                        {svc.title}
                      </h3>
                      <p className="text-zinc-600 text-sm leading-relaxed font-normal line-clamp-3">
                        {svc.shortDesc}
                      </p>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-zinc-800 group-hover:text-[#D32F2F] transition-colors">
                        <span>Explore Service</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </span>

                      <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                        <span className="text-[11px] text-zinc-500 group-hover:text-[#D32F2F] font-bold">
                          {indexNumber}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {limit && limit < SITE_CONFIG.services.length && (
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white font-bold rounded-xl text-sm hover:bg-[#D32F2F] transition-all shadow-lg active:scale-95"
            >
              <span>View All 13 Logistics Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
