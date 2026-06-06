import { Section } from "@/components/Section";
import { campaignDetails, contactItems } from "@/lib/campaignDetails";

export default function PrivacyPage() {
  const deletionContact = contactItems.find((item) => item.label === "Email");

  return (
    <>
      <Section
        eyebrow="Privacy"
        title="Privacy Policy"
        intro={`${campaignDetails.candidateName} campaign forms collect only the information needed to respond to voters, volunteers, community concerns, and press enquiries.`}
        tone="palm"
      >
        <div className="grid gap-5 text-base leading-7 text-slate-700">
          <div className="rounded-lg border border-bayelsa-deep/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-black text-bayelsa-deep">
              What We Collect
            </h2>
            <p className="mt-3">
              The campaign may collect names, phone numbers, email addresses,
              LGAs, wards, communities, volunteer interests, issue categories,
              and messages submitted through website forms.
            </p>
          </div>

          <div className="rounded-lg border border-bayelsa-deep/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-black text-bayelsa-deep">
              Why We Collect It
            </h2>
            <p className="mt-3">
              The campaign uses this information to coordinate volunteers,
              understand community concerns, respond to enquiries, organise
              outreach, and keep supporters informed about campaign activities.
            </p>
          </div>

          <div className="rounded-lg border border-bayelsa-deep/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-black text-bayelsa-deep">
              How We May Contact You
            </h2>
            <p className="mt-3">
              If you submit a form and give consent, the campaign may contact
              you by phone, WhatsApp, email, or another channel you provided.
            </p>
          </div>

          <div className="rounded-lg border border-bayelsa-deep/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-black text-bayelsa-deep">
              Who Can Access Submissions
            </h2>
            <p className="mt-3">
              Website form submissions should be accessible only to authorised
              campaign team members or service providers helping operate the
              website and campaign communication systems.
            </p>
          </div>

          <div className="rounded-lg border border-bayelsa-deep/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-black text-bayelsa-deep">
              Deletion Requests
            </h2>
            <p className="mt-3">
              You may ask the campaign to delete your submitted information.
              {deletionContact
                ? ` Send deletion requests to ${deletionContact.value}.`
                : " Add an official campaign email address before launch so deletion requests have a clear destination."}
            </p>
          </div>

          <div className="rounded-lg border border-bayelsa-deep/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-black text-bayelsa-deep">
              No Sale of Personal Information
            </h2>
            <p className="mt-3">
              The campaign will not sell personal information submitted through
              this website.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
