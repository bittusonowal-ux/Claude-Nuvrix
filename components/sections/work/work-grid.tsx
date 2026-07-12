"use client";

import { m } from "framer-motion";
import { StaggerGroup, staggerItem } from "@/components/motion/scroll-reveal";
import { Counter } from "@/components/motion/counter";
import { caseStudiesContent } from "@/content/case-studies";

export function WorkGrid() {
  return (
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
              <span className="font-semibold text-text-primary">Challenge: </span>
              {study.challenge}
            </p>
            <p>
              <span className="font-semibold text-text-primary">Solution: </span>
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
  );
}
