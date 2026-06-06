import { CampaignImage } from "@/components/CampaignImage";
import { Section } from "@/components/Section";
import { campaignDetails } from "@/lib/campaignDetails";

const profileNotes = [
  "Verified education background will be added after campaign review.",
  "Confirmed leadership and public service details will be published here.",
  "Community service notes will be kept factual and easy to verify.",
];

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title={`Meet ${campaignDetails.candidateName}`}
        intro={`Tombra Jennifer Mohammed, also known as ${campaignDetails.candidateName}, is the ${campaignDetails.party} candidate presenting herself to serve ${campaignDetails.constituency}.`}
        tone="palm"
      >
        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <CampaignImage
            alt="Tombra Mohammed smiling in a bright patterned outfit"
            className="min-h-80"
            imageClassName="object-[62%_center]"
            label={`${campaignDetails.party} candidate for ${campaignDetails.constituency}.`}
            src="/campaign/tombra-portrait.jpg"
            title="Candidate portrait"
          />
          <div className="space-y-5 text-base leading-7 text-slate-700">
            <p>
              This page should grow from verified facts only. The campaign can
              add confirmed details about her background, work, public service,
              and community life when those materials are ready.
            </p>
            <div className="grid gap-3">
              {profileNotes.map((item) => (
                <div
                  className="rounded-md border border-bayelsa-green/30 bg-white p-4 text-sm font-semibold text-bayelsa-deep"
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
                Local priorities, community notes, and campaign updates will
                be documented here as verified materials are approved.
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
          <CampaignImage
            alt="Tombra Mohammed and supporters meeting with community leaders indoors"
            className="min-h-72"
            label="Listening sessions and community leadership conversations."
            src="/campaign/community-leaders-meeting.jpg"
            title="Ward conversation"
          />
          <CampaignImage
            alt="Tombra Mohammed smiling with women during a community visit"
            className="min-h-72"
            label="Grassroots outreach with women, young people, and local volunteers."
            src="/campaign/women-community-visit.jpg"
            title="Market and youth outreach"
          />
        </div>
      </Section>
    </>
  );
}
