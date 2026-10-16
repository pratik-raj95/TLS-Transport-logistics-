"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageCircle, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    origin: "",
    destination: "",
    vehicleType: "32ft Container",
    weight: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please provide your name and contact phone number.");
      return;
    }

    setStatus("submitting");

    // Compose formatted WhatsApp inquiry message for instant verified handoff
    const text = encodeURIComponent(
      `*New Transport Inquiry - TLS Transport*\n` +
      `----------------------------------------\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || "Not provided"}\n` +
      `*Origin (Pickup):* ${formData.origin || "Not specified"}\n` +
      `*Destination (Drop):* ${formData.destination || "Not specified"}\n` +
      `*Vehicle Type:* ${formData.vehicleType}\n` +
      `*Cargo Weight / Tonnage:* ${formData.weight || "Not specified"}\n` +
      `*Details:* ${formData.message || "Please provide quotation and vehicle availability."}`
    );

    const waLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;

    setTimeout(() => {
      setStatus("success");
      // Trigger WhatsApp handoff in new tab
      window.open(waLink, "_blank", "noopener,noreferrer");
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-zinc-200/90 shadow-xl shadow-zinc-200/50">
      <div className="mb-6">
        <h3 className="text-2xl font-extrabold text-zinc-900 mb-1">
          Request an Immediate Dispatch Quote
        </h3>
        <p className="text-sm text-zinc-500">
          Our MET City Jhajjar operations desk responds within 15–30 minutes during working hours.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-8 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-emerald-900">
            Inquiry Prepared Successfully!
          </h4>
          <p className="text-sm text-emerald-700 max-w-md mx-auto leading-relaxed">
            Your inquiry has been formatted and redirected to our verified WhatsApp dispatch desk at{" "}
            <strong>{SITE_CONFIG.phoneDisplay}</strong>.
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                phone: "",
                email: "",
                origin: "",
                destination: "",
                vehicleType: "32ft Container",
                weight: "",
                message: "",
              });
            }}
            className="mt-4 px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ramesh Sharma"
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-[#D32F2F] focus:ring-2 focus:ring-red-100 outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 09311606860"
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-[#D32F2F] focus:ring-2 focus:ring-red-100 outline-none text-sm transition-all"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                Pickup City (Origin)
              </label>
              <input
                type="text"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                placeholder="e.g. Jhajjar / Gurugram"
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-[#D32F2F] focus:ring-2 focus:ring-red-100 outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                Drop City (Destination)
              </label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="e.g. Mumbai / Bengaluru"
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-[#D32F2F] focus:ring-2 focus:ring-red-100 outline-none text-sm transition-all"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                Vehicle Type Required
              </label>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-[#D32F2F] focus:ring-2 focus:ring-red-100 outline-none text-sm bg-white transition-all"
              >
                <option value="32ft Closed Container">32ft Closed Container (High Cube)</option>
                <option value="20ft Container Truck">20ft Container Truck</option>
                <option value="40ft Flatbed Trailer">40ft Flatbed Trailer</option>
                <option value="Lowbed ODC Trailer">Lowbed ODC Trailer (Heavy Haulage)</option>
                <option value="Multi-Axle Heavy Truck">Multi-Axle Open Heavy Truck (16-Wheeler)</option>
                <option value="Intra-City Tempo">Intra-City Tempo (Tata 407 / Bolero)</option>
                <option value="Dedicated Car Carrier">Specialized Car Carrier</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                Approx Weight / Tonnage
              </label>
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="e.g. 15 Metric Tons"
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-[#D32F2F] focus:ring-2 focus:ring-red-100 outline-none text-sm transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
              Consignment & Delivery Details
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe cargo dimensions, loading schedule, or special handling needs..."
              className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-[#D32F2F] focus:ring-2 focus:ring-red-100 outline-none text-sm transition-all resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-red-900/25 active:scale-[0.99] disabled:opacity-60"
            >
              {status === "submitting" ? (
                <span>PREPARING INQUIRY...</span>
              ) : (
                <>
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>SEND TO DISPATCH DESK VIA WHATSAPP</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-center text-[11px] text-zinc-400 mt-2">
              Instant handoff to verified operations desk at {SITE_CONFIG.phoneDisplay}. No spam.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
