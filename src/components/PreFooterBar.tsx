"use client";

import React from "react";
import Link from "next/link";
import { Truck, ArrowRight } from "lucide-react";

export function PreFooterBar() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-20 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-zinc-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-6 text-left w-full md:w-auto">
          <div className="w-16 h-16 bg-[#D32F2F] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-red-900/30">
            <Truck className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Need a transport solution?
            </h3>
            <p className="text-zinc-400 text-sm md:text-base">
              Get an instant quote for your enterprise logistics needs.
            </p>
          </div>
        </div>

        <Link
          href="/quote"
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider hover:bg-[#D32F2F] hover:text-white transition-all duration-300 shadow-md"
        >
          <span>Request Pricing</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
