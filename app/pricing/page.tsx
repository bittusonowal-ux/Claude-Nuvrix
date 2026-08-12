import type { Metadata } from "next";
import { Pricing } from "@/components/sections/pricing/pricing";
import { ServiceFAQSection } from "@/components/sections/service-pillar/service-faq";
import { FinalCTA } from "@/components/sections/final-cta/final-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Engagement Models — Value Architecture & Retainers",
  description:
    "Predictable investment structures for turnkey AI agent deployments, Next.js 15 digital flagships, and fractional systems consulting partnerships.",
  alternates: {
    canonical: `${siteConfig.url}/pricing`,
  },
};

const pricingFaqs = [
  {
    question: "Are these investment tiers fixed, or can we custom-scope an enterprise pipeline?",
    answer:
      "These tiers reflect benchmark turnkey sprint architectures. For complex enterprise environments requiring bespoke multi-agent LLM fine-tuning, private VPC hosting, or legacy ERP connectors, we create a tailored statement of work following our Systems Diagnostic.",
  },
  {
    question: "How does IP ownership work upon project delivery?",
    answer:
      "You retain 100% full intellectual property ownership. Upon milestone completion, full source code repositories, API credentials, webhook orchestration workflows (n8n/Make), and documentation are transferred directly to your organization with zero vendor lock-in.",
  },
  {
    question: "What is your typical delivery timeframe and SLA guarantee?",
    answer:
      "Growth sprints are delivered within 14 business days. Full-scale Autonomous Enterprise transformations are deployed within 21 to 30 days, backed by a strict delivery SLA and post-launch governance support.",
  },
];

export default function PricingPage() {
  return (
    <main id="main-content" className="pt-24">
      <Pricing />
      <ServiceFAQSection faqs={pricingFaqs} />
      <FinalCTA />
    </main>
  );
}
