import { ButtonLink } from "@/components/ButtonLink";
import { CampaignImage } from "@/components/CampaignImage";
import { Section } from "@/components/Section";
import { campaignPhotos, newsItems } from "@/lib/content";

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
              className="overflow-hidden rounded-lg border border-bayelsa-deep/10 bg-white shadow-sm"
              key={item.title}
            >
              <CampaignImage
                alt={item.imageAlt}
                className="min-h-48 rounded-none shadow-none"
                imageClassName="object-cover"
                src={item.imageSrc}
              />
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-bayelsa-green">
                  {item.tag}
                </p>
                <h2 className="mt-3 text-xl font-black leading-snug text-bayelsa-deep">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm font-semibold text-slate-600">
                  {item.meta}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-700">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Press" title="Press Releases">
        <div className="rounded-lg border border-dashed border-bayelsa-green/35 bg-bayelsa-palm p-6 text-bayelsa-deep">
          <p className="font-black">Official campaign statements</p>
          <p className="mt-2 text-sm leading-6">
            Press releases and formal announcements will be posted here after
            they are cleared for public release by the campaign team.
          </p>
        </div>
      </Section>

      <Section eyebrow="Gallery" title="Campaign Photo Gallery" tone="palm">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {campaignPhotos.map((photo) => (
            <CampaignImage
              alt={photo.alt}
              className="min-h-60"
              key={photo.src}
              label={photo.label}
              src={photo.src}
              title={photo.title}
            />
          ))}
        </div>
      </Section>

      <Section eyebrow="Video" title="Campaign Videos Coming Soon">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Town hall clips",
            "Candidate messages",
            "Community voices",
          ].map((item) => (
            <div
              className="rounded-lg border border-bayelsa-deep/10 bg-white p-5 shadow-sm"
              key={item}
            >
              <div className="flex aspect-video items-center justify-center rounded-md bg-bayelsa-deep px-5 text-center text-sm font-black text-white">
                Video coming soon
              </div>
              <p className="mt-4 text-lg font-black text-bayelsa-deep">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Downloads" title="Campaign Media Kit" tone="green">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-base leading-7 text-white/82">
              Approved campaign photos, biography notes, party details, and
              press contact information will be collected here for journalists
              and community media partners.
            </p>
            <p className="mt-4 text-sm font-semibold text-bayelsa-gold">
              Press contact: To be announced
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
