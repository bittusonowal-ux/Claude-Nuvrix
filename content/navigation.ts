export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

export const footerLinks = {
  services: [
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "Website Development", href: "/services/website-development" },
    { label: "SEO", href: "/services/seo" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
  ],
  contact: {
    email: "hello@nuvrix.in",
    whatsapp: "https://wa.me/910000000000", // placeholder — real number pending
  },
};

// Placeholder — replace with real Calendly scheduling link when available
export const CALENDLY_URL = "https://calendly.com/nuvrix/strategy-call";

// Placeholder — replace with real WhatsApp Business number
export const WHATSAPP_URL =
  "https://wa.me/910000000000?text=Hi%20Nuvrix%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services.";
