import { ConsentField, SelectField, TextAreaField, TextField } from "@/components/FormFields";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Section } from "@/components/Section";
import { issueCategories } from "@/lib/content";

const lgas = ["Sagbama", "Ekeremor"];

export default function CommunityPage() {
  return (
    <>
      <Section
        eyebrow="Communities"
        title="Sagbama & Ekeremor"
        intro="Bayelsa West is strongest when every community can speak clearly about what it needs. Use this page to organise local priorities and collect concerns from the people."
        tone="palm"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {lgas.map((lga) => (
            <article
              className="rounded-lg border border-bayelsa-deep/10 bg-white p-5 shadow-sm"
              key={lga}
            >
              <PlaceholderImage
                title={`${lga} community photos`}
                label="Replace with local ward, market, school, waterfront, and meeting photos."
                className="min-h-56"
              />
              <h2 className="mt-5 text-2xl font-black text-bayelsa-deep">
                {lga}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                To the people of {lga}: this campaign is listening for the
                needs that affect everyday life, movement, work, education,
                health, security, and opportunity.
              </p>
              <div className="mt-4 rounded-md border border-dashed border-bayelsa-green/35 bg-bayelsa-palm p-4 text-sm font-semibold text-bayelsa-deep">
                [Add verified local priorities for {lga} here]
              </div>
              <a
                href="#listening-form"
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-bayelsa-green px-5 py-3 text-sm font-bold text-white transition hover:bg-bayelsa-deep focus:outline-none focus:ring-4 focus:ring-bayelsa-green/25"
              >
                Submit an Issue From Your Community
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Listening form"
        title="Community Listening Form"
        intro="Tell the campaign what your ward or community needs attention on."
      >
        <form
          id="listening-form"
          className="grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-soft sm:p-6"
        >
          {/* TODO: Connect this front-end form to the campaign CRM or secure backend endpoint. */}
          <div className="grid gap-5 md:grid-cols-2">
            <TextField label="Full name" name="fullName" required />
            <TextField label="Phone number" name="phone" type="tel" required />
            <SelectField label="LGA" name="lga" options={lgas} required />
            <TextField label="Ward" name="ward" required />
            <TextField label="Community" name="community" required />
            <SelectField
              label="Issue category"
              name="issueCategory"
              options={issueCategories}
              required
            />
          </div>
          <TextAreaField
            label="Short description"
            name="description"
            placeholder="Describe the issue in simple terms."
            required
          />
          <ConsentField
            label="I agree that the campaign may contact me about this issue."
            name="consent"
          />
          <button
            type="submit"
            className="min-h-12 rounded-md bg-bayelsa-gold px-5 py-3 text-sm font-black text-bayelsa-deep transition hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-bayelsa-gold/40 sm:w-fit"
          >
            Submit Community Concern
          </button>
        </form>
      </Section>
    </>
  );
}
