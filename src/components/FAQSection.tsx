"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "./motion/MotionWrapper";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <MotionReveal className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-xs font-extrabold tracking-widest text-[#D32F2F] uppercase bg-red-50 border border-red-100 px-4 py-1.5 rounded-full">
            CLEAR ANSWERS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            Essential operational information regarding our freight booking, route visibility, and cargo protection.
          </p>
        </MotionReveal>

        <MotionStagger className="space-y-4" stagger={0.06}>
          {SITE_CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <MotionStaggerItem
                key={faq.question}
                className="rounded-2xl border border-zinc-200/90 overflow-hidden bg-white shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-zinc-900 hover:text-[#D32F2F] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-2">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#D32F2F] text-white rotate-180"
                        : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={shouldReduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-zinc-600 text-sm sm:text-base leading-relaxed border-t border-zinc-100 pt-4">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
