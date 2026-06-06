import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/campaignDetails";

export const dynamic = "force-static";

const routes = [
  "/",
  "/about/",
  "/agenda/",
  "/community/",
  "/volunteer/",
  "/voter-info/",
  "/media/",
  "/contact/",
  "/privacy/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
