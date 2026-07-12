"use client";

import { m } from "framer-motion";
import { ScrollReveal, StaggerGroup, staggerItem } from "@/components/motion/scroll-reveal";
import { InboxIcon, CalendarIcon, RepeatIcon } from "@/components/ui/icons";
import { problemContent } from "@/content/problem";

const iconMap = {
  inbox: InboxIcon,
  calendar: CalendarIcon,
  repeat: RepeatIcon,
};

/**
 * Problem/Agitation — Section 4 per blueprint. Purpose: name the exact
 * pain (manual follow-ups, missed leads, admin drain) before pitching
 * the solution — classic high-converting structure. Icons rendered at
 * slightly reduced opacity to visually represent "overwhelm" per the
 * Section-by-Section Visual Storytelling table.
 */
export function Problem() {
  return (
    <section className="section" aria-label="The problem we solve">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-wider text-primary">
            {problemContent.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-text-primary">
            {problemContent.headline}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {problemContent.subhead}
          </p>
        </ScrollReveal>

        <StaggerGroup
          staggerMs={100}
          delayChildrenMs={100}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {problemContent.painPoints.map((point) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap];
            return (
              <m.div
                key={point.title}
                variants={staggerItem}
                className="glass rounded-lg p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-surface text-text-secondary opacity-70">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {point.description}
                </p>
              </m.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
