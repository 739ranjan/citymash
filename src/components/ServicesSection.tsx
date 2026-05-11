import { ArrowUpRight } from "lucide-react";
import { services } from "../data/citymash";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#eff5f1] py-16 sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our services"
            title="Mandate-led real estate services for Pune's growth market."
            copy="From residential launches to retail leasing, CityMash brings market intelligence, channel strength, and direct sales accountability."
          />
          <a
            href="#contact"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-zinc-950 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-teal-700 sm:w-fit sm:py-4"
          >
            Discuss Project
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="group overflow-hidden border border-zinc-200 bg-white">
                <div className="relative h-48 overflow-hidden sm:h-56">
                  <img
                    src={service.image}
                    alt={`${service.title} real estate service`}
                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 grid size-12 place-items-center bg-white text-teal-700 shadow-panel">
                    <Icon className="size-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-zinc-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
