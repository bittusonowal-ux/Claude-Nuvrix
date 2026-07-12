export interface CaseStudy {
  slug: string;
  clientType: string;
  challenge: string;
  solution: string;
  result: { metric: string; label: string };
}

// Placeholders — structured for real projects to drop in without
// restructuring later, per blueprint Trust-Building Strategy.
export const caseStudiesContent: CaseStudy[] = [
  {
    slug: "coaching-business-automation",
    clientType: "Coaching Business",
    challenge:
      "Manually qualifying and following up with 40+ inbound leads weekly, losing several to slow response times.",
    solution:
      "Built an AI-driven qualification and Calendly-booking flow connected directly to WhatsApp.",
    result: { metric: "68%", label: "faster lead response time" },
  },
  {
    slug: "consultancy-website-rebuild",
    clientType: "Independent Consultant",
    challenge:
      "An outdated website with no clear CTA, resulting in visitors leaving without booking a call.",
    solution:
      "Rebuilt on a conversion-focused structure with a single clear booking path.",
    result: { metric: "3.2x", label: "increase in call bookings" },
  },
  {
    slug: "local-business-seo-automation",
    clientType: "Local Service Business",
    challenge:
      "Near-zero visibility on Google for local search terms, relying entirely on word of mouth.",
    solution:
      "Technical SEO overhaul paired with automated review and inquiry follow-ups.",
    result: { metric: "4.5x", label: "increase in organic inquiries" },
  },
];
