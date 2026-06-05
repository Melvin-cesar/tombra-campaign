import { Section } from "@/components/Section";

const voterSteps = [
  {
    title: "Check your voter registration",
    body: "Confirm your registration details early so you know your status before election season becomes crowded.",
    note: "Confirm through official INEC channels.",
  },
  {
    title: "Transfer your polling unit",
    body: "If you have moved, follow the official process for transfer when INEC opens the relevant window.",
    note: "Use INEC guidance when the transfer window is open.",
  },
  {
    title: "Collect your PVC",
    body: "Your Permanent Voter Card is required for voting. Keep it safe and do not give it to anyone.",
    note: "Check official PVC collection announcements before travelling.",
  },
  {
    title: "Know your polling unit",
    body: "Check your polling unit location before election day and plan how you will get there.",
    note: "Verify your polling unit through official voter information sources.",
  },
  {
    title: "Election day reminders",
    body: "Arrive early, follow INEC instructions, wait peacefully if you choose to, and report problems through lawful channels.",
    note: "Follow official election day instructions.",
  },
  {
    title: "Avoid vote buying and violence",
    body: "Your vote is your voice. Do not sell it, do not intimidate anyone, and do not join violence.",
    note: "Protect your vote and encourage peaceful participation.",
  },
  {
    title: "Follow official INEC updates",
    body: "Rely on official INEC channels for dates, deadlines, voter processes, and polling information.",
    note: "Use official channels for dates, deadlines, and process changes.",
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
              {step.note}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
