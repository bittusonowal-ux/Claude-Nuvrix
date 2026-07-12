export interface AudienceSegment {
  id: string;
  label: string;
  headline: string;
  outcomes: string[];
  ctaLabel: string;
}

export const whoWeServeContent: AudienceSegment[] = [
  {
    id: "coaches",
    label: "Coaches",
    headline: "Stop chasing leads. Start closing them.",
    outcomes: [
      "Automated lead qualification, 24/7",
      "Calendly bookings without back-and-forth",
      "WhatsApp follow-ups that never miss a lead",
    ],
    ctaLabel: "See how coaches use this",
  },
  {
    id: "consultants",
    label: "Consultants",
    headline: "Your expertise, without the admin drag.",
    outcomes: [
      "Discovery calls booked automatically",
      "Client onboarding that runs itself",
      "A website that positions you as the expert",
    ],
    ctaLabel: "See how consultants use this",
  },
  {
    id: "smes",
    label: "SMEs",
    headline: "Systems that scale as fast as you do.",
    outcomes: [
      "Automated internal workflows across teams",
      "SEO built for long-term organic growth",
      "A digital presence that matches your ambition",
    ],
    ctaLabel: "See how SMEs use this",
  },
  {
    id: "startups",
    label: "Startup Founders",
    headline: "Move fast without breaking your ops.",
    outcomes: [
      "Launch-ready website in weeks, not months",
      "Automation that replaces early hires",
      "SEO foundations set from day one",
    ],
    ctaLabel: "See how startups use this",
  },
  {
    id: "local-business",
    label: "Local Businesses",
    headline: "Be found. Be booked. Automatically.",
    outcomes: [
      "WhatsApp orders logged without manual entry",
      "Local SEO that brings in nearby customers",
      "A simple website that converts foot traffic online",
    ],
    ctaLabel: "See how local businesses use this",
  },
];
