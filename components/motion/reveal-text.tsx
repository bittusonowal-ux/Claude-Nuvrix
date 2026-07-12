"use client";

import { m } from "framer-motion";
import { EASE } from "@/lib/motion";

interface RevealTextProps {
  text: string;
  delayMs?: number;
  className?: string;
  as?: "span" | "h1";
}

/**
 * Splits text into words, revealing each with a mask-style translateY+fade,
 * staggered 60ms apart — matches the exact hero entry sequence spec.
 * Each word is wrapped in overflow-hidden so the reveal reads as a
 * mask sliding up, not just an opacity fade.
 */
export function RevealText({
  text,
  delayMs = 0,
  className,
  as = "span",
}: RevealTextProps) {
  const words = text.split(" ");
  const Wrapper = as;

  return (
    <Wrapper className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-[0.1em] align-bottom"
        >
          <m.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: EASE.out,
              delay: (delayMs + i * 60) / 1000,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </m.span>
        </span>
      ))}
    </Wrapper>
  );
}
