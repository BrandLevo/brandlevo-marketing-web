import { X, Check } from "lucide-react";

const before = [
  "A website that embarrasses you — or no website at all",
  "Invisible on Google, absent from AI search entirely",
  "No idea who your Ideal Customer Profile really is",
  "Word-of-mouth only — unpredictable, capped by geography",
  "Competitors with half your quality getting all the visibility",
  "A brand that doesn't reflect the value you actually deliver",
  "Quiet weeks that make you wonder what's wrong",
  "No system for converting leads into clients at scale",
];

const after = [
  "A premium digital presence you're proud to send anyone to",
  "Ranking on Google AND appearing in AI-generated answers",
  "A clear ICP strategy so every marketing dollar targets the right people",
  "A predictable pipeline of warm, qualified leads every month",
  "The undisputed authority in your category in your market",
  "A brand identity that signals trust, quality, and confidence",
  "A full calendar and sustainable, predictable growth",
  "A sales system that converts visibility into revenue — consistently",
];

export default function TransformationSection() {
  return (
    <section className="py-xxxl px-lg bg-snow">
      <div className="max-w-container-max mx-auto">

        <div className="reveal text-center max-w-xl mx-auto mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">THE TRANSFORMATION</span>
          <h2 className="text-h2 text-ink">
            Picture Your Brand in{" "}
            <span className="text-primary italic">90 Days.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-xl max-w-4xl mx-auto">

          {/* Before */}
          <div className="reveal-left bg-surface border border-fog rounded-2xl p-xl">
            <div className="flex items-center gap-sm mb-xl">
              <div className="w-8 h-8 rounded-full bg-fog flex items-center justify-center">
                <X className="w-4 h-4 text-slate" />
              </div>
              <span className="text-h4 text-slate font-semibold">Before BrandLevo</span>
            </div>
            <ul className="space-y-md">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-sm text-body text-slate">
                  <X className="w-4 h-4 text-slate/40 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="reveal-right bg-primary rounded-2xl p-xl relative overflow-hidden">
            <div className="flex items-center gap-sm mb-xl">
              <div className="w-8 h-8 rounded-full bg-purple-dark flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-h4 text-white font-semibold">After BrandLevo</span>
            </div>
            <ul className="space-y-md">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-sm text-body text-white">
                  <Check className="w-4 h-4 text-mint shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            {/* Decorative */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-dark rounded-full opacity-50 blur-2xl pointer-events-none" />
          </div>
        </div>

        <blockquote className="reveal text-center text-body text-slate mt-xxl max-w-xl mx-auto italic">
          &ldquo;Our clients don&apos;t just buy a service — they buy the future version of their business: found, trusted, and booked.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
