"use client";

import React from "react";

export function StatsBar() {
  const stats = [
    {
      value: "15+",
      label: "YEARS OF EXCELLENCE",
      subtext: "Established industry legacy & verified operations",
    },
    {
      value: "500+",
      label: "CITIES CONNECTED",
      subtext: "Robust nationwide arterial freight corridors",
    },
    {
      value: "100K+",
      label: "COMPLETED DELIVERIES",
      subtext: "Secure, scheduled, and on-time shipments",
    },
  ];

  return (
    <section className="relative py-16 bg-[#0B0B0B] border-y border-zinc-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D32F2F]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-zinc-800/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-zinc-850">
          {stats.map((st) => (
            <div
              key={st.label}
              className="flex flex-col items-center text-center px-4 py-4"
            >
              <div className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-2">
                <span>{st.value}</span>
              </div>
              <div className="text-xs md:text-sm font-bold text-[#D32F2F] uppercase tracking-[0.2em] mb-1">
                {st.label}
              </div>
              <div className="text-xs text-zinc-400 font-normal">
                {st.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
