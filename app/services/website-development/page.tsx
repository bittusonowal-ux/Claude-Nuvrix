import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-pillar/service-hero";
import { CapabilityGrid } from "@/components/sections/service-pillar/capability-grid";
import { ServiceFAQSection } from "@/components/sections/service-pillar/service-faq";
import { FinalCTA } from "@/components/sections/final-cta/final-cta";
import { websiteDevContent } from "@/content/service-website-development";
import { getServiceSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Website Development Agency for Coaches & Growing Businesses",
  description:
    "Fast, conversion-focused websites built by Nuvrix on modern architecture — designed to turn visitors into booked calls.",
  alternates: {
    canonical: `${siteConfig.url}/services/website-development`,
  },
};

export default function WebsiteDevelopmentPage() {
  const schema = getServiceSchema({
    name: "Website Development",
    description: metadata.description as string,
    slug: "website-development",
  });

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        eyebrow={websiteDevContent.hero.eyebrow}
        headline={websiteDevContent.hero.headline}
        subhead={websiteDevContent.hero.subhead}
      />
      <CapabilityGrid capabilities={websiteDevContent.capabilities} />
      <ServiceFAQSection faqs={websiteDevContent.faqs} />
      <FinalCTA />
    </main>
  );
}
