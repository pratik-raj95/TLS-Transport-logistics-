export interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  tag: string;
  image: string;
  highlights: string[];
  cargoTypes: string[];
  vehicleTypes: string[];
  operationalBenefits: string[];
  faqs: { question: string; answer: string }[];
}

export interface FleetItem {
  id: string;
  title: string;
  payload: string;
  category: string;
  image: string;
  specs: string;
  logisticsUse: string;
  features: string[];
}

export interface IndustryItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  image: string;
  tag: string;
  challenges: string[];
  solutions: string[];
}

export interface LocationCity {
  name: string;
  state: string;
  region: 'North' | 'West' | 'South' | 'East' | 'Central';
  transitHours: string;
  hub: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TestimonialItem {
  name: string;
  company: string;
  sector: string;
  quote: string;
  rating: number;
}

export const SITE_CONFIG = {
  brandName: "TLS Transport",
  companyName: "TLS Transport Logistics Solutions",
  descriptor: "TRANSPORT LOGISTICS SOLUTIONS",
  phone: "09311606860",
  phoneDisplay: "+91 93116 06860",
  phoneLink: "tel:+919311606860",
  whatsappUrl: "https://wa.me/919311606860",
  whatsappNumber: "919311606860",
  address: "Plot No. 201, Sector 8, MET City, Yakubpur, Jhajjar, Haryana 124515, India.",
  workingHours: "Monday – Saturday: 9:00 AM – 8:00 PM (IST)",
  hubLocation: "MET City, Jhajjar, Haryana",
  googleMapsEmbed: "https://maps.google.com/maps?q=Plot+No.+201%2C+Sector+8%2C+MET+City%2C+Yakubpur%2C+Jhajjar%2C+Haryana+124515%2C+India&t=&z=15&ie=UTF8&iwloc=&output=embed",

  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Fleet", href: "/fleet" },
    { label: "Industries", href: "/industries" },
    { label: "Locations", href: "/locations" },
    { label: "Contact", href: "/contact" },
  ],

  // 13 Official Logistics Services
  services: [
    {
      slug: "truck-transportation",
      title: "Truck Transportation Services",
      shortDesc: "Reliable and professional truck transportation services tailored for enterprise scale across India.",
      fullDesc: "Dedicated road truck transportation engineered for commercial freight movements across India's key industrial corridors. We orchestrate point-to-point dispatch with verified vehicle availability, trained highway pilots, and continuous trip monitoring.",
      category: "Road Transport",
      tag: "Enterprise Grade",
      image: "/images/services/truck-transportation.jpg",
      highlights: [
        "Regional and pan-India highway transit",
        "Scheduled dock-to-dock vehicle placement",
        "Continuous GPS fleet telematics",
        "Verified drivers and cargo documentation"
      ],
      cargoTypes: [
        "Industrial equipment & machinery",
        "Precast construction materials",
        "Packaged commercial consignments",
        "Raw factory feedstocks"
      ],
      vehicleTypes: ["19ft to 32ft Multi-Axle Trucks", "Open Body Heavy Trucks", "Taurus 16-Wheeler"],
      operationalBenefits: [
        "Eliminates intermediate transshipment delays",
        "Immediate placement from Jhajjar and key regional hubs",
        "Proactive milestone tracking from pickup to delivery"
      ],
      faqs: [
        {
          question: "How quickly can a truck be placed for loading?",
          answer: "Placement typically occurs within 4 to 12 hours depending on origin city and trailer specification requirements."
        },
        {
          question: "Is live GPS tracking provided during transit?",
          answer: "Yes, every vehicle in transit is mapped with live telematics updates and milestone check-ins."
        }
      ]
    },
    {
      slug: "trailer-transportation",
      title: "Trailer Transportation",
      shortDesc: "Reliable and professional trailer transportation tailored for enterprise scale across India.",
      fullDesc: "Specialized trailer haulage engineered for heavy structural consignments, extra-long fabrication, and industrial project machinery exceeding standard vehicle lengths.",
      category: "Heavy Haulage",
      tag: "Enterprise Grade",
      image: "/images/services/trailer-transportation.jpg",
      highlights: [
        "40 Ft & 50 Ft Flatbed and Semi-Lowbed Trailers",
        "Multi-axle payload distribution for safe transit",
        "Route clearing, height clearances, and bridge surveys",
        "Engineered lashing, choke blocks, and heavy turnbuckles"
      ],
      cargoTypes: [
        "Structural steel beams and tubular piping",
        "Heavy transformers and power machinery",
        "Crane components and plant equipment",
        "Prefabricated infrastructure modules"
      ],
      vehicleTypes: ["40ft Flatbed Trailer", "Lowbed Trailer", "Drop Deck Hydraulic Modular Trailers"],
      operationalBenefits: [
        "Safe transport of overweight and over-length freight",
        "Experienced pilots trained in heavy trailer navigation",
        "Comprehensive route alignment and legal compliance"
      ],
      faqs: [
        {
          question: "What is the maximum tonnage for trailer transport?",
          answer: "We deploy flatbed and lowbed configurations carrying from 20 MT up to 50+ MT under strict axle weight guidelines."
        }
      ]
    },
    {
      slug: "tempo-transportation",
      title: "Tempo Transportation",
      shortDesc: "Reliable and professional tempo transportation tailored for enterprise scale across India.",
      fullDesc: "Agile light commercial vehicle (LCV) operations tailored for intra-city distribution, regional warehouse-to-store transfers, and expedited parcel freight.",
      category: "Light Commercial",
      tag: "Enterprise Grade",
      image: "/images/services/tempo-transportation.jpg",
      highlights: [
        "Tata 407, Bolero Pickup, and medium LCVs",
        "Rapid dock turnaround and urban access privileges",
        "Door-to-door express parcel deliveries",
        "Full transit weather protection"
      ],
      cargoTypes: [
        "E-commerce distribution batches",
        "Light industrial spares & components",
        "Retail boxed shipments",
        "Time-critical manufacturing inventory"
      ],
      vehicleTypes: ["Tata 407 (3 Ton)", "Bolero Maxi Truck", "Eicher 14ft LCV"],
      operationalBenefits: [
        "Bypasses urban heavy vehicle entry restrictions",
        "Cost-effective for partial shipments and quick shuttles",
        "Same-day regional dispatch capabilities"
      ],
      faqs: [
        {
          question: "Can tempos operate in city limits during daytime?",
          answer: "Yes, our light commercial vehicles adhere to city entry regulations for timely urban deliveries."
        }
      ]
    },
    {
      slug: "container-transportation",
      title: "Container Transportation",
      shortDesc: "Reliable and professional container transportation tailored for enterprise scale across India.",
      fullDesc: "High-security container logistics providing sealed transit for high-value commercial consignments, export-import freight, and electronics.",
      category: "Secure Transit",
      tag: "Enterprise Grade",
      image: "/images/services/container-transportation.jpg",
      highlights: [
        "20ft, 32ft single-axle & multi-axle containers",
        "Hermetically sealed and weatherproof enclosures",
        "High-security bolt seal tracking",
        "Zero intermediate freight handling"
      ],
      cargoTypes: [
        "Pharmaceutical formulations and active ingredients",
        "Consumer electronics and white goods",
        "Textiles and fashion merchandise",
        "High-value automotive assemblies"
      ],
      vehicleTypes: ["20ft High Cube Container", "32ft SXL Container", "32ft MXL Container"],
      operationalBenefits: [
        "100% moisture and weather protection",
        "Zero pilferage risk during highway transit",
        "Direct interchange with port container terminals"
      ],
      faqs: [
        {
          question: "Are container locks and seals verified?",
          answer: "Every container is dispatched with documented bolt seals, recorded at dispatch and verified at destination."
        }
      ]
    },
    {
      slug: "odc-transportation",
      title: "ODC Transportation",
      shortDesc: "Reliable and professional odc transportation tailored for enterprise scale across India.",
      fullDesc: "Over Dimensional Cargo (ODC) logistics requiring meticulous route surveys, hydraulic multi-axle modular trailers, and specialized escort coordination.",
      category: "Project Cargo",
      tag: "Enterprise Grade",
      image: "/images/services/odc-transportation.jpg",
      highlights: [
        "Hydraulic multi-axle modular trailers",
        "Complete physical route survey and bridge vetting",
        "Statutory transport permits and escorts",
        "Engineered center-of-gravity weight distribution"
      ],
      cargoTypes: [
        "Pressure vessels and industrial boilers",
        "Wind turbine blades and nacelles",
        "Cement kiln sections & large machinery",
        "Power generation turbines"
      ],
      vehicleTypes: ["Hydraulic Modular Axles", "Pullers & Multi-Axle Lowbed Units"],
      operationalBenefits: [
        "Dedicated project logistics coordination",
        "Zero-risk engineering calculations for oversized dimensions",
        "End-to-end statutory permit handling"
      ],
      faqs: [
        {
          question: "How is an ODC route determined?",
          answer: "Our operations team conducts a physical survey checking overhead wire clearances, toll gates, and bridge load tolerances."
        }
      ]
    },
    {
      slug: "vehicle-transportation",
      title: "Vehicle Transportation",
      shortDesc: "Reliable and professional vehicle transportation tailored for enterprise scale across India.",
      fullDesc: "Specialized vehicle carriers for multi-car, tractor, and two-wheeler distribution from automotive manufacturing plants to dealer showrooms.",
      category: "Automotive Freight",
      tag: "Enterprise Grade",
      image: "/images/services/vehicle-transportation.jpg",
      highlights: [
        "Enclosed multi-tier car and chassis carriers",
        "Hydraulic wheel choke securing mechanisms",
        "Pre-loading physical condition inspection report",
        "Insured carrier transit across all states"
      ],
      cargoTypes: [
        "Passenger cars and SUVs",
        "Tractors and agricultural equipment",
        "Commercial chassis and electric vehicles",
        "Two-wheeler crates and pallets"
      ],
      vehicleTypes: ["8-Car Double Decker Carriers", "Specialized Enclosed Auto Carriers"],
      operationalBenefits: [
        "Zero odometer accumulation on new vehicles",
        "Scratch-free rubberized loading ramps",
        "Direct OEM-to-dealership deliveries"
      ],
      faqs: [
        {
          question: "Are individual cars transported safely?",
          answer: "Yes, all vehicles are lashed with specialized tire straps on hydraulic decks to avoid any chassis contact."
        }
      ]
    },
    {
      slug: "car-transportation",
      title: "Car Transportation",
      shortDesc: "Reliable and professional car transportation tailored for enterprise scale across India.",
      fullDesc: "Safe and insured single-car and multi-car transport for corporate relocations, dealerships, and individual automotive logistics.",
      category: "Automotive Freight",
      tag: "Enterprise Grade",
      image: "/images/services/car-transportation.jpg",
      highlights: [
        "Door-to-door vehicle pickup and delivery",
        "Enclosed and open carrier options",
        "Digital car condition inspection before and after transit",
        "Comprehensive in-transit vehicle insurance"
      ],
      cargoTypes: ["Luxury cars", "Sedans and SUVs", "Vintage and collector automobiles", "Corporate fleet relocations"],
      vehicleTypes: ["Single Car Hydraulic Carrier", "Multi-Car Carrier"],
      operationalBenefits: [
        "Safe door-to-door delivery without driving wear",
        "Real-time tracking of vehicle position",
        "Quick transit times on key national corridors"
      ],
      faqs: [
        {
          question: "What documents are required for car transport?",
          answer: "Copy of Vehicle RC, Insurance certificate, Pollution under control (PUC), and consignor ID proof."
        }
      ]
    },
    {
      slug: "lorry-transportation",
      title: "Lorry Transportation",
      shortDesc: "Reliable and professional lorry transportation tailored for enterprise scale across India.",
      fullDesc: "Heavy duty lorry transport services for bulk cargo, construction materials, agricultural produce, and heavy industrial supplies.",
      category: "Bulk Transport",
      tag: "Enterprise Grade",
      image: "/images/services/lorry-transportation.jpg",
      highlights: [
        "Open high-side and flatbed lorries",
        "Tarpaulin water-tight covering standards",
        "Capable of regional and long-haul loads",
        "Direct loading from quarries, mills, and plants"
      ],
      cargoTypes: ["Cement, steel coils, and bricks", "Agricultural grain and sacks", "Heavy minerals and ores", "Industrial pipe bundles"],
      vehicleTypes: ["6-Wheeler Lorry", "10-Wheeler Heavy Lorry", "12-Wheeler Multi-Axle"],
      operationalBenefits: [
        "Cost-effective for high tonnage bulk items",
        "High availability across national freight lanes",
        "Quick loading and unloading turnaround"
      ],
      faqs: [
        {
          question: "Are lorries covered during rainy transit?",
          answer: "Yes, all open lorries carry triple-layered industrial tarpaulins and heavy securing cords."
        }
      ]
    },
    {
      slug: "logistics-services",
      title: "Logistics Services",
      shortDesc: "Reliable and professional logistics services tailored for enterprise scale across India.",
      fullDesc: "End-to-end supply chain orchestration including fleet scheduling, vendor dispatch management, freight tracking, and operational routing.",
      category: "Supply Chain",
      tag: "Enterprise Grade",
      image: "/images/services/service-coordination.jpg",
      highlights: [
        "Single point of operational accountability",
        "Integrated transport and dispatch planning",
        "Route optimization for reduced transit time",
        "Comprehensive reporting and status dashboards"
      ],
      cargoTypes: ["Mixed freight consignments", "Industrial inventory", "B2B wholesale shipments", "Factory line components"],
      vehicleTypes: ["Full Fleet Range Available"],
      operationalBenefits: [
        "Optimizes logistics spend and transit predictability",
        "Reduces idle warehouse time with coordinated loading",
        "Dedicated logistics relationship managers"
      ],
      faqs: [
        {
          question: "Can TLS manage long-term corporate freight contracts?",
          answer: "Yes, we partner with enterprises under structured SLA agreements with guaranteed vehicle availability."
        }
      ]
    },
    {
      slug: "storage-facility",
      title: "Storage Facility",
      shortDesc: "Reliable and professional storage facility tailored for enterprise scale across India.",
      fullDesc: "Secure interim transit storage and warehousing space designed for staging cargo, cross-docking, and consolidating consignments.",
      category: "Warehousing",
      tag: "Enterprise Grade",
      image: "/images/services/storage-warehousing.jpg",
      highlights: [
        "24/7 CCTV monitored warehousing facility",
        "Fire safety compliance and perimeter security",
        "Forklift and mechanical loading equipment",
        "Short-term transit staging and bulk consolidation"
      ],
      cargoTypes: ["Staged industrial machinery", "FMCG buffer stocks", "Packaged commercial cartons", "Project supplies awaiting site clearance"],
      vehicleTypes: ["Cross-docking bays for all truck classes"],
      operationalBenefits: [
        "Prevents demurrage and site congestion",
        "Safe interim holding under strict security",
        "Convenient location at MET City Jhajjar hub"
      ],
      faqs: [
        {
          question: "Where is the primary storage hub located?",
          answer: "Our primary facility is situated at MET City, Jhajjar, offering strategic access to Delhi NCR and Haryana industrial zones."
        }
      ]
    },
    {
      slug: "close-body-truck",
      title: "Close Body Truck Services",
      shortDesc: "Reliable and professional close body truck services tailored for enterprise scale across India.",
      fullDesc: "Sealed containerized and closed body trucks safeguarding moisture-sensitive goods, pharmaceuticals, consumer appliances, and high-value cargo.",
      category: "Secure Transit",
      tag: "Enterprise Grade",
      image: "/images/services/close-body-truck.jpg",
      highlights: [
        "24ft and 32ft rigid closed body trucks",
        "Hermetic sealing preventing water ingress",
        "Heavy-duty locking mechanisms with security seals",
        "Smooth interior walls preventing cargo scuffing"
      ],
      cargoTypes: ["Pharmaceutical medicine cartons", "Apparel, fabric rolls, and garments", "Consumer electronics", "Food and retail packaged goods"],
      vehicleTypes: ["24ft Closed Body", "32ft SXL Container Truck", "32ft MXL Container Truck"],
      operationalBenefits: [
        "100% weather safety across monsoons and varied climates",
        "Zero tampering or dust exposure during road transit",
        "Recommended for high-value enterprise consignments"
      ],
      faqs: [
        {
          question: "Is cargo protected from heavy rain?",
          answer: "Yes, our closed body vehicles are built with sealed sheet panels and weather-tight rubber door gaskets."
        }
      ]
    },
    {
      slug: "freight-transportation",
      title: "Freight Transportation",
      shortDesc: "Reliable and professional freight transportation tailored for enterprise scale across India.",
      fullDesc: "Full truck load (FTL) and enterprise freight forwarding providing direct point-to-point transit across all national manufacturing clusters.",
      category: "Freight Forwarding",
      tag: "Enterprise Grade",
      image: "/images/services/service-freight.jpg",
      highlights: [
        "Direct factory-to-warehouse dispatch",
        "Scheduled transit timelines with penalty SLAs",
        "Clear documentation and E-way bill compliance",
        "Centralized operations support desk"
      ],
      cargoTypes: ["Bulk manufacturing consignments", "Industrial raw materials", "Commercial finished goods", "Distribution center transfers"],
      vehicleTypes: ["Full Commercial Truck Suite"],
      operationalBenefits: [
        "Guaranteed dedicated vehicle capacity",
        "Minimizes transit duration without intermediate stops",
        "Custom billing and corporate credit terms for enterprise clients"
      ],
      faqs: [
        {
          question: "How do you handle freight documentation and E-way bills?",
          answer: "Our dispatch team verifies all E-way bills and consignment notes prior to vehicle departure to avoid highway delays."
        }
      ]
    },
    {
      slug: "pan-india-logistics",
      title: "Pan India Logistics",
      shortDesc: "Reliable and professional pan india logistics tailored for enterprise scale across India.",
      fullDesc: "Nationwide freight connectivity linking 500+ commercial and industrial hubs with consistent service quality and dedicated account management.",
      category: "National Network",
      tag: "Enterprise Grade",
      image: "/images/services/pan-india-logistics.jpg",
      highlights: [
        "Coverage across all 28 states and union territories",
        "Seamless connectivity to tier 1, tier 2, and tier 3 industrial cities",
        "Network of dedicated highway assistance points",
        "Standardized freight protocols across India"
      ],
      cargoTypes: ["All industrial and commercial cargo classes"],
      vehicleTypes: ["Complete Fleet Capabilities"],
      operationalBenefits: [
        "Consolidated single-partner transport contract across all branches",
        "Transparent pricing with standardized tariff structures",
        "24/7 centralized dispatch tracking"
      ],
      faqs: [
        {
          question: "Do you serve remote industrial belts?",
          answer: "Yes, our network covers key remote industrial and infrastructure project sites across the country."
        }
      ]
    }
  ],

  // 4 Core Fleet Categories matching reference screenshot
  fleet: [
    {
      id: "heavy-flatbed-lowbed",
      title: "Heavy Flatbed & Lowbed Trailers",
      payload: "PAYLOAD: 20 TO 50 METRIC TONS",
      category: "Heavy Haulage",
      image: "/images/fleet/fleet-trailer.jpg",
      specs: "Multi-axle mechanical suspension trailers for custom or heavy cargo with High Capacity ODC setup.",
      logisticsUse: "ODC cargo, prefabricated steel, heavy factory machinery, steel coils, and boiler tanks.",
      features: [
        "40ft and 50ft platform lengths",
        "Heavy-duty twist locks and tie-down points",
        "Low ground clearance for high center-of-gravity cargo",
        "Tested hydraulic multi-axle steering options"
      ]
    },
    {
      id: "standard-high-cube-containers",
      title: "Standard & High-Cube Containers",
      payload: "PAYLOAD: 10 TO 30 METRIC TONS",
      category: "Secure Transit",
      image: "/images/fleet/fleet-container-truck.jpg",
      specs: "Fully secured 20ft & 32ft containers with lock rods, weatherproof bodies, and high-impact end doors.",
      logisticsUse: "High-cube parcels, consumer appliances, export containers, electronic materials, packaged pharma.",
      features: [
        "Weatherproof insulated walls",
        "Tamper-proof bolt seal lock boxes",
        "Clean, splinter-free wooden floor beds",
        "Standard dimensions for direct container yard transfer"
      ]
    },
    {
      id: "close-body-weatherproof-trucks",
      title: "Close Body & Weatherproof Trucks",
      payload: "PAYLOAD: 7 TO 15 METRIC TONS",
      category: "Commercial Fleet",
      image: "/images/fleet/fleet-closed-body.jpg",
      specs: "Rigid 24ft/32ft multi-axle closed bodies, sealed lock, rust-proof, and shock absorption setups.",
      logisticsUse: "Pharmaceuticals, high-value commercial chemicals, textiles, and auto parts.",
      features: [
        "Rigid steel side-panel construction",
        "Anti-moisture sealed roof joints",
        "Shock-absorbing rear air suspensions",
        "Double-locking rear swing doors"
      ]
    },
    {
      id: "intra-city-tempos",
      title: "Intra-City Tempos & Small Carriers",
      payload: "PAYLOAD: 1 TO 5 METRIC TONS",
      category: "Light Commercial",
      image: "/images/fleet/fleet-tempo.jpg",
      specs: "Fleet includes small 407 and intra-city carriers with quick loading ramps.",
      logisticsUse: "Last-mile retail supply, domestic household shifts, and urban warehouse transfers.",
      features: [
        "Compact footprint for tight industrial alleys",
        "Drop-down tailgates for fast hand-loading",
        "Low fuel footprint and economical tariffs",
        "Quick city permit clearances"
      ]
    }
  ],

  // 8 Core Industry Sectors matching reference screenshot
  industries: [
    {
      id: "manufacturing",
      title: "Manufacturing",
      shortDesc: "Enterprise-grade logistics tailored precisely for the manufacturing sector across India.",
      fullDesc: "Connecting raw material suppliers, component vendors, and assembly factories with disciplined full truckload movements and dock synchronization.",
      category: "ENTERPRISE SUPPLY",
      tag: "Heavy Industry",
      image: "/images/industries/industry-manufacturing.jpg",
      challenges: ["Unplanned dock waiting times", "Heavy freight damage risk", "Staggered component delivery"],
      solutions: ["Scheduled dock delivery slots", "Heavy payload stability lashing", "Single-point transport coordination"]
    },
    {
      id: "automobile",
      title: "Automobile",
      shortDesc: "Integrating specialized transport for auto components and finished commercial units.",
      fullDesc: "High-precision transport of automotive press parts, chassis components, tyres, and engine blocks with just-in-time delivery schedules.",
      category: "ENTERPRISE SUPPLY",
      tag: "Automotive",
      image: "/images/industries/industry-automotive.jpg",
      challenges: ["JIT assembly line downtime risks", "Transit vibration scuffing", "Multi-tier supplier routing"],
      solutions: ["Dedicated point-to-point trucks", "Padded interior cargo protection", "Automated GPS milestone alarms"]
    },
    {
      id: "construction",
      title: "Construction",
      shortDesc: "Dedicated flatbed and heavy trailers for bulk construction and infrastructure supplies.",
      fullDesc: "Transporting structural rebar, precast concrete girders, cement, and pipe bundles directly to major active civil project sites.",
      category: "ENTERPRISE SUPPLY",
      tag: "Infrastructure",
      image: "/images/industries/industry-construction.jpg",
      challenges: ["Challenging unpaved site access", "Heavy dimensional over-lengths", "Unloading crane coordination"],
      solutions: ["High-clearance heavy chassis", "Multi-axle weight distribution", "Pre-notified site arrival windows"]
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      shortDesc: "Proven project-grade logistics delivering structural materials across national corridors.",
      fullDesc: "Handling government highway projects, bridge segments, transmission towers, and metro rail structural deliveries.",
      category: "ENTERPRISE SUPPLY",
      tag: "Projects",
      image: "/images/services/pan-india-logistics.jpg",
      challenges: ["Long-haul remote terrain transit", "Permit delays across state borders", "High-capacity load clearances"],
      solutions: ["Physical route surveys", "Full legal documentation support", "Specialized escort vehicles"]
    },
    {
      id: "retail-fmcg",
      title: "Retail & FMCG",
      shortDesc: "Fast-response distribution for high-turnover consumer goods and retail inventory.",
      fullDesc: "Rapid warehouse replenishment and retail chain supply utilizing sealed weatherproof container trucks with zero pilferage.",
      category: "ENTERPRISE SUPPLY",
      tag: "Consumer Goods",
      image: "/images/industries/industry-retail-fmcg.jpg",
      challenges: ["High volume carton pilferage", "Moisture and dust damage", "Short delivery deadlines"],
      solutions: ["Sealed tamper-evident containers", "Clean wooden cargo floors", "Scheduled night-transit runs"]
    },
    {
      id: "industrial-equipment",
      title: "Industrial Equipment",
      shortDesc: "High-protection transport for sensitive machinery, generators, and heavy engineering.",
      fullDesc: "Securing industrial blowers, diesel generators, CNC machines, and electrical switchgear with engineered shock-absorbing lashing.",
      category: "ENTERPRISE SUPPLY",
      tag: "Capital Goods",
      image: "/images/industries/industry-machinery.jpg",
      challenges: ["Delicate electronic control panels", "Unbalanced center-of-gravity", "Weather sensitivity"],
      solutions: ["Anti-vibration timber blocking", "Waterproof heavy tarping", "Lowbed hydraulic transport"]
    },
    {
      id: "heavy-machinery",
      title: "Heavy Machinery",
      shortDesc: "Enterprise-grade logistics tailored practically for the heavy machinery sector across India.",
      fullDesc: "Moving earthmoving excavators, road rollers, wheel loaders, and mining plants across state lines safely and legally.",
      category: "ENTERPRISE SUPPLY",
      tag: "Plant & Machinery",
      image: "/images/fleet/fleet-odc.jpg",
      challenges: ["Severe width and height excesses", "Axle load regulations", "Loading ramp gradients"],
      solutions: ["Detachable gooseneck lowbed trailers", "Statutory RTO escort permissions", "Experienced heavy machine drivers"]
    },
    {
      id: "pharmaceuticals",
      title: "Pharmaceuticals",
      shortDesc: "Enterprise-grade logistics tailored precisely for the pharmaceuticals sector across India.",
      fullDesc: "Sealed, clean, and humidity-protected container transportation for active pharmaceutical ingredients (APIs), excipients, and healthcare products.",
      category: "ENTERPRISE SUPPLY",
      tag: "Healthcare",
      image: "/images/industries/industry-pharma.jpg",
      challenges: ["Strict hygiene standards", "Zero contamination tolerance", "High cargo value"],
      solutions: ["Hermetically sealed container bodies", "Strict vehicle wash certification", "Continuous GPS trip surveillance"]
    }
  ],

  // Representative Coverage Hubs & 500+ Cities network
  keyHubs: [
    {
      name: "Jhajjar Operational Hub (MET City)",
      state: "Haryana",
      region: "North",
      role: "Central Operations & Fleet Dispatch Depot",
      address: "Plot No. 201, Sector 8, MET City, Yakubpur, Jhajjar, Haryana 124515, India.",
      coverage: "Delhi NCR, Gurugram, Manesar, Bawal, Kundli, Sonipat, Rohtak, Panipat"
    },
    {
      name: "Mumbai & Western Corridor Hub",
      state: "Maharashtra",
      region: "West",
      role: "Port & Industrial Distribution Center",
      address: "Bhiwandi & Nhava Sheva Freight Corridor",
      coverage: "Mumbai, Pune, Nashik, Thane, Navi Mumbai, Aurangabad"
    },
    {
      name: "Ahmedabad Industrial Hub",
      state: "Gujarat",
      region: "West",
      role: "Chemical & Manufacturing Gateway",
      address: "Sanand & Changodar Industrial Hub",
      coverage: "Ahmedabad, Vadodara, Surat, Rajkot, Bharuch, Gandhidham"
    },
    {
      name: "Bengaluru Logistics Hub",
      state: "Karnataka",
      region: "South",
      role: "Southern Distribution Terminal",
      address: "Peenya & Hosur Road Corridor",
      coverage: "Bengaluru, Chennai, Hyderabad, Coimbatore, Mysuru"
    }
  ],

  // 500+ Indian Network Cities (Sample organized by Region for interactive search)
  networkCities: [
    // North
    { name: "Jhajjar", state: "Haryana", region: "North", transitHours: "Central Hub", hub: true },
    { name: "Gurugram", state: "Haryana", region: "North", transitHours: "2-4 hrs", hub: true },
    { name: "Delhi NCR", state: "Delhi", region: "North", transitHours: "3-5 hrs", hub: true },
    { name: "Faridabad", state: "Haryana", region: "North", transitHours: "3-5 hrs", hub: false },
    { name: "Sonipat", state: "Haryana", region: "North", transitHours: "4-6 hrs", hub: false },
    { name: "Panipat", state: "Haryana", region: "North", transitHours: "4-6 hrs", hub: false },
    { name: "Manesar", state: "Haryana", region: "North", transitHours: "1-2 hrs", hub: false },
    { name: "Bawal", state: "Haryana", region: "North", transitHours: "2-3 hrs", hub: false },
    { name: "Ludhiana", state: "Punjab", region: "North", transitHours: "8-12 hrs", hub: false },
    { name: "Jalandhar", state: "Punjab", region: "North", transitHours: "10-14 hrs", hub: false },
    { name: "Amritsar", state: "Punjab", region: "North", transitHours: "12-16 hrs", hub: false },
    { name: "Chandigarh", state: "Chandigarh", region: "North", transitHours: "6-8 hrs", hub: false },
    { name: "Jaipur", state: "Rajasthan", region: "North", transitHours: "5-7 hrs", hub: false },
    { name: "Neemrana", state: "Rajasthan", region: "North", transitHours: "3-4 hrs", hub: false },
    { name: "Bhiwadi", state: "Rajasthan", region: "North", transitHours: "2-3 hrs", hub: false },
    { name: "Kota", state: "Rajasthan", region: "North", transitHours: "10-12 hrs", hub: false },
    { name: "Udaipur", state: "Rajasthan", region: "North", transitHours: "14-16 hrs", hub: false },
    { name: "Kanpur", state: "Uttar Pradesh", region: "North", transitHours: "12-15 hrs", hub: false },
    { name: "Lucknow", state: "Uttar Pradesh", region: "North", transitHours: "14-16 hrs", hub: false },
    { name: "Noida", state: "Uttar Pradesh", region: "North", transitHours: "3-5 hrs", hub: false },
    { name: "Greater Noida", state: "Uttar Pradesh", region: "North", transitHours: "4-6 hrs", hub: false },
    { name: "Ghaziabad", state: "Uttar Pradesh", region: "North", transitHours: "3-5 hrs", hub: false },
    { name: "Agra", state: "Uttar Pradesh", region: "North", transitHours: "6-8 hrs", hub: false },
    { name: "Meerut", state: "Uttar Pradesh", region: "North", transitHours: "4-6 hrs", hub: false },

    // West
    { name: "Mumbai", state: "Maharashtra", region: "West", transitHours: "24-30 hrs", hub: true },
    { name: "Bhiwandi", state: "Maharashtra", region: "West", transitHours: "24-28 hrs", hub: true },
    { name: "Pune", state: "Maharashtra", region: "West", transitHours: "28-34 hrs", hub: true },
    { name: "Nagpur", state: "Maharashtra", region: "West", transitHours: "20-24 hrs", hub: false },
    { name: "Nashik", state: "Maharashtra", region: "West", transitHours: "22-26 hrs", hub: false },
    { name: "Aurangabad", state: "Maharashtra", region: "West", transitHours: "24-28 hrs", hub: false },
    { name: "Ahmedabad", state: "Gujarat", region: "West", transitHours: "18-22 hrs", hub: true },
    { name: "Sanand", state: "Gujarat", region: "West", transitHours: "18-22 hrs", hub: false },
    { name: "Vadodara", state: "Gujarat", region: "West", transitHours: "20-24 hrs", hub: false },
    { name: "Surat", state: "Gujarat", region: "West", transitHours: "22-26 hrs", hub: false },
    { name: "Rajkot", state: "Gujarat", region: "West", transitHours: "22-26 hrs", hub: false },
    { name: "Gandhidham", state: "Gujarat", region: "West", transitHours: "24-28 hrs", hub: false },
    { name: "Mundra", state: "Gujarat", region: "West", transitHours: "26-30 hrs", hub: false },
    { name: "Indore", state: "Madhya Pradesh", region: "Central", transitHours: "16-20 hrs", hub: false },
    { name: "Bhopal", state: "Madhya Pradesh", region: "Central", transitHours: "18-22 hrs", hub: false },
    { name: "Pithampur", state: "Madhya Pradesh", region: "Central", transitHours: "17-21 hrs", hub: false },

    // South
    { name: "Bengaluru", state: "Karnataka", region: "South", transitHours: "40-48 hrs", hub: true },
    { name: "Hyderabad", state: "Telangana", region: "South", transitHours: "30-36 hrs", hub: true },
    { name: "Chennai", state: "Tamil Nadu", region: "South", transitHours: "42-48 hrs", hub: true },
    { name: "Coimbatore", state: "Tamil Nadu", region: "South", transitHours: "48-54 hrs", hub: false },
    { name: "Sriperumbudur", state: "Tamil Nadu", region: "South", transitHours: "42-48 hrs", hub: false },
    { name: "Visakhapatnam", state: "Andhra Pradesh", region: "South", transitHours: "36-42 hrs", hub: false },
    { name: "Vijayawada", state: "Andhra Pradesh", region: "South", transitHours: "36-42 hrs", hub: false },
    { name: "Kochi", state: "Kerala", region: "South", transitHours: "54-60 hrs", hub: false },

    // East
    { name: "Kolkata", state: "West Bengal", region: "East", transitHours: "30-36 hrs", hub: true },
    { name: "Howrah", state: "West Bengal", region: "East", transitHours: "30-36 hrs", hub: false },
    { name: "Jamshedpur", state: "Jharkhand", region: "East", transitHours: "28-34 hrs", hub: false },
    { name: "Ranchi", state: "Jharkhand", region: "East", transitHours: "26-32 hrs", hub: false },
    { name: "Patna", state: "Bihar", region: "East", transitHours: "22-26 hrs", hub: false },
    { name: "Bhubaneswar", state: "Odisha", region: "East", transitHours: "34-40 hrs", hub: false },
    { name: "Guwahati", state: "Assam", region: "East", transitHours: "48-56 hrs", hub: false },
  ] as LocationCity[],

  // Frequently Asked Questions
  faqs: [
    {
      question: "What types of commercial vehicles does TLS Transport provide?",
      answer: "We deploy an extensive commercial fleet including 20ft & 32ft closed containers, 40ft & 50ft flatbed and lowbed trailers, 19ft to 32ft multi-axle open lorries, light commercial vehicles (Tata 407/Bolero Pickups), and hydraulic modular pullers for ODC consignments.",
      category: "Fleet"
    },
    {
      question: "How do I request an immediate truck or freight quotation?",
      answer: "You can request an instant quote by calling our operations desk at 09311606860, submitting our online inquiry form, or messaging our direct WhatsApp desk at +91 93116 06860 with your pickup, drop, and tonnage details.",
      category: "Booking"
    },
    {
      question: "Where is TLS Transport's central operations hub located?",
      answer: "Our registered operational hub is located at Plot No. 201, Sector 8, MET City, Yakubpur, Jhajjar, Haryana 124515, India. This strategic location gives us direct arterial connectivity to the Delhi-Mumbai Industrial Corridor, Western Dedicated Freight Corridor, and Northern manufacturing belts.",
      category: "Operations"
    },
    {
      question: "Do you offer real-time GPS tracking for highway consignments?",
      answer: "Yes, our fleet is integrated with GPS tracking telematics. Consignors receive scheduled milestone alerts upon departure, interstate checkpoints, hub arrivals, and final delivery verification.",
      category: "Tracking"
    },
    {
      question: "What safety protocols are followed for Over Dimensional Cargo (ODC)?",
      answer: "For all ODC loads, our engineering team performs physical route surveys verifying bridge capacities, turning radii, and overhead clearance heights. Cargo is secured using certified heavy-duty lashing, turnbuckles, and wood chokes under statutory RTO guidelines.",
      category: "Safety"
    },
    {
      question: "Are consignments insured during highway transit?",
      answer: "We assist clients with comprehensive goods-in-transit liability coverage and maintain verified driver vetting, mechanical inspections, and strict container sealing protocols to eliminate transit loss.",
      category: "Insurance"
    }
  ] as FAQItem[],

  // Client Testimonials
  testimonials: [
    {
      name: "Rajesh Singhania",
      company: "Apex Precision Engineering",
      sector: "Automotive Components",
      quote: "TLS Transport has managed our inter-state factory dispatches from Haryana to Pune seamlessly. Their truck placement reliability and proactive driver communication have minimized line-stop risks.",
      rating: 5
    },
    {
      name: "Vikas Aggarwal",
      company: "Modern Infra Projects Ltd",
      sector: "Heavy Infrastructure",
      quote: "Moving heavy structural steel and project machinery requires dependable trailer operators. TLS's trailer fleet and route clearance support have been exemplary on our Western corridor contracts.",
      rating: 5
    },
    {
      name: "Anand Deshmukh",
      company: "Trident Consumer Goods",
      sector: "Retail & FMCG",
      quote: "Their 32ft closed container trucks provide complete protection against weather and transit pilferage. On-time delivery metrics consistently exceed 98%.",
      rating: 5
    }
  ] as TestimonialItem[]
};
