"use client";

import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { BookCallButton } from "@/components/ui/book-call-button";
import { navLinks } from "@/content/navigation";
import { EASE } from "@/lib/motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Lock body scroll while menu is open — prevents background scroll
  // fighting the overlay on touch devices.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <m.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: EASE.out }}
          className="glass fixed inset-0 z-modal flex flex-col md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-xl font-bold text-text-primary">
              Nuvrix
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full text-text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center px-5" aria-label="Mobile">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-border">
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex h-14 items-center text-lg font-medium text-text-primary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-border p-5 pb-8">
            <BookCallButton size="lg" className="w-full" />
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
