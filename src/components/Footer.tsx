"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, MessageSquare, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { PreFooterBar } from "./PreFooterBar";

export function Footer() {
  return (
    <footer className="relative bg-[#070707] text-zinc-400 border-t border-zinc-900 pt-16">
      {/* Overlapping Pre-footer banner */}
      <PreFooterBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-850">
          {/* Col 1: Brand & Head Office (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-2.5 rounded-xl inline-block shadow-md">
              <div className="relative h-12 w-36">
                <Image
                  src="/images/tls-logo.jpg"
                  alt="TLS Transport"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              India&apos;s trusted enterprise logistics partner. Delivering secure, scalable,
              and nationwide freight movement with dedicated carrier capacity.
            </p>

            {/* Hub info */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-950/60 border border-red-900/40 flex items-center justify-center shrink-0 text-[#D32F2F] mt-0.5">
                  <MapPin className="w-4 h-4 text-[#D32F2F]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">
                    JHAJJAR OPERATIONAL HUB
                  </div>
                  <div className="text-xs text-zinc-400 leading-relaxed mt-0.5">
                    {SITE_CONFIG.address}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-950/60 border border-red-900/40 flex items-center justify-center shrink-0 text-[#D32F2F]">
                  <Phone className="w-4 h-4 text-[#D32F2F]" />
                </div>
                <a
                  href={SITE_CONFIG.phoneLink}
                  className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-900/40 flex items-center justify-center shrink-0 text-emerald-400">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </div>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Our Services (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
              OUR SERVICES
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
              {SITE_CONFIG.services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="hover:text-white transition-colors py-0.5 truncate block"
                >
                  {svc.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Industries (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
              INDUSTRIES
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SITE_CONFIG.industries.map((ind) => (
                <li key={ind.id}>
                  <Link
                    href="/industries"
                    className="hover:text-white transition-colors block"
                  >
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Network & Company (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                NETWORK
              </h4>
              <ul className="space-y-2 text-xs">
                {SITE_CONFIG.networkCities.slice(0, 6).map((city) => (
                  <li key={city.name}>
                    <Link
                      href="/locations"
                      className="hover:text-white transition-colors"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/locations"
                    className="text-[#D32F2F] font-bold hover:underline inline-flex items-center gap-1 pt-1"
                  >
                    <span>Explore 500+ Cities</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                COMPANY
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/fleet" className="hover:text-white transition-colors">
                    Our Fleet
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 {SITE_CONFIG.brandName}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </Link>
            <a href="/sitemap.xml" className="hover:text-zinc-300 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
