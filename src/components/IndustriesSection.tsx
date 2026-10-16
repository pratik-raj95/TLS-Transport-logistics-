"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface IndustriesSectionProps {
  isFullPage?: boolean;
}

export function IndustriesSection({ isFullPage = false }: IndustriesSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {!isFullPage && (
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-xs font-extrabold tracking-widest text-[#D32F2F] uppercase bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              Industry Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
              Tailored for Every Sector
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg">
              Precision transport workflows built around the specific regulatory and material demands of each industry.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.industries.map((ind) => (
            <div
              key={ind.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-zinc-200/90 shadow-sm hover:shadow-2xl hover:shadow-red-950/10 hover:-translate-y-1.5 transition-all duration-500 h-full"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-100">
                <Image
                  src={ind.image}
                  alt={ind.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Card Body */}
              <div className="p-7 md:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-2 group-hover:text-[#D32F2F] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-normal">
                    {ind.shortDesc}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D32F2F] hover:underline"
                  >
                    <span>Explore Sector</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    {ind.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isFullPage && (
          <div className="mt-14 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white font-bold rounded-xl text-sm hover:bg-[#D32F2F] transition-all shadow-lg active:scale-95"
            >
              <span>Explore All Industries We Serve</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
