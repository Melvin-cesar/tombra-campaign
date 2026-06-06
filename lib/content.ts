import { campaignDetails } from "@/lib/campaignDetails";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/agenda", label: "Agenda" },
  { href: "/community", label: "Sagbama & Ekeremor" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/voter-info", label: "Voter Info" },
  { href: "/media", label: "News/Media" },
  { href: "/contact", label: "Contact" },
];

export const agendaPillars = [
  {
    title: "Jobs & Youth Opportunity",
    body: "Tombra will advocate for skills programmes, enterprise support, apprenticeships, small business growth, and practical paths that help young people build livelihoods close to home.",
  },
  {
    title: "Women, Traders & Families",
    body: "Tombra will push for stronger participation for women, support for market women and small businesses, and community programmes that respect the pressure families face every day.",
  },
  {
    title: "Roads, Waterways & Connectivity",
    body: "Tombra will work with relevant federal and state agencies to improve attention to roads, waterways, jetties, and movement between communities, markets, schools, and health centres.",
  },
  {
    title: "Education & Skills",
    body: "Tombra will sponsor and support initiatives around student support, school improvement advocacy, scholarships, and practical training for young people in Bayelsa West.",
  },
  {
    title: "Healthcare Access",
    body: "Tombra will advocate for stronger primary healthcare, maternal health support, outreach services, and better access for riverine communities that are often left waiting.",
  },
  {
    title: "Oil, Environment & Livelihoods",
    body: "Tombra will use oversight to demand attention for oil-producing communities, pollution, fishing livelihoods, environmental justice, and responsible action from the right authorities.",
  },
  {
    title: "Accountable Representation",
    body: "Tombra will push for town halls, constituency updates, clear feedback channels, and a habit of reporting back to the people of Sagbama and Ekeremor.",
  },
];

export const newsItems = [
  {
    title: `${campaignDetails.candidateName} Meets Community Leaders Across Bayelsa West`,
    tag: "Community",
    meta: "Campaign note",
    imageSrc: "/campaign/community-leaders-meeting.jpg",
    imageAlt:
      `${campaignDetails.candidateName} and supporters meeting with community leaders indoors`,
    summary:
      "Community conversations are shaping the campaign's priorities for Sagbama, Ekeremor, and the wider Bayelsa West district.",
  },
  {
    title: "Campaign Focuses on Jobs and Better Representation",
    tag: "Agenda",
    meta: "Agenda focus",
    imageSrc: "/campaign/community-walk.jpg",
    imageAlt: `${campaignDetails.candidateName} walking through a community with supporters`,
    summary:
      "The campaign message centers on practical job opportunities, stronger constituency service, and leadership that keeps reporting back.",
  },
  {
    title: "Women and Youth Participation at the Heart of the Movement",
    tag: "Mobilisation",
    meta: "Mobilisation",
    imageSrc: "/campaign/women-community-visit.jpg",
    imageAlt: `${campaignDetails.candidateName} smiling with women during a community visit`,
    summary:
      "Women, young people, traders, and local volunteers remain central to the campaign's grassroots organizing work.",
  },
];

export const campaignPhotos = [
  {
    src: "/campaign/tombra-portrait.jpg",
    alt: `${campaignDetails.candidateName} smiling in a bright patterned outfit`,
    title: campaignDetails.candidateName,
    label: "Official campaign portrait.",
  },
  {
    src: "/campaign/campaign-team-banner.jpg",
    alt: `${campaignDetails.candidateName} with campaign supporters holding a YPP banner`,
    title: "Campaign team",
    label: "Supporters gather with Tombra Mohammed campaign materials.",
  },
  {
    src: "/campaign/community-walk.jpg",
    alt: `${campaignDetails.candidateName} walking through a community with supporters`,
    title: "Community walk",
    label: "Listening and meeting people where they are.",
  },
  {
    src: "/campaign/women-community-visit.jpg",
    alt: `${campaignDetails.candidateName} smiling with women during a community visit`,
    title: "Women and community visit",
    label: "Conversations with women and local residents.",
  },
  {
    src: "/campaign/community-leaders-meeting.jpg",
    alt: `${campaignDetails.candidateName} and supporters meeting with community leaders indoors`,
    title: "Community leaders meeting",
    label: "Engagement with community leaders and campaign supporters.",
  },
  {
    src: "/campaign/ypp-certificate.jpg",
    alt: `${campaignDetails.candidateName} receiving a ${campaignDetails.party} certificate`,
    title: "Party certificate",
    label: "Campaign documentation and party engagement.",
  },
];

export const issueCategories = [
  "Jobs",
  "Roads",
  "Waterways",
  "Education",
  "Healthcare",
  "Environment",
  "Security",
  "Women/Youth",
  "Other",
];

export const volunteerOptions = [
  "Ward volunteer",
  "Polling unit volunteer",
  "Youth mobilizer",
  "Women mobilizer",
  "Community canvasser",
  "Event volunteer",
  "Media/content volunteer",
  "WhatsApp group coordinator",
  "Election day observer/polling agent interest",
];
