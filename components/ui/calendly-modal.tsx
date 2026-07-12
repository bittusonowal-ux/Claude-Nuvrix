"use client";

import { useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { CALENDLY_URL } from "@/content/navigation";

interface CalendlyModalProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Calendly is deliberately NOT embedded inline on page load — per
 * blueprint Performance Strategy, Calendly's iframe is notoriously
 * heavy and shouldn't tax initial page load. It's lazy-loaded here,
 * only when the user actively opens this modal by clicking a CTA.
 */
export function CalendlyModal({ open, onClose }: CalendlyModalProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-modal-overlay flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Book a strategy call"
          onClick={onClose}
        >
          <m.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative h-[85vh] w-full max-w-3xl overflow-hidden rounded-xl"
          >
            <button
              onClick={onClose}
              aria-label="Close booking dialog"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-surface/80 text-text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* iframe only mounts once the modal is actually open —
                this IS the lazy-load: no request fires until this point */}
            {open && (
              <iframe
                src={CALENDLY_URL}
                title="Book a free strategy call with Nuvrix"
                className="h-full w-full border-0"
                loading="lazy"
              />
            )}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
