import { MapPin, TrendingDown, Clock } from "lucide-react";

const problems = [
  {
    icon: MapPin,
    stat: "4.8★ on Google",
    problem: "But zero website traffic",
    body: "Your Google profile shows up — but without a real website, customers can't learn about you, book you, or trust you enough to convert.",
  },
  {
    icon: TrendingDown,
    stat: "Page 2 of search results",
    problem: "Is where you go to hide",
    body: "When someone searches your service in your city, your competitor with half your reviews is showing up first — because they invested in SEO.",
  },
  {
    icon: Clock,
    stat: "Every day without a site",
    problem: "Costs you real money",
    body: "A business with no digital presence is invisible after 5 PM and on weekends. We make sure you're findable and converting — around the clock.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-xxxl px-lg bg-surface" id="about">
      <div className="max-w-container-max mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">THE PROBLEM WE SOLVE</span>
          <h2 className="text-h2 text-ink mb-lg">
            Your biggest competitor isn't a better business.{" "}
            <span className="text-primary">It's a better website.</span>
          </h2>
          <p className="text-body-lg text-slate">
            Local businesses with outstanding reputations are losing customers every day to competitors who simply show up better online. That ends here.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-lg mb-xxl">
          {problems.map((p) => (
            <div
              key={p.stat}
              className="bg-snow border border-fog rounded-2xl p-xl hover:border-mist hover:shadow-md transition-all bento-card"
            >
              <div className="w-12 h-12 bg-purple-xpale rounded-xl flex items-center justify-center mb-lg">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-eyebrow text-primary mb-xs">{p.stat}</p>
              <h3 className="text-h3 text-ink mb-md">{p.problem}</h3>
              <p className="text-body text-slate">{p.body}</p>
            </div>
          ))}
        </div>

        {/* The opportunity callout */}
        <div className="bg-ink rounded-2xl p-xl md:p-xxl grid md:grid-cols-2 gap-xl items-center">
          <div>
            <span className="text-eyebrow text-mint block mb-md">THE OPPORTUNITY</span>
            <h3 className="text-h2 text-white mb-md">
              76% of local searches end in a store visit within 24 hours.
            </h3>
            <p className="text-body text-mist">
              You already have the reputation. We build the digital foundation that ensures those searchers find you — and choose you.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-md">
            <div className="bg-graphite rounded-xl p-lg text-center">
              <p className="text-h2 text-mint font-bold">76%</p>
              <p className="text-eyebrow text-mist mt-xs">LOCAL SEARCHES → VISIT</p>
            </div>
            <div className="bg-graphite rounded-xl p-lg text-center">
              <p className="text-h2 text-primary-fixed-dim font-bold">28%</p>
              <p className="text-eyebrow text-mist mt-xs">OF THOSE BUY SAME DAY</p>
            </div>
            <div className="bg-graphite rounded-xl p-lg text-center col-span-2">
              <p className="text-h2 text-white font-bold">$1.6T</p>
              <p className="text-eyebrow text-mist mt-xs">ANNUAL LOCAL COMMERCE ONLINE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
