import { salesCycle } from "../data/citymash";
import { SectionHeading } from "./SectionHeading";

export function SalesCycleSection() {
  return (
    <section id="cycle" className="bg-zinc-950 py-16 text-white sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Sales cycle"
          title="A focused rhythm from planning to execution"
          copy=" CityMash cycle as planning, token and booking, RERA checks, sales strategies, negotiation, patience, consistency, and execution."
          tone="dark"
        />

        <div className="mt-10 grid gap-px overflow-hidden bg-white/15 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {salesCycle.map((step, index) => (
            <article key={step.title} className="bg-zinc-950 p-5 sm:p-8">
              <p className="font-display text-4xl font-extrabold text-emerald-300 sm:text-5xl">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-6 text-lg font-extrabold text-white sm:mt-8 sm:text-xl">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
