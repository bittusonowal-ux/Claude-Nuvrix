"use client";

import { m } from "framer-motion";
import { ScrollReveal, StaggerGroup, staggerItem } from "@/components/motion/scroll-reveal";
import { Counter } from "@/components/motion/counter";
import { caseStudiesContent } from "@/content/case-studies";

/**
 * Featured Work — Section 7 per blueprint. Proof of execution using
 * placeholder structure per explicit instruction: Challenge/Solution/
 * Result format, metric-forward, so real projects drop in without
 * restructuring. Metric counts up on scroll-into-view (concreteness
 * bias per Trust Psychology table).
 */
export function Work() {
  return (
    <section className="section" aria-label="Featured work">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-wider text-primary">
            FEATURED WORK
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-text-primary">
            Real challenges, real systems.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Illustrative examples of the kind of work we do — case study
            format ready for real client results.
          </p>
        </ScrollReveal>

        <StaggerGroup
          staggerMs={150}
          delayChildrenMs={100}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {caseStudiesContent.map((study) => (
            <m.article
              key={study.slug}
              variants={staggerItem}
              className="glass flex flex-col rounded-lg p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {study.clientType}
              </span>

              <div className="mt-4 space-y-3 text-sm text-text-secondary">
                <p>
                  <span className="font-semibold text-text-primary">
                    Challenge:{" "}
                  </span>
                  {study.challenge}
                </p>
                <p>
                  <span className="font-semibold text-text-primary">
                    Solution:{" "}
                  </span>
                  {study.solution}
                </p>
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <p className="font-display text-3xl font-bold text-gradient">
                  <Counter value={study.result.metric} />
                </p>
                <p className="mt-1 text-xs text-text-secondary">
                  {study.result.label}
                </p>
              </div>
            </m.article>
          ))}
        </StaggerGroup>

        <p className="mt-8 text-center text-xs text-text-secondary">
          Illustrative examples — real case studies published as client
          projects complete.
        </p>
      </div>
    </section>
  );
}
