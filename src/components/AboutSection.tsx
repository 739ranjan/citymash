import { Building2, Handshake, LineChart, UsersRound } from "lucide-react";
import { images } from "../data/citymash";
import { SectionHeading } from "./SectionHeading";

const proof = [
  { label: "Top builders", icon: Building2 },
  { label: "Expert team", icon: UsersRound },
  { label: "Market analysis", icon: LineChart },
  { label: "Partner network", icon: Handshake },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-[#f7f8f4] py-16 sm:py-24 lg:py-28">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <SectionHeading
            eyebrow="About company"
            title="Trusted partner in real estate excellence since 2016."
            copy="CityMash specializes in sole selling and mandate projects, backed by seasoned real estate professionals with strong Pune market knowledge."
          />
          <p className="mt-6 text-base leading-8 text-zinc-700">
            The team supports builders through pre-launch planning, post-launch execution, market price
            trends, demand and supply study, and structured sales operations. The focus is simple:
            exceptional results through expertise, dedication, transparent selling, and consistent follow-up.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {proof.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 border border-zinc-200 bg-white p-4">
                  <span className="grid size-10 shrink-0 place-items-center bg-teal-50 text-teal-700">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-extrabold text-zinc-900">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr] lg:gap-5">
          <img
            src={images.residential}
            alt="Modern residential building exterior"
            className="h-64 w-full object-cover sm:h-[420px] lg:h-[520px]"
          />
          <div className="grid gap-4 lg:gap-5">
            <img src={images.interior} alt="Bright apartment interior" className="h-52 w-full object-cover sm:h-64" />
            <div className="bg-zinc-950 p-6 text-white">
              <p className="font-display text-4xl font-extrabold">70+</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">
                top developer launches
              </p>
              <p className="mt-4 text-sm leading-6 text-zinc-300">
                Launch, sell, recover, and retain brand trust through one accountable sales partner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
