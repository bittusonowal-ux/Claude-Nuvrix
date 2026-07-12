import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-pillar/service-hero";
import { CapabilityGrid } from "@/components/sections/service-pillar/capability-grid";
import { ServiceFAQSection } from "@/components/sections/service-pillar/service-faq";
import { FinalCTA } from "@/components/sections/final-cta/final-cta";
import { aiAutomationContent } from "@/content/service-ai-automation";
import { getServiceSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "AI Automation Agency for Coaches, Consultants & SMEs",
  description:
    "Automate lead qualification, scheduling, and WhatsApp follow-ups with Nuvrix — AI automation built for coaches, consultants, and growing businesses in India.",
  alternates: {
    canonical: `${siteConfig.url}/services/ai-automation`,
  },
};

export default function AIAutomationPage() {
  const schema = getServiceSchema({
    name: "AI Automation",
    description: metadata.description as string,
    slug: "ai-automation",
  });

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        eyebrow={aiAutomationContent.hero.eyebrow}
        headline={aiAutomationContent.hero.headline}
        subhead={aiAutomationContent.hero.subhead}
      />
      <CapabilityGrid capabilities={aiAutomationContent.capabilities} />
      <ServiceFAQSection faqs={aiAutomationContent.faqs} />
      <FinalCTA />
    </main>
  );
}
