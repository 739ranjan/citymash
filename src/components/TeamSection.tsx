import { ArrowUpRight, Award, BadgeCheck, Star } from "lucide-react";
import { skills, team } from "../data/citymash";
import { SectionHeading } from "./SectionHeading";

export function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(13,125,111,0.12),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(245,158,11,0.13),transparent_26%),linear-gradient(180deg,#ffffff_0%,#f7f8f4_100%)]" />
      <div className="absolute left-0 top-20 h-72 w-28 rounded-r-full bg-teal-700/10 blur-3xl" />
      <div className="absolute bottom-8 right-0 h-80 w-40 rounded-l-full bg-amber-400/15 blur-3xl" />
      <div className="section-shell">
        <div className="relative grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="Expert team"
              title="Focused real estate leaders for launches and sales."
              copy="CityMash is led by Mayank and Shashank Barholia, combining hands-on sales execution with launch strategy for builder mandates."
            />
            <div className="mt-8 overflow-hidden border border-teal-900/10 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <div className="grid gap-px bg-teal-900/10 sm:grid-cols-2">
                <div className="bg-[#f7f8f4] p-5 sm:p-6">
                  <Award className="size-8 text-amber-600" />
                  <p className="mt-4 text-4xl font-extrabold text-zinc-950">Focused</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-zinc-500">
                    launch leadership
                  </p>
                </div>
                <div className="bg-[#f7f8f4] p-5 sm:p-6">
                  <BadgeCheck className="size-8 text-teal-700" />
                  <p className="mt-4 text-4xl font-extrabold text-zinc-950">10+</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-zinc-500">
                    years senior depth
                  </p>
                </div>
              </div>
              <p className="border-t border-teal-900/10 bg-white p-5 text-sm leading-7 text-zinc-600 sm:p-6">
                Compact leadership keeps the sales floor, mandate strategy, and builder communication tightly aligned.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {team.map((member, index) => (
              <article
                key={member.name}
                className="group relative overflow-hidden border border-teal-950/10 bg-[#f7f8f4] shadow-[0_24px_70px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(15,23,42,0.16)]"
              >
                <div className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-teal-800 shadow-sm">
                  0{index + 1}
                </div>
                <div className="absolute right-5 top-5 z-10 grid size-10 place-items-center rounded-full bg-white/90 shadow-sm">
                  <Star className="size-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden bg-teal-900">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/18 to-transparent opacity-85" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                      {member.role}
                    </p>
                    <h3 className="mt-2 text-xl font-extrabold sm:text-2xl">{member.name}</h3>
                  </div>
                </div>
                <div className="relative bg-white p-5 sm:p-6">
                  <p className="text-sm leading-7 text-zinc-600">{member.focus}</p>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-zinc-100 pt-5">
                    <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-teal-700 sm:tracking-[0.18em]">
                      CityMash leadership
                    </span>
                    <ArrowUpRight className="size-5 text-amber-600 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.label}
                className="flex items-center gap-3 border border-teal-950/10 bg-white/90 p-4 shadow-sm backdrop-blur"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-700">
                  <Icon className="size-5" />
                </span>
                <span className="text-sm font-extrabold text-zinc-900">{skill.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
