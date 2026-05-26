import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, Clock, CheckCircle, CalendarDays } from "lucide-react";
import PageHero from "@/components/page-hero";
import ContactForm from "@/components/contact-form";
import { localBusinessSchema, faqSchema, schemaScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Book a Free Call | BrandLevo",
  description:
    "Book a free 20-minute audit call with BrandLevo in Kochi. We review your website and Google ranking live, then hand you a clear action plan — no obligation.",
  alternates: {
    canonical: "/contact",
  },
};

const steps = [
  {
    num: "01",
    title: "Book your 20-minute call",
    body: "Pick any slot. No prep needed. Just show up — we'll handle the rest.",
  },
  {
    num: "02",
    title: "We audit your online presence live",
    body: "We screen-share and walk through your website, Google ranking, and GBP — live, in real time.",
  },
  {
    num: "03",
    title: "You get a clear action plan",
    body: "We tell you exactly what to fix and in what order. Whether you hire us or not — the plan is yours.",
  },
];

const promises = [
  "No hard sell. No pressure. Ever.",
  "You'll leave knowing exactly what to fix.",
  "We'll tell you if you don't need us.",
  "Same team from call to launch.",
];

const faqs = [
  {
    q: "Do I need to prepare anything?",
    a: "Nothing. Just your business name and town. We do the research before the call.",
  },
  {
    q: "Is the call really free?",
    a: "Yes, genuinely. We do about 30 of these a month. Most turn into projects — but the audit is yours regardless.",
  },
  {
    q: "What if I'm not ready to buy yet?",
    a: "Totally fine. Book the call anyway. You'll leave with a roadmap and can come back whenever you're ready.",
  },
  {
    q: "How quickly can you start?",
    a: "We take on 4–6 new projects per month to maintain quality. Current wait time is approximately 1–2 weeks from deposit.",
  },
];

export default function ContactPage() {
  const localBizSchema = localBusinessSchema();
  const faqJson = faqSchema(faqs);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaScript(localBizSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaScript(faqJson) }}
      />
    <main>
      <PageHero
        eyebrow="BOOK A FREE CALL"
        title="20 Minutes."
        titleAccent="A Plan You Can Use Today."
        body="We audit your online presence live — Google ranking, website, local SEO — and hand you a clear action plan. No pitch deck. No obligation. Ever."
        cta={{ label: "Book a Free Audit Call", href: "#contact-form" }}
        secondaryCta={{ label: "Or send us a message", href: "#contact-form" }}
        stats={[
          { value: "20 min", label: "Free audit call" },
          { value: "48 hrs", label: "Next available slot" },
          { value: "4–6", label: "New clients/month" },
          { value: "0", label: "Obligation" },
        ]}
        variant="dark"
      />

      {/* Contact detail sections */}
      <section className="bg-snow py-xxl px-lg border-b border-fog" id="contact-form">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-xxl items-start">
          <div>
            <span className="text-eyebrow text-primary block mb-md">WHAT TO EXPECT</span>
            <h2 className="text-h2 text-ink mb-lg">Here&apos;s exactly what happens on the call.</h2>
            <p className="hero-body text-body-lg text-slate mb-xl leading-relaxed">
              We audit your online presence live on the call — Google ranking, website, GBP — and tell you exactly what&apos;s costing you customers. No pitch deck. No obligation.
            </p>
            <ul className="space-y-sm mb-xxl">
              {promises.map((p) => (
                <li key={p} className="flex items-center gap-sm">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-body text-slate">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking card */}
          <div className="reveal-scale bg-white border border-fog rounded-2xl p-md sm:p-xl shadow-sm">
            <div className="flex items-center gap-sm mb-xl">
              <CalendarDays className="w-5 h-5 text-primary" />
              <span className="text-h4 text-ink font-semibold">Book Your Free Call</span>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-lg mb-xl">
              <p className="text-body-sm text-primary font-medium">
                Currently accepting new calls — next available slot within 48 hours.
              </p>
            </div>

            <a
              href="https://calendly.com/devops-brandlevo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-primary text-white px-xl py-md rounded-full font-bold hover:opacity-90 transition-all mb-lg"
            >
              Book a Free Call
            </a>

            <div className="flex items-center gap-md text-body-sm text-slate justify-center mb-xl">
              <span className="flex items-center gap-xs">
                <Clock className="w-3.5 h-3.5 text-primary" />
                20 minutes
              </span>
              <span>·</span>
              <span>Google Meet or Zoom</span>
              <span>·</span>
              <span>Free forever</span>
            </div>

            <div className="border-t border-fog pt-lg space-y-sm">
              <p className="text-eyebrow text-slate mb-md">OR REACH US DIRECTLY</p>
              <a
                href="tel:+919895883315"
                className="flex items-center gap-sm text-body-sm text-slate hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 98958 83315
              </a>
              <a
                href="mailto:sales@brandlevo.com"
                className="flex items-center gap-sm text-body-sm text-slate hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                sales@brandlevo.com
              </a>
              <a
                href="https://wa.me/919895883315"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-sm text-body-sm text-slate hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-xxxl px-lg bg-white">
        <div className="max-w-container-max mx-auto">
          <span className="text-eyebrow text-primary block mb-md">WHAT HAPPENS NEXT</span>
          <h2 className="text-h2 text-ink mb-xxl max-w-xl">Here&apos;s exactly what happens after you book.</h2>
          <div className="grid md:grid-cols-3 gap-lg">
            {steps.map((s) => (
              <div key={s.num} className="bg-snow border border-fog rounded-2xl p-xl">
                <span className="text-display text-fog font-bold leading-none block mb-md">{s.num}</span>
                <h3 className="text-h4 text-ink mb-sm">{s.title}</h3>
                <p className="text-body-sm text-slate leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-xxxl px-lg bg-snow">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-xxl">
          <div>
            <span className="text-eyebrow text-primary block mb-md">SEND A MESSAGE</span>
            <h2 className="text-h2 text-ink mb-lg">Prefer to write first? That&apos;s fine too.</h2>
            <p className="text-body text-slate mb-xl">
              We respond to every message within one business day. If it&apos;s urgent, call or WhatsApp — we pick up.
            </p>
            <div className="space-y-sm">
              <div className="flex items-center gap-sm text-body-sm text-slate">
                <Clock className="w-4 h-4 text-primary" />
                Response within 1 business day
              </div>
              <div className="flex items-center gap-sm text-body-sm text-slate">
                <CheckCircle className="w-4 h-4 text-primary" />
                No automated replies — a real human reads every message
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-xxl px-lg bg-white border-t border-fog">
        <div className="max-w-container-max mx-auto max-w-2xl">
          <span className="text-eyebrow text-primary block mb-xl">QUICK ANSWERS</span>
          <div className="space-y-md">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-snow border border-fog rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-xl py-lg cursor-pointer list-none">
                  <span className="text-body font-medium text-ink group-open:text-primary transition-colors pr-lg">{faq.q}</span>
                  <span className="shrink-0 text-slate group-open:text-primary text-h3 leading-none transition-colors">+</span>
                </summary>
                <div className="px-xl pb-lg">
                  <p className="text-body-sm text-slate leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
