export const campaignDetails = {
  candidateName: "Tombra Mohammed",
  party: "Young Progressives Party (YPP)",
  constituency: "Bayelsa West Senatorial District",
  phone: "",
  whatsapp: "",
  email: "",
  officeAddress: "",
  facebook: "",
  instagram: "",
  twitterX: "",
  tiktok: "",
  youtube: "",
  finalDomain: "https://melvin-cesar.github.io/tombra-campaign",
};

export const campaignSiteUrl = campaignDetails.finalDomain.replace(/\/$/, "");

export const contactItems = [
  { label: "Phone", value: campaignDetails.phone },
  { label: "WhatsApp", value: campaignDetails.whatsapp },
  { label: "Email", value: campaignDetails.email },
  { label: "Campaign office", value: campaignDetails.officeAddress },
].filter((item) => item.value);

export const socialLinks = [
  { label: "Facebook", href: campaignDetails.facebook },
  { label: "Instagram", href: campaignDetails.instagram },
  { label: "X", href: campaignDetails.twitterX },
  { label: "TikTok", href: campaignDetails.tiktok },
  { label: "YouTube", href: campaignDetails.youtube },
].filter((item) => item.href);

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${campaignSiteUrl}${normalizedPath}`;
}

