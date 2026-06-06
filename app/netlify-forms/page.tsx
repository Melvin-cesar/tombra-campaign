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
    fields: ["fullName", "phone", "email", "community", "message", "consent"],
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
          <input name="bot-field" />
          {form.fields.map((field) => (
            <input key={field} name={field} />
          ))}
        </form>
      ))}
    </main>
  );
}
