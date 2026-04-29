import { Calendar, Phone, CheckCircle, Clock, MessageCircle } from "lucide-react";

const promises = [
  "20 minutes. No tech jargon. No hard sell.",
  "We show you exactly what's costing you customers online.",
  "You'll leave with a clear action plan — whether you hire us or not.",
];

export default function CtaSection() {
  return (
    <section className="py-xxxl px-lg" id="audit">
      <div className="max-w-container-max mx-auto bg-primary rounded-3xl p-xl md:p-xxxl relative overflow-hidden">

        <div className="relative z-10 grid md:grid-cols-2 gap-xxl items-center">

          {/* Left — copy */}
          <div>
            <span className="text-eyebrow text-purple-pale block mb-md">
              YOUR NEXT CUSTOMERS ARE SEARCHING RIGHT NOW
            </span>
            <h2 className="text-h1 text-white mb-lg">
              Let's Make Sure They{" "}
              <span className="italic">Find You.</span>
            </h2>
            <p className="text-body-lg text-purple-pale mb-xl leading-relaxed">
              Book a free 20-minute call. We'll audit your current online presence, show you exactly what's costing you customers, and give you a clear plan — whether you hire us or not.
            </p>
            <ul className="space-y-md">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-sm text-white text-body">
                  <CheckCircle className="w-5 h-5 text-mint shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — booking card */}
          <div className="bg-white rounded-2xl p-xl shadow-2xl flex flex-col gap-lg">
            <div>
              <h3 className="text-h3 text-ink mb-xs">Book Your Free Discovery Call</h3>
              <div className="flex items-center gap-sm text-body-sm text-slate">
                <Clock className="w-4 h-4 text-primary" />
                20 minutes · Free · No obligation
              </div>
            </div>

            {/* Primary — Calendly */}
            <a
              href="https://calendly.com/brandlevo/free-discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary text-white rounded-xl py-lg font-semibold text-body hover:opacity-90 active:scale-95 transition-all inline-flex items-center justify-center gap-sm shadow-md"
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
              href="tel:+15551234567"
              className="w-full border border-fog rounded-xl py-md font-semibold text-body-sm text-ink hover:border-primary hover:text-primary transition-all inline-flex items-center justify-center gap-sm"
            >
              <Phone className="w-4 h-4" />
              Call us: +1 (555) 123-4567
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-fog rounded-xl py-md font-semibold text-body-sm text-ink hover:border-mint hover:text-mint transition-all inline-flex items-center justify-center gap-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp us
            </a>

            <p className="text-eyebrow text-slate text-center">
              We typically respond within a few hours.
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
