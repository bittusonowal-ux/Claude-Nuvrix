export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "What We Do", href: "/services" },
  { label: "How We Think", href: "/#workflows" },
  { label: "Client Impact", href: "/work" },
  { label: "Who We Are", href: "/about" },
  { label: "Engagement Models", href: "/pricing" },
];

export const footerLinks = {
  practices: [
    { label: "Autonomous AI & Multi-Agent Systems", href: "/services/ai-automation" },
    { label: "High-Performance Next.js 15 Web Engines", href: "/services/website-development" },
    { label: "Search Intelligence & Programmatic Growth", href: "/services/seo" },
  ],
  organization: [
    { label: "Who We Are", href: "/about" },
    { label: "Client Impact & Outcomes", href: "/work" },
    { label: "Engagement Models", href: "/pricing" },
    { label: "Systems Architecture Audit", href: "/contact" },
  ],
  contact: {
    email: "hello@nuvrix.in",
  },
};

// Calendly scheduling endpoint for executive discovery sessions
export const CALENDLY_URL = "https://calendly.com/nuvrix/strategy-call";
