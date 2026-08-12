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

export function Hero() {
  const reducedMotion = useReducedMotion();

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
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
      aria-label="Hero"
    >
      <AuroraBackground reduced={reducedMotion} />

      <div className="section-container relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          {/* Executive Badge */}
          <m.div {...fadeIn(0.2)} className="mb-6 inline-flex">
            <div className="badge-pill">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span>{heroContent.eyebrow}</span>
            </div>
          </m.div>

          <h1 className="font-display text-hero font-bold tracking-tight text-text-primary">
            <RevealText
              text={heroContent.headlineLine1}
              delayMs={reducedMotion ? 0 : 350}
              as="span"
              className="block"
            />
            <RevealText
              text={heroContent.headlineLine2}
              delayMs={reducedMotion ? 0 : 550}
              as="span"
              className="block text-gradient"
            />
          </h1>

          <m.p
            {...fadeIn(0.7)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl"
          >
            {heroContent.subhead}
          </m.p>

          <m.div {...fadeIn(0.9)} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <BookCallButton size="lg" />
            <Button asChild variant="secondary" size="lg" className="border-white/10 hover:border-primary/40">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span>Direct WhatsApp Consultation</span>
                <span className="text-xs text-emerald-400 font-mono">● Instant</span>
              </a>
            </Button>
          </m.div>

          <m.p {...fadeIn(1.05)} className="mt-5 text-xs text-text-muted flex items-center gap-2">
            <span className="text-primary">⚡</span>
            <span>{heroContent.trustMicrocopy}</span>
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
