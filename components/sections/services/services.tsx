"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ScrollReveal, StaggerGroup, staggerItem } from "@/components/motion/scroll-reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { SparkleIcon, LayoutIcon, ChartIcon } from "@/components/ui/icons";
import { servicesContent } from "@/content/services";

const iconMap = {
  sparkle: SparkleIcon,
  layout: LayoutIcon,
  chart: ChartIcon,
};

/**
 * Services Overview — Section 5 per blueprint. Purpose: clear service
 * architecture, positions AI Automation as flagship (listed first,
 * visually equal-weighted here; true visual hierarchy favoring AI
 * Automation is reserved for the Why Nuvrix bento grid per blueprint
 * note "largest cell first").
 */
export function Services() {
  return (
    <section className="section" aria-label="Our services" id="services">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-wider text-primary">
            {servicesContent.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-text-primary">
            {servicesContent.headline}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {servicesContent.subhead}
          </p>
        </ScrollReveal>

        {/* Primary services — larger cards */}
        <StaggerGroup
          staggerMs={120}
          delayChildrenMs={100}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {servicesContent.primary.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <m.div key={service.slug} variants={staggerItem}>
                <TiltCard className="h-full p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-secondary">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light"
                  >
                    Learn more
                    <span aria-hidden="true">→</span>
                  </Link>
                </TiltCard>
              </m.div>
            );
          })}
        </StaggerGroup>

        {/* Supporting services — smaller cards */}
        <StaggerGroup
          staggerMs={100}
          delayChildrenMs={150}
          className="mt-6 grid gap-4 md:grid-cols-3"
        >
          {servicesContent.supporting.map((service) => (
            <m.div
              key={service.slug}
              variants={staggerItem}
              className="rounded-lg border border-border p-5"
            >
              <h4 className="text-sm font-semibold text-text-primary">
                {service.title}
              </h4>
              <p className="mt-1.5 text-xs text-text-secondary">
                {service.description}
              </p>
            </m.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
