"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldAlert, CheckCircle2, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function QuotePlannerForm() {
  const [operationType, setOperationType] = useState<string>("Full Truck Load");
  const [origin, setOrigin] = useState<string>("Jhajjar");
  const [destination, setDestination] = useState<string>("Mumbai");
  const [weight, setWeight] = useState<string>("24");
  const [businessName, setBusinessName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const operationTypes = [
    "Full Truck Load",
    "Container Cargo",
    "ODC Heavy Carrier",
    "Flatbed Trailer",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    setSubmitted(true);

    // Prepare WhatsApp inquiry
    const msg = encodeURIComponent(
      `*Logistics Quote Request - ${SITE_CONFIG.brandName}*\n` +
      `----------------------------------------\n` +
      `*Operation Type:* ${operationType}\n` +
      `*Origin City:* ${origin}\n` +
      `*Destination City:* ${destination}\n` +
      `*Cargo Weight:* ${weight} Metric Tons\n` +
      `*Enterprise Name:* ${businessName || "Not specified"}\n` +
      `*Contact Phone:* ${phone}\n` +
      `*Hub:* ${SITE_CONFIG.hubLocation}`
    );

    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${msg}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-zinc-200 shadow-xl">
      <div className="mb-8">
        <span className="text-xs font-bold text-[#D32F2F] uppercase tracking-widest bg-red-50 border border-red-100 px-3 py-1 rounded-full">
          Instant Freight Estimator
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 mt-2">
          Freight Transport Planner
        </h2>
        <p className="text-zinc-500 text-sm mt-1">
          Calculate freight placement and route timelines for your enterprise shipments.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-emerald-950">
            Quotation Request Forwarded!
          </h3>
          <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
            Your quotation request has been redirected to our verified WhatsApp operations desk at{" "}
            <strong>{SITE_CONFIG.phoneDisplay}</strong>. Our fleet controller will verify vehicle availability immediately.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 bg-emerald-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-emerald-800 transition-colors"
            >
              Configure Another Load
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 1. Operation Type Toggle Buttons */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-600 uppercase tracking-wider block">
              Logistics Operation Type
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {operationTypes.map((type) => {
                const isActive = operationType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setOperationType(type)}
                    className={`p-4 rounded-xl border text-xs font-bold transition-all text-center ${
                      isActive
                        ? "border-[#D32F2F] bg-red-50 text-[#D32F2F] shadow-sm"
                        : "border-zinc-200 text-zinc-700 bg-white hover:bg-zinc-50"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Origin & Destination */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label htmlFor="origin" className="text-xs font-bold text-zinc-600 uppercase tracking-wider">
                Origin City
              </label>
              <select
                id="origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-900 font-medium text-sm focus:outline-none focus:border-[#D32F2F] transition-colors bg-white cursor-pointer"
              >
                {SITE_CONFIG.networkCities.map((c) => (
                  <option key={`origin-${c.name}`} value={c.name}>
                    {c.name} ({c.state})
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="destination" className="text-xs font-bold text-zinc-600 uppercase tracking-wider">
                Destination City
              </label>
              <select
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-900 font-medium text-sm focus:outline-none focus:border-[#D32F2F] transition-colors bg-white cursor-pointer"
              >
                {SITE_CONFIG.networkCities.map((c) => (
                  <option key={`dest-${c.name}`} value={c.name}>
                    {c.name} ({c.state})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3. Weight & Enterprise Name */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label htmlFor="weight" className="text-xs font-bold text-zinc-600 uppercase tracking-wider">
                Cargo Weight (Metric Tons)
              </label>
              <input
                type="number"
                id="weight"
                required
                min="1"
                max="1000"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-900 font-medium text-sm focus:outline-none focus:border-[#D32F2F] transition-colors"
                placeholder="e.g. 24"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="businessName" className="text-xs font-bold text-zinc-600 uppercase tracking-wider">
                Enterprise Name
              </label>
              <input
                type="text"
                id="businessName"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-900 font-medium text-sm focus:outline-none focus:border-[#D32F2F] transition-colors"
                placeholder="e.g. Acme Manufacturing Ltd"
              />
            </div>
          </div>

          {/* 4. Phone Contact */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-xs font-bold text-zinc-600 uppercase tracking-wider">
              Mobile Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-zinc-900 font-medium text-sm focus:outline-none focus:border-[#D32F2F] transition-colors"
              placeholder="e.g. 09311606860"
            />
          </div>

          {/* Privacy Note */}
          <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 flex gap-3 text-zinc-500">
            <ShieldAlert className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed">
              {SITE_CONFIG.brandName} values privacy. Your corporate information is solely used to construct logistics schedules, routing options, and freight price proposals. No data is shared with external commercial directories.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#D32F2F] text-white font-bold py-4 rounded-xl text-sm uppercase tracking-widest hover:bg-[#b71c1c] transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Generate Estimate via WhatsApp Desk</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-center text-[11px] text-zinc-400">
            Instant dispatch confirmation with our central desk at {SITE_CONFIG.address}
          </p>
        </form>
      )}
    </div>
  );
}
