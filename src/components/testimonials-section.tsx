import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    result: "+340% inbound enquiries in 90 days",
    quote:
      "We'd been invisible on Google for years. BrandLevo rebuilt our site, sorted our AEO strategy, and within three months ChatGPT was recommending us when people asked about accountants in our city. The ROI has been extraordinary.",
    name: "Priya Shah",
    role: "Owner, Sunrise Tax Consultancy",
    location: "Austin, TX",
    initials: "PS",
    avatarBg: "bg-primary",
    avatarText: "text-white",
    rating: 5,
  },
  {
    result: "44% close rate (up from 18%) in 90 days",
    quote:
      "The ICP strategy work alone was worth every penny. We'd been targeting the wrong customers for two years. BrandLevo redefined our ideal client, rewrote our positioning, and our close rate went from 18% to 44% in the first quarter.",
    name: "Marcus Reilly",
    role: "Director, Reilly Plumbing & Heating",
    location: "Manchester, UK",
    initials: "MR",
    avatarBg: "bg-purple-deeper",
    avatarText: "text-white",
    rating: 5,
  },
  {
    result: "3× average deal size within 6 months",
    quote:
      "I was sceptical about the brand uplift package — I thought it was just a logo change. It wasn't. The new identity, messaging, and positioning completely transformed how prospects perceive us. We now win contracts we couldn't even get meetings for before.",
    name: "Linda Okafor",
    role: "Owner, Bella's Hair Studio",
    location: "Lagos, NG",
    initials: "LO",
    avatarBg: "bg-mint",
    avatarText: "text-ink",
    rating: 5,
  },
  {
    result: "2× revenue in 8 months",
    quote:
      "BrandLevo didn't just build us a website — they built us a sales machine. The site, the SEO, the sales consultation, and the content strategy all work together. We've doubled revenue in eight months.",
    name: "Daniel Hartmann",
    role: "Founder, Hartmann Legal Advisory",
    location: "Berlin, DE",
    initials: "DH",
    avatarBg: "bg-graphite",
    avatarText: "text-white",
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
            Real Businesses. Real Numbers.{" "}
            <span className="text-primary italic">No Fluff.</span>
          </h2>
          <p className="text-body text-slate">
            Don&apos;t take our word for it — take theirs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal stagger-${i + 1} bg-snow border border-fog rounded-2xl p-xl flex flex-col bento-card hover:border-mist hover:shadow-md transition-all`}
            >
              {/* Result pill at top */}
              <div className="bg-purple-xpale rounded-lg px-md py-sm mb-lg w-fit">
                <span className="text-eyebrow text-primary font-semibold">{t.result}</span>
              </div>

              {/* Stars */}
              <div className="flex gap-xs mb-md">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <Quote className="w-7 h-7 text-fog mb-md shrink-0" />

              <p className="text-body text-ink mb-xl flex-grow leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>

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
