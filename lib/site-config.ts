// Placeholder domain — update once the real domain is finalized and
// pointed at Vercel. Every SEO file (metadata, sitemap, JSON-LD, OG
// images) reads from this single source, so changing it here updates
// canonical URLs, sitemap entries, and schema markup everywhere at once.
export const siteConfig = {
  name: "Nuvrix",
  url: "https://nuvrix.in",
  description:
    "Nuvrix is an India-first AI automation, web development, and SEO agency helping coaches, consultants, and growing businesses run their operations on autopilot.",
  ogImage: "/images/og-default.png",
  locale: "en_IN",
  twitterHandle: "@nuvrix", // placeholder — update if/when a handle exists
  organization: {
    legalName: "Nuvrix",
    email: "hello@nuvrix.in",
    // Placeholder — replace once a physical/registered address is confirmed
    addressCountry: "IN",
  },
  keywords: [
    "AI automation agency India",
    "AI automation for coaches",
    "business process automation",
    "website development agency India",
    "SEO agency for consultants",
    "AI automation for small business",
  ],
};

export type SiteConfig = typeof siteConfig;
