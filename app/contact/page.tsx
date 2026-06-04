import { ConsentField, TextAreaField, TextField } from "@/components/FormFields";
import { Section } from "@/components/Section";

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        title="Contact the Campaign"
        intro="Reach the Tombra Mohammed campaign team for community issues, volunteer coordination, press requests, and general enquiries."
        tone="palm"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Campaign phone", "[Campaign phone placeholder]"],
            ["WhatsApp", "[WhatsApp placeholder]"],
            ["Email", "[Email placeholder]"],
            ["Campaign office", "[Campaign office address placeholder]"],
          ].map(([label, value]) => (
            <div
              className="rounded-lg border border-bayelsa-deep/10 bg-white p-5 shadow-sm"
              key={label}
            >
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-bayelsa-green">
                {label}
              </p>
              <p className="mt-3 text-base font-black text-bayelsa-deep">
                {value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-lg bg-bayelsa-deep p-5 text-white">
          <p className="font-black">Social links</p>
          <p className="mt-2 text-sm leading-6 text-white/78">
            [Facebook] [X] [Instagram] [TikTok] [YouTube]
          </p>
        </div>
      </Section>

      <Section title="Send a Message">
        <form className="grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
          {/* TODO: Connect this front-end form to campaign email, CRM, or helpdesk workflow. */}
          <div className="grid gap-5 md:grid-cols-2">
            <TextField label="Full name" name="fullName" required />
            <TextField label="Phone number" name="phone" type="tel" required />
            <TextField label="Email optional" name="email" type="email" />
            <TextField label="Community or organisation" name="community" />
          </div>
          <TextAreaField
            label="Message"
            name="message"
            placeholder="Write your message to the campaign."
            required
          />
          <ConsentField
            label="I agree that the campaign may contact me about this message."
            name="consent"
          />
          <button
            type="submit"
            className="min-h-12 rounded-md bg-bayelsa-gold px-5 py-3 text-sm font-black text-bayelsa-deep transition hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-bayelsa-gold/40 sm:w-fit"
          >
            Send Message
          </button>
        </form>
      </Section>
    </>
  );
}
