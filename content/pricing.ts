export interface PricingTier {
  name: string;
  startingPrice: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export const pricingContent: PricingTier[] = [
  {
    name: "Starter",
    startingPrice: "₹25,000",
    description: "For businesses starting their automation journey.",
    features: [
      "1 automation workflow",
      "Landing page or website update",
      "Basic SEO setup",
    ],
  },
  {
    name: "Growth",
    startingPrice: "₹65,000",
    description: "For businesses ready to scale operations.",
    features: [
      "Up to 3 automation workflows",
      "Full website build",
      "Technical SEO + content strategy",
      "WhatsApp integration",
    ],
    featured: true,
  },
  {
    name: "Scale",
    startingPrice: "Custom",
    description: "For growing teams with complex needs.",
    features: [
      "Unlimited automation workflows",
      "Full-stack website + ongoing support",
      "Complete SEO system",
      "Dedicated process design",
    ],
  },
];
