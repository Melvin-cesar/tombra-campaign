import { agendaPillars } from "@/lib/content";
import { Section } from "@/components/Section";

export default function AgendaPage() {
  return (
    <>
      <Section
        eyebrow="Policy priorities"
        title="The Bayelsa West Agenda"
        intro="A Senator cannot directly control every road, hospital, job, or school. This agenda is written around advocacy, legislation, oversight, support, and working with the right agencies."
        tone="palm"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {agendaPillars.map((pillar, index) => (
            <article
              className="rounded-lg border border-bayelsa-deep/10 bg-white p-6 shadow-sm"
              key={pillar.title}
            >
              <p className="text-sm font-black text-bayelsa-green">
                {String.fromCharCode(65 + index)}.
              </p>
              <h2 className="mt-2 text-2xl font-black text-bayelsa-deep">
                {pillar.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="How representation works"
        title="Advocate. Sponsor. Support. Demand accountability."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            "Tombra will advocate for practical federal attention.",
            "Tombra will push for programmes that reach local people.",
            "Tombra will sponsor and support useful bills and motions.",
            "Tombra will use oversight to demand responsible action.",
          ].map((item) => (
            <div className="rounded-lg bg-bayelsa-palm p-5" key={item}>
              <p className="text-sm font-bold leading-6 text-bayelsa-deep">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
