import { Calendar, Phone, CheckCircle, Clock, MessageCircle } from "lucide-react";

const promises = [
  "Full AEO + SEO visibility audit included",
  "Competitor analysis and positioning review",
  "Clear, prioritised action plan — no tech jargon",
  "Zero obligation. Zero hard sell.",
];

export default function CtaSection() {
  return (
    <section className="py-xxxl px-lg" id="audit">
      <div className="max-w-container-max mx-auto bg-primary rounded-3xl p-xl md:p-xxxl relative overflow-hidden">

        <div className="relative z-10 grid md:grid-cols-2 gap-xxl items-center">

          {/* Left — copy */}
          <div>
            <span className="hero-eyebrow text-eyebrow text-white block mb-md">
              YOUR NEXT CUSTOMERS ARE SEARCHING RIGHT NOW
            </span>
            <h2 className="hero-title text-h1 text-white mb-lg">
              Let&apos;s Make Sure They Find You —{" "}
              <span className="italic">Not Your Competitors.</span>
            </h2>
            <p className="hero-body text-body-lg text-white mb-xl leading-relaxed">
              Book a free 20-minute Brand Audit. We&apos;ll analyse your current digital presence, check your AI search visibility, map your competitor gaps, and give you a clear action plan — whether you hire us or not.
            </p>
            <ul className="space-y-md">
              {promises.map((p, i) => (
                <li key={p} className={`reveal stagger-${i + 1} flex items-start gap-sm text-white text-body`}>
                  <CheckCircle className="w-5 h-5 text-mint shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — booking card */}
          <div className="reveal-scale bg-white rounded-2xl p-md sm:p-xl shadow-2xl flex flex-col gap-lg">
            <div>
              <h3 className="text-h3 text-ink mb-xs">Book Your Free Brand Audit</h3>
              <div className="flex items-center gap-sm text-body-sm text-slate">
                <Clock className="w-4 h-4 text-primary" />
                20 minutes · Free · No obligation
              </div>
            </div>

            {/* Primary — Calendly */}
            <a
              href="https://calendly.com/devops-brandlevo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-ring w-full bg-primary text-white rounded-xl py-lg font-semibold text-body hover:opacity-90 active:scale-95 transition-all inline-flex items-center justify-center gap-sm shadow-md"
            >
              <Calendar className="w-5 h-5" />
              Schedule on Calendly
            </a>

            {/* Divider */}
            <div className="flex items-center gap-md">
              <div className="flex-1 h-px bg-fog" />
              <span className="text-eyebrow text-slate">or reach us directly</span>
              <div className="flex-1 h-px bg-fog" />
            </div>

            {/* Phone */}
            <a
              href="tel:+919895883315"
              className="w-full border border-fog rounded-xl py-md font-semibold text-body-sm text-ink hover:border-primary hover:text-primary transition-all inline-flex items-center justify-center gap-sm"
            >
              <Phone className="w-4 h-4" />
              Call us: +91 98958 83315
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919895883315"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-fog rounded-xl py-md font-semibold text-body-sm text-ink hover:border-mint hover:text-mint transition-all inline-flex items-center justify-center gap-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp us
            </a>

            <p className="text-eyebrow text-slate text-center">
              Schedule on Calendly — 20 minutes · Free · No obligation
            </p>
          </div>
        </div>

        {/* Decorative */}
        <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-purple-dark rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -top-10 w-[200px] h-[200px] bg-purple-deeper rounded-full opacity-50 blur-2xl pointer-events-none" />
      </div>
    </section>
  );
}
