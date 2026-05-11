type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, copy, align = "left", tone = "light" }: SectionHeadingProps) {
  const eyebrowClass =
    tone === "dark"
      ? "text-xs font-bold uppercase tracking-[0.14em] text-emerald-300 sm:text-sm sm:tracking-[0.18em]"
      : "eyebrow";
  const copyClass =
    tone === "dark"
      ? "text-sm font-medium leading-7 text-zinc-300 sm:text-base sm:leading-8 lg:text-lg"
      : "text-sm font-medium leading-7 text-zinc-600 sm:text-base sm:leading-8 lg:text-lg";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2 className="py-4 font-display text-3xl font-extrabold leading-tight text-balance sm:py-5 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy && <p className={copyClass}>{copy}</p>}
    </div>
  );
}
