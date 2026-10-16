"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";
import { TopHeader } from "./TopHeader";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <TopHeader />

      <div className="mt-2 sm:mt-3 md:mt-4 mx-3 sm:mx-4 md:mx-6 lg:mx-auto max-w-7xl">
        <div className="rounded-2xl transition-all duration-300 flex items-center justify-between px-4 md:px-6 h-[72px] lg:h-[80px] bg-white/95 backdrop-blur-md border border-zinc-200/80 shadow-md shadow-black/5">
          {/* Brand Logo */}
          <Link href="/" className="relative shrink-0 flex items-center gap-2 group">
            <div className="relative h-12 md:h-14 w-32 md:w-40 flex items-center">
              <Image
                src="/images/tls-logo.jpg"
                alt="TLS Transport - Transport Logistics Solutions"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {SITE_CONFIG.navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2.5 text-[14px] font-semibold tracking-wide rounded-lg transition-colors ${
                    isActive
                      ? "text-[#D32F2F] font-bold"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#D32F2F]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Cluster */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={SITE_CONFIG.phoneLink}
              className="flex items-center gap-2 text-[14px] font-bold text-zinc-800 hover:text-[#D32F2F] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#D32F2F]">
                <Phone className="w-4 h-4 fill-current text-[#D32F2F]" />
              </div>
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <Link
              href="/quote"
              className="inline-flex items-center gap-2 text-[14px] font-bold px-5 py-2.5 rounded-xl transition-all duration-300 bg-[#D32F2F] text-white hover:bg-[#b71c1c] shadow-md shadow-red-700/25 active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={SITE_CONFIG.phoneLink}
              className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#D32F2F]"
              aria-label="Direct Call Desk"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-xl transition-colors hover:bg-zinc-100 text-zinc-800"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10, scale: 0.98 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:hidden mt-2 p-5 bg-white rounded-2xl border border-zinc-200/90 shadow-2xl flex flex-col gap-3"
            >
              <nav className="flex flex-col space-y-1">
                {SITE_CONFIG.navLinks.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href || pathname.startsWith(item.href + "/");

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-red-50 text-[#D32F2F] font-bold"
                          : "text-zinc-700 hover:bg-zinc-100"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#D32F2F]" />}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2">
                <a
                  href={SITE_CONFIG.phoneLink}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-100 text-zinc-800 font-bold text-sm"
                >
                  <Phone className="w-4 h-4 text-[#D32F2F]" />
                  <span>Call Desk: {SITE_CONFIG.phoneDisplay}</span>
                </a>

                <Link
                  href="/quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#D32F2F] text-white font-bold text-sm shadow-lg shadow-red-700/25 active:scale-95"
                >
                  <span>Request Dispatch Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
