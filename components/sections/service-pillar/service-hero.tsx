"use client";

import { m } from "framer-motion";
import { BookCallButton } from "@/components/ui/book-call-button";
import { fadeUp } from "@/lib/motion";

interface ServiceHeroProps {
  eyebrow: string;
  headline: string;
  subhead: string;
}

export function ServiceHero({ eyebrow, headline, subhead }: ServiceHeroProps) {
  return (
    <section className="section-container pb-16 pt-32 text-center sm:pt-40">
      <m.div initial="hidden" animate="visible" variants={fadeUp}>
        <p className="text-xs font-semibold tracking-wider text-primary">
          {eyebrow}
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          {headline}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
          {subhead}
        </p>
        <div className="mt-8 flex justify-center">
          <BookCallButton size="lg" />
        </div>
      </m.div>
    </section>
  );
}
