import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Rodriguez",
    role: "Owner, Radiance Beauty Salon",
    location: "Austin, TX",
    rating: 5,
    quote:
      "We had 4.8 stars on Google but nobody could find us online. Within 8 weeks of launching with BrandLevo, we went from 2 new bookings a week from the web to over 20. It's been transformative.",
    stat: "10× web bookings",
  },
  {
    name: "James Okonkwo",
    role: "Director, Premier Plumbing Co.",
    location: "Chicago, IL",
    rating: 5,
    quote:
      "I was sceptical because we'd tried a website before and got nothing. BrandLevo explained exactly why — no SEO, no local targeting. Now we rank #1 for our city and have a waiting list for the first time.",
    stat: "#1 local ranking",
  },
  {
    name: "Sarah & Tom Chen",
    role: "Co-owners, Chen Family Restaurant",
    location: "Seattle, WA",
    rating: 5,
    quote:
      "We'd been in business 15 years, always word of mouth. BrandLevo showed us what we were leaving on the table. New website, Google Ads, and email marketing — revenue up 40% in 3 months.",
    stat: "+40% revenue in 90 days",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-xxxl px-lg bg-snow">
      <div className="max-w-container-max mx-auto">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">CLIENT RESULTS</span>
          <h2 className="text-h2 text-ink mb-md">Local business owners speaking for themselves.</h2>
          <p className="text-body text-slate">
            We only take on clients we're confident we can grow. These are their stories.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface border border-fog rounded-2xl p-xl flex flex-col bento-card hover:border-mist hover:shadow-md transition-all"
            >
              {/* Stars */}
              <div className="flex gap-xs mb-lg">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-8 h-8 text-fog mb-md" />
              <p className="text-body text-ink mb-xl flex-grow leading-relaxed">
                {t.quote}
              </p>

              {/* Result pill */}
              <div className="bg-purple-xpale rounded-lg px-md py-sm mb-xl w-fit">
                <span className="text-eyebrow text-primary">{t.stat}</span>
              </div>

              {/* Author */}
              <div className="border-t border-fog pt-lg">
                <p className="font-bold text-ink text-body-sm">{t.name}</p>
                <p className="text-body-sm text-slate">{t.role}</p>
                <p className="text-eyebrow text-slate mt-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
