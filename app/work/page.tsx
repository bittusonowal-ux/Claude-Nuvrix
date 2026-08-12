import type { Metadata } from "next";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { WorkGrid } from "@/components/sections/work/work-grid";
import { FinalCTA } from "@/components/sections/final-cta/final-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Client Impact & Case Studies — Proven Enterprise ROI",
  description:
    "Explore quantified outcomes achieved through Nuvrix autonomous multi-agent pipelines, custom web flagships, and growth engines.",
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
};

export default function WorkPage() {
  return (
    <main id="main-content" className="pt-32">
      <section className="section-container section !pt-0">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="badge-pill mb-4 mx-auto">
            <span>CLIENT IMPACT &amp; CASE STUDIES</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Engineering Quantified Enterprise Outcomes
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Real architectural blueprints deployed for market leaders. Every transformation is engineered with concrete ROI benchmarks and strict delivery SLAs.
          </p>
        </ScrollReveal>

        <div className="mt-12">
          <WorkGrid />
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
