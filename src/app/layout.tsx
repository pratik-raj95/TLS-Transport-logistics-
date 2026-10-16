import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContactActions } from "@/components/FloatingContactActions";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tlstransport.in"),
  title: `${SITE_CONFIG.brandName} | Enterprise Logistics & Transport Solutions`,
  description:
    "India's Trusted Transport & Logistics Partner. Reliable transportation, freight movement, container fleet, and heavy trailer solutions across India. Serving 500+ cities from MET City, Jhajjar hub.",
  keywords: [
    "TLS Transport",
    "Transport Logistics Solutions",
    "logistics company Jhajjar",
    "MET City logistics",
    "truck transportation services",
    "trailer transport India",
    "container transportation",
    "ODC transportation India",
    "commercial freight forwarder",
    "pan India transport"
  ],
  icons: {
    icon: "/images/tls-logo.jpg",
  },
  openGraph: {
    title: `${SITE_CONFIG.brandName} | Enterprise Logistics Company`,
    description:
      "India's Trusted Transport & Logistics Partner. Reliable road transportation, containerized fleet, and heavy haulage across 500+ cities.",
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.companyName,
    images: [
      {
        url: "/images/tls-logo.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.brandName} Logo`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-[#D32F2F] selection:text-white antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContactActions />
      </body>
    </html>
  );
}
