import { agendaPillars, newsItems } from "@/lib/content";
import { ButtonLink } from "@/components/ButtonLink";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Section } from "@/components/Section";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bayelsa-deep text-white">
        <div className="absolute inset-0 river-pattern opacity-80" />
        <div className="relative mx-auto grid min-h-[calc(88svh-73px)] max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="rise-in">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-bayelsa-gold">
              Tombra Jennifer Mohammed | YPP
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
              A Stronger Voice for Bayelsa West
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">
              Tombra Mohammed is running to bring jobs, better representation,
              and people-first leadership to Sagbama and Ekeremor.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/volunteer">Join the Movement</ButtonLink>
              <ButtonLink href="/community#listening-form" variant="light">
                Submit a Community Need
              </ButtonLink>
            </div>
          </div>
          <PlaceholderImage
            title="Bayelsa West campaign photo"
            label="Replace with verified campaign photography from Sagbama, Ekeremor, waterways, markets, schools, and community meetings."
            className="min-h-[360px] fade-in"
          />
        </div>
      </section>

      <Section
        eyebrow="Plain purpose"
        title="Bayelsa West deserves leadership that listens, shows up, and fights for real development."
        intro="This campaign is built around the people of Sagbama and Ekeremor: riverine communities, young people looking for work, women carrying local trade, elders asking for dignity, and families who want representation that remembers them after election day."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {["Jobs", "Better Representation", "Grassroots Leadership"].map(
            (item) => (
              <div
                className="rounded-lg border border-bayelsa-deep/10 bg-bayelsa-palm p-5"
                key={item}
              >
                <p className="text-xl font-black text-bayelsa-deep">{item}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  A practical campaign focus for Sagbama, Ekeremor, and every
                  community in Bayelsa West.
                </p>
              </div>
            )
          )}
        </div>
      </Section>

      <Section
        eyebrow="Why Tombra is running"
        title="To make representation feel closer to the people."
        tone="palm"
      >
        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <PlaceholderImage
            title="Community listening"
            label="Placeholder for meetings with women, youth, traders, chiefs, and community leaders."
          />
          <div className="space-y-5 text-base leading-7 text-slate-700">
            <p>
              Tombra Mohammed is presenting a campaign rooted in listening,
              accountability, and local priorities. The message is simple:
              Bayelsa West needs a Senator who will carry the concerns of
              Sagbama and Ekeremor with clarity and consistency.
            </p>
            <p>
              Her public campaign themes include job creation, better
              leadership, women&apos;s participation, and genuine grassroots
              representation. This site will keep verified facts separate from
              placeholders as the campaign updates its materials.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Agenda"
        title="The Bayelsa West Agenda"
        intro="A practical set of priorities for jobs, families, movement, education, healthcare, the environment, and accountable representation."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {agendaPillars.slice(0, 6).map((pillar) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              key={pillar.title}
            >
              <h3 className="text-lg font-black text-bayelsa-deep">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/agenda" variant="secondary">
            Read the Full Agenda
          </ButtonLink>
        </div>
      </Section>

      <Section
        eyebrow="Communities"
        title="For Sagbama. For Ekeremor. For Every Community."
        intro="Bayelsa West is not one road or one town. It is a district of waterways, markets, schools, oil-producing communities, fishing livelihoods, and families who deserve to be heard."
        tone="green"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {["Sagbama", "Ekeremor"].map((lga) => (
            <div
              className="rounded-lg border border-white/12 bg-white/8 p-6"
              key={lga}
            >
              <p className="text-2xl font-black">{lga}</p>
              <p className="mt-3 text-sm leading-6 text-white/78">
                Share the priorities from your ward and community so the
                campaign can listen, document, and respond with seriousness.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Join"
        title="Join the Movement"
        intro="The campaign needs people across Bayelsa West who can listen, organise, share verified information, and help communities take part."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/volunteer">Volunteer Today</ButtonLink>
          <ButtonLink href="/community#listening-form" variant="secondary">
            Share Your Community Concern
          </ButtonLink>
        </div>
      </Section>

      <Section
        eyebrow="Latest updates"
        title="News and Campaign Notes"
        tone="palm"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {newsItems.map((item) => (
            <article
              className="rounded-lg border border-bayelsa-deep/10 bg-white p-5 shadow-sm"
              key={item.title}
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-bayelsa-green">
                {item.tag}
              </p>
              <h3 className="mt-3 text-lg font-black leading-snug text-bayelsa-deep">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{item.date}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/media" variant="secondary">
            Visit Media Page
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
