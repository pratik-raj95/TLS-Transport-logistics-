"use client";

import { Phone, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function TopHeader() {
  return (
    <div className="hidden lg:block bg-[#1A1A1A] text-white/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-8 text-xs tracking-wide">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>24/7 Pan India Operations</span>
          <span className="text-zinc-500 mx-1">|</span>
          <span className="text-zinc-400">Hub: {SITE_CONFIG.hubLocation}</span>
        </span>
        <div className="flex items-center divide-x divide-white/20 text-xs">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-4 hover:text-white transition-colors flex items-center gap-1.5 text-emerald-400"
          >
            <MessageSquare className="w-3 h-3 text-emerald-400" />
            <span>WhatsApp: {SITE_CONFIG.phoneDisplay}</span>
          </a>
          <a
            href={SITE_CONFIG.phoneLink}
            className="pl-4 font-semibold hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3 h-3 text-[#D32F2F]" />
            <span>Call: {SITE_CONFIG.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
