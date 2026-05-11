import {
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  Handshake,
  Home,
  KeyRound,
  LineChart,
  Megaphone,
  ShieldCheck,
  Store,
  Target,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Metric = {
  value: string;
  label: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export type Commitment = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  focus: string;
};

export type SalesStep = {
  title: string;
  description: string;
};

export const brand = {
  name: "CityMash ",
  rera: "A52100003500",
  tagline: "You Dream We Create",
  location: "Pune",
  logo: "/assets/logo.webp",
};

export const images = {
  hero:
    "https://images.pexels.com/photos/8572166/pexels-photo-8572166.jpeg?auto=compress&cs=tinysrgb&w=1800",
  residential:
    "https://images.pexels.com/photos/31656146/pexels-photo-31656146.jpeg?auto=compress&cs=tinysrgb&w=1200",
  courtyard:
    "https://images.pexels.com/photos/31656170/pexels-photo-31656170.jpeg?auto=compress&cs=tinysrgb&w=1200",
  interior:
    "https://images.pexels.com/photos/16869705/pexels-photo-16869705.jpeg?auto=compress&cs=tinysrgb&w=1200",
  office:
    "https://images.pexels.com/photos/8572163/pexels-photo-8572163.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export const metrics: Metric[] = [
  { value: "10+", label: "Years of experience" },
  { value: "3489+", label: "Units sold and counting" },
  { value: "70+", label: "Developer launches" },
  { value: "3000+", label: "Active partners" },
];

export const commitments: Commitment[] = [
  {
    title: "Cost Effective Marketing",
    description:
      "Campaigns focused on qualified demand, launch momentum, and disciplined channel spend.",
    icon: Megaphone,
  },
  {
    title: "Trust Honest Sales Pitch",
    description:
      "Clear communication, realistic buyer expectations, and no wrong commitments.",
    icon: ShieldCheck,
  },
  {
    title: "Smooth Process",
    description:
      "A guided path from first enquiry to token, booking, RERA checks, CRM, and recovery.",
    icon: CheckCircle2,
  },
  {
    title: "90% Inventory Sell",
    description:
      "Mandate-focused execution built around velocity, pricing discipline, and consistent follow-up.",
    icon: Target,
  },
];

export const services: Service[] = [
  {
    title: "Sole Selling",
    description:
      "Dedicated project ownership for builders who need a focused sales engine and reliable market execution.",
    icon: KeyRound,
    image: images.office,
  },
  {
    title: "Mandate Projects",
    description:
      "End-to-end launch and post-launch support across pricing, demand mapping, sales strategy, and conversions.",
    icon: BadgeCheck,
    image: images.residential,
  },
  {
    title: "Residential",
    description:
      "Premium apartment and housing project sales with buyer-first consultation and structured follow-ups.",
    icon: Home,
    image: images.courtyard,
  },
  {
    title: "Commercial",
    description:
      "Retail, office, and investment-led commercial real estate support for brands, investors, and developers.",
    icon: Building2,
    image: images.hero,
  },
  {
    title: "Retail",
    description:
      "Location-led leasing and selling support for retail spaces where visibility and footfall matter.",
    icon: Store,
    image: images.interior,
  },
  {
    title: "Leasing",
    description:
      "Tenant and owner coordination with transparent terms, practical negotiation, and closure support.",
    icon: Handshake,
    image: images.office,
  },
];

export const salesCycle: SalesStep[] = [
  {
    title: "Planning",
    description: "Market analysis, launch positioning, price trend study, and demand-supply reading.",
  },
  {
    title: "Token / Booking",
    description: "Buyer qualification, booking process, RERA checks, and sales strategy alignment.",
  },
  {
    title: "Negotiation",
    description: "Patient, consistent conversations that protect brand value and improve closure quality.",
  },
  {
    title: "Execution",
    description: "Sales floor rhythm, CRM discipline, claim handling, and recovery follow-through.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Mayank Barholia",
    role: "Sales Expert",
    image: "/assets/mayank_barholia.webp",
    focus: "Buyer conversion, channel coordination, and closing discipline.",
  },
  {
    name: "Shashank Barholia",
    role: "Launch Strategy",
    image: "/assets/shashank_barholia.webp",
    focus: "Launch planning, mandate positioning, and builder growth strategy.",
  },
];

export const skills = [
  { label: "Marketing Strategy", icon: BarChart3 },
  { label: "Negotiation", icon: Handshake },
  { label: "New Business Development", icon: LineChart },
  { label: "Real Estate Sales", icon: UsersRound },
];
