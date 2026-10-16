import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { MotionReveal } from "@/components/motion/MotionWrapper";

export const metadata = {
  title: `Privacy Policy | ${SITE_CONFIG.brandName}`,
  description: `Privacy policy and consignment data handling principles of ${SITE_CONFIG.brandName} (TRANSPORT LOGISTICS SOLUTIONS).`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative pt-36 md:pt-44 pb-16 bg-black text-white overflow-hidden border-b border-zinc-900">
        <MotionReveal className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Privacy Policy</span>
          </div>
          <span className="inline-block text-xs font-extrabold tracking-widest text-[#D32F2F] uppercase bg-red-950/60 border border-red-900/40 px-3 py-1 rounded-full mb-3">
            LEGAL & COMPLIANCE
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-sm md:text-base mt-2">
            Last Updated: January 2026 | {SITE_CONFIG.companyName}
          </p>
        </MotionReveal>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white text-zinc-800">
        <MotionReveal className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D32F2F]" />
              1. Information Collection & Usage
            </h2>
            <p className="text-sm text-zinc-600">
              {SITE_CONFIG.brandName} collects corporate operational information solely required for quoting, freight scheduling, E-way bill verification, and dock dispatch. This includes consignor/consignee names, pickup/delivery postal addresses, cargo categories, vehicle specifications, and telephone contact points.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D32F2F]" />
              2. Data Protection & Transit Telematics
            </h2>
            <p className="text-sm text-zinc-600">
              Fleet telematics and GPS coordinates generated during transit are used exclusively for shipment milestone tracking and road safety monitoring. We never monetize, sell, or disclose consignment records to third-party advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D32F2F]" />
              3. Communication & Direct Inquiries
            </h2>
            <p className="text-sm text-zinc-600">
              When inquiries are initiated via our official website forms or WhatsApp dispatch channels, communication is directed strictly to our registered operations hub at {SITE_CONFIG.address} You may reach out directly to our desk at {SITE_CONFIG.phoneDisplay}.
            </p>
          </div>
        </MotionReveal>
      </section>
    </div>
  );
}
