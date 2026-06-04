import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Section } from "@/components/Section";

const placeholders = [
  "[Add verified education background here]",
  "[Add verified leadership record here]",
  "[Add verified community service record here]",
];

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="Meet Tombra Mohammed"
        intro="Tombra Jennifer Mohammed, also known as Tombra Mohammed, is the Young Progressives Party candidate presenting herself to serve Bayelsa West Senatorial District."
        tone="palm"
      >
        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <PlaceholderImage
            title="Candidate portrait"
            label="Replace with verified portrait or campaign field photo."
          />
          <div className="space-y-5 text-base leading-7 text-slate-700">
            <p>
              This page should grow from verified facts only. The campaign can
              add confirmed details about her background, work, public service,
              and community life when those materials are ready.
            </p>
            <div className="grid gap-3">
              {placeholders.map((item) => (
                <div
                  className="rounded-md border border-dashed border-bayelsa-green/40 bg-white p-4 text-sm font-semibold text-bayelsa-deep"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Rooted"
        title="Rooted in Bayelsa West"
        intro="Tombra Mohammed is reported to be from Aleibiri community in Ekeremor LGA. Her campaign speaks directly to the lives and concerns of Sagbama, Ekeremor, and the wider Bayelsa West district."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {["Aleibiri", "Ekeremor", "Sagbama"].map((item) => (
            <div className="rounded-lg bg-bayelsa-palm p-5" key={item}>
              <p className="text-xl font-black text-bayelsa-deep">{item}</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Add verified local story, community detail, or campaign note
                here.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Purpose"
        title="Why She Is Running"
        tone="green"
      >
        <div className="max-w-3xl space-y-5 text-base leading-7 text-white/82">
          <p>
            Tombra is running around clear public themes: jobs, better
            leadership, women&apos;s participation, and genuine grassroots
            representation.
          </p>
          <p>
            The campaign message is not about distant grammar. It is about
            communities asking for a representative who listens, shows up, and
            carries local concerns into the places where decisions are made.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="People first"
        title="A Campaign Built Around People"
        intro="Community meetings, ward conversations, youth mobilisation, women organisers, and direct feedback from Sagbama and Ekeremor should shape the campaign as it grows."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <PlaceholderImage
            title="Ward conversation"
            label="Placeholder for people sitting together in a local meeting."
          />
          <PlaceholderImage
            title="Market and youth outreach"
            label="Placeholder for traders, young people, and community volunteers."
          />
        </div>
      </Section>
    </>
  );
}
