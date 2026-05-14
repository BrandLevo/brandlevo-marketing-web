import Link from "next/link";
import { ArrowRight, Clock, BookOpen, TrendingUp, Zap, Users } from "lucide-react";

const featured = {
  tag: "LOCAL SEO",
  title: "Why Your Google Reviews Aren't Enough to Win Online",
  excerpt:
    "You've got 4.9 stars and 200 reviews. Customers love you. So why is the phone still quiet on Tuesdays? The problem isn't your reputation — it's your visibility.",
  readTime: "6 min read",
  date: "April 2025",
  slug: "google-reviews-not-enough",
};

const posts = [
  {
    tag: "AEO",
    accent: "bg-[#00D4FF]/10 text-[#0099b8]",
    bar: "bg-[#00D4FF]",
    title: "AEO: The New SEO Your Competitors Don't Know About Yet",
    excerpt:
      "ChatGPT, Perplexity, and Google's AI Overviews are sending traffic to one business per category. That business isn't chosen by who ranks #1 — it's chosen by who answers questions best.",
    readTime: "8 min read",
    date: "March 2025",
    slug: "aeo-new-seo",
  },
  {
    tag: "WEB DESIGN",
    accent: "bg-mint/10 text-[#0fa870]",
    bar: "bg-mint",
    title: "What Makes a Local Business Website Actually Convert",
    excerpt:
      "Most local business websites convert at under 1%. That means 99 out of 100 visitors leave without calling. The fix isn't a redesign — it's five specific changes most developers never make.",
    readTime: "5 min read",
    date: "March 2025",
    slug: "local-business-website-convert",
  },
  {
    tag: "GOOGLE BUSINESS",
    accent: "bg-gold/10 text-amber-700",
    bar: "bg-gold",
    title: "The GBP Mistakes Costing Local Businesses Customers Every Day",
    excerpt:
      "An incomplete or poorly-managed GBP profile is invisible to local searchers. Seven specific errors — and exactly how to fix them in an afternoon.",
    readTime: "7 min read",
    date: "February 2025",
    slug: "google-business-profile-mistakes",
  },
  {
    tag: "LOCAL SEO",
    accent: "bg-primary/10 text-primary",
    bar: "bg-primary",
    title: "How Local Citations Work (And Why Inconsistency Tanks Your Rankings)",
    excerpt:
      "Your business name, address, and phone number appear in hundreds of places online. If they don't match, Google doesn't trust you — and neither do the maps.",
    readTime: "5 min read",
    date: "February 2025",
    slug: "local-citations-guide",
  },
  {
    tag: "STRATEGY",
    accent: "bg-purple-pale text-purple-700",
    bar: "bg-purple-500",
    title: "The 90-Day Digital Blueprint for New Local Businesses",
    excerpt:
      "Month one: get found. Month two: get trusted. Month three: get booked. A week-by-week action plan for any local business starting from scratch online.",
    readTime: "10 min read",
    date: "January 2025",
    slug: "90-day-digital-blueprint",
  },
];

export default function BlogPage() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        {/* Background glows — mirrors landing hero */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, #EDE5FF 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at bottom left, #EDE5FF 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-container-max mx-auto px-md sm:px-xl">
          <div className="grid lg:grid-cols-2 items-center gap-xl pt-xl sm:pt-xxl pb-xxl">

            {/* Left: copy */}
            <div>
              <span className="hero-eyebrow inline-flex items-center gap-xs text-eyebrow text-primary bg-primary/8 border border-primary/15 px-md py-xs rounded-full mb-lg">
                INTELLIGENCE, SHARED
              </span>
              <h1 className="hero-title text-h1 text-ink mb-lg leading-tight">
                Straight Talk on{" "}
                <span className="text-primary">Digital Growth.</span>
              </h1>
              <p className="hero-body text-body-lg text-slate max-w-md mb-xl leading-relaxed">
                No agency waffle. Every post answers a real question from local business owners — actionable the same day you read it.
              </p>
              <div className="hero-cta flex flex-wrap items-center gap-md">
                <Link
                  href="#articles"
                  className="inline-flex items-center gap-sm bg-primary text-white px-xl py-md rounded-full font-semibold shadow-sm hover:opacity-90 hover:-translate-y-px transition-all active:scale-95"
                >
                  Browse Articles
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#newsletter"
                  className="text-body-sm font-semibold text-slate hover:text-primary transition-colors"
                >
                  Get weekly tips →
                </Link>
              </div>
            </div>

            {/* Right: floating card composition */}
            <div className="hero-image relative h-[380px] sm:h-[440px] flex items-center justify-center">

              {/* Central orb */}
              <div className="absolute w-[240px] h-[240px] rounded-full bg-gradient-to-br from-primary to-purple-dark opacity-[0.07] blur-3xl" />
              <div className="relative w-[180px] h-[180px] rounded-full bg-gradient-to-br from-primary/15 to-purple-pale border border-primary/20 flex items-center justify-center shadow-xl shadow-primary/10">
                <div className="w-[140px] h-[140px] rounded-full bg-gradient-to-br from-primary/20 to-transparent border border-primary/10 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-primary opacity-80" />
                </div>
              </div>

              {/* Floating card — top left */}
              <div className="animate-float absolute top-6 left-2 sm:left-6 bg-white border border-fog rounded-2xl px-md py-sm shadow-md flex items-center gap-sm"
                style={{ animationDelay: "0s" }}>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-body-sm font-bold text-ink leading-none">5 Articles</p>
                  <p className="text-eyebrow text-slate">Published this month</p>
                </div>
              </div>

              {/* Floating card — top right */}
              <div className="animate-float absolute top-10 right-2 sm:right-6 bg-white border border-fog rounded-2xl px-md py-sm shadow-md flex items-center gap-sm"
                style={{ animationDelay: "0.7s" }}>
                <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-[#00D4FF]" />
                </div>
                <div>
                  <p className="text-body-sm font-bold text-ink leading-none">AI + SEO</p>
                  <p className="text-eyebrow text-slate">Topics covered</p>
                </div>
              </div>

              {/* Floating card — bottom left */}
              <div className="animate-float absolute bottom-10 left-2 sm:left-6 bg-white border border-fog rounded-2xl px-md py-sm shadow-md flex items-center gap-sm"
                style={{ animationDelay: "1.3s" }}>
                <div className="w-8 h-8 rounded-lg bg-mint/15 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-mint" />
                </div>
                <div>
                  <p className="text-body-sm font-bold text-ink leading-none">+3.4× Growth</p>
                  <p className="text-eyebrow text-slate">Avg. client result</p>
                </div>
              </div>

              {/* Floating card — bottom right */}
              <div className="animate-float absolute bottom-6 right-2 sm:right-6 bg-white border border-fog rounded-2xl px-md py-sm shadow-md flex items-center gap-sm"
                style={{ animationDelay: "0.3s" }}>
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-body-sm font-bold text-ink leading-none">6 min avg</p>
                  <p className="text-eyebrow text-slate">Reading time</p>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-1/2 left-1 -translate-y-1/2 flex flex-col gap-sm opacity-25">
                {[...Array(5)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />)}
              </div>
              <div className="absolute top-1/2 right-1 -translate-y-1/2 flex flex-col gap-sm opacity-25">
                {[...Array(5)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured post ────────────────────────────────────────── */}
      <section className="py-xxl px-lg bg-snow" id="articles">
        <div className="max-w-container-max mx-auto">
          <p className="text-eyebrow text-slate mb-lg">FEATURED</p>

          <Link
            href={`/blog/${featured.slug}`}
            className="reveal block bg-white border border-fog rounded-3xl overflow-hidden"
          >
            <div className="grid md:grid-cols-[280px_1fr]">

              {/* Left accent panel — image + shade */}
              <div className="relative flex flex-col justify-between p-xl min-h-[220px] md:min-h-0 overflow-hidden">
                {/* Background photo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Purple shade overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(123,69,245,0.88) 0%, rgba(85,32,212,0.92) 100%)" }}
                />
                {/* Dot grid on top of shade */}
                <div
                  className="absolute inset-0 opacity-[0.10]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Large faded number */}
                <span className="absolute bottom-0 right-0 text-[120px] font-bold leading-none text-white/[0.07] select-none pr-md">
                  01
                </span>

                <div className="relative z-10">
                  <span className="inline-block text-eyebrow bg-white/20 text-white px-md py-xs rounded-full mb-xl">
                    {featured.tag}
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-xs text-eyebrow text-white/60 mb-xs">
                    <Clock className="w-3 h-3" />
                    {featured.readTime}
                  </div>
                  <p className="text-eyebrow text-white/40">{featured.date}</p>
                </div>
              </div>

              {/* Right content */}
              <div className="flex flex-col justify-between p-xl md:p-xxl">
                <div>
                  <h2 className="text-h2 text-ink mb-lg leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-body text-slate leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-xl pt-lg border-t border-fog">
                  <span className="text-eyebrow text-slate">BrandLevo Insights</span>
                  <span className="inline-flex items-center gap-sm bg-primary text-white px-lg py-[9px] rounded-full text-body-sm font-semibold shadow-sm">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

            </div>
          </Link>
        </div>
      </section>

      {/* ── Post grid ────────────────────────────────────────────── */}
      <section className="py-xxl px-lg bg-snow">
        <div className="max-w-container-max mx-auto">
          <p className="text-eyebrow text-slate mb-xl">
            ALL ARTICLES
            <span className="ml-sm text-fog">· {posts.length}</span>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`reveal stagger-${Math.min(i + 1, 5)} flex flex-col bg-white border border-fog rounded-2xl overflow-hidden`}
              >
                <div className={`h-[3px] w-full ${post.bar}`} />
                <div className="p-xl flex flex-col flex-1">
                  <span className={`self-start text-eyebrow px-sm py-[3px] rounded-md mb-lg ${post.accent}`}>
                    {post.tag}
                  </span>
                  <h3 className="text-h4 text-ink mb-md leading-snug flex-1">
                    {post.title}
                  </h3>
                  <p className="text-body-sm text-slate leading-relaxed mb-xl line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-lg border-t border-fog">
                    <div className="flex items-center gap-md text-eyebrow text-slate">
                      <span className="flex items-center gap-xs">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <span className="w-7 h-7 rounded-full border border-fog flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-slate" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────────────── */}
      <section
        id="newsletter"
        className="py-xxxl px-lg"
        style={{ background: "radial-gradient(ellipse at 60% 50%, #EDE5FF 0%, #F9F8FF 60%, #fff 100%)" }}
      >
        <div className="max-w-container-max mx-auto">
          <div className="reveal-scale max-w-xl mx-auto text-center">
            <span className="text-eyebrow text-primary block mb-md">WEEKLY TIP</span>
            <h2 className="text-h2 text-ink mb-sm">One tip. Every week. Free.</h2>
            <p className="text-body text-slate mb-xl">
              Actionable — not waffle. Use it the same day you read it.
            </p>
            <div className="flex gap-xs max-w-sm mx-auto mb-md">
              <input
                type="email"
                placeholder="you@yourbusiness.com"
                className="flex-1 min-w-0 bg-white border border-fog rounded-full px-lg py-[9px] text-body-sm text-ink placeholder:text-slate/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="shrink-0 bg-primary text-white px-lg py-[9px] rounded-full text-body-sm font-semibold hover:opacity-90 hover:-translate-y-px transition-all active:scale-95 shadow-sm">
                Subscribe
              </button>
            </div>
            <p className="text-eyebrow text-slate/60">No spam · Unsubscribe any time</p>
          </div>
        </div>
      </section>

    </main>
  );
}
