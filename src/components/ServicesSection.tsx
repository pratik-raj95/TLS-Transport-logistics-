"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/motion/MotionWrapper";

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
          <MotionReveal className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-extrabold tracking-widest text-[#D32F2F] uppercase bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg">
              End-to-end transportation capabilities engineered for enterprise scale.
            </p>
          </MotionReveal>
        )}

        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((svc, index) => {
            const indexNumber = String(index + 1).padStart(2, "0");

            return (
              <MotionStaggerItem key={svc.slug} className="h-full">
                <Link
                  href={`/services/${svc.slug}`}
                  className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-zinc-200/80 shadow-sm hover:shadow-2xl hover:shadow-red-900/10 hover:-translate-y-1.5 transition-all duration-300 h-full"
                >
                  {/* Top Image with dark gradient and badge */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-100">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-[#D32F2F] px-3 py-1.5 rounded-full shadow-md">
                        {svc.tag}
                      </span>
                      <span className="text-xs font-extrabold text-white/90 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                        {indexNumber}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
                    <div>
                      <span className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider block mb-1">
                        {svc.category}
                      </span>
                      <h3 className="text-xl font-bold text-zinc-900 group-hover:text-[#D32F2F] transition-colors leading-snug">
                        {svc.title}
                      </h3>
                      <p className="text-zinc-500 text-sm line-clamp-2 mt-2 leading-relaxed">
                        {svc.shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-zinc-900 group-hover:text-[#D32F2F] transition-colors">
                      <span>View Specifications</span>
                      <div className="w-8 h-8 rounded-full bg-zinc-100 group-hover:bg-[#D32F2F] group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
