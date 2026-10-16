import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, Truck, ShieldCheck, ChevronRight, HelpCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { ContactForm } from "@/components/ContactForm";
import { CtaBanner } from "@/components/CtaBanner";

export async function generateStaticParams() {
  const baseParams = SITE_CONFIG.services.map((svc) => ({
    slug: svc.slug,
  }));
  return [...baseParams, { slug: "close-body-truck-services" }];
}

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = SITE_CONFIG.services.find(
    (s) => s.slug === slug || (slug === "close-body-truck-services" && s.slug === "close-body-truck")
  );

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Header Hero */}
      <section className="relative pt-36 md:pt-44 pb-20 bg-black text-white overflow-hidden border-b border-zinc-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D32F2F]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">{service.title}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold tracking-[0.2em] text-white uppercase bg-white/5 backdrop-blur-md mb-4">
            {service.category}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl">
            {service.title}
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-3xl mt-4 leading-relaxed font-normal">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* 2. Main Content & Form Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Details (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              {/* Featured Image */}
              <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-xl border border-zinc-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Comprehensive Description */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
                  Service Overview
                </h2>
                <p className="text-zinc-600 text-base leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 space-y-4">
                <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#D32F2F]" />
                  Operational Highlights & Capabilities
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {service.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D32F2F] shrink-0 mt-1" />
                      <span className="text-sm text-zinc-700 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cargo Types Handled */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-zinc-900">
                  Typical Cargo Handled
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.cargoTypes.map((cargo) => (
                    <div
                      key={cargo}
                      className="p-4 rounded-xl border border-zinc-200 bg-white shadow-sm flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#D32F2F]" />
                      <span className="text-sm font-semibold text-zinc-800">
                        {cargo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Benefits */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#D32F2F]" />
                  Key Operational Advantages
                </h3>
                <ul className="space-y-3">
                  {service.operationalBenefits.map((ben) => (
                    <li
                      key={ben}
                      className="flex items-start gap-3 text-sm text-zinc-600"
                    >
                      <div className="w-5 h-5 rounded-full bg-red-50 text-[#D32F2F] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <span className="leading-relaxed">{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-zinc-200">
                  <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#D32F2F]" />
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    {service.faqs.map((faq) => (
                      <div
                        key={faq.question}
                        className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200"
                      >
                        <h4 className="font-bold text-zinc-900 text-sm mb-1.5">
                          {faq.question}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Direct Booking Form (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <CtaBanner
        variant="dark"
        title="Schedule Your Freight Movement"
        subtitle={`Connect with our operations desk for verified vehicle placement and competitive tariffs for ${service.title}.`}
        primaryButtonText="GET INSTANT QUOTE"
        primaryButtonHref="/quote"
        secondaryButtonText="VIEW ALL SERVICES"
        secondaryButtonHref="/services"
      />
    </div>
  );
}
