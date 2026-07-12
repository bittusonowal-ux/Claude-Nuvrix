import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-pillar/service-hero";
import { CapabilityGrid } from "@/components/sections/service-pillar/capability-grid";
import { ServiceFAQSection } from "@/components/sections/service-pillar/service-faq";
import { FinalCTA } from "@/components/sections/final-cta/final-cta";
import { seoContent } from "@/content/service-seo";
import { getServiceSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "SEO Agency for Consultants & Local Businesses in India",
  description:
    "Technical SEO and content strategy from Nuvrix, built for long-term organic growth — helping coaches, consultants, and local businesses get found.",
  alternates: {
    canonical: `${siteConfig.url}/services/seo`,
  },
};

export default function SEOPage() {
  const schema = getServiceSchema({
    name: "SEO",
    description: metadata.description as string,
    slug: "seo",
  });

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        eyebrow={seoContent.hero.eyebrow}
        headline={seoContent.hero.headline}
        subhead={seoContent.hero.subhead}
      />
      <CapabilityGrid capabilities={seoContent.capabilities} />
      <ServiceFAQSection faqs={seoContent.faqs} />
      <FinalCTA />
    </main>
  );
}
