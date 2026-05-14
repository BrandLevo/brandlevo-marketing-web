import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I'd put off getting a website for 7 years because I thought it'd be expensive and complicated. BrandLevo had ours up in 12 days. We've had 23 new clients reach out through it in the first 2 months.",
    name: "Priya Shah",
    role: "Owner, Sunrise Tax Consultancy",
    location: "Austin, TX",
    result: "23 new clients in 60 days",
    initials: "PS",
    avatarBg: "bg-primary",
    avatarText: "text-white",
    rating: 5,
  },
  {
    quote:
      "We were getting maybe 2 calls a week. Now we're booked out a month in advance. Best money I've spent on the business, full stop.",
    name: "Marcus Reilly",
    role: "Reilly Plumbing & Heating",
    location: "Manchester, UK",
    result: "Booked out a full month ahead",
    initials: "MR",
    avatarBg: "bg-purple-deeper",
    avatarText: "text-white",
    rating: 5,
  },
  {
    quote:
      "They didn't make me feel stupid for not knowing tech stuff. They just… handled it. The site looks better than my competitors who paid 3× as much.",
    name: "Linda Okafor",
    role: "Owner, Bella's Hair Studio",
    location: "Lagos, NG",
    result: "+180% enquiries in 90 days",
    initials: "LO",
    avatarBg: "bg-mint",
    avatarText: "text-ink",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-xxxl px-lg bg-surface" id="results">
      <div className="max-w-container-max mx-auto">

        <div className="reveal text-center max-w-xl mx-auto mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">CLIENT RESULTS</span>
          <h2 className="text-h2 text-ink mb-md">
            Don't Take Our Word for It.{" "}
            <span className="text-primary italic">Take Theirs.</span>
          </h2>
          <p className="text-body text-slate">
            Real businesses. Real results. No jargon, no fluff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal stagger-${i + 1} bg-snow border border-fog rounded-2xl p-xl flex flex-col bento-card hover:border-mist hover:shadow-md transition-all`}
            >
              {/* Stars */}
              <div className="flex gap-xs mb-lg">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <Quote className="w-7 h-7 text-fog mb-md shrink-0" />

              <p className="text-body text-ink mb-xl flex-grow leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Result pill */}
              <div className="bg-purple-xpale rounded-lg px-md py-sm mb-xl w-fit">
                <span className="text-eyebrow text-primary">{t.result}</span>
              </div>

              {/* Author row with avatar */}
              <div className="border-t border-fog pt-lg flex items-center gap-md">
                <div
                  className={[
                    "w-12 h-12 rounded-full flex items-center justify-center font-bold text-body shrink-0",
                    t.avatarBg,
                    t.avatarText,
                  ].join(" ")}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-ink text-body-sm">{t.name}</p>
                  <p className="text-body-sm text-slate">{t.role}</p>
                  <p className="text-eyebrow text-slate mt-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
