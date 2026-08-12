import type { Metadata } from "next";
import { Services } from "@/components/sections/services/services";
import { WorkflowShowcase } from "@/components/sections/automation-showcase/workflow-showcase";
import { FinalCTA } from "@/components/sections/final-cta/final-cta";
import { siteConfig } from "@/lib/site-config";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export const metadata: Metadata = {
  title: "What We Do — Consulting Practices & Capabilities",
  description:
    "Explore Nuvrix's consulting practices: Autonomous AI & Multi-Agent Systems, High-Performance Next.js 15 Web Engines, and Programmatic Search Intelligence.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

export default function ServicesIndexPage() {
  return (
    <main id="main-content" className="pt-28">
      <section className="section-container pb-8 text-center">
        <ScrollReveal className="mx-auto max-w-3xl">
          <div className="badge-pill mb-4">
            <span>CONSULTING PRACTICES</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            What We Do: Engineering the Autonomous Enterprise
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We architect, deploy, and scale mission-critical AI agent pipelines, custom web engines, and growth architectures with guaranteed SLAs and zero vendor lock-in.
          </p>
        </ScrollReveal>
      </section>

      <Services />
      <WorkflowShowcase />
      <FinalCTA />
    </main>
  );
}
