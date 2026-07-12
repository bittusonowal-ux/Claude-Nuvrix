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
        // Core brand palette — from approved brand answers
        primary: {
          DEFAULT: "#6C63FF",
          light: "#8B85FF", // AA-compliant variant for small text links on dark bg
          dark: "#5850E0",
        },
        background: "#09090B",
        surface: {
          DEFAULT: "#111827",
          hover: "#161F32",
        },
        border: {
          DEFAULT: "#1F2937",
          hover: "rgba(108, 99, 255, 0.3)",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A1A1AA",
        },
        success: "#22C55E",
        gradient: {
          start: "#6C63FF",
          end: "#00D4FF",
        },
      },

      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },

      fontSize: {
        xs: ["clamp(0.75rem, 0.7rem + 0.2vw, 0.8125rem)", { lineHeight: "1.5" }],
        sm: ["clamp(0.875rem, 0.8rem + 0.3vw, 0.9375rem)", { lineHeight: "1.5" }],
        base: ["clamp(1rem, 0.95rem + 0.2vw, 1.0625rem)", { lineHeight: "1.5" }],
        lg: ["clamp(1.125rem, 1rem + 0.5vw, 1.25rem)", { lineHeight: "1.5" }],
        xl: ["clamp(1.25rem, 1.1rem + 0.7vw, 1.5rem)", { lineHeight: "1.4" }],
        "2xl": ["clamp(1.75rem, 1.5rem + 1vw, 2.25rem)", { lineHeight: "1.25" }],
        "3xl": ["clamp(2.25rem, 1.8rem + 2vw, 3rem)", { lineHeight: "1.15" }],
        "4xl": ["clamp(2.75rem, 2rem + 3vw, 4rem)", { lineHeight: "1.1" }],
        hero: ["clamp(2.75rem, 2rem + 5vw, 6rem)", { lineHeight: "1.05" }],
      },

      letterSpacing: {
        tight: "-0.02em",
        normal: "0",
        wide: "0.05em",
        wider: "0.1em",
      },

      spacing: {
        // 8px base unit system, extending Tailwind's default scale
        13: "3.25rem", // 52px — min touch-friendly button height per blueprint
        18: "4.5rem", // 72px
        22: "5.5rem", // 88px
        30: "7.5rem", // 120px
        35: "8.75rem", // 140px
        40: "10rem", // 160px
      },

      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },

      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.4)",
        md: "0 4px 12px rgba(0,0,0,0.5)",
        lg: "0 12px 32px rgba(0,0,0,0.6)",
        "glow-primary": "0 0 24px rgba(108,99,255,0.35)",
        "glow-subtle": "0 0 40px rgba(108,99,255,0.15)",
      },

      backdropBlur: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        hero: "120px",
      },

      maxWidth: {
        content: "1280px",
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
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.6" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "aurora-drift": "aurora-drift 22s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "fade-up": "fade-up 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
