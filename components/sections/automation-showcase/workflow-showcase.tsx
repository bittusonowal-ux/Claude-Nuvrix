"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { WorkflowDiagram } from "@/components/sections/automation-showcase/workflow-diagram";
import { UseCaseTabs } from "@/components/sections/automation-showcase/use-case-tabs";
import { workflowShowcaseContent } from "@/content/workflow-showcase";

/**
 * AI Automation Workflow Showcase — the new section added in blueprint
 * v2. Positioned between How It Works and Featured Work. Purpose: show,
 * don't tell — visualize real automation logic instead of claiming
 * "we do AI automation" in a paragraph. Highest-leverage credibility
 * section per Trust-Building Psychology table (competence signaling).
 */
export function WorkflowShowcase() {
  return (
    <section
      className="section border-y border-border bg-surface/20"
      aria-label="AI automation workflow example"
    >
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-wider text-primary">
            {workflowShowcaseContent.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-text-primary">
            {workflowShowcaseContent.headline}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {workflowShowcaseContent.subhead}
          </p>
        </ScrollReveal>

        <div className="mt-16">
          <WorkflowDiagram />
        </div>

        <div className="mt-4">
          <UseCaseTabs />
        </div>
      </div>
    </section>
  );
}
