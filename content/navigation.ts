export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "What we do", href: "/services" },
  { label: "How we think", href: "/#workflows" },
  { label: "Client impact", href: "/work" },
  { label: "Who we are", href: "/about" },
  { label: "Engagement models", href: "/pricing" },
];

export const footerLinks = {
  practices: [
    { label: "Autonomous AI & Multi-Agent Systems", href: "/services/ai-automation" },
    { label: "High-Performance Next.js 15 Web Engines", href: "/services/website-development" },
    { label: "Search Intelligence & Programmatic Growth", href: "/services/seo" },
  ],
  organization: [
    { label: "Who we are", href: "/about" },
    { label: "Client impact & outcomes", href: "/work" },
    { label: "Engagement models", href: "/pricing" },
    { label: "Systems architecture audit", href: "/contact" },
  ],
  contact: {
    email: "hello@nuvrix.in",
  },
};

// Calendly scheduling endpoint for executive discovery sessions
export const CALENDLY_URL = "https://calendly.com/nuvrix/strategy-call";
