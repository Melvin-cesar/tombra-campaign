import { ButtonLink } from "@/components/ButtonLink";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Section } from "@/components/Section";
import { newsItems } from "@/lib/content";

export default function MediaPage() {
  return (
    <>
      <Section
        eyebrow="News and media"
        title="Latest News"
        intro="Campaign updates, press notes, photos, videos, and media resources will be collected here."
        tone="palm"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {newsItems.map((item) => (
            <article
              className="rounded-lg border border-bayelsa-deep/10 bg-white p-5 shadow-sm"
              key={item.title}
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-bayelsa-green">
                {item.tag}
              </p>
              <h2 className="mt-3 text-xl font-black leading-snug text-bayelsa-deep">
                {item.title}
              </h2>
              <p className="mt-3 text-sm text-slate-600">{item.date}</p>
              <p className="mt-4 text-sm leading-6 text-slate-700">
                Add verified campaign update, date, location, speaker quotes,
                and photos before publishing.
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Press" title="Press Releases">
        <div className="rounded-lg border border-dashed border-bayelsa-green/35 bg-bayelsa-palm p-6 text-bayelsa-deep">
          <p className="font-black">[Add press release archive here]</p>
          <p className="mt-2 text-sm leading-6">
            Include verified release titles, publication dates, downloadable
            PDFs, and named campaign media contact when ready.
          </p>
        </div>
      </Section>

      <Section eyebrow="Gallery" title="Photo Gallery Placeholders" tone="palm">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Community meeting",
            "Women and traders",
            "Youth mobilisation",
            "Waterway visit",
          ].map((item) => (
            <PlaceholderImage
              className="min-h-52"
              key={item}
              title={item}
              label="Replace with verified campaign photo."
            />
          ))}
        </div>
      </Section>

      <Section eyebrow="Video" title="Video Gallery Placeholders">
        <div className="grid gap-4 md:grid-cols-3">
          {["Town hall clip", "Candidate message", "Community voices"].map(
            (item) => (
              <div
                className="rounded-lg border border-bayelsa-deep/10 bg-white p-5 shadow-sm"
                key={item}
              >
                <div className="flex aspect-video items-center justify-center rounded-md bg-bayelsa-deep text-sm font-black text-white">
                  Video placeholder
                </div>
                <p className="mt-4 text-lg font-black text-bayelsa-deep">
                  {item}
                </p>
              </div>
            )
          )}
        </div>
      </Section>

      <Section eyebrow="Downloads" title="Campaign Media Kit" tone="green">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-base leading-7 text-white/82">
              [Download campaign media kit placeholder]. Add approved logo
              files, candidate photos, party details, biography note, contact
              information, and usage guidance.
            </p>
            <p className="mt-4 text-sm font-semibold text-bayelsa-gold">
              Press contact: [Press contact placeholder]
            </p>
          </div>
          <ButtonLink href="/contact" variant="light">
            Contact Press Team
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
