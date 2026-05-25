import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, ChevronRight, ArrowRight } from "lucide-react";
import { allArticles, getArticleBySlug } from "@/lib/articles";
import {
  articleSchema,
  faqSchema,
  breadcrumbSchema,
  schemaScript,
} from "@/lib/schema";

// ── Content components — one file per article ────────────────────────────────
import GoogleReviewsContent from "@/content/google-reviews-not-enough";
import AeoNewSeoContent from "@/content/aeo-new-seo";
import WebsiteConvertContent from "@/content/local-business-website-convert";
import GbpMistakesContent from "@/content/google-business-profile-mistakes";
import LocalCitationsContent from "@/content/local-citations-guide";
import Blueprint90Content from "@/content/90-day-digital-blueprint";
import WhatIsAeoContent from "@/content/what-is-answer-engine-optimization";
import AiSearchVisibilityContent from "@/content/local-business-ai-search-visibility";
import SchemaMarcupContent from "@/content/schema-markup-local-business-guide";
import WebsiteCostContent from "@/content/local-business-website-cost-2026";
import AeoVsSeoContent from "@/content/aeo-vs-seo-differences";

const contentMap: Record<string, React.ComponentType> = {
  "google-reviews-not-enough": GoogleReviewsContent,
  "aeo-new-seo": AeoNewSeoContent,
  "local-business-website-convert": WebsiteConvertContent,
  "google-business-profile-mistakes": GbpMistakesContent,
  "local-citations-guide": LocalCitationsContent,
  "90-day-digital-blueprint": Blueprint90Content,
  "what-is-answer-engine-optimization": WhatIsAeoContent,
  "local-business-ai-search-visibility": AiSearchVisibilityContent,
  "schema-markup-local-business-guide": SchemaMarcupContent,
  "local-business-website-cost-2026": WebsiteCostContent,
  "aeo-vs-seo-differences": AeoVsSeoContent,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      url: `https://brandlevo.com/blog/${article.slug}`,
      publishedTime: article.dateISO,
      authors: [article.authorName],
      images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
      images: ["/og-default.jpg"],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const ArticleContent = contentMap[slug];
  if (!ArticleContent) notFound();

  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug)
    .filter((a) => a.tag === article.tag)
    .slice(0, 3)
    .concat(allArticles.filter((a) => a.slug !== slug && a.tag !== article.tag))
    .slice(0, 3);

  const articleJson = articleSchema({
    slug: article.slug,
    title: article.title,
    excerpt: article.metaDescription,
    date: article.dateISO,
    tag: article.tag,
    authorName: article.authorName,
    authorUrl: article.authorUrl,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaScript(articleJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaScript(faqSchema(article.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaScript(breadcrumbSchema([
        { name: "Home", item: "https://brandlevo.com" },
        { name: "Blog", item: "https://brandlevo.com/blog" },
        { name: article.title, item: `https://brandlevo.com/blog/${article.slug}` },
      ])) }} />

      <main>
        {/* Breadcrumb */}
        <nav className="bg-ink border-b border-white/10 px-lg py-sm" aria-label="Breadcrumb">
          <div className="max-w-container-max mx-auto flex items-center gap-xs text-eyebrow text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70 truncate max-w-[200px] sm:max-w-none">{article.title}</span>
          </div>
        </nav>

        {/* Article header — dark, consistent with page heroes */}
        <header className="relative overflow-hidden bg-ink pt-xxl sm:pt-xxxl pb-xl sm:pb-xxl px-lg">
          <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-primary rounded-full opacity-10 blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-[200px] h-[200px] bg-purple-dark rounded-full opacity-15 blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-md mb-xl">
              <span className="inline-block text-eyebrow bg-primary text-white px-md py-xs rounded-full font-semibold">
                {article.tag}
              </span>
              <span className="flex items-center gap-xs text-eyebrow text-white/50">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span className="text-eyebrow text-white/40">{article.date}</span>
            </div>
            <h1 className="hero-title text-[clamp(32px,4.5vw,60px)] font-extrabold tracking-tight leading-tight font-display text-white mb-lg">
              {article.title}
            </h1>
            <p className="hero-body text-body-lg text-white/70 leading-relaxed mb-xl max-w-2xl">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-sm text-eyebrow text-white/40">
              <span>By {article.authorName}</span>
            </div>
          </div>
        </header>

        {/* Article body */}
        <article className="py-xxl px-lg bg-white">
          <div className="max-w-4xl mx-auto">
            <ArticleContent />
          </div>
        </article>

        {/* FAQ section */}
        {article.faqs.length > 0 && (
          <section className="py-xxl px-lg bg-snow border-t border-fog">
            <div className="max-w-4xl mx-auto">
              <span className="text-eyebrow text-primary block mb-md">FAQ</span>
              <h2 className="text-h3 text-ink mb-xl">Frequently Asked Questions</h2>
              <div className="divide-y divide-fog">
                {article.faqs.map((faq) => (
                  <details key={faq.q} className="group py-lg cursor-pointer">
                    <summary className="flex justify-between items-center gap-lg list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg">
                      <span className="text-h4 text-ink group-open:text-primary transition-colors">
                        {faq.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="shrink-0 w-8 h-8 rounded-full bg-purple-xpale flex items-center justify-center text-primary font-bold text-lg group-open:bg-primary group-open:text-white transition-all"
                      >
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:block">−</span>
                      </span>
                    </summary>
                    <p className="text-body text-slate mt-md leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <section className="py-xxxl px-lg bg-white border-t border-fog">
            <div className="max-w-container-max mx-auto">
              <span className="text-eyebrow text-primary block mb-md">KEEP READING</span>
              <h2 className="text-h3 text-ink mb-xxl">More from the BrandLevo Blog</h2>
              <div className="grid md:grid-cols-3 gap-lg">
                {relatedArticles.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col bg-snow border border-fog rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
                  >
                    <div className={`h-[3px] w-full ${post.bar}`} />
                    <div className="p-xl flex flex-col flex-1">
                      <span className={`self-start text-eyebrow px-sm py-[3px] rounded-md mb-lg ${post.accent}`}>
                        {post.tag}
                      </span>
                      <h3 className="text-h4 text-ink mb-md leading-snug flex-1 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center justify-between pt-lg border-t border-fog mt-auto">
                        <div className="flex items-center gap-xs text-eyebrow text-slate">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
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
        )}

        {/* CTA — matches bg-ink card pattern used across the site */}
        <section className="py-xxxl px-lg bg-snow">
          <div className="max-w-container-max mx-auto bg-ink rounded-3xl p-xl md:p-xxxl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-primary rounded-full opacity-20 blur-3xl pointer-events-none" />
            <div className="absolute -left-10 -top-10 w-[200px] h-[200px] bg-purple-dark rounded-full opacity-30 blur-2xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-xl">
              <div>
                <span className="text-eyebrow text-white/50 block mb-md">YOUR TURN</span>
                <h2 className="text-h2 text-white mb-md leading-tight">
                  Ready to implement this for your business?
                </h2>
                <p className="text-body-lg text-white/70 max-w-lg leading-relaxed">
                  Book a free 20-minute audit call. We review your website and Google ranking live — then hand you a clear action plan. No pitch. No obligation.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 animate-pulse-ring inline-flex items-center gap-sm bg-primary text-white px-xl py-md rounded-full font-bold hover:opacity-90 transition-all shadow-lg"
              >
                Book a Free Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Back to blog */}
        <div className="py-lg px-lg bg-snow border-t border-fog">
          <div className="max-w-container-max mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-sm text-body-sm text-slate hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
