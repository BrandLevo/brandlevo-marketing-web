import { Search, PhoneOff, TrendingDown } from "lucide-react";

const pains = [
  {
    icon: Search,
    bold: "You're Hard to Find",
    body: "Customers searching for your services in your town can't find you — they're finding your competitors instead.",
  },
  {
    icon: PhoneOff,
    bold: "You Look Less Trustworthy",
    body: "84% of people check a business online before they buy. No website — or a broken one — makes you look closed, sketchy, or unprofessional.",
  },
  {
    icon: TrendingDown,
    bold: "The Phone Stays Quiet",
    body: "Word-of-mouth is great, but it caps your growth. Without a digital front door, you're leaving money — and momentum — on the table.",
  },
];

const stats = [
  { value: "76%", label: "of local searches end in a store visit within 24 hours" },
  { value: "28%", label: "of those searchers buy the same day" },
  { value: "80%", label: "of customers research online before choosing a local business" },
];

export default function ProblemSection() {
  return (
    <section className="py-xxxl px-lg bg-surface" id="about">
      <div className="max-w-container-max mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">THE PROBLEM</span>
          <h2 className="text-h2 text-ink mb-lg">
            Every Day Without a Website, You're Invisible to{" "}
            <span className="text-primary italic">80% of Your Future Customers.</span>
          </h2>
          <p className="text-body-lg text-slate">
            When someone needs a plumber, a hairdresser, or a café — they Google it. If you're not there, they're calling someone else. It's not your fault: nobody told you that running a business in 2026 also means running a marketing department.
          </p>
        </div>

        {/* Pain cards */}
        <div className="grid md:grid-cols-3 gap-lg mb-xxl">
          {pains.map((p) => (
            <div
              key={p.bold}
              className="bg-snow border border-fog rounded-2xl p-xl hover:border-mist hover:shadow-md transition-all bento-card"
            >
              <div className="w-12 h-12 bg-purple-xpale rounded-xl flex items-center justify-center mb-lg">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-h4 text-ink mb-sm">{p.bold}</h3>
              <p className="text-body text-slate">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Opportunity block — harmonious with brand primary */}
        <div className="bg-primary rounded-2xl overflow-hidden">
          {/* Header row */}
          <div className="px-xl pt-xl pb-lg grid md:grid-cols-2 gap-xl items-center border-b border-white/15">
            <div>
              <span className="text-eyebrow text-purple-pale block mb-sm">THE OPPORTUNITY</span>
              <h3 className="text-h3 text-white">
                Your future customers are already searching. They just can't find you yet.
              </h3>
            </div>
            <p className="text-body text-purple-pale leading-relaxed">
              You've built a great reputation. Now let's make sure that when someone searches for what you do in your city, your name is the first thing they see.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {stats.map((s) => (
              <div key={s.value} className="px-xl py-lg">
                <p className="text-h1 text-white font-bold leading-none mb-sm">{s.value}</p>
                <p className="text-body-sm text-purple-pale leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
