# TLS Transport - Transport Logistics Solutions

High-fidelity Next.js web application for **TLS Transport (TRANSPORT LOGISTICS SOLUTIONS)**, an enterprise road freight and logistics services provider headquartered at MET City, Jhajjar, Haryana.

## Overview

- **Brand**: TLS Transport
- **Descriptor**: TRANSPORT LOGISTICS SOLUTIONS
- **Operations Hub**: Plot No. 201, Sector 8, MET City, Yakubpur, Jhajjar, Haryana 124515, India
- **Primary Telephone**: 09311606860 (`tel:+919311606860`)
- **Direct WhatsApp Desk**: +91 93116 06860 (`https://wa.me/919311606860`)

## Tech Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **UI & Styling**: React 19, TypeScript, Tailwind CSS v4, Lucide React
- **Animations**: Framer Motion
- **Deployment Target**: Vercel

## Pages & Routes

- `/` — Homepage with 7-slide hero carousel, 13-service grid, 4-fleet showcase, advantage features, testimonials, FAQ accordion, and conversion banner.
- `/about` — About Us, history, MET City Jhajjar hub overview, and 3 core operational principles.
- `/services` — Complete catalog of all 13 logistics services.
- `/services/[slug]` — 13 dedicated service detail pages with static route prerendering:
  - `truck-transportation`, `trailer-transportation`, `tempo-transportation`, `container-transportation`, `odc-transportation`, `vehicle-transportation`, `car-transportation`, `lorry-transportation`, `logistics-services`, `storage-facility`, `close-body-truck`, `freight-transportation`, `pan-india-logistics`.
- `/fleet` — Active commercial fleet specifications and 3 assurance pillars.
- `/industries` — 8 core industrial sectors served.
- `/locations` — Operational hubs and interactive 500+ cities directory with regional filters.
- `/contact` — Registered Jhajjar hub address, direct dialing, and WhatsApp operations desk.
- `/quote` — Freight Transport Planner with instant load estimation and WhatsApp dispatch handoff.
- `/privacy-policy` & `/terms-conditions` — Corporate terms and data compliance.
- `/sitemap.xml` & `/robots.txt` — Search engine optimization metadata.

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Vercel Deployment

This project is fully optimized for zero-configuration deployment on [Vercel](https://vercel.com):

1. Import the repository into your Vercel Dashboard.
2. Select Next.js framework preset (detected automatically).
3. Click **Deploy**.
