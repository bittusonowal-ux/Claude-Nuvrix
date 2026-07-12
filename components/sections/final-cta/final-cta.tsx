"use client";

import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/ui/book-call-button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { WHATSAPP_URL } from "@/content/navigation";

/**
 * Final CTA — Section 13 per blueprint. "Bookends" the hero: full-bleed
 * gradient intensification is near-inverse of hero's subtle aurora,
 * creating narrative symmetry — visitor "returns" to where they
 * started, now convinced. Button carries the glow-pulse loop.
 */
export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      aria-label="Book your free strategy call"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(108,99,255,0.25), rgba(0,212,255,0.1) 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative text-center">
        <ScrollReveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Ready to stop doing this manually?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-text-secondary">
            Book a free 30-minute strategy call — no pressure, just a clear
            plan for your business.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <m.div
              animate={{ boxShadow: [
                "0 0 24px rgba(108,99,255,0.35)",
                "0 0 40px rgba(108,99,255,0.6)",
                "0 0 24px rgba(108,99,255,0.35)",
              ] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-md"
            >
              <BookCallButton size="lg" />
            </m.div>
            <Button asChild variant="secondary" size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-text-secondary">
            Free 30-min call · No obligation · Response within 2 hours
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
