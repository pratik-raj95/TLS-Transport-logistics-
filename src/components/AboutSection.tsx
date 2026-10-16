"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function AboutSection() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image with double decorative rotated card backdrops & floating badge */}
          <div className="relative">
            <div className="absolute -inset-4 bg-zinc-100 rounded-[2.5rem] -z-10 transform rotate-2" />
            <div className="absolute -inset-4 bg-red-500/10 rounded-[2.5rem] -z-10 transform -rotate-2" />

            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-200/80 border-[6px] border-white group">
              <Image
                src="/images/about-logistics.jpg"
                alt="TLS Transport Operations"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-8 left-6 sm:left-10 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl shadow-zinc-300/60 border border-zinc-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0 text-[#D32F2F]">
                <ShieldCheck className="w-7 h-7 text-[#D32F2F]" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-zinc-900">
                  100% Reliable
                </div>
                <div className="text-xs font-semibold text-zinc-500">
                  Trusted Logistics Partner
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Features */}
          <div className="space-y-6 lg:pl-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-1 bg-[#D32F2F] rounded-full" />
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#D32F2F] uppercase">
                About {SITE_CONFIG.brandName}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 leading-[1.15] tracking-tight">
              Enterprise Logistics, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-red-600">
                Delivered with Excellence
              </span>
            </h2>

            <div className="pl-6 border-l-4 border-[#D32F2F]">
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium">
                {SITE_CONFIG.companyName} is a trusted logistics and transportation company
                providing dependable transportation solutions across India. We specialize in
                truck, trailer, container, ODC, vehicle, tempo, storage, and freight services.
              </p>
            </div>

            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
              Based at our central operational depot in MET City, Jhajjar, Haryana, our mission
              is to deliver safe, timely, and cost-effective logistics services while building
              enduring partnerships through transparency, vehicle reliability, and disciplined dispatch.
            </p>

            {/* Feature Pills */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <CheckCircle2 className="w-5 h-5 text-[#D32F2F] shrink-0 mt-0.5" />
                <span className="text-zinc-800 font-bold text-sm leading-snug">
                  Nationwide Network Spanning 500+ Cities
                </span>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <CheckCircle2 className="w-5 h-5 text-[#D32F2F] shrink-0 mt-0.5" />
                <span className="text-zinc-800 font-bold text-sm leading-snug">
                  Modern Fleet with GPS Tracking
                </span>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 sm:col-span-2">
                <CheckCircle2 className="w-5 h-5 text-[#D32F2F] shrink-0 mt-0.5" />
                <span className="text-zinc-800 font-bold text-sm leading-snug">
                  24/7 Dedicated Support Team & Operations Desk
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-3 bg-zinc-900 text-white font-bold px-8 py-4 rounded-xl text-sm hover:bg-[#D32F2F] transition-all duration-300 shadow-xl shadow-zinc-900/10 active:scale-95"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
