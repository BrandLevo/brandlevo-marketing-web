# AEO Implementation Plan — BrandLevo (brandlevo.com)

## Context

BrandLevo is a Next.js 16.2.4 (App Router) digital marketing agency that **sells AEO as a service** but has not yet implemented AEO on its own site. Implementing this correctly transforms the site into a live proof-of-concept — the agency that teaches AEO, ranked by AI for AEO queries.

**Site URL:** `https://brandlevo.com`
**Framework:** Next.js 16.2.4 (App Router, static export)
**Target queries to appear in Google AI Overview:**
- "what is answer engine optimization"
- "AEO vs SEO"
- "how to get found on ChatGPT for local business"
- "best digital marketing agency for local business"
- "how much does a local business website cost"

---

## Part 1 — Current Gaps (What Exists vs What's Missing)

### Technical SEO — Missing
| Item | Status | Impact |
|---|---|---|
| `robots.txt` | ❌ Missing | Crawlers have no guidance |
| `sitemap.xml` | ❌ Missing | Pages may not be fully indexed |
| `metadataBase` in layout.tsx | ❌ Missing | og:image URLs are broken (relative paths fail) |
| `og:image` on any page | ❌ Missing | No image when shared on social/AI |
| Twitter card meta | ❌ Missing | Poor social preview |
| Canonical tags | ❌ Missing | Duplicate content risk |
| Google Search Console verification | ❌ Missing | Can't track AI Overview appearances |

### Schema Markup — Completely Missing
| Schema Type | Page | Status |
|---|---|---|
| Organization | Homepage, About | ❌ None |
| FAQPage | Homepage, Services, Contact | ❌ None |
| Article | Individual blog posts | ❌ None (pages don't exist) |
| LocalBusiness | Contact | ❌ None |
| Service | Services page | ❌ None |
| BreadcrumbList | All pages | ❌ None |
| Person | About page team | ❌ None |
| CollectionPage | Blog listing | ❌ None |

### Blog — Broken
| Item | Status |
|---|---|
| Blog listing page `/blog` | ✅ Exists |
| Individual article pages `/blog/[slug]` | ❌ **Do not exist — all 6 article links give 404** |
| Articles follow AEO Answer Capsule format | ❌ Articles are just title + excerpt, no full content |
| FAQPage schema per article | ❌ Missing |
| Author attribution in articles | ❌ Missing — articles show "BrandLevo Insights" only |

### Content — Missing AEO Structure
| Item | Status |
|---|---|
| Answer Capsule (40–60 word direct answer after each H2) | ❌ No individual article pages exist |
| FAQ sections on Services page | ❌ Services page has no FAQ |
| FAQ sections on About page | ❌ Missing |

---

## Part 2 — Pre-Production Placeholder Checklist

> **Before going live, replace every item below. Search the codebase for these strings to find them.**

### 🔴 Critical Placeholders (Broken Without These)

| Placeholder | File | What to Replace With |
|---|---|---|
| `+1 (555) 123-4567` | `src/app/contact/page.tsx` lines 129, 141 | Real phone number |
| `https://wa.me/15551234567` | `src/app/contact/page.tsx` line 141 | Real WhatsApp link using real number |
| `https://calendly.com` | `src/app/contact/page.tsx` line 108 | Real Calendly booking link |
| `https://calendly.com/brandlevo/free-discovery` | `src/app/contact/page.tsx` line 65 | Real Calendly link |
| `YOUR_GSC_VERIFICATION_CODE` | `src/app/layout.tsx` (to be added) | Google Search Console HTML tag value |

### 🟡 Content Placeholders (Trust Killers if Left)

| Placeholder | Location | Action Required |
|---|---|---|
| Team last names (James **R.**, Sara **C.**, Tom **N.**, Aisha **M.**) | `src/app/about/page.tsx` | Decide: use full names or keep initials intentionally |
| Team member photos | `src/app/about/page.tsx` | Replace colored initial circles with real headshots (or keep initials by design) |
| Article author name | `src/lib/articles.ts` (to be created) | Set real author name — currently shows "BrandLevo Insights" |
| `og-default.jpg` | `/public/` (to be added) | Create a real 1200×630 branded OG image |
| `"Next slot available within 48 hours"` | `src/app/contact/page.tsx` | Update or make dynamic; currently always shows this |

### 🟠 Outdated Content (Must Fix Before Launch)

| Issue | Location | Fix |
|---|---|---|
| `"Full case studies coming Q3 2025"` | `src/app/case-studies/page.tsx` | Update to "coming Q1 2027" or publish real case studies |
| `"5 Articles Published this month"` | `src/app/blog/page.tsx` line 139 | This is hardcoded and always wrong — make it show actual article count |
| Blog article count in floating card | `src/app/blog/page.tsx` | Change to `{posts.length} Articles` dynamically |

### 🟢 Verify These Are Real (Not Placeholder)

| Item | Location | Action |
|---|---|---|
| `hello@brandlevo.com` | `src/app/contact/page.tsx` | Confirm this mailbox is live and monitored |
| Testimonial names (Priya Shah, Marcus Reilly, Linda Okafor, Daniel Hartmann) | `src/components/testimonials-section.tsx` | Confirm these are real clients, not generated names — AI tools may flag fake reviews |
| Stats (80+ brands, 3.4×, 4.9★) | Multiple components | Confirm these are verifiable — AI engines assess credibility of claims |
| Founded 2019, milestones | `src/app/about/page.tsx` | Confirm accuracy — AI engines cross-reference founding dates |

---

## Part 3 — Website Copy Audit: Does It Sell?

### What Works Well ✅

**Hero Section** — Strong. "Your Brand. Found Everywhere. Growing on Autopilot." is clear, benefit-led, and specific. Trust badges (no contracts, 14 days, AI-native) are well placed below the CTA. Stats strip (80+, 3.4×, 4.9★, 14 days) is concrete.

**Services Section** — Excellent. Each service has a clear outcome (`"Clients appear in AI-generated answers for 20–40 local queries within 6 months"`) and a timeline. This level of specificity builds trust and is AEO-friendly.

**Testimonials** — Good results specificity (+340%, 44% close rate, 3×, 2×). Quotes are believable and specific. Main weakness: only colored initials, no photos — reduces authenticity.

**FAQ Section** — Very strong objection handling. Covers pricing, contracts, timeline, technical know-how, and geography. Well written. Should be the first thing to get FAQPage schema.

**Contact Page** — The "3 steps" format and "no hard sell" promise work well. Lowering friction is the right approach.

**About Page** — The founder story (dad losing electrical jobs to competitors) is genuinely compelling and differentiating. Keep this.

---

### What Needs Fixing ⚠️

| Issue | Location | Recommended Fix |
|---|---|---|
| CTA inconsistency — Hero says "Get Your Free Brand Audit", Contact says "Book a Free Call", Services says "Book a Free Brand Audit" | Multiple pages | Pick one phrase sitewide: **"Book a Free Brand Audit"** |
| Services page has no FAQ section | `src/app/services/page.tsx` | Add 5 service-specific Q&As with FAQPage schema |
| Blog articles all 404 on click | `/blog/[slug]` routes missing | Build individual article pages (Phase 3) |
| Newsletter form is decorative (no backend) | `src/app/blog/page.tsx` | Wire to Mailchimp / ConvertKit, or replace with Calendly CTA |
| Contact form submits nowhere | `src/app/contact/page.tsx` | Wire to Formspree / Resend / custom API route |
| "WHAT TO EXPECT" heading used twice on contact page | `src/app/contact/page.tsx` lines 73, 156 | Change second one to "WHAT HAPPENS NEXT" |
| No social links visible (only in footer) | Global | Add LinkedIn/Twitter to About page team section |
| Case studies page has no real content | `src/app/case-studies/page.tsx` | Expand testimonials into mini case study format with before/after |

---

## Part 4 — AEO Implementation Steps

### Phase 1 — Technical Foundation

**New file:** `/public/robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://brandlevo.com/sitemap.xml
```

**New file:** `/src/app/sitemap.ts`
Export a function with all static routes + all article slugs. Set `priority: 1.0` for homepage, `0.9` for services/blog, `0.8` for individual articles.

**Modify:** `/src/app/layout.tsx`
```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://brandlevo.com"),
  // add:
  verification: { google: "REPLACE_WITH_GSC_CODE" },
  openGraph: {
    // add:
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
    siteName: "BrandLevo",
  },
  twitter: { card: "summary_large_image" },
};
```

Add `alternates: { canonical: "/page-path" }` to each page's `export const metadata`.

---

### Phase 2 — Schema Markup

**New file:** `/src/lib/schema.ts`

Reusable builder functions:
- `organizationSchema()` — includes name, url, logo, sameAs (social profiles), contactPoint
- `faqSchema(faqs: {q: string, a: string}[])` — FAQPage
- `articleSchema(post: Article)` — Article with author, datePublished, publisher
- `localBusinessSchema()` — LocalBusiness with address, phone, email
- `breadcrumbSchema(items: {name, url}[])` — BreadcrumbList
- `serviceSchema(service)` — Service with name, description, provider

**New file:** `/src/lib/faq-data.ts`

Move the `faqs` array out of `src/components/faq-section.tsx` into this file so both the component and the schema builder can import the same data without duplication.

**Schema injection per page:**

| Page | File | Schemas |
|---|---|---|
| Homepage | `src/app/page.tsx` | Organization + FAQPage (9 existing FAQs) |
| Services | `src/app/services/page.tsx` | 8× Service + HowTo + FAQPage (new service FAQs) |
| Pricing | `src/app/pricing/page.tsx` | FAQPage |
| Blog listing | `src/app/blog/page.tsx` | CollectionPage |
| Blog article | `src/app/blog/[slug]/page.tsx` | Article + FAQPage + BreadcrumbList |
| About | `src/app/about/page.tsx` | Organization + 4× Person |
| Contact | `src/app/contact/page.tsx` | LocalBusiness + FAQPage (4 contact FAQs) |

---

### Phase 3 — Blog Individual Article Pages

**New file:** `/src/lib/articles.ts`

Single source of truth. Article type:
```ts
type Article = {
  slug: string;
  tag: string;
  accent: string;      // Tailwind classes for color
  bar: string;         // Tailwind class for top bar color
  title: string;
  excerpt: string;
  readTime: string;
  date: string;        // Display: "April 2025"
  dateISO: string;     // Schema: "2025-04-01"
  metaDescription: string;
  author: string;      // PLACEHOLDER — replace with real author name
  content: string;     // Full HTML body using Answer Capsule format
  faqs: { q: string; a: string }[];
}
```

**Author placeholder:** Set `author: "PLACEHOLDER_AUTHOR_NAME"` in every article until the real author name is confirmed. Add a comment: `// TODO: Replace with real author name before launch`

**New file:** `/src/app/blog/[slug]/page.tsx`
- `generateStaticParams()` — all article slugs (enables static export)
- `generateMetadata({ params })` — dynamic title, description, og:image, canonical
- Page renders article with Answer Capsule format + per-article FAQ section
- Injects Article schema + FAQPage schema + BreadcrumbList schema

**Modify:** `/src/app/blog/page.tsx`
- Import `posts`, `featured` from `articles.ts` instead of hardcoding
- Fix floating card: change `"5 Articles"` to `{posts.length + 1} Articles` (posts + featured)

---

### Phase 4 — Answer Capsule Content (Services Page)

**Modify:** `/src/app/services/page.tsx`

Add a 40–60 word direct answer block immediately after each service `h2`. Example for AEO:

> **Answer Engine Optimization (AEO)** is the practice of restructuring your website content and digital presence so AI tools — ChatGPT, Perplexity, and Google AI Overviews — cite your business as the trusted answer when customers ask questions in your category.

Add a new FAQ section at the bottom of the services page (5 Q&As targeting service-intent queries), with FAQPage JSON-LD schema.

---

### Phase 5 — New AEO-Structured Articles (5 Full Articles)

All written in Answer Capsule format (40–60 word direct answer after every H2), with Article schema and per-article FAQ section (min 4 Q&As), targeting queries that trigger Google AI Overviews.

| # | Title | Slug | Target Query |
|---|---|---|---|
| 1 | What Is Answer Engine Optimization? A Complete Guide for Local Businesses | `what-is-answer-engine-optimization` | "what is AEO" / "what is answer engine optimization" |
| 2 | How to Get Your Local Business Found on ChatGPT, Perplexity & Google AI | `local-business-ai-search-visibility` | "how to get found on ChatGPT" / "local business AI search" |
| 3 | Schema Markup for Local Businesses: The Step-by-Step Guide | `schema-markup-local-business-guide` | "how to add schema markup to my website" |
| 4 | How Much Does a Local Business Website Cost in 2026? | `local-business-website-cost-2026` | "how much does a website cost" / "small business website pricing" |
| 5 | AEO vs SEO: What's the Difference and Which Does Your Business Need? | `aeo-vs-seo-differences` | "AEO vs SEO" / "difference between AEO and SEO" |

Each article: ~1,200–1,800 words, `author: "PLACEHOLDER_AUTHOR_NAME"`, `datePublished: "2026-05-19"`.

---

### Phase 6 — Monitoring Setup

After deployment, set up:

1. **Google Search Console** — Add site, verify via meta tag, submit sitemap (`https://brandlevo.com/sitemap.xml`)
2. **Google Rich Results Test** — Test every page's schema: `https://search.google.com/test/rich-results`
3. **Schema Markup Validator** — `https://validator.schema.org/`
4. **Weekly manual test** — Search target queries on Google, check if AI Overview cites brandlevo.com
5. **Sitechecker AI Overview Checker** — `https://sitechecker.pro/google-ai-overview/`
6. **Semrush AI Visibility Checker** — `https://www.semrush.com/free-tools/ai-search-visibility-checker/`

---

## Part 5 — File Change Summary

### New Files
| File | Purpose |
|---|---|
| `/public/robots.txt` | Crawler directives + sitemap pointer |
| `/public/og-default.jpg` | Default OG image — **CREATE BEFORE LAUNCH** |
| `/src/app/sitemap.ts` | Dynamic sitemap (all routes + all article slugs) |
| `/src/lib/schema.ts` | Reusable JSON-LD builder functions |
| `/src/lib/articles.ts` | All article data (6 existing + 5 new) |
| `/src/lib/faq-data.ts` | Shared FAQ data used by component + schema |
| `/src/app/blog/[slug]/page.tsx` | Individual blog post pages |

### Modified Files
| File | What Changes |
|---|---|
| `/src/app/layout.tsx` | metadataBase, og:image, twitter card, GSC verification, Organization schema |
| `/src/app/page.tsx` | FAQPage + Organization schema injection |
| `/src/app/services/page.tsx` | Answer Capsules per service + Service schemas + FAQ section |
| `/src/app/pricing/page.tsx` | Canonical + FAQPage schema |
| `/src/app/about/page.tsx` | Canonical + Organization + Person schemas |
| `/src/app/contact/page.tsx` | Real phone/WhatsApp/Calendly + LocalBusiness + FAQPage schemas |
| `/src/app/blog/page.tsx` | Import from articles.ts, fix article count, add CollectionPage schema |
| `/src/app/case-studies/page.tsx` | Update "Q3 2025" text |
| `/src/components/faq-section.tsx` | Import from faq-data.ts instead of hardcoding |

---

## Implementation Order

1. `/src/lib/faq-data.ts` — extract FAQ data first (unblocks faq-section.tsx change)
2. `/src/lib/schema.ts` — schema helpers (unblocks all schema work)
3. `/src/lib/articles.ts` — article data with 6 existing + 5 new full articles
4. `/public/robots.txt` — immediate technical win
5. `/src/app/sitemap.ts` — immediate technical win
6. `/src/app/layout.tsx` — global metadata + Organization schema
7. `/src/app/blog/[slug]/page.tsx` — fixes all 6 broken 404 links
8. `/src/app/blog/page.tsx` — fix article count, import from articles.ts
9. Homepage, services, pricing, about, contact — schema additions
10. Services page — Answer Capsule content
11. Validate: Google Rich Results Test on every page

---

## Pre-Launch Final Checklist

Before deploying to `brandlevo.com`, confirm every item below:

- [ ] Replace `+1 (555) 123-4567` with real phone number (contact/page.tsx)
- [ ] Replace `https://wa.me/15551234567` with real WhatsApp number
- [ ] Replace `https://calendly.com` and `https://calendly.com/brandlevo/free-discovery` with real Calendly links
- [ ] Replace `YOUR_GSC_VERIFICATION_CODE` with real Google Search Console meta value
- [ ] Replace `PLACEHOLDER_AUTHOR_NAME` in all articles with real author name
- [ ] Create and add `/public/og-default.jpg` (1200×630px)
- [ ] Wire contact form to a real backend (Formspree, Resend, or API route)
- [ ] Wire newsletter form to Mailchimp / ConvertKit (or replace with Calendly CTA)
- [ ] Update "Full case studies coming Q3 2025" text in case-studies/page.tsx
- [ ] Confirm `hello@brandlevo.com` is live and monitored
- [ ] Confirm testimonial clients are real (not generated names)
- [ ] Confirm all stats (80+, 3.4×, 4.9★) are verifiable
- [ ] Submit sitemap in Google Search Console after deployment
- [ ] Validate all schemas with Google Rich Results Test

---

## Reference
- AEO methodology: `/home/shyamenk/Documents/AEO-Guide.md`
- Blog listing: `src/app/blog/page.tsx`
- FAQ component: `src/components/faq-section.tsx`
- Root layout: `src/app/layout.tsx`
- Contact page (placeholders): `src/app/contact/page.tsx`
