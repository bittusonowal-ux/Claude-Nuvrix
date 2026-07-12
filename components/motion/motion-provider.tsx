"use client";

import { LazyMotion, domMax } from "framer-motion";

/**
 * Wraps the app in LazyMotion, loading only the `domMax` feature set
 * (animations, variants, gestures, drag, layout) rather than importing
 * the full framer-motion API surface everywhere. Per Framer Motion's
 * own docs this typically drops the library's bundle contribution from
 * ~40-60kb down to a few KB for the initial load, with domMax's
 * (slightly larger than domAnimation) full feature set loaded async.
 *
 * We need domMax specifically (not the smaller domAnimation) because
 * Testimonials uses drag gestures and a few components use layout
 * animations — domAnimation alone would silently break those.
 *
 * Every component using `m.div` etc. must be updated to use the
 * lowercase `m.div` from framer-motion instead — `m` is LazyMotion's
 * lazy-loadable counterpart to `motion`.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domMax} strict>
      {children}
    </LazyMotion>
  );
}
