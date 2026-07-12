import type { Metadata } from "next";
import { ScrollReveal, StaggerGroup } from "@/components/motion/scroll-reveal";
import { FinalCTA } from "@/components/sections/final-cta/final-cta";
import { ValueCard } from "@/components/sections/about/value-card";
import { aboutContent } from "@/content/about";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Nuvrix",
  description:
    "Why Nuvrix exists — an India-first AI automation agency built on transparency, AI-first thinking, and systems you actually own.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="pt-32">
      <section className="section-container section !pt-0">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-wider text-primary">
            {aboutContent.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-text-primary">
            {aboutContent.headline}
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            {aboutContent.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-16 max-w-2xl space-y-5">
          {aboutContent.story.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-text-secondary">
              {paragraph}
            </p>
          ))}
        </ScrollReveal>

        <StaggerGroup
          staggerMs={100}
          delayChildrenMs={100}
          className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-3"
        >
          {aboutContent.values.map((value) => (
            <ValueCard key={value.title} title={value.title} description={value.description} />
          ))}
        </StaggerGroup>
      </section>

      <FinalCTA />
    </main>
  );
}
