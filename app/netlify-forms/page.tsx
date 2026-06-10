import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const formBlueprints = [
  {
    name: "volunteer-form",
    formType: "volunteer",
    fields: [
      "fullName",
      "phone",
      "email",
      "lga",
      "ward",
      "community",
      "volunteerRole",
      "available",
      "consent",
    ],
  },
  {
    name: "community-concern-form",
    formType: "community-concern",
    fields: [
      "fullName",
      "phone",
      "lga",
      "ward",
      "community",
      "issueCategory",
      "description",
      "consent",
    ],
  },
  {
    name: "contact-form",
    formType: "contact",
    fields: ["fullName", "phone", "email", "reason", "message", "consent"],
  },
];

export default function NetlifyFormsPage() {
  return (
    <main className="hidden" aria-hidden="true">
      {formBlueprints.map((form) => (
        <form
          action="/"
          data-netlify="true"
          method="POST"
          name={form.name}
          netlify-honeypot="bot-field"
          key={form.name}
        >
          <input type="hidden" name="form-name" value={form.name} />
          <input type="hidden" name="sourceSite" value="tombra2027.com" />
          <input type="hidden" name="campaign" value="Tombra 2027" />
          <input type="hidden" name="formType" value={form.formType} />
          <input type="hidden" name="submittedFrom" value="" />
          <input name="bot-field" />
          {form.fields.map((field) => (
            <input key={field} name={field} />
          ))}
        </form>
      ))}
    </main>
  );
}
