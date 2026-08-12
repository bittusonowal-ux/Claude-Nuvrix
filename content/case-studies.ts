export const caseStudiesContent = {
  eyebrow: "ENTERPRISE TRANSFORMATION OUTCOMES",
  headline: "Proven Impact Across High-Growth Verticals",
  subhead:
    "Explore how our autonomous AI systems, custom web architectures, and programmatic search engines generate measurable, compounding ROI for our clients.",
  cases: [
    {
      id: "vanguard-advisory",
      client: "Vanguard Executive Advisory",
      industry: "Executive Coaching & High-Ticket Consulting",
      title: "Automating 94% of Inbound Pipeline for a $5M Executive Coaching Firm",
      challenge:
        "The firm was losing high-ticket executive leads due to a 6-hour average response time across Instagram DMs and web contact forms, with junior sales reps spending 25+ hours weekly manually qualifying applicants.",
      solution:
        "Engineered an autonomous multi-agent pipeline using Claude 3.5 Sonnet integrated with WhatsApp Business API and HubSpot. Leads are qualified within 45 seconds, contextually scored, and booked directly into senior partner calendars.",
      metrics: [
        { label: "Lead Response Time", value: "< 45 seconds", delta: "from 6+ hours" },
        { label: "Qualified Call Volume", value: "+340%", delta: "in 60 days" },
        { label: "Payroll Hours Reclaimed", value: "28 hrs/wk", delta: "reallocated to closing" },
      ],
      techStack: ["Claude 3.5 Sonnet", "n8n Enterprise", "WhatsApp API", "HubSpot CRM"],
    },
    {
      id: "lumina-clinics",
      client: "Lumina Aesthetic Medical Centers",
      industry: "Specialized Healthcare & Multi-Location Clinics",
      title: "Eliminating Patient No-Shows & Achieving 24/7 Zero-Latency Booking",
      challenge:
        "Reception staff was overwhelmed with after-hours inquiries, causing a 35% abandonment rate and a 22% no-show rate due to manual appointment confirmation bottlenecks.",
      solution:
        "Deployed a Next.js 15 digital flagship paired with an autonomous conversational AI patient coordinator that triages inquiries, automates calendar bookings, and handles multi-tier WhatsApp reminders with 1-tap reschedules.",
      metrics: [
        { label: "Patient No-Show Rate", value: "0.4%", delta: "down from 22%" },
        { label: "After-Hours Bookings", value: "+62%", delta: "converted autonomously" },
        { label: "Annual Cost Avoidance", value: "₹18.4 Lakhs", delta: "in administrative overhead" },
      ],
      techStack: ["Next.js 15", "GPT-4o", "PostgreSQL", "WhatsApp API", "Tailwind CSS"],
    },
    {
      id: "apex-realestate",
      client: "Apex Luxury Real Estate",
      industry: "High-Ticket Real Estate & Commercial Assets",
      title: "Scaling Ultra-Luxury Property Inquiries to ₹14 Cr in Automated Sales Pipeline",
      challenge:
        "High ad spend was yielding hundreds of unstructured buyer leads that went cold before broker follow-ups could be executed.",
      solution:
        "Architected an instant AI qualification & virtual property concierge that dispatches interactive floor plans, validates buyer financing range, and schedules guided broker tours within minutes of ad click.",
      metrics: [
        { label: "Verified Buyer Pipeline", value: "₹14.2 Cr", delta: "in first 90 days" },
        { label: "Speed-to-First-Touch", value: "18 seconds", delta: "instant webhook trigger" },
        { label: "Broker Utilization Rate", value: "+85%", delta: "qualified leads only" },
      ],
      techStack: ["Next.js 15", "Make.com", "Supabase", "Meta Ads Webhooks", "Vercel"],
    },
  ],
};
