"use client";

import React from "react";
import { Headphones, Globe, ShieldCheck, Users, CheckCircle2, Building2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function AdvantageSection() {
  const advantages = [
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Round-the-clock dedicated support and dispatch desk for all your logistics needs.",
    },
    {
      icon: Globe,
      title: "Pan India Coverage",
      desc: "Operations spanning 500+ cities across every major Indian state and industrial cluster.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Insured",
      desc: "Comprehensive goods-in-transit liability coverage and verified multi-point vehicle safety protocols.",
    },
    {
      icon: Users,
      title: "Expert Team",
      desc: "Trained highway commercial pilots, verified fleet engineers, and seasoned logistics coordinators.",
    },
    {
      icon: CheckCircle2,
      title: "Full Transparency",
      desc: "Real-time GPS telematics, scheduled milestone notifications, and clear transparent freight billing.",
    },
    {
      icon: Building2,
      title: "Enterprise Grade",
      desc: "Tailored SLA contracts, guaranteed fleet placement from MET City Jhajjar, and dedicated account management.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#D32F2F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-xs font-extrabold tracking-widest text-[#D32F2F] uppercase bg-red-950/60 border border-red-900/40 px-4 py-1.5 rounded-full">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            The {SITE_CONFIG.brandName}{" "}
            <span className="text-[#D32F2F]">Advantage</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            What makes us India&apos;s dependable enterprise logistics partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="p-8 rounded-3xl bg-[#141414] border border-zinc-800/80 hover:border-red-900/50 hover:bg-[#181818] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-red-950/40 border border-red-900/30 flex items-center justify-center text-[#D32F2F] mb-6 group-hover:scale-110 group-hover:bg-[#D32F2F] group-hover:text-white transition-all duration-300 shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D32F2F]" />
                  <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                    Verified Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
