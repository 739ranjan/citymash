import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { brand } from "../data/citymash";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Cycle", href: "/#cycle" },
  { label: "Builders", href: "/#builders" },
  { label: "Team", href: "/#team" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-4 sm:pt-3 lg:px-5">
      <nav className="glass-nav mx-auto flex max-w-7xl items-center justify-between gap-2 border border-white/70 px-2 py-2 shadow-panel sm:px-4 lg:gap-3 lg:px-5 lg:py-3">
        <a
          href="/#home"
          className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 lg:max-w-[220px] lg:flex-none xl:max-w-none"
          aria-label="CityMash home"
          onClick={() => setOpen(false)}
        >
          <img
            src={brand.logo}
            alt="CityMash Properties"
            className="h-9 w-auto shrink-0 object-contain min-[360px]:h-10 sm:h-12 lg:h-14"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-[11px] font-extrabold uppercase tracking-[0.08em] text-zinc-950 min-[360px]:text-xs sm:text-sm sm:tracking-[0.16em]">
              CityMash
            </span>
            <span className="block max-w-[190px] truncate text-[8px] font-semibold uppercase tracking-[0.04em] text-zinc-500 min-[360px]:text-[9px] sm:max-w-none sm:text-[11px] sm:tracking-[0.14em] xl:tracking-[0.18em]">
              MAHA RERA {brand.rera}
            </span>
          </span>
        </a>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap px-2 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-white hover:text-zinc-950 xl:px-4 xl:text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="/#contact"
          className="hidden shrink-0 items-center gap-2 bg-zinc-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-teal-700 xl:flex"
        >
          Mandate Enquiry
          <ArrowUpRight className="size-4" />
        </a>

        <button
          type="button"
          className="grid size-9 shrink-0 place-items-center bg-white text-zinc-950 min-[360px]:size-10 sm:size-11 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass-nav mx-auto mt-2 max-w-7xl border border-white/70 p-2 shadow-panel lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-sm font-bold text-zinc-800 transition hover:bg-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
