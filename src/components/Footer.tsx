import { ChevronUp } from "lucide-react";
import { brand } from "../data/citymash";

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f7f8f4] py-10">
      <div className="section-shell border-t border-zinc-200 pt-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div className="flex min-w-0 items-start gap-3">
            <img src={brand.logo} alt="CityMash Properties" className="h-12 w-auto shrink-0 object-contain sm:h-16" />
            <div className="min-w-0">
              <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-zinc-950">
                CityMash
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-zinc-500 sm:tracking-[0.16em]">{brand.tagline}</p>
              <p className="mt-3 max-w-md text-sm font-semibold leading-6 text-zinc-500">
                MAHA RERA {brand.rera} | Pune Real Estate Mandate Company
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-zinc-200 pt-5 text-sm font-semibold text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p>Copyright {year} CityMash Properties. All rights reserved.</p>
            <p className="mt-1">
              Developed by{" "}
              <a
                href="https://prepcampus.co"
                target="_blank"
                rel="noreferrer"
                className="font-extrabold text-amber-700 transition hover:text-teal-700"
              >
                PrepCampus
              </a>
            </p>
          </div>
          <details className="group relative w-full sm:w-fit">
            <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-extrabold text-amber-700 marker:hidden [&::-webkit-details-marker]:hidden">
              Policies
              <ChevronUp className="size-4 transition group-open:rotate-180" />
            </summary>
            <nav
              className="absolute bottom-full left-0 z-20 mb-4 w-full min-w-64 border border-zinc-200 bg-white py-4 shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:left-auto sm:right-0 sm:w-64"
              aria-label="Policies navigation"
            >
              {policyLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block px-6 py-3 text-base font-bold text-zinc-800 transition hover:bg-[#f7f8f4] hover:text-amber-700"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </footer>
  );
}
