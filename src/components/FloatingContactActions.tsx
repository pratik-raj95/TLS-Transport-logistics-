"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";

export function FloatingContactActions() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center"
    >
      {/* Phone Call Float Button */}
      <a
        href={SITE_CONFIG.phoneLink}
        className="w-12 h-12 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 flex items-center justify-center transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Direct Phone Call"
      >
        <Phone className="w-5 h-5 fill-current" />
      </a>

      {/* WhatsApp Chat Float Button */}
      <a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 flex items-center justify-center transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-emerald-400"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </motion.div>
  );
}
