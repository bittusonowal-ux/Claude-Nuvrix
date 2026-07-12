import type { Metadata } from "next";
import { Pricing } from "@/components/sections/pricing/pricing";
import { ServiceFAQSection } from "@/components/sections/service-pillar/service-faq";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for AI automation, website development, and SEO from Nuvrix.",
  alternates: {
    canonical: `${siteConfig.url}/pricing`,
  },
};

const pricingFaqs = [
  {
    question: "Are these prices fixed, or will my quote differ?",
    answer:
      "These are starting points, not final quotes. Every project is scoped on our strategy call based on your actual requirements.",
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer:
      "Project-based work has no ongoing contract. Any retainer-based maintenance is month-to-month, cancel anytime.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, for larger projects we typically split payment across project milestones. We'll confirm details on your strategy call.",
  },
];

export default function PricingPage() {
  return (
    <main id="main-content" className="pt-20">
      <Pricing />
      <ServiceFAQSection faqs={pricingFaqs} />
    </main>
  );
}
