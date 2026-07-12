export const workflowShowcaseContent = {
  eyebrow: "SEE IT IN ACTION",
  headline: "This isn't a pitch. It's a real workflow.",
  subhead:
    "A look at exactly how Nuvrix automates lead handling — the same logic we build for clients.",
  flow: [
    { id: "inquiry", label: "New Inquiry Form", sublabel: "Trigger" },
    { id: "ai-qualify", label: "AI Reads & Qualifies Lead", sublabel: "AI Step" },
    { id: "hot", label: "Hot Lead", sublabel: "Branch A" },
    { id: "nurture", label: "Nurture Lead", sublabel: "Branch B" },
    { id: "book", label: "Auto-Books Calendly Slot", sublabel: "Action" },
    { id: "whatsapp", label: "Added to WhatsApp Sequence", sublabel: "Action" },
    { id: "confirm", label: "Confirmation Sent", sublabel: "Result" },
    { id: "followup", label: "Follow-Up Scheduled", sublabel: "Result" },
  ],
  useCases: [
    {
      persona: "Coaches",
      outcome: "Auto-qualify leads while you sleep, so mornings start with booked calls, not cold inboxes.",
    },
    {
      persona: "Local Business",
      outcome: "WhatsApp orders arrive, get auto-confirmed, and log straight into your CRM — no manual entry.",
    },
    {
      persona: "Consultants",
      outcome: "Discovery calls get booked automatically, without the back-and-forth email chain.",
    },
  ],
};
