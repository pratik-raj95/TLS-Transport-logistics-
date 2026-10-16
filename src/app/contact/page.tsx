import React from "react";
import { MapPin, Phone, Clock, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SITE_CONFIG } from "@/config/site";

export const metadata = {
  title: `Contact Us | ${SITE_CONFIG.brandName}`,
  description:
    "Contact TLS Transport operations desk in MET City, Jhajjar, Haryana. Phone: 09311606860, WhatsApp: +91 93116 06860.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Header Hero (Dark) */}
      <section className="relative pt-36 md:pt-44 pb-20 bg-black text-white overflow-hidden border-b border-zinc-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D32F2F]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold tracking-[0.2em] text-white uppercase bg-white/5 backdrop-blur-md">
            GET IN TOUCH
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Contact <span className="text-[#D32F2F]">Our Logistics Desk</span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Get in touch with our operations desk for instant truck booking, container scheduling, and rate inquiries.
          </p>
        </div>
      </section>

      {/* 2. Main 2-Column Contact Section */}
      <section className="py-16 md:py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Official Details & Map (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-extrabold tracking-widest text-[#D32F2F] uppercase">
                  DIRECT CONTACT
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
                  Registered Operational Hub
                </h2>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Our operations team coordinates all inter-state dispatch, vehicle placement, and telematics monitoring from our central facility.
                </p>
              </div>

              {/* Contact Detail Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D32F2F] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#D32F2F]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                      Central Fleet Depot Address
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D32F2F] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#D32F2F]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                      Phone & Telephone Booking
                    </h4>
                    <div className="mt-1 space-y-1">
                      <div>
                        <a
                          href={SITE_CONFIG.phoneLink}
                          className="text-xs sm:text-sm font-bold text-zinc-800 hover:text-[#D32F2F] transition-colors"
                        >
                          {SITE_CONFIG.phoneDisplay}
                        </a>
                      </div>
                      <div>
                        <a
                          href={`tel:${SITE_CONFIG.phone}`}
                          className="text-xs text-zinc-500 hover:text-[#D32F2F] transition-colors"
                        >
                          Direct Line: {SITE_CONFIG.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                      WhatsApp Dispatch Desk
                    </h4>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      For instant rate quotes, truck availability, and consignment status.
                    </p>
                    <a
                      href={SITE_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs font-bold text-emerald-600 hover:underline"
                    >
                      Chat with Operations on WhatsApp ➔
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D32F2F] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#D32F2F]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                      Operational Hours
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                      {SITE_CONFIG.workingHours}
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      (24/7 Active Transit Monitoring for In-Flight Vehicles)
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Interactive Google Map */}
              <div className="rounded-2xl overflow-hidden border border-zinc-300 shadow-md">
                <iframe
                  title="TLS Transport Central Depot Map"
                  src={SITE_CONFIG.googleMapsEmbed}
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Right Column: Contact & Dispatch Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
