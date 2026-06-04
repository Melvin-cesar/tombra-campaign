import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "white" | "green" | "palm";
};

export function Section({
  eyebrow,
  title,
  intro,
  children,
  tone = "white",
}: SectionProps) {
  const tones = {
    white: "bg-white",
    green: "bg-bayelsa-deep text-white",
    palm: "bg-bayelsa-palm",
  };

  return (
    <section className={`${tones[tone]} py-14 sm:py-20`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p
              className={`mb-3 text-sm font-bold uppercase tracking-[0.12em] ${
                tone === "green" ? "text-bayelsa-gold" : "text-bayelsa-green"
              }`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p
              className={`mt-4 text-base leading-7 sm:text-lg ${
                tone === "green" ? "text-white/82" : "text-slate-700"
              }`}
            >
              {intro}
            </p>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
