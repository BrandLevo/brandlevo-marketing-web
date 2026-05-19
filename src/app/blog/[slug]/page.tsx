import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, ChevronRight } from "lucide-react";
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
        <nav className="bg-snow border-b border-fog px-lg py-sm" aria-label="Breadcrumb">
          <div className="max-w-container-max mx-auto flex items-center gap-xs text-eyebrow text-slate">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-ink truncate max-w-[200px] sm:max-w-none">{article.title}</span>
          </div>
        </nav>

        {/* Article header */}
        <header className="py-xxl px-lg bg-white border-b border-fog">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-md mb-xl">
              <span className={`inline-block text-eyebrow px-sm py-[3px] rounded-md ${article.accent}`}>
                {article.tag}
              </span>
              <span className="flex items-center gap-xs text-eyebrow text-slate">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
            <h1 className="text-h1 text-ink mb-lg leading-tight">{article.title}</h1>
            <p className="text-body-lg text-slate leading-relaxed mb-xl">{article.excerpt}</p>
            <div className="flex flex-wrap items-center gap-sm text-eyebrow text-slate">
              <span>{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-fog" aria-hidden="true" />
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

        {/* CTA */}
        <section className="py-xxl px-lg bg-primary">
          <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-xl">
            <div>
              <h2 className="text-h3 text-white mb-sm">Ready to implement this for your business?</h2>
              <p className="text-body text-white/70">
                Book a free 20-minute Brand Audit. We&apos;ll review your current digital presence and tell you exactly what to do first.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-sm bg-white text-primary px-xl py-md rounded-full font-bold hover:bg-snow transition-all"
            >
              Book a Free Brand Audit
            </Link>
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
