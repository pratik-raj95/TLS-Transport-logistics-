import React from "react";
import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const metadata = {
  title: `Terms & Conditions | ${SITE_CONFIG.brandName}`,
  description: `Operational terms and commercial conditions governing transport services with ${SITE_CONFIG.brandName} (TRANSPORT LOGISTICS SOLUTIONS).`,
};

export default function TermsConditionsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative pt-36 md:pt-44 pb-16 bg-black text-white overflow-hidden border-b border-zinc-900">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Terms & Conditions</span>
          </div>
          <span className="inline-block text-xs font-extrabold tracking-widest text-[#D32F2F] uppercase bg-red-950/60 border border-red-900/40 px-3 py-1 rounded-full mb-3">
            LEGAL & OPERATIONS
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-zinc-400 text-sm md:text-base mt-2">
            Last Updated: January 2026 | {SITE_CONFIG.companyName}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white text-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#D32F2F]" />
              1. Fleet Engagement & Transit Quotations
            </h2>
            <p className="text-sm text-zinc-600">
              Vehicle placement and freight quotations provided by {SITE_CONFIG.brandName} are subject to vehicle availability, route accessibility, axle load compliance, and timely loading at the designated origin. Commercial tariffs remain valid for the period specified on official dispatch confirmations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#D32F2F]" />
              2. Consignor Responsibilities & Statutory E-Way Bills
            </h2>
            <p className="text-sm text-zinc-600">
              The consignor is responsible for ensuring all cargo items are accompanied by valid tax invoices, statutory E-way bills, and clear packaging declarations. Prohibited, contraband, or hazardous goods lacking statutory clearance will not be accepted for carriage.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#D32F2F]" />
              3. Jurisdiction & Dispute Resolution
            </h2>
            <p className="text-sm text-zinc-600">
              All commercial engagements, freight disputes, and transport service agreements are subject to the exclusive jurisdiction of the competent courts in Jhajjar/Haryana, India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
