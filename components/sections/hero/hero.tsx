"use client";

import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/ui/book-call-button";
import { RevealText } from "@/components/motion/reveal-text";
import { AuroraBackground } from "@/components/sections/hero/aurora-background";
import { DashboardMockup } from "@/components/sections/hero/dashboard-mockup";
import { ScrollIndicator } from "@/components/sections/hero/scroll-indicator";
import { heroContent } from "@/content/hero";
import { WHATSAPP_URL } from "@/content/navigation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { EASE } from "@/lib/motion";

/**
 * Hero — "Living Automation Canvas" per blueprint Section 1.
 * Entry sequence (reduced-motion collapses this to a single 200ms fade):
 *   100ms  nav fade (handled by Navbar itself)
 *   300ms  eyebrow
 *   450ms  H1 line 1 word-reveal
 *   650ms  H1 line 2 word-reveal
 *   850ms  subhead
 *   1000ms CTA row
 *   1100ms trust microcopy
 *   1200ms dashboard mockup slides in
 *   1400ms node connection lines begin drawing
 */
export function Hero() {
  const reducedMotion = useReducedMotion();

  // When reduced motion is on, every element appears instantly with a
  // simple fade rather than the full staggered sequence.
  const fadeIn = (delaySeconds: number) =>
    reducedMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.2 } }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, ease: EASE.out, delay: delaySeconds },
        };

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20"
      aria-label="Hero"
    >
      <AuroraBackground reduced={reducedMotion} />

      <div className="section-container relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <m.p
            {...fadeIn(0.3)}
            className="mb-6 text-xs font-semibold tracking-wider text-primary"
          >
            {heroContent.eyebrow}
          </m.p>

          <h1 className="font-display text-hero font-bold tracking-tight text-text-primary">
            <RevealText
              text={heroContent.headlineLine1}
              delayMs={reducedMotion ? 0 : 450}
              as="span"
              className="block"
            />
            <RevealText
              text={heroContent.headlineLine2}
              delayMs={reducedMotion ? 0 : 650}
              as="span"
              className="block text-gradient"
            />
          </h1>

          <m.p
            {...fadeIn(0.85)}
            className="mt-6 max-w-lg text-lg text-text-secondary"
          >
            {heroContent.subhead}
          </m.p>

          <m.div {...fadeIn(1.0)} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <BookCallButton size="lg" />
            <Button asChild variant="secondary" size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </m.div>

          <m.p {...fadeIn(1.1)} className="mt-4 text-xs text-text-secondary">
            {heroContent.trustMicrocopy}
          </m.p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <DashboardMockup reducedMotion={reducedMotion} />
        </div>
      </div>

      <ScrollIndicator reducedMotion={reducedMotion} />
    </section>
  );
}
