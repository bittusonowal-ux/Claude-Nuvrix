"use client";

import { useEffect, useRef } from "react";
import { m } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { howItWorksContent } from "@/content/how-it-works";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * How It Works — Section 6 per blueprint. Purpose: demystify AI
 * automation for non-technical buyers, reduce perceived risk before CTA.
 * Desktop (>=1024px): horizontal scroll-linked progress line via GSAP
 * ScrollTrigger, steps illuminate as user scrolls (scrubbed, not timed).
 * Mobile/tablet: vertical stepper, same logic simplified to scroll-reveal.
 */
export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !lineRef.current) return;
    // Only enable the scroll-scrubbed desktop version above 1024px —
    // below that, the mobile vertical stepper (plain ScrollReveal) handles it.
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 60%",
              scrub: 0.5,
            },
          }
        );

        stepRefs.current.forEach((step, i) => {
          if (!step) return;
          gsap.fromTo(
            step,
            { opacity: 0.35 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
                end: "bottom 60%",
                scrub: 0.5,
              },
              delay: i * 0.05,
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="section"
      aria-label="How our process works"
    >
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-wider text-primary">
            {howItWorksContent.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-text-primary">
            {howItWorksContent.headline}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {howItWorksContent.subhead}
          </p>
        </ScrollReveal>

        {/* Desktop: horizontal with scroll-linked progress line */}
        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-0 right-0 top-6 h-px bg-border" />
          <div
            ref={lineRef}
            className="absolute left-0 top-6 h-px w-full origin-left bg-gradient-to-r from-primary to-gradient-end"
            style={{ transform: "scaleX(0)" }}
          />
          <div className="grid grid-cols-4 gap-8">
            {howItWorksContent.steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background font-display text-sm font-bold text-primary">
                  {step.number}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/tablet: vertical stepper */}
        <div className="mt-16 space-y-8 lg:hidden">
          {howItWorksContent.steps.map((step, i) => (
            <m.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary font-display text-sm font-bold text-primary">
                  {step.number}
                </div>
                {i < howItWorksContent.steps.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-border" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-text-secondary">
                  {step.description}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
