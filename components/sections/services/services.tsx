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

export function Services() {
  return (
    <section className="section bg-[#07080e] relative overflow-hidden" aria-label="Our consulting practices" id="services">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="badge-pill mb-4">
            <span>{servicesContent.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            {servicesContent.headline}
          </h2>
          <p className="mt-4 text-base text-slate-400 md:text-lg">
            {servicesContent.subhead}
          </p>
        </ScrollReveal>

        {/* Primary 3 Flagship Consulting Practices */}
        <StaggerGroup
          staggerMs={120}
          delayChildrenMs={100}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {servicesContent.primary.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <m.div key={service.slug} variants={staggerItem}>
                <TiltCard className="h-full rounded-2xl border border-white/10 bg-[#0e1122]/80 p-8 backdrop-blur-xl hover:border-primary/50 transition-all flex flex-col justify-between shadow-2xl">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-light border border-primary/20 shadow-glow-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider text-primary-light border border-primary/30">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {service.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="mt-6 pt-5 border-t border-white/5 space-y-2.5">
                      <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        KEY DELIVERABLES:
                      </p>
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">
                      {service.techBadge}
                    </span>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-light transition-colors hover:text-white"
                    >
                      Explore Practice <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </TiltCard>
              </m.div>
            );
          })}
        </StaggerGroup>

        {/* Supporting specialized capabilities */}
        <StaggerGroup
          staggerMs={100}
          delayChildrenMs={150}
          className="mt-8 grid gap-4 md:grid-cols-3"
        >
          {servicesContent.supporting.map((service) => (
            <m.div
              key={service.slug}
              variants={staggerItem}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors"
            >
              <h4 className="text-sm font-semibold text-white">
                {service.title}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                {service.description}
              </p>
            </m.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
