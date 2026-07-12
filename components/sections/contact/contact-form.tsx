"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialState: FormState = { name: "", email: "", company: "", message: "" };

function validate(state: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!state.name.trim()) errors.name = "Please enter your name.";
  if (!state.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!state.message.trim()) errors.message = "Tell us a little about what you need.";
  return errors;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

/**
 * Contact form. Errors are announced via aria-live regions and paired
 * with icon + text (not color alone) per accessibility spec — colorblind
 * users can't rely on a red border by itself. Submits to /api/contact.
 */
export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <m.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass flex flex-col items-center rounded-lg p-8 text-center"
        role="status"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckIcon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
          Message sent
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          We&apos;ll get back to you within 2 hours during business hours.
        </p>
      </m.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={cn(
            "glass h-13 w-full rounded-md px-4 text-base text-text-primary placeholder:text-text-secondary/60",
            "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
            errors.name && "border-red-500"
          )}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={cn(
            "glass h-13 w-full rounded-md px-4 text-base text-text-primary placeholder:text-text-secondary/60",
            "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
            errors.email && "border-red-500"
          )}
          placeholder="you@company.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-text-primary">
          Company <span className="text-text-secondary">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={(e) => handleChange("company", e.target.value)}
          className="glass h-13 w-full rounded-md px-4 text-base text-text-primary placeholder:text-text-secondary/60 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-primary">
          What do you need help with?
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            "glass w-full rounded-md px-4 py-3 text-base text-text-primary placeholder:text-text-secondary/60",
            "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
            errors.message && "border-red-500"
          )}
          placeholder="Tell us about your business and what you'd like to automate..."
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <div aria-live="polite">
        {status === "error" && (
          <p role="alert" className="text-sm text-red-400">
            Something went wrong. Please try again or reach us on WhatsApp.
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "submitting"}
        className="w-full"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
