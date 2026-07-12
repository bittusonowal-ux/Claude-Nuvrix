import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero/hero";
import { TrustBar } from "@/components/sections/trust-bar/trust-bar";
import { Problem } from "@/components/sections/problem/problem";
import { Services } from "@/components/sections/services/services";
import { HowItWorks } from "@/components/sections/how-it-works/how-it-works";
import { WorkflowShowcase } from "@/components/sections/automation-showcase/workflow-showcase";
import { Work } from "@/components/sections/work/work";
import { WhoWeServe } from "@/components/sections/who-we-serve/who-we-serve";
import { WhyNuvrix } from "@/components/sections/why-nuvrix/why-nuvrix";
import { Testimonials } from "@/components/sections/testimonials/testimonials";
import { Pricing } from "@/components/sections/pricing/pricing";
import { FAQ } from "@/components/sections/faq/faq";
import { FinalCTA } from "@/components/sections/final-cta/final-cta";
import { faqContent } from "@/content/faq";
import { getFAQSchema } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "AI Automation, Websites & SEO for Growing Businesses",
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  const faqSchema = getFAQSchema(faqContent);

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <TrustBar />
      <Problem />
      <Services />
      <HowItWorks />
      <WorkflowShowcase />
      <Work />
      <WhoWeServe />
      <WhyNuvrix />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
