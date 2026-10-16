import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FleetSection } from "@/components/FleetSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { AdvantageSection } from "@/components/AdvantageSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CtaBanner } from "@/components/CtaBanner";
import { SITE_CONFIG } from "@/config/site";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section with Live Slide Carousel */}
      <HeroSection />

      {/* 2. Key Metrics Bar */}
      <StatsBar />

      {/* 3. About Section Preview */}
      <AboutSection />

      {/* 4. Comprehensive Services Section (All 13 Services) */}
      <ServicesSection />

      {/* 5. Modern Fleet Showcase */}
      <FleetSection isFullPage={false} />

      {/* 6. Industries We Serve Preview */}
      <IndustriesSection isFullPage={false} />

      {/* 7. The TLS Advantage (Why Choose Us) */}
      <AdvantageSection />

      {/* 8. Client Testimonials */}
      <TestimonialsSection />

      {/* 9. Frequently Asked Questions Accordion */}
      <FAQSection />

      {/* 10. Red Gradient Conversion Banner */}
      <CtaBanner
        variant="red-gradient"
        title="Ready to Move Your Freight?"
        subtitle="Connect with our operations desk at MET City Jhajjar for guaranteed vehicle placement, transparent rates, and disciplined transit schedules."
        primaryButtonText="REQUEST A QUOTE"
        primaryButtonHref="/quote"
        secondaryButtonText="CALL OUR DESK"
        secondaryButtonHref={SITE_CONFIG.phoneLink}
      />
    </div>
  );
}
