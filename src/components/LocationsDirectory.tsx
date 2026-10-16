"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function LocationsDirectory() {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const regions = ["All", "North", "West", "South", "East", "Central"];

  const filteredCities = SITE_CONFIG.networkCities.filter((city) => {
    const matchesSearch =
      city.name.toLowerCase().includes(search.toLowerCase()) ||
      city.state.toLowerCase().includes(search.toLowerCase());

    const matchesRegion =
      selectedRegion === "All" || city.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="space-y-12">
      {/* Central Hub Spotlight Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0B0B0B] text-white border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D32F2F]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-950/70 border border-red-900/50 text-[#D32F2F]">
              <span className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
              CENTRAL OPERATIONAL FLEET DEPOT
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Jhajjar Central Hub (MET City)
            </h3>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Situated in Reliance MET City, Jhajjar, Haryana, our primary depot provides direct,
              uncongested expressway access to the Western Dedicated Freight Corridor, KMP Expressway,
              Delhi-Mumbai Industrial Corridor, and Northern manufacturing belts.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-300 pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D32F2F]" />
                Direct Arterial Highway Dispatch
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D32F2F]" />
                Heavy Trailer & ODC Staging Yards
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D32F2F]" />
                Continuous 24/7 Operations Desk
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="p-5 rounded-2xl bg-[#141414] border border-zinc-800">
              <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">
                Depot Location
              </div>
              <div className="text-xs text-zinc-300 font-medium">
                {SITE_CONFIG.address}
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-red-900/30"
            >
              <span>DISPATCH FROM THIS HUB</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Search & Region Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by city or state (e.g. Pune, Haryana)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-300 bg-white text-sm outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-red-100 transition-all"
          />
        </div>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {regions.map((reg) => (
            <button
              key={reg}
              type="button"
              onClick={() => setSelectedRegion(reg)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedRegion === reg
                  ? "bg-[#D32F2F] text-white shadow-md shadow-red-900/20"
                  : "bg-white text-zinc-700 hover:bg-zinc-200/70 border border-zinc-200"
              }`}
            >
              {reg}
            </button>
          ))}
        </div>
      </div>

      {/* Network City Results */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
            Showing {filteredCities.length} Active Corridors & Connecting Hubs
          </span>
          <span className="text-xs text-zinc-400">
            500+ Cities Network
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCities.map((city) => (
            <div
              key={`${city.name}-${city.state}`}
              className="p-5 rounded-2xl bg-white border border-zinc-200 hover:border-red-200 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-zinc-100 text-zinc-600">
                    {city.region}
                  </span>
                  {city.hub && (
                    <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-red-50 text-[#D32F2F]">
                      Key Hub
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-bold text-zinc-900 group-hover:text-[#D32F2F] transition-colors flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#D32F2F] shrink-0" />
                  <span>{city.name}</span>
                </h4>
                <p className="text-xs text-zinc-500 font-medium pl-5">
                  {city.state}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-zinc-500 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Transit: {city.transitHours}</span>
                </span>

                <Link
                  href="/quote"
                  className="font-bold text-[#D32F2F] hover:underline flex items-center gap-1 text-[11px]"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
