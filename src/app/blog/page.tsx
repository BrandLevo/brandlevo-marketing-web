import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { featuredArticle, listedArticles, allArticles } from "@/lib/articles";
import { collectionPageSchema, schemaScript } from "@/lib/schema";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Blog | BrandLevo",
  description:
    "Practical AEO, SEO, and web design insights for local businesses in Kochi and Kerala. No agency waffle — actionable the same day you read it.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const featured = featuredArticle;
  const posts = listedArticles;
  const schema = collectionPageSchema(
    "BrandLevo Blog — Digital Marketing Insights for Local Businesses",
    "Practical AEO, SEO, web design, and brand strategy articles for local business owners.",
    "https://brandlevo.com/blog"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaScript(schema) }}
      />
      <main>

        <PageHero
          eyebrow="INSIGHTS"
          title="Straight Talk on"
          titleAccent="Digital Growth."
          body="No agency waffle. Every post answers a real question from local business owners — actionable the same day you read it."
          cta={{ label: "Browse Articles", href: "#articles" }}
          secondaryCta={{ label: "Get weekly tips", href: "#newsletter" }}
          stats={[
            { value: `${allArticles.length}`, label: "Articles published" },
            { value: "6 min", label: "Avg. read time" },
            { value: "AEO + SEO", label: "Core topics" },
            { value: "Free", label: "Always" },
          ]}
          variant="dark"
        />

        {/* Featured post */}
        <section className="py-xxl px-lg bg-snow" id="articles">
          <div className="max-w-container-max mx-auto">
            <p className="text-eyebrow text-primary mb-lg">FEATURED</p>

            <Link
              href={`/blog/${featured.slug}`}
              className="reveal group block bg-white border border-fog rounded-3xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div className="grid md:grid-cols-[300px_1fr]">

                {/* Left accent panel */}
                <div className="relative flex flex-col justify-between p-xl min-h-[220px] md:min-h-0 overflow-hidden bg-ink">
                  <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-primary rounded-full opacity-20 blur-3xl pointer-events-none" />

                  <div className="relative z-10">
                    <span className="inline-block text-eyebrow bg-primary text-white px-md py-xs rounded-full">
                      {featured.tag}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-xs text-eyebrow text-white/50 mb-xs">
                      <Clock className="w-3 h-3" />
                      {featured.readTime}
                    </div>
                    <p className="text-eyebrow text-white/40">{featured.date}</p>
                  </div>
                </div>

                {/* Right content */}
                <div className="flex flex-col justify-between p-xl md:p-xxl">
                  <div>
                    <h2 className="text-h2 text-ink mb-lg leading-tight group-hover:text-primary transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-body text-slate leading-relaxed">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-xl pt-lg border-t border-fog">
                    <span className="text-eyebrow text-slate">BrandLevo Insights</span>
                    <span className="inline-flex items-center gap-sm bg-primary text-white px-lg py-sm rounded-full text-body-sm font-semibold">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          </div>
        </section>

        {/* All articles grid */}
        <section className="pb-xxxl px-lg bg-snow">
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
                  className={`reveal stagger-${Math.min(i + 1, 5)} group flex flex-col bg-white border border-fog rounded-2xl overflow-hidden hover:border-primary/30 transition-colors`}
                >
                  <div className={`h-[3px] w-full ${post.bar}`} />
                  <div className="p-xl flex flex-col flex-1">
                    <span className={`self-start text-eyebrow px-sm py-[3px] rounded-md mb-lg ${post.accent}`}>
                      {post.tag}
                    </span>
                    <h3 className="text-h4 text-ink mb-md leading-snug flex-1 group-hover:text-primary transition-colors">
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
                      <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section id="newsletter" className="py-xxxl px-lg bg-snow">
          <div className="max-w-container-max mx-auto bg-ink rounded-3xl p-xl md:p-xxxl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-primary rounded-full opacity-20 blur-3xl pointer-events-none" />
            <div className="absolute -left-10 -top-10 w-[200px] h-[200px] bg-purple-dark rounded-full opacity-30 blur-2xl pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-2 gap-xxl items-center">
              <div>
                <span className="text-eyebrow text-white/50 block mb-md">WEEKLY TIP</span>
                <h2 className="text-h2 text-white mb-md leading-tight">
                  One tip. Every week.{" "}
                  <span className="text-primary italic">Free.</span>
                </h2>
                <p className="text-body-lg text-white/70 leading-relaxed">
                  Actionable — not waffle. Use it the same day you read it. No spam, unsubscribe any time.
                </p>
              </div>

              <div className="bg-surface border border-white/10 rounded-2xl p-xl">
                <p className="text-body-sm text-white font-semibold mb-lg">Get the weekly tip</p>
                <div className="flex flex-col sm:flex-row gap-sm">
                  <input
                    type="email"
                    aria-label="Email address for weekly tips"
                    placeholder="you@yourbusiness.com"
                    className="flex-1 min-w-0 bg-white/10 border border-white/20 rounded-full px-lg py-sm text-body-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary transition-colors"
                  />
                  <button className="shrink-0 bg-primary text-white px-lg py-sm rounded-full text-body-sm font-semibold hover:opacity-90 transition-all active:scale-95">
                    Subscribe
                  </button>
                </div>
                <p className="text-eyebrow text-white/30 mt-md">No spam · Unsubscribe any time</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
