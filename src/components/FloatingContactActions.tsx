"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function FloatingContactActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      {/* Phone Call Float Button */}
      <a
        href={SITE_CONFIG.phoneLink}
        className="w-12 h-12 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Direct Phone Call"
      >
        <Phone className="w-5 h-5 fill-current" />
      </a>

      {/* WhatsApp Chat Float Button */}
      <a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-emerald-400 animate-bounce duration-1000"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
}
