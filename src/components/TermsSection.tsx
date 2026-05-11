import { ClipboardCheck, Copyright, FileText, ShieldCheck } from "lucide-react";
import { brand } from "../data/citymash";
import { SectionHeading } from "./SectionHeading";

export type PolicyPage = "privacy" | "terms" | "disclaimer";

const policyContent = {
  privacy: {
    eyebrow: "Privacy policy",
    title: "How CityMash handles enquiry and contact details.",
    copy: "This policy explains how visitor details are collected and used when someone contacts CityMash through this website.",
    closing:
      "CityMash uses submitted information only for relevant communication, enquiry handling, property discussions, and service follow-up.",
    items: [
      {
        title: "Details collected",
        description:
          "Name, email, phone number, project type, and enquiry message may be collected when visitors submit the contact form.",
        icon: FileText,
      },
      {
        title: "Purpose of use",
        description:
          "Contact details are used to respond to enquiries, schedule calls, share suitable project updates, and support client communication.",
        icon: ShieldCheck,
      },
      {
        title: "Data protection",
        description:
          "CityMash aims to keep enquiry details private and does not sell visitor information to unrelated third parties.",
        icon: ClipboardCheck,
      },
      {
        title: "Contact updates",
        description:
          "Visitors can contact CityMash to correct their details or request that future promotional communication is stopped.",
        icon: Copyright,
      },
    ],
  },
  terms: {
    eyebrow: "Terms and conditions",
    title: "Clear conditions for using CityMash content and enquiries.",
    copy: `These terms help visitors, builders, partners, and clients understand how ${brand.name.trim()} shares information and handles enquiries.`,
    closing:
      "By using this website or sending an enquiry, visitors agree to use the information responsibly and contact CityMash for the latest project-specific details.",
    items: [
      {
        title: "Information accuracy",
        description:
          "Project details, prices, availability, and offers are shared for enquiry support and may change based on developer updates.",
        icon: FileText,
      },
      {
        title: "Client communication",
        description:
          "Submitted contact details may be used by CityMash to respond to enquiries, schedule discussions, and share relevant property updates.",
        icon: ShieldCheck,
      },
      {
        title: "Mandate support",
        description:
          "Sales, marketing, and launch support are provided according to the agreed project scope, builder brief, and applicable RERA information.",
        icon: ClipboardCheck,
      },
      {
        title: "Copyright reserved",
        description:
          "All website content, branding, images, copy, and design elements belong to CityMash unless otherwise credited.",
        icon: Copyright,
      },
    ],
  },
  disclaimer: {
    eyebrow: "Disclaimer",
    title: "Important notes about project information on this website.",
    copy: "This disclaimer explains the limits of website information and why visitors should confirm current details before making decisions.",
    closing:
      "Visitors should verify project details, legal documents, RERA information, pricing, and availability before booking or investing.",
    items: [
      {
        title: "General information",
        description:
          "Website content is provided for general awareness and enquiry support, not as a final offer, legal advice, or financial advice.",
        icon: FileText,
      },
      {
        title: "Changing details",
        description:
          "Prices, layouts, offers, inventory, possession timelines, and amenities can change based on developer or authority updates.",
        icon: ShieldCheck,
      },
      {
        title: "Third-party media",
        description:
          "Some images, references, or project material may be provided by developers, partners, public sources, or representative media.",
        icon: ClipboardCheck,
      },
      {
        title: "Independent checks",
        description:
          "Clients are encouraged to complete independent verification before making a purchase, lease, or investment decision.",
        icon: Copyright,
      },
    ],
  },
};

type TermsSectionProps = {
  page?: PolicyPage;
};

export function TermsSection({ page = "terms" }: TermsSectionProps) {
  const content = policyContent[page];

  return (
    <section id="terms" className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          copy={content.copy}
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((term) => {
            const Icon = term.icon;
            return (
              <article key={term.title} className="border border-zinc-200 bg-[#f7f8f4] p-5 sm:p-6">
                <span className="grid size-12 place-items-center bg-teal-50 text-teal-700">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-zinc-950">{term.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{term.description}</p>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm font-medium leading-7 text-zinc-500">
          {content.closing}
        </p>
      </div>
    </section>
  );
}
