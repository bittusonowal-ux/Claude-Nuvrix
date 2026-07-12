import type { Metadata } from "next";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { WorkGrid } from "@/components/sections/work/work-grid";
import { FinalCTA } from "@/components/sections/final-cta/final-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies and examples of AI automation, website, and SEO work by Nuvrix.",
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
};

export default function WorkPage() {
  return (
    <main id="main-content" className="pt-32">
      <section className="section-container section !pt-0">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-wider text-primary">
            OUR WORK
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-text-primary">
            Real challenges, real systems.
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Illustrative examples of the kind of work we do — replaced with
            real client results as projects complete.
          </p>
        </ScrollReveal>

        <WorkGrid />
      </section>

      <FinalCTA />
    </main>
  );
}
