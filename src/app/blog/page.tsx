import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | BrandLevo",
  description:
    "Straight talk on local SEO, web design, AEO, and digital marketing for small businesses. No fluff, no jargon.",
};

const featured = {
  tag: "LOCAL SEO",
  title: "Why Your Google Reviews Aren't Enough to Win Online",
  excerpt:
    "You've got 4.9 stars and 200 reviews. Customers love you. So why is the phone still quiet on Tuesdays? The problem isn't your reputation — it's your visibility. Here's the gap most local businesses don't see until it's too late.",
  readTime: "6 min read",
  date: "April 2025",
  slug: "google-reviews-not-enough",
};

const posts = [
  {
    tag: "AEO",
    title: "AEO: The New SEO Your Competitors Don't Know About Yet",
    excerpt:
      "ChatGPT, Perplexity, and Google's AI Overviews are sending traffic to one business per category. That business isn't chosen by who ranks #1 — it's chosen by who answers questions best. Here's how to be that business.",
    readTime: "8 min read",
    date: "March 2025",
    slug: "aeo-new-seo",
  },
  {
    tag: "WEB DESIGN",
    title: "What Makes a Local Business Website Actually Convert",
    excerpt:
      "Most local business websites convert at under 1%. That means 99 out of 100 visitors leave without calling. The fix isn't a redesign — it's five specific changes most developers never make.",
    readTime: "5 min read",
    date: "March 2025",
    slug: "local-business-website-convert",
  },
  {
    tag: "GOOGLE BUSINESS",
    title: "The Google Business Profile Mistakes Costing Local Businesses Customers Every Day",
    excerpt:
      "An incomplete or poorly-managed GBP profile is invisible to local searchers. Seven specific errors — and exactly how to fix them in an afternoon.",
    readTime: "7 min read",
    date: "February 2025",
    slug: "google-business-profile-mistakes",
  },
  {
    tag: "LOCAL SEO",
    title: "How Local Citations Work (And Why Inconsistency Tanks Your Rankings)",
    excerpt:
      "Your business name, address, and phone number appear in hundreds of places online. If they don't match, Google doesn't trust you — and neither do the maps. A plain-English guide to fixing it.",
    readTime: "5 min read",
    date: "February 2025",
    slug: "local-citations-guide",
  },
  {
    tag: "STRATEGY",
    title: "The 90-Day Digital Blueprint for New Local Businesses",
    excerpt:
      "Month one: get found. Month two: get trusted. Month three: get booked. A week-by-week action plan for any local business starting from scratch online.",
    readTime: "10 min read",
    date: "January 2025",
    slug: "90-day-digital-blueprint",
  },
];

const categories = ["All", "Local SEO", "AEO", "Web Design", "Google Business", "Strategy", "Content"];

export default function BlogPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-snow py-xxl px-lg border-b border-fog">
        <div className="max-w-container-max mx-auto">
          <span className="text-eyebrow text-primary block mb-md">BLOG</span>
          <h1 className="text-h1 text-ink mb-lg max-w-2xl">
            Straight Talk on{" "}
            <span className="text-primary italic">Digital Growth.</span>
          </h1>
          <p className="text-body-lg text-slate max-w-xl">
            No agency waffle. No content-for-content&apos;s-sake. Every post answers a question a real local business owner asked us.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="bg-white border-b border-fog px-lg py-md">
        <div className="max-w-container-max mx-auto flex gap-sm flex-wrap">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`text-eyebrow px-md py-xs rounded-full border transition-colors ${
                i === 0
                  ? "bg-primary text-white border-primary"
                  : "text-slate border-fog hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured post */}
      <section className="py-xxl px-lg bg-white">
        <div className="max-w-container-max mx-auto">
          <p className="text-eyebrow text-slate mb-lg">FEATURED</p>
          <div className="bg-primary rounded-2xl p-xl md:p-xxl grid md:grid-cols-2 gap-xl items-center">
            <div>
              <span className="inline-block text-eyebrow bg-white/20 text-white px-md py-xs rounded-full mb-lg">
                {featured.tag}
              </span>
              <h2 className="text-h2 text-white mb-lg">{featured.title}</h2>
              <p className="text-body text-white/70 mb-xl leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-lg">
                <span className="flex items-center gap-xs text-eyebrow text-white/50">
                  <Clock className="w-3 h-3" />
                  {featured.readTime}
                </span>
                <span className="text-eyebrow text-white/50">{featured.date}</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-sm bg-white text-primary px-xl py-md rounded-full font-bold hover:bg-snow transition-all"
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-xxl px-lg bg-snow">
        <div className="max-w-container-max mx-auto">
          <p className="text-eyebrow text-slate mb-xl">ALL ARTICLES</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-fog rounded-2xl p-xl flex flex-col hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-sm mb-lg">
                  <Tag className="w-3 h-3 text-primary" />
                  <span className="text-eyebrow text-primary">{post.tag}</span>
                </div>
                <h3 className="text-h4 text-ink mb-md group-hover:text-primary transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="text-body-sm text-slate leading-relaxed mb-xl">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-md text-eyebrow text-slate">
                    <span className="flex items-center gap-xs">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-body-sm font-semibold text-primary hover:underline flex items-center gap-xs"
                  >
                    Read <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-xxl px-lg bg-white border-t border-fog">
        <div className="max-w-container-max mx-auto max-w-2xl text-center">
          <span className="text-eyebrow text-primary block mb-md">WEEKLY TIP</span>
          <h2 className="text-h3 text-ink mb-md">One local marketing tip. Every week. Free.</h2>
          <p className="text-body text-slate mb-xl">
            No newsletters that are really sales emails. One actionable tip you can use in your business the same day.
          </p>
          <div className="flex gap-sm max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 min-w-0 bg-snow border border-fog rounded-full px-lg py-md text-body text-ink placeholder:text-slate/50 focus:outline-none focus:border-primary/60 transition-colors"
            />
            <button className="shrink-0 bg-primary text-white px-xl py-md rounded-full font-semibold hover:opacity-90 transition-all">
              Subscribe
            </button>
          </div>
          <p className="text-eyebrow text-slate mt-md">No spam. Unsubscribe any time.</p>
        </div>
      </section>
    </main>
  );
}
