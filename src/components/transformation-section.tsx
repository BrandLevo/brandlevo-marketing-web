import { X, Check } from "lucide-react";

const before = [
  "No website (or one that embarrasses you)",
  "Invisible on Google — page 3 or worse",
  "Word-of-mouth is your only marketing",
  "Quiet weeks make you anxious",
  "Watching competitors get the calls",
];

const after = [
  "A modern website you're proud to share",
  "Top of Google for searches in your town",
  "A steady stream of leads from your site",
  "Predictable bookings — every single week",
  "Confidence that your business is built to grow",
];

export default function TransformationSection() {
  return (
    <section className="py-xxxl px-lg bg-snow">
      <div className="max-w-container-max mx-auto">

        <div className="text-center max-w-xl mx-auto mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">THE TRANSFORMATION</span>
          <h2 className="text-h2 text-ink">
            Imagine Your Business in{" "}
            <span className="text-primary italic">90 Days.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-xl max-w-4xl mx-auto">

          {/* Before */}
          <div className="bg-surface border border-fog rounded-2xl p-xl">
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
          <div className="bg-primary rounded-2xl p-xl relative overflow-hidden">
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

        <p className="text-center text-body-sm text-slate mt-xl max-w-md mx-auto">
          Our clients don't just buy a website — they buy the future version of their business that's found, trusted, and booked.
        </p>
      </div>
    </section>
  );
}
