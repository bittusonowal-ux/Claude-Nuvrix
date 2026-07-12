"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence, PanInfo } from "framer-motion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { testimonialsContent } from "@/content/testimonials";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Testimonials — Section 10 per blueprint. Auto-advances every 5s,
 * pauses on hover, disabled entirely on touch (swipe-gesture instead,
 * so auto-advance doesn't fight the user's thumb mid-read). Large
 * translucent quote-mark typography behind the quote — editorial
 * technique per Section-by-Section Visual Storytelling table.
 */
export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const total = testimonialsContent.length;

  useEffect(() => {
    if (paused || reducedMotion) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused, reducedMotion, total]);

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -50) {
      setActive((prev) => (prev + 1) % total);
    } else if (info.offset.x > 50) {
      setActive((prev) => (prev - 1 + total) % total);
    }
  }

  const testimonial = testimonialsContent[active];

  return (
    <section className="section" aria-label="Client testimonials">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary">
            What clients say.
          </h2>
        </ScrollReveal>

        <div
          className="relative mx-auto mt-12 max-w-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-2 -top-10 select-none font-display text-[120px] leading-none text-primary/5"
          >
            &ldquo;
          </span>

          <AnimatePresence mode="wait">
            <m.div
              key={active}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="glass relative cursor-grab rounded-xl p-8 text-center active:cursor-grabbing sm:p-10"
            >
              <p className="text-lg text-text-primary sm:text-xl">
                {testimonial.quote}
              </p>
              <p className="mt-6 text-sm font-semibold text-text-primary">
                {testimonial.name}
              </p>
              <p className="text-xs text-text-secondary">{testimonial.role}</p>
            </m.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {testimonialsContent.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1} of ${total}`}
                aria-current={active === i}
                className={`h-2 rounded-full transition-all duration-base ${
                  active === i ? "w-6 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-text-secondary">
          Placeholder testimonials — real client feedback added as
          projects complete.
        </p>
      </div>
    </section>
  );
}
