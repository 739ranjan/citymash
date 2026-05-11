import { ArrowDown, ArrowUpRight } from "lucide-react";
import { images, metrics } from "../data/citymash";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden bg-black pt-28 text-white sm:pt-32">
      <img
        src={images.hero}
        alt="Premium city apartment overlooking skyline"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/72 to-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(16,185,129,0.24),transparent_42%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="section-shell relative z-10 pb-10 sm:pb-14 lg:pb-16">
        <div className="max-w-4xl">
          <h1 className="font-display text-4xl font-extrabold leading-none text-orange-500 text-balance min-[360px]:text-5xl sm:text-7xl lg:text-8xl">
            CityMash
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-300 sm:mt-6 sm:text-xl sm:leading-8">
            Pune's premium mandate real estate company for sole selling, developer launches,
            residential, commercial, retail, and leasing mandates.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href="#services"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-emerald-300 sm:w-auto sm:px-6 sm:py-4"
            >
              Explore Portfolio
              <ArrowDown className="size-4 transition group-hover:translate-y-1" />
            </a>

            <a
              href="#contact"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/10 sm:w-auto sm:px-6 sm:py-4"
            >
              Start a Mandate
              <ArrowUpRight className="size-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-3 min-[420px]:grid-cols-2 sm:mt-14 sm:gap-4 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl sm:p-6"
            >
              <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-400">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
