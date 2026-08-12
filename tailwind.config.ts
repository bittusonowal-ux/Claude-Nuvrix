import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Core brand palette — Obsidian Cyber Theme with Electric Accents
        primary: {
          DEFAULT: "#6366F1", // Indigo 500
          light: "#818CF8",
          dark: "#4F46E5",
          glow: "#6366F1",
        },
        cyan: {
          DEFAULT: "#06B6D4",
          light: "#22D3EE",
          dark: "#0891B2",
        },
        emerald: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#059669",
        },
        background: "#070709",
        "background-secondary": "#0D0E15",
        surface: {
          DEFAULT: "#111420",
          hover: "#181C2E",
          card: "#121526",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(99, 102, 241, 0.4)",
          glow: "rgba(6, 182, 212, 0.3)",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#94A3B8",
          muted: "#64748B",
        },
        success: "#10B981",
        gradient: {
          start: "#6366F1",
          middle: "#A855F7",
          end: "#06B6D4",
        },
      },

      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },

      fontSize: {
        xs: ["clamp(0.75rem, 0.7rem + 0.2vw, 0.8125rem)", { lineHeight: "1.5" }],
        sm: ["clamp(0.875rem, 0.8rem + 0.3vw, 0.9375rem)", { lineHeight: "1.5" }],
        base: ["clamp(1rem, 0.95rem + 0.2vw, 1.0625rem)", { lineHeight: "1.6" }],
        lg: ["clamp(1.125rem, 1rem + 0.5vw, 1.25rem)", { lineHeight: "1.5" }],
        xl: ["clamp(1.25rem, 1.1rem + 0.7vw, 1.5rem)", { lineHeight: "1.4" }],
        "2xl": ["clamp(1.75rem, 1.5rem + 1vw, 2.25rem)", { lineHeight: "1.25" }],
        "3xl": ["clamp(2.25rem, 1.8rem + 2vw, 3rem)", { lineHeight: "1.15" }],
        "4xl": ["clamp(2.75rem, 2rem + 3vw, 4rem)", { lineHeight: "1.1" }],
        hero: ["clamp(2.75rem, 2rem + 5vw, 5.5rem)", { lineHeight: "1.05" }],
      },

      letterSpacing: {
        tight: "-0.02em",
        normal: "0",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.15em",
      },

      spacing: {
        13: "3.25rem",
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        35: "8.75rem",
        40: "10rem",
      },

      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        full: "9999px",
      },

      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.4)",
        md: "0 4px 16px rgba(0,0,0,0.5)",
        lg: "0 12px 32px rgba(0,0,0,0.6)",
        "glow-primary": "0 0 28px rgba(99, 102, 241, 0.4)",
        "glow-cyan": "0 0 28px rgba(6, 182, 212, 0.4)",
        "glow-subtle": "0 0 40px rgba(99, 102, 241, 0.15)",
        "inner-glow": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
      },

      backdropBlur: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        hero: "120px",
      },

      maxWidth: {
        content: "1280px",
        wide: "1400px",
      },

      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-smooth": "cubic-bezier(0.65, 0, 0.35, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "400ms",
      },

      zIndex: {
        dropdown: "10",
        "sticky-nav": "50",
        "floating-whatsapp": "60",
        "modal-overlay": "90",
        modal: "100",
        toast: "110",
      },

      keyframes: {
        "aurora-drift": {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(4%, -6%) scale(1.05)" },
          "66%": { transform: "translate(-3%, 4%) scale(0.98)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.03)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "aurora-drift": "aurora-drift 22s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "fade-up": "fade-up 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 35s linear infinite",
        "pulse-slow": "pulseSlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
