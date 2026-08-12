export const workflowShowcaseContent = {
  eyebrow: "INDUSTRY-SPECIFIC AUTOMATION BLUEPRINTS",
  headline: "Explore Live Autonomous Agent Architectures",
  subhead:
    "Select an industry practice below to inspect how Nuvrix replaces fragmented manual labor with intelligent, deterministic multi-agent workflows.",
  flow: [
    { id: "inquiry", label: "Inbound Prospect", sublabel: "Omnichannel Lead" },
    { id: "ai-qualify", label: "Claude 3.5 Triage", sublabel: "Intent Scoring" },
    { id: "hot", label: "VIP Qualified", sublabel: "High Intent" },
    { id: "nurture", label: "Automated Nurture", sublabel: "Mid Intent" },
    { id: "book", label: "Calendar Slot", sublabel: "Auto Scheduled" },
    { id: "whatsapp", label: "WhatsApp Handshake", sublabel: "Sub-30s Reply" },
    { id: "confirm", label: "CRM Sync", sublabel: "Deal Created" },
    { id: "followup", label: "Multi-Touch Sequence", sublabel: "Automated" },
  ],
  useCases: [
    {
      id: "coaches",
      label: "Coaching & Advisory",
      persona: "Coaching & Advisory",
      badge: "High-Ticket Advisory",
      title: "Zero-Touch Inbound Triage to High-Intent Calendar Booking",
      description:
        "Automatically captures inquiries across Instagram DM, LinkedIn, and Web, executes deep natural-language qualification, collects budget verification, and books VIP calendar slots with automated WhatsApp confirmations.",
      outcome:
        "Automatically captures inquiries across Instagram DM, LinkedIn, and Web, executes deep natural-language qualification, and books VIP calendar slots.",
      roiStat: "+340% Pipeline Velocity",
      hoursSaved: "18 hrs/week saved",
      steps: [
        { name: "Inbound Prospect", detail: "Lead initiates contact via Instagram/LinkedIn/Web" },
        { name: "Claude 3.5 Triage", detail: "Analyzes intent, business scale & investment budget" },
        { name: "Qualification Gate", detail: "Scores lead (>80% qualified routes to VIP booking)" },
        { name: "WhatsApp Handshake", detail: "Dispatches personalized invite link & reminder sequence" },
        { name: "CRM Synchronization", detail: "Enriches Notion/HubSpot with full call context summary" },
      ],
    },
    {
      id: "b2b",
      label: "B2B SaaS & Agencies",
      persona: "B2B SaaS & Agencies",
      badge: "Enterprise Pipeline",
      title: "Real-Time Account Enrichment & Autonomous Pitch Generation",
      description:
        "Ingests inbound trial signups or contact forms, matches company domain with Apollo/Clearbit, extracts tech stack data, generates a custom AI pitch deck, and alerts account executives on Slack in under 45 seconds.",
      outcome:
        "Enriches inbound leads with firmographic intelligence, generates custom pitch decks, and alerts account executives on Slack.",
      roiStat: "4.8x Faster Speed-to-Lead",
      hoursSaved: "26 hrs/week saved",
      steps: [
        { name: "Inbound Form Submission", detail: "Prospect requests enterprise demo or pricing" },
        { name: "Data Enrichment Engine", detail: "Scrapes employee count, ARR estimate & tech stack" },
        { name: "Custom Deck Generation", detail: "GPT-4o auto-populates tailored 5-slide PDF deck" },
        { name: "Instant AE Slack Alert", detail: "Pushes enriched lead card with direct 1-click dial" },
        { name: "Automated Follow-up", detail: "Triggers personalized email & WhatsApp follow-up sequence" },
      ],
    },
    {
      id: "healthcare",
      label: "Clinics & Healthcare",
      persona: "Clinics & Healthcare",
      badge: "Patient Care",
      title: "24/7 Intelligent Patient Triage & Zero No-Show Scheduling",
      description:
        "Provides 24/7 instant medical inquiry response, cross-checks doctor availability, books consultation slots, securely logs patient intake details, and dispatches automated reminder sequences with interactive cancellation/reschedule buttons.",
      outcome:
        "Delivers 24/7 patient triage, doctor calendar scheduling, and intelligent WhatsApp reminders that virtually eliminate no-shows.",
      roiStat: "0% No-Show Rate SLA",
      hoursSaved: "32 hrs/week saved",
      steps: [
        { name: "Patient Inquiry", detail: "Inquiry received at 11:30 PM via WhatsApp or Website" },
        { name: "Symptom & Department Triage", detail: "AI asks key preliminary questions to match doctor" },
        { name: "Calendar Slot Match", detail: "Checks real-time clinic slots & reserves appointment" },
        { name: "Intake Form Dispatch", detail: "Collects medical history & prepayment link" },
        { name: "Smart Reminders", detail: "Sends automated 24h & 2h WhatsApp reminders with 1-tap confirm" },
      ],
    },
    {
      id: "realestate",
      label: "Real Estate & Luxury Assets",
      persona: "Real Estate & Luxury Assets",
      badge: "High-Ticket Real Estate",
      title: "Virtual Concierge & VIP Property Tour Coordinator",
      description:
        "Answers buyer inquiries about floor plans, pricing, and possession dates instantly in natural language, verifies buyer financing readiness, and schedules guided property walk-throughs with verified brokers.",
      outcome:
        "Answers buyer inquiries about floor plans and pricing, verifies buyer readiness, and schedules guided property walk-throughs.",
      roiStat: "₹1.8 Cr+ Pipeline Value/Mo",
      hoursSaved: "22 hrs/week saved",
      steps: [
        { name: "Ad / Portal Lead Ingestion", detail: "Instant webhook capture from Meta & Google Ads" },
        { name: "Brochure & Pricing AI Bot", detail: "Sends tailored PDF brochure & answers floorplan questions" },
        { name: "Buyer Readiness Check", detail: "Validates budget range, timeframe & preferred locality" },
        { name: "Site Visit Scheduled", detail: "Syncs client calendar with on-ground sales manager" },
        { name: "Location Pin & Driver Alert", detail: "Automated WhatsApp route map sent on day of visit" },
      ],
    },
  ],
};
