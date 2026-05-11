import { Building2, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const recognitions = [
  "Worked with top builders",
  "Supported builder brand establishment",
  "Expert in project launching",
  "Premium Pune mandate company",
];

export function RecognitionSection() {
  return (
    <section className="bg-[#eef3f7] py-16 sm:py-24 lg:py-28">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <SectionHeading
          eyebrow="Recognition"
          title="Built for builders who need trust, speed, and market clarity."
          copy="CityMash has helped developers establish projects in-market through launch expertise, buyer communication, and disciplined sales execution."
        />

        <div className="border border-zinc-200 bg-white p-5 shadow-panel sm:p-6">
          <div className="flex items-center gap-3 border-b border-zinc-200 pb-5 sm:gap-4">
            <span className="grid size-14 place-items-center bg-zinc-950 text-white">
              <Building2 className="size-7" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-xl font-extrabold text-zinc-950 sm:text-2xl">Pune's Premium</p>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500 sm:text-sm sm:tracking-[0.16em]">Real estate company</p>
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {recognitions.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-[#f7f8f4] p-4">
                <CheckCircle2 className="size-5 shrink-0 text-teal-700" />
                <span className="text-sm font-bold text-zinc-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
