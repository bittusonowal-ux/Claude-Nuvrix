"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { CheckIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { whoWeServeContent } from "@/content/who-we-serve";

/**
 * Who We Serve — Section 8 per blueprint. Directly implements the
 * challenge from our blueprint conversation: hero leads with Coaches/
 * Consultants, this section serves the remaining 3 personas (plus
 * reinforces the first 2) via tabs rather than diluting hero messaging.
 */
export function WhoWeServe() {
  const [active, setActive] = useState(0);
  const segment = whoWeServeContent[active];

  return (
    <section className="section" aria-label="Who we serve">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-wider text-primary">
            WHO WE SERVE
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-text-primary">
            Built for how you actually work.
          </h2>
        </ScrollReveal>

        <div
          role="tablist"
          aria-label="Audience segments"
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {whoWeServeContent.map((seg, i) => (
            <button
              key={seg.id}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-base",
                active === i
                  ? "bg-primary text-white"
                  : "glass text-text-secondary hover:text-text-primary"
              )}
            >
              {seg.label}
            </button>
          ))}
        </div>

        <div className="glass mx-auto mt-8 max-w-2xl rounded-xl p-8">
          <AnimatePresence mode="wait">
            <m.div
              key={segment.id}
              role="tabpanel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-display text-2xl font-semibold text-text-primary">
                {segment.headline}
              </h3>
              <ul className="mt-5 space-y-3">
                {segment.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-text-secondary">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#services"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light"
              >
                {segment.ctaLabel}
                <span aria-hidden="true">→</span>
              </a>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
