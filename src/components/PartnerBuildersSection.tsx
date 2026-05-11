import { Building2, Handshake, MoveRight, ShieldCheck } from "lucide-react";

const partnerCompanies = [
  { name: "Partner company 1", logo: "/partner_company/work_with1.webp" },
  { name: "Partner company 2", logo: "/partner_company/work_with2.webp" },
  { name: "Partner company 3", logo: "/partner_company/work_with3.webp" },
  { name: "Partner company 4", logo: "/partner_company/work_with4.webp" },
  { name: "Partner company 5", logo: "/partner_company/work_with5.webp" },
  { name: "Partner company 6", logo: "/partner_company/work_with6.webp" },
  { name: "Partner company 7", logo: "/partner_company/work_with7.webp" },
  { name: "Partner company 8", logo: "/partner_company/work_with8.webp" },
  { name: "Partner company 9", logo: "/partner_company/work_with9.webp" },
  { name: "Partner company 10", logo: "/partner_company/work_with10.webp" },
];

const highlights = [
  { label: "Mandate ready", icon: ShieldCheck },
  { label: "Builder network", icon: Building2 },
  { label: "Launch support", icon: Handshake },
];

function LogoRail({ reverse = false }: { reverse?: boolean }) {
  const logos = reverse ? [...partnerCompanies].reverse() : partnerCompanies;

  return (
    <div className="logo-marquee relative overflow-hidden border border-white/10 bg-white/[0.04] py-4 sm:py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-zinc-950 to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-zinc-950 to-transparent sm:w-32" />

      <div className={reverse ? "partner-logo-track partner-logo-track-reverse" : "partner-logo-track"}>
        {[0, 1].map((set) => (
          <div key={set} className="flex shrink-0 gap-3 px-1 sm:gap-4 sm:px-2" aria-hidden={set === 1}>
            {logos.map((company) => (
              <div
                key={`${company.logo}-${set}`}
                className="group/logo flex h-20 w-36 shrink-0 items-center justify-center border border-white/10 bg-white p-3 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-emerald-300 sm:h-24 sm:w-52 sm:p-4"
              >
                <img
                  src={company.logo}
                  alt={set === 0 ? company.name : ""}
                  className="max-h-12 w-full object-contain transition duration-300 group-hover/logo:scale-105 sm:max-h-14"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PartnerBuildersSection() {
  return (
    <section id="builders" className="relative overflow-hidden py-16 text-white sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.2),transparent_40%)]" />

      <div className="section-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400 sm:text-sm sm:tracking-[0.25em]">
              Work with top builders
            </p>

            <h2 className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text py-4 text-3xl font-extrabold leading-tight text-transparent sm:py-5 sm:text-5xl">
              Trusted by premium real estate partners.
            </h2>

            <p className="max-w-xl text-sm leading-7 text-zinc-400 sm:text-lg">
              CityMash partners with top builder teams to deliver strong launch execution,
              consistent sales momentum, and visibility from enquiry to booking.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl sm:p-6"
                >
                  <span className="grid size-11 place-items-center rounded-lg bg-emerald-400 text-black transition group-hover:scale-105 sm:size-12">
                    <Icon className="size-5" />
                  </span>

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-zinc-300 sm:mt-6 sm:tracking-[0.2em]">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-10 space-y-3 sm:mt-16 sm:space-y-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-black to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-black to-transparent sm:w-24" />

          <LogoRail />
          <LogoRail reverse />
        </div>

        <div className="mt-10 flex flex-col gap-5 rounded-xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-5 backdrop-blur-md sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 sm:tracking-[0.25em]">
              Partner Network
            </p>
            <p className="mt-2 text-sm text-zinc-400">
              Showcasing builders and companies that trust CityMash.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-emerald-300 sm:px-6"
          >
            Build Together
            <MoveRight className="size-4 transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
