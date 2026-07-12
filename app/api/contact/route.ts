import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Contact form submission handler. Server-side validation is mandatory
 * here even though the client already validates — the client can be
 * bypassed entirely by a direct API call, so this is the real guard.
 *
 * TODO (Bittu): wire this to actual delivery once you decide the
 * destination — options: Resend/SendGrid for email, or a CRM webhook.
 * Currently logs server-side only, which means submissions are NOT
 * being delivered anywhere yet. Flagging clearly so this isn't
 * mistaken for "done" — this is the one piece requiring a real
 * external credential from you before going live.
 */
export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, company, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  // Basic honeypot-style length guard against obvious spam/abuse
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message too long." }, { status: 400 });
  }

  // Placeholder delivery — replace with real email/CRM integration.
  console.log("[Nuvrix Contact Form Submission]", {
    name,
    email,
    company: company || "(not provided)",
    message,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
