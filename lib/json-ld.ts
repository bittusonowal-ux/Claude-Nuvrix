import { siteConfig } from "@/lib/site-config";

/**
 * Organization schema — rendered site-wide via root layout. Establishes
 * Nuvrix as an entity in Google's Knowledge Graph over time. Using
 * Organization rather than LocalBusiness at the root level since Nuvrix
 * serves clients remotely (not a physical storefront); LocalBusiness-
 * specific fields (address, geo) are omitted until a confirmed
 * registered address exists — inventing one would be worse than
 * omitting it.
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.organization.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    email: siteConfig.organization.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.organization.addressCountry,
    },
    sameAs: [
      // Placeholder — populate with real social profile URLs once they exist
    ],
  };
}

/**
 * Service schema — used on individual service pillar pages
 * (/services/ai-automation, etc.) to help search engines understand
 * each offering distinctly.
 */
export function getServiceSchema(params: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: params.name,
    name: params.name,
    description: params.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: `${siteConfig.url}/services/${params.slug}`,
  };
}

/**
 * FAQPage schema — matches the homepage FAQ section content exactly.
 * Eligible for Google's FAQ rich result if content stays in sync with
 * the visible accordion in components/sections/faq/faq.tsx.
 */
export function getFAQSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
