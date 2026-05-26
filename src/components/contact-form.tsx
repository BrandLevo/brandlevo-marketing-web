"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type State = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-snow border border-fog rounded-xl px-md py-sm text-body text-ink placeholder:text-slate/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary transition-colors";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("first-name") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("last-name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      businessName: (form.elements.namedItem("business-name") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setState(res.ok ? "success" : "error");
  }

  if (state === "success") {
    return (
      <div className="bg-white border border-fog rounded-2xl p-md sm:p-xl shadow-sm flex flex-col items-center justify-center gap-lg text-center min-h-[400px]">
        <div className="w-14 h-14 rounded-full bg-mint/10 flex items-center justify-center">
          <svg className="w-7 h-7 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="text-h3 text-ink mb-sm">Message sent</h3>
          <p className="text-body text-slate">We&apos;ll reply within one business day. Talk soon.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-md bg-white border border-fog rounded-2xl p-md sm:p-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <div>
          <label htmlFor="first-name" className="text-body-sm font-semibold text-slate block mb-sm">
            First Name
          </label>
          <input id="first-name" name="first-name" type="text" required placeholder="Jane" className={inputClass} />
        </div>
        <div>
          <label htmlFor="last-name" className="text-body-sm font-semibold text-slate block mb-sm">
            Last Name
          </label>
          <input id="last-name" name="last-name" type="text" placeholder="Smith" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="text-body-sm font-semibold text-slate block mb-sm">
          Email
        </label>
        <input id="email" name="email" type="email" required placeholder="jane@yourbusiness.com" className={inputClass} />
      </div>
      <div>
        <label htmlFor="business-name" className="text-body-sm font-semibold text-slate block mb-sm">
          Business Name
        </label>
        <input id="business-name" name="business-name" type="text" placeholder="Smith & Co Plumbing" className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className="text-body-sm font-semibold text-slate block mb-sm">
          What do you need help with?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us where you're at — no website yet, a site that doesn't rank, want more leads, etc."
          className={`${inputClass} resize-none`}
        />
      </div>

      {state === "error" && (
        <p className="text-body-sm text-red-500">Something went wrong — please try WhatsApp or email instead.</p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full inline-flex items-center justify-center gap-sm bg-primary text-white px-xl py-md rounded-full font-bold hover:opacity-90 transition-all disabled:opacity-60"
      >
        {state === "loading" ? "Sending…" : "Send Message"}
        {state !== "loading" && <ArrowRight className="w-4 h-4" />}
      </button>
    </form>
  );
}
