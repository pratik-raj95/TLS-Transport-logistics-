"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface SlideData {
  title: string;
  outlineWord: string;
  subTitle: string;
  description: string;
  tag: string;
  image: string;
}

const SLIDES: SlideData[] = [
  {
    tag: "PAN INDIA SUPPLY CHAIN",
    title: "Delivering",
    outlineWord: "Excellence",
    subTitle: "End-to-End Transport, Freight & Supply Chain Logistics.",
    description:
      "Empowering enterprises with trusted transportation, advanced fleet capabilities, and seamless pan-India connectivity.",
    image: "/images/hero-truck.jpg",
  },
  {
    tag: "SECURE CONTAINER FLEET",
    title: "Engineered",
    outlineWord: "Precision",
    subTitle: "Weatherproof 20ft & 32ft Closed Container Deployments.",
    description:
      "Guaranteed tamper-evident transit for electronics, pharmaceuticals, and sensitive consumer goods.",
    image: "/images/services/container-transportation.jpg",
  },
  {
    tag: "HEAVY HAULAGE SPECIALISTS",
    title: "Unmatched",
    outlineWord: "Capacity",
    subTitle: "Multi-Axle Flatbeds & Over-Dimensional Cargo Movements.",
    description:
      "Specialized trailers engineered for heavy plant machinery, structural steel, and infrastructure consignments.",
    image: "/images/fleet/fleet-trailer.jpg",
  },
  {
    tag: "SCHEDULED REGIONAL DISPATCH",
    title: "Predictable",
    outlineWord: "Transit",
    subTitle: "Dedicated Full Truckload Corridors Across 500+ Cities.",
    description:
      "Point-to-point highway transport designed to keep manufacturing lines and distribution centers synchronized.",
    image: "/images/hero-sunset-truck.jpg",
  },
  {
    tag: "WEATHERPROOF LOGISTICS",
    title: "Absolute",
    outlineWord: "Integrity",
    subTitle: "Rigid Closed Body Freight for High-Value Consignments.",
    description:
      "Hermetically sealed vehicles ensuring 100% moisture protection and safe arrival across all seasons.",
    image: "/images/fleet/fleet-closed-body.jpg",
  },
  {
    tag: "CENTRAL OPERATIONS HUB",
    title: "Strategic",
    outlineWord: "Connectivity",
    subTitle: "Operational Depot at MET City, Jhajjar, Haryana.",
    description:
      "Immediate arterial dispatch to Delhi NCR, Western Freight Corridor, and national arterial highways.",
    image: "/images/about-logistics.jpg",
  },
  {
    tag: "VERIFIED HIGHWAY PILOTS",
    title: "Disciplined",
    outlineWord: "Execution",
    subTitle: "GPS Monitored Fleet With Real-Time Milestone Tracking.",
    description:
      "Vetted drivers, routine mechanical inspections, and dedicated account management for corporate peace of mind.",
    image: "/images/freight-operations.jpg",
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveSlide((curr) => (curr + 1) % SLIDES.length);
          return 0;
        }
        return prev + 2;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [activeSlide]);

  const slide = SLIDES[activeSlide];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-24 pb-16">
      {/* Background Image Carousel with Smooth Fade */}
      {SLIDES.map((item, index) => (
        <div
          key={item.tag}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === activeSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
        >
          <Image
            src={item.image}
            alt={item.tag}
            fill
            priority={index === 0}
            className="object-cover"
          />
          {/* Multi-layered dark gradients matching reference */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/70" />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
        </div>
      ))}

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-16 md:pt-24 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="space-y-6 flex flex-col items-start text-left w-full max-w-3xl">
          {/* Eyebrow badge pill */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 text-xs font-bold tracking-[0.2em] text-white uppercase bg-black/40 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
            <span>{slide.tag}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white">
            {slide.title}{" "}
            <span className="text-stroke-white font-extrabold tracking-wide">
              {slide.outlineWord}
            </span>{" "}
            <br className="hidden sm:inline" />
            Across India.
          </h1>

          {/* Subtitles */}
          <div className="space-y-2 w-full">
            <p className="text-lg md:text-2xl text-white font-semibold leading-relaxed">
              {slide.subTitle}
            </p>
            <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-normal max-w-2xl">
              {slide.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
            <Link
              href="/quote"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-[#D32F2F] text-white font-bold px-8 py-4 rounded-xl text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-red-950/50"
            >
              <span>REQUEST QUOTE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-white font-bold px-8 py-4 rounded-xl text-xs sm:text-sm tracking-widest uppercase border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white transition-all duration-300 backdrop-blur-md"
            >
              <span>DISCOVER SERVICES</span>
            </Link>
          </div>
        </div>

        {/* Right Side Slide Controls (01 to 07) */}
        <div className="hidden md:flex flex-col items-end gap-5 w-40 shrink-0">
          {SLIDES.map((s, idx) => {
            const isCurrent = idx === activeSlide;
            return (
              <button
                key={s.tag}
                type="button"
                onClick={() => {
                  setActiveSlide(idx);
                  setProgress(0);
                }}
                className="group w-full flex items-center justify-end gap-3 text-right cursor-pointer"
                aria-label={`View slide ${idx + 1}`}
                aria-current={isCurrent}
              >
                <span
                  className={`text-xs font-bold transition-colors ${
                    isCurrent ? "text-white" : "text-white/40 group-hover:text-white/80"
                  }`}
                >
                  0{idx + 1}
                </span>

                <div className="relative w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                  {isCurrent && (
                    <div
                      className="absolute left-0 top-0 bottom-0 bg-[#D32F2F] transition-all duration-100 ease-linear rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
