import { ConsentField, SelectField, TextField } from "@/components/FormFields";
import { Section } from "@/components/Section";
import { volunteerOptions } from "@/lib/content";

export default function VolunteerPage() {
  return (
    <>
      <Section
        eyebrow="Volunteer"
        title="Join the Movement"
        intro="The campaign needs people across Bayelsa West: ward volunteers, youth organisers, women mobilisers, canvassers, content supporters, WhatsApp coordinators, and election day volunteers."
        tone="palm"
      >
        <div className="rounded-lg bg-bayelsa-deep p-6 text-white shadow-soft">
          <p className="text-2xl font-black">
            Become part of the movement for a stronger Bayelsa West.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/78">
            Volunteer from your ward, community, school network, market group,
            church group, youth circle, or online platform.
          </p>
        </div>
      </Section>

      <Section title="Volunteer Form">
        <form className="grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
          {/* TODO: Connect this front-end form to volunteer database and consent-safe messaging workflow. */}
          <div className="grid gap-5 md:grid-cols-2">
            <TextField label="Full name" name="fullName" required />
            <TextField label="Phone number" name="phone" type="tel" required />
            <TextField label="Email optional" name="email" type="email" />
            <SelectField
              label="LGA"
              name="lga"
              options={["Sagbama", "Ekeremor"]}
              required
            />
            <TextField label="Ward" name="ward" required />
            <TextField label="Community" name="community" required />
            <SelectField
              label="How do you want to help?"
              name="volunteerRole"
              options={volunteerOptions}
              required
            />
            <SelectField
              label="Are you available for campaign activities?"
              name="available"
              options={["Yes", "No"]}
              required
            />
          </div>
          <ConsentField
            label="I agree that the campaign may contact me about volunteer activities."
            name="consent"
          />
          <button
            type="submit"
            className="min-h-12 rounded-md bg-bayelsa-gold px-5 py-3 text-sm font-black text-bayelsa-deep transition hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-bayelsa-gold/40 sm:w-fit"
          >
            Join the Movement
          </button>
        </form>
      </Section>
    </>
  );
}
