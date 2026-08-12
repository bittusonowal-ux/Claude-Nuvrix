"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/content/navigation";
import { EASE } from "@/lib/motion";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Consultation with AI Specialist"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: EASE.spring }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed z-floating-whatsapp flex items-center gap-3 rounded-full border border-emerald-500/30 bg-[#0d141e]/90 p-2 pr-4 shadow-2xl backdrop-blur-xl group"
          style={{
            right: "max(20px, env(safe-area-inset-right))",
            bottom: "max(20px, env(safe-area-inset-bottom))",
          }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] shadow-[0_0_16px_rgba(37,211,102,0.4)]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 004.74 1.21h.005c5.46 0 9.9-4.45 9.9-9.92 0-2.65-1.03-5.14-2.9-7.01A9.9 9.9 0 0012.04 2zm5.8 14.13c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.8-.11a16.6 16.6 0 01-1.63-.6c-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.17-1.55-1.17-2.96 0-1.4.73-2.09 1-2.38.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.17.01.41-.07.64.49.24.57.81 1.98.88 2.12.07.15.11.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.16-.19.7-.81.89-1.09.19-.28.38-.23.63-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.17 1.36z" />
            </svg>
          </div>

          <div className="hidden sm:block text-left">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold text-white">AI Specialist Online</span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono">Avg. response &lt; 5m</p>
          </div>
        </m.a>
      )}
    </AnimatePresence>
  );
}
