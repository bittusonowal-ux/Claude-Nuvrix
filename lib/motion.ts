/**
 * Central motion configuration — every value here traces back to the
 * approved blueprint's Motion Specification table. Components should
 * import from here rather than hardcoding durations/easings, so the
 * whole site stays consistent and easy to retune from one place.
 */

export const EASE = {
  out: [0.16, 1, 0.3, 1] as const, // reveals
  inOut: [0.65, 0, 0.35, 1] as const, // loops
  spring: [0.34, 1.56, 0.64, 1] as const, // buttons, playful confirms
};

export const DURATION = {
  fast: 0.15,
  base: 0.25,
  slow: 0.4,
  reveal: 0.5,
  auroraLoop: 22,
};

/** Standard scroll-reveal: fade + translateY(20px), per blueprint default */
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.reveal, ease: EASE.out },
  },
};

/** Calmer variant — used ONLY on Pricing section per blueprint's deliberate
 * "quietest section" rule. Fade only, no vertical movement. */
export const fadeOnly = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base + 0.15, ease: EASE.out },
  },
};

/** Container variant for staggered children (cards, list items) */
export function staggerContainer(staggerMs: number, delayChildrenMs = 0) {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerMs / 1000,
        delayChildren: delayChildrenMs / 1000,
      },
    },
  };
}

/** Button/CTA micro-interaction — scale + spring, per motion table */
export const buttonTap = {
  scale: 0.97,
  transition: { duration: DURATION.fast, ease: EASE.out },
};

/** Card hover lift — 6px per blueprint Services card spec */
export const cardHover = {
  y: -6,
  transition: { duration: DURATION.base - 0.05, ease: EASE.out },
};

/** Viewport config used by every scroll-triggered reveal — fires once,
 * slightly before element is fully in view for a natural feel */
export const viewportOnce = { once: true, margin: "-80px" };
