import { ArrowRight, CheckCircle } from "lucide-react";

const reassurances = [
  "Free audit — no obligation",
  "No pressure. No sales pitch.",
  "We tell you what's costing you customers, whether you hire us or not.",
];

export default function CtaSection() {
  return (
    <section className="py-xxxl px-lg" id="audit">
      <div className="max-w-container-max mx-auto bg-primary rounded-3xl p-xl md:p-xxxl relative overflow-hidden">

        <div className="relative z-10 grid md:grid-cols-2 gap-xxl items-center">

          {/* Left */}
          <div>
            <span className="text-eyebrow text-mint block mb-md">YOUR NEXT CUSTOMERS ARE SEARCHING RIGHT NOW</span>
            <h2 className="text-h1 text-white mb-lg">
              Let's Make Sure They{" "}
              <span className="italic">Find You.</span>
            </h2>
            <p className="text-body-lg text-purple-pale mb-xl">
              Book a free 20-minute call. We'll audit your current online presence, show you exactly what's costing you customers, and give you a clear plan — whether you hire us or not.
            </p>
            <ul className="space-y-md">
              {reassurances.map((r) => (
                <li key={r} className="flex items-start gap-sm text-white text-body">
                  <CheckCircle className="w-5 h-5 text-mint shrink-0 mt-0.5" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form card */}
          <div className="bg-white rounded-2xl p-xl shadow-2xl">
            <h3 className="text-h3 text-ink mb-xs">Get My Free Website Audit</h3>
            <p className="text-body-sm text-slate mb-xl">Takes 2 minutes. No credit card. No spam.</p>

            <div className="space-y-md">
              <div>
                <label className="text-eyebrow text-slate block mb-sm">Your Name</label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full border border-fog rounded-lg px-md py-md text-body text-ink placeholder:text-slate focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-eyebrow text-slate block mb-sm">Business Name</label>
                <input
                  type="text"
                  placeholder="Smith's Plumbing Co."
                  className="w-full border border-fog rounded-lg px-md py-md text-body text-ink placeholder:text-slate focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-eyebrow text-slate block mb-sm">Email Address</label>
                <input
                  type="email"
                  placeholder="you@yourbusiness.com"
                  className="w-full border border-fog rounded-lg px-md py-md text-body text-ink placeholder:text-slate focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button className="w-full bg-primary text-white rounded-lg py-md font-semibold text-body hover:opacity-90 active:scale-95 transition-all inline-flex items-center justify-center gap-sm">
                Get My Free Website Audit
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-eyebrow text-slate text-center">
                We respond within 1 business day.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative glows */}
        <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-purple-dark rounded-full opacity-50 blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -top-10 w-[200px] h-[200px] bg-purple-deeper rounded-full opacity-60 blur-2xl pointer-events-none" />
      </div>
    </section>
  );
}
