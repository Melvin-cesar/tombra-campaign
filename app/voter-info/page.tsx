import { Section } from "@/components/Section";

const voterSteps = [
  {
    title: "Check your voter registration",
    body: "Confirm your registration details early so you know your status before election season becomes crowded.",
    link: "[INEC voter verification link]",
  },
  {
    title: "Transfer your polling unit",
    body: "If you have moved, follow the official process for transfer when INEC opens the relevant window.",
    link: "[INEC CVR link]",
  },
  {
    title: "Collect your PVC",
    body: "Your Permanent Voter Card is required for voting. Keep it safe and do not give it to anyone.",
    link: "[INEC PVC collection information]",
  },
  {
    title: "Know your polling unit",
    body: "Check your polling unit location before election day and plan how you will get there.",
    link: "[INEC polling unit link]",
  },
  {
    title: "Election day reminders",
    body: "Arrive early, follow INEC instructions, wait peacefully if you choose to, and report problems through lawful channels.",
    link: "[Election day guidance link]",
  },
  {
    title: "Avoid vote buying and violence",
    body: "Your vote is your voice. Do not sell it, do not intimidate anyone, and do not join violence.",
    link: "[Civic education link]",
  },
  {
    title: "Follow official INEC updates",
    body: "Rely on official INEC channels for dates, deadlines, voter processes, and polling information.",
    link: "[Official INEC updates link]",
  },
];

export default function VoterInfoPage() {
  return (
    <Section
      eyebrow="Voter education"
      title="Voter Information"
      intro="Simple civic information for voters in Bayelsa West. Always confirm dates, rules, and links through official INEC channels."
      tone="palm"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {voterSteps.map((step) => (
          <article
            className="rounded-lg border border-bayelsa-deep/10 bg-white p-5 shadow-sm"
            key={step.title}
          >
            <h2 className="text-xl font-black text-bayelsa-deep">
              {step.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              {step.body}
            </p>
            <p className="mt-4 rounded-md border border-dashed border-bayelsa-green/35 bg-bayelsa-palm px-3 py-2 text-sm font-semibold text-bayelsa-deep">
              {step.link}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
