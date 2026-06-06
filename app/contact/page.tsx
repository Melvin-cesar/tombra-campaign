import { ConsentField, TextAreaField, TextField } from "@/components/FormFields";
import { NetlifyForm } from "@/components/NetlifyForm";
import { Section } from "@/components/Section";
import { campaignDetails, contactItems, socialLinks } from "@/lib/campaignDetails";

const consentText = `I agree that the ${campaignDetails.candidateName} campaign may contact me using the information I provided.`;

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        title="Contact the Campaign"
        intro="Reach the Tombra Mohammed campaign team for community issues, volunteer coordination, press requests, and general enquiries."
        tone="palm"
      >
        {contactItems.length ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {contactItems.map((item) => (
              <div
                className="rounded-lg border border-bayelsa-deep/10 bg-white p-5 shadow-sm"
                key={item.label}
              >
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-bayelsa-green">
                  {item.label}
                </p>
                <p className="mt-3 text-base font-black text-bayelsa-deep">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-bayelsa-deep/10 bg-white p-5 shadow-sm">
            <p className="font-black text-bayelsa-deep">
              Direct campaign contact details will be published after approval.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Use the message form below for now, and update the campaign
              details file when phone, WhatsApp, email, or office information is
              ready.
            </p>
          </div>
        )}
        {socialLinks.length ? (
          <div className="mt-5 rounded-lg bg-bayelsa-deep p-5 text-white">
            <p className="font-black">Social links</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  className="rounded-md bg-white/10 px-3 py-2 text-sm font-bold text-white transition hover:bg-white/18"
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </Section>

      <Section title="Send a Message">
        <NetlifyForm
          className="grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-soft sm:p-6"
          errorMessage="Sorry, your message could not be sent. Please check your connection and try again."
          name="contact-form"
          successMessage="Thank you. Your message has been received."
        >
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
          <ConsentField label={consentText} name="consent" />
          <button
            type="submit"
            className="min-h-12 rounded-md bg-bayelsa-gold px-5 py-3 text-sm font-black text-bayelsa-deep transition hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-bayelsa-gold/40 sm:w-fit"
          >
            Send Message
          </button>
        </NetlifyForm>
      </Section>
    </>
  );
}
