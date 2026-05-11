import { commitments } from "../data/citymash";
import { SectionHeading } from "./SectionHeading";

export function CommitmentSection() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Our commitment"
          title="Clear promises that protect every project."
          copy="The CityMash operating style is built on honest sales conversations, strong follow-through, and a clean process for clients, builders, and buyers."
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border border-zinc-200 bg-[#f7f8f4] p-5 transition hover:-translate-y-1 hover:shadow-panel sm:p-6">
                <span className="grid size-12 place-items-center bg-emerald-100 text-emerald-800">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-6 text-lg font-extrabold text-zinc-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
