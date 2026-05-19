import type { Faq } from "./faq-data";

export type Article = {
  slug: string;
  tag: string;
  accent: string;
  bar: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  dateISO: string;
  metaDescription: string;
  authorName: string;
  authorUrl: string;
  faqs: Faq[];
};

const AUTHOR_NAME = "BrandLevo Team";
const AUTHOR_URL = "https://brandlevo.com/about";

export const allArticles: Article[] = [
  // ─── FEATURED ────────────────────────────────────────────────────────────────
  {
    slug: "google-reviews-not-enough",
    tag: "LOCAL SEO",
    accent: "bg-primary/10 text-primary",
    bar: "bg-primary",
    title: "Why Your Google Reviews Aren't Enough to Win Online",
    excerpt:
      "You've got 4.9 stars and 200 reviews. Customers love you. So why is the phone still quiet on Tuesdays? The problem isn't your reputation — it's your visibility.",
    readTime: "6 min read",
    date: "April 2025",
    dateISO: "2025-04-01",
    metaDescription:
      "Great Google reviews don't automatically mean more calls or bookings. Learn the five visibility gaps that are costing local businesses customers — even with a 4.9-star rating.",
    authorName: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    faqs: [
      {
        q: "Do more Google reviews mean I'll rank higher in local search?",
        a: "Reviews are one of roughly 150 ranking factors Google uses for local results. They help establish trust and click-through rate, but without consistent NAP data, an optimised GBP profile, local citations, and on-page SEO, reviews alone won't move the needle on ranking position.",
      },
      {
        q: "What's more important than Google reviews for local visibility?",
        a: "Google Business Profile completeness, accurate local citations across directories, localised website content with your service area and keywords, and a technically sound website that loads fast. These foundation elements carry more direct ranking weight than review count alone.",
      },
      {
        q: "How do I get more visibility without getting more reviews?",
        a: "Optimise your GBP profile to 100% completion, build consistent citations on Yelp, Apple Maps, Bing Places, and niche directories, add location-specific pages to your website, and ensure your NAP (name, address, phone) is identical everywhere it appears online.",
      },
      {
        q: "Can a business with fewer reviews outrank one with more reviews?",
        a: "Yes — regularly. A business with 40 reviews but a fully optimised GBP profile, strong local citations, and a fast, keyword-rich website will frequently outrank a competitor with 200 reviews and a neglected digital presence.",
      },
    ],
  },

  // ─── ARTICLE 2 ───────────────────────────────────────────────────────────────
  {
    slug: "aeo-new-seo",
    tag: "AEO",
    accent: "bg-[#00D4FF]/10 text-[#0099b8]",
    bar: "bg-[#00D4FF]",
    title: "AEO: The New SEO Your Competitors Don't Know About Yet",
    excerpt:
      "ChatGPT, Perplexity, and Google's AI Overviews are sending traffic to one business per category. That business isn't chosen by who ranks #1 — it's chosen by who answers questions best.",
    readTime: "8 min read",
    date: "March 2025",
    dateISO: "2025-03-01",
    metaDescription:
      "Answer Engine Optimization (AEO) is the fastest-growing digital marketing strategy for 2025–2026. Learn what it is, why it matters for local businesses, and exactly how to get cited by AI.",
    authorName: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    faqs: [
      {
        q: "What is AEO and how is it different from SEO?",
        a: "AEO (Answer Engine Optimization) focuses on getting your content cited by AI tools like ChatGPT, Perplexity, and Google AI Overviews when they generate answers to user queries. Traditional SEO focuses on ranking in the blue-link search results. AEO and SEO are complementary — a strong SEO foundation helps AEO performance — but AEO requires additional steps like FAQ schema, structured content, and entity building.",
      },
      {
        q: "Do I need to choose between SEO and AEO?",
        a: "No. The best strategy uses both together. Traditional SEO gives you the indexed, authoritative pages that AI engines draw from. AEO structures those pages so AI can extract and cite your content confidently. Think of SEO as getting into the library and AEO as being the book the librarian recommends.",
      },
      {
        q: "How long does it take to appear in AI-generated answers?",
        a: "Most clients begin appearing in AI Overviews within 60–90 days of implementing AEO changes, assuming the site is already indexed by Google. ChatGPT and Perplexity pull from broader web indexes and may take longer — typically 3–6 months to see consistent citation. Results compound over time as authority builds.",
      },
      {
        q: "Is AEO only for big companies or can small businesses benefit?",
        a: "Small local businesses often benefit more from AEO than large brands, because local queries (e.g., 'best electrician in Bristol') have fewer competitors optimised for AI answers. A well-structured local business page can earn AI citations in markets where national competitors haven't optimised their content for AI extraction.",
      },
    ],
  },

  // ─── ARTICLE 3 ───────────────────────────────────────────────────────────────
  {
    slug: "local-business-website-convert",
    tag: "WEB DESIGN",
    accent: "bg-mint/10 text-[#0fa870]",
    bar: "bg-mint",
    title: "What Makes a Local Business Website Actually Convert",
    excerpt:
      "Most local business websites convert at under 1%. That means 99 out of 100 visitors leave without calling. The fix isn't a redesign — it's five specific changes most developers never make.",
    readTime: "5 min read",
    date: "March 2025",
    dateISO: "2025-03-15",
    metaDescription:
      "Discover the five conversion fixes that take a local business website from under 1% to 3–5% conversion rate — without a full redesign.",
    authorName: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    faqs: [
      {
        q: "What's a good conversion rate for a local business website?",
        a: "A local business website converting visitors into enquiries, calls, or bookings should aim for 2–5%. The national average across local business sites is under 1%. If you're generating 500 visitors per month and getting fewer than 5 enquiries, your conversion architecture needs attention — not more traffic.",
      },
      {
        q: "Do I need to redesign my entire website to improve conversions?",
        a: "No — most conversion improvements come from targeted changes to specific page elements rather than full redesigns. Adding a clear primary CTA, a trust section with testimonials, a visible phone number in the header, and a fast-loading mobile layout typically doubles conversion rates without changing the overall site design.",
      },
      {
        q: "What's the single most important element of a converting local business website?",
        a: "A clear, specific call-to-action (CTA) above the fold that tells visitors exactly what to do next. Not 'Learn More' — but 'Call Us Now', 'Book a Free Quote', or 'Get a Same-Day Response'. The more specific and outcome-focused the CTA, the higher the conversion rate.",
      },
      {
        q: "How does page speed affect conversions?",
        a: "Google research shows that a 1-second delay in mobile page load time reduces conversions by up to 20%. For local businesses where most traffic comes from mobile searches, a slow website is one of the biggest silent conversion killers. A page loading in under 2 seconds converts at roughly twice the rate of one loading in 5+ seconds.",
      },
    ],
  },

  // ─── ARTICLE 4 ───────────────────────────────────────────────────────────────
  {
    slug: "google-business-profile-mistakes",
    tag: "GOOGLE BUSINESS",
    accent: "bg-gold/10 text-amber-700",
    bar: "bg-gold",
    title: "The GBP Mistakes Costing Local Businesses Customers Every Day",
    excerpt:
      "An incomplete or poorly-managed GBP profile is invisible to local searchers. Seven specific errors — and exactly how to fix them in an afternoon.",
    readTime: "7 min read",
    date: "February 2025",
    dateISO: "2025-02-15",
    metaDescription:
      "These seven Google Business Profile mistakes are suppressing your local rankings right now. Fix them in an afternoon and start appearing in local search and Google Maps results.",
    authorName: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    faqs: [
      {
        q: "How do I know if my GBP profile is hurting my rankings?",
        a: "Log into Google Business Profile Manager and check your profile completeness score. Look for missing categories, no photos, no products or services listed, and an incomplete business description. Search your own business name + city on Google and check if your map listing appears — if it doesn't, or appears below competitors with less traffic, your profile needs work.",
      },
      {
        q: "How often should I post on Google Business Profile?",
        a: "At minimum once per week. Google GBP Posts appear in your listing for 7 days and signal activity to Google. Regular posting improves your listing's prominence in local results. Posts with specific offers, events, or new services perform best — avoid generic 'We're open!' posts.",
      },
      {
        q: "What category should I choose for my GBP?",
        a: "Choose the most specific primary category that accurately describes your core business. If you're a plumber who specialises in emergency call-outs, choose 'Emergency Plumber' rather than just 'Plumber' if the specific category exists. Add secondary categories for every additional service type. The right category selection can move your ranking several positions for relevant searches.",
      },
      {
        q: "How important are photos on Google Business Profile?",
        a: "Very important. Listings with more than 100 photos receive 520% more calls and 2,717% more direction requests than the average listing, according to Google data. At minimum, upload 10–15 high-quality photos showing your premises, team, work, and products. Add new photos monthly.",
      },
    ],
  },

  // ─── ARTICLE 5 ───────────────────────────────────────────────────────────────
  {
    slug: "local-citations-guide",
    tag: "LOCAL SEO",
    accent: "bg-primary/10 text-primary",
    bar: "bg-primary",
    title: "How Local Citations Work (And Why Inconsistency Tanks Your Rankings)",
    excerpt:
      "Your business name, address, and phone number appear in hundreds of places online. If they don't match, Google doesn't trust you — and neither do the maps.",
    readTime: "5 min read",
    date: "February 2025",
    dateISO: "2025-02-01",
    metaDescription:
      "Inconsistent local citations are one of the leading causes of poor local search rankings. Learn what citations are, why consistency matters, and how to fix yours today.",
    authorName: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    faqs: [
      {
        q: "What is a local citation?",
        a: "A local citation is any online mention of your business's name, address, and phone number (NAP). This includes directory listings on Yelp, Apple Maps, Bing Places, TripAdvisor, Yell, Facebook, and hundreds of niche and local directories. The more consistent and widespread your citations, the more trust signals Google receives about your business's location and legitimacy.",
      },
      {
        q: "How many citations does a local business need?",
        a: "There's no magic number, but most competitive local markets require citations on the top 50–100 directories in your country and niche. More important than quantity is consistency — 30 perfectly consistent citations outperform 200 inconsistent ones. Start with the major platforms (Google, Bing, Apple, Yelp, Facebook) and then build outward to niche directories.",
      },
      {
        q: "How do I find inconsistent citations?",
        a: "Search your business name and phone number on Google and compile every listing you find. Tools like Moz Local, BrightLocal, or Whitespark can automate this audit and show you every citation along with inconsistency flags. Free manual auditing takes 1–2 hours but reveals the most impactful inconsistencies.",
      },
      {
        q: "Can citations from unrelated directories still help my rankings?",
        a: "Yes, but niche-relevant citations carry more weight. A plumber listed in a plumbing trade directory gets more relevance signal than the same plumber listed in a general business directory. Build your foundation on the top general directories first, then focus on industry and location-specific directories for maximum relevance.",
      },
    ],
  },

  // ─── ARTICLE 6 ───────────────────────────────────────────────────────────────
  {
    slug: "90-day-digital-blueprint",
    tag: "STRATEGY",
    accent: "bg-purple-pale text-purple-700",
    bar: "bg-purple-500",
    title: "The 90-Day Digital Blueprint for New Local Businesses",
    excerpt:
      "Month one: get found. Month two: get trusted. Month three: get booked. A week-by-week action plan for any local business starting from scratch online.",
    readTime: "10 min read",
    date: "January 2025",
    dateISO: "2025-01-15",
    metaDescription:
      "A week-by-week 90-day digital marketing plan for new local businesses. From zero online presence to appearing in local search, AI overviews, and generating consistent enquiries.",
    authorName: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    faqs: [
      {
        q: "How much should a new local business budget for digital marketing in the first 90 days?",
        a: "A realistic foundation budget for the first 90 days is $500–$1,500 for a new local business, covering website hosting, a domain, basic SEO tools, and professional photography. Paid advertising is optional in the first 90 days — the focus should be on organic foundations that compound over time. Add paid ads in month 3 once organic conversion tracking is in place.",
      },
      {
        q: "Should a new business focus on SEO or social media first?",
        a: "SEO and Google Business Profile first. Social media builds brand awareness but rarely drives high-intent local traffic. A customer actively searching 'plumber near me' is far more likely to buy than one who passively sees a social post. Build the foundation that captures existing demand before investing in channels that create demand.",
      },
      {
        q: "How quickly can a new website rank in local search?",
        a: "New websites can appear in local search results within 2–4 weeks if properly set up with Google Search Console, a complete GBP profile, and basic on-page optimisation. Competitive first-page rankings typically take 3–6 months of consistent effort. Local SEO moves faster than national SEO — the competitive bar in most local markets is lower.",
      },
      {
        q: "What's the most important thing to get right in the first month?",
        a: "Getting your website indexed by Google and your Google Business Profile fully set up and verified. Everything else — content, citations, social presence — builds on top of these two foundations. Without them, no other digital marketing activity will reach its potential.",
      },
    ],
  },

  // ─── NEW ARTICLE 1 ───────────────────────────────────────────────────────────
  {
    slug: "what-is-answer-engine-optimization",
    tag: "AEO",
    accent: "bg-[#00D4FF]/10 text-[#0099b8]",
    bar: "bg-[#00D4FF]",
    title: "What Is Answer Engine Optimization? A Complete Guide for Local Businesses",
    excerpt:
      "AEO is the fastest-growing digital marketing strategy of 2026 — and most local businesses haven't heard of it yet. Here's exactly what it is and how to start appearing in AI-generated answers.",
    readTime: "9 min read",
    date: "May 2026",
    dateISO: "2026-05-19",
    metaDescription:
      "Answer Engine Optimization (AEO) helps local businesses appear in ChatGPT, Google AI Overviews, and Perplexity results. Complete guide for 2026 with step-by-step implementation.",
    authorName: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    faqs: [
      {
        q: "What is Answer Engine Optimization (AEO)?",
        a: "Answer Engine Optimization (AEO) is the practice of structuring your website content, schema markup, and digital authority so that AI-powered search tools — including ChatGPT, Perplexity, Google AI Overviews, and Claude — cite your business when generating answers to user questions in your category.",
      },
      {
        q: "How is AEO different from traditional SEO?",
        a: "Traditional SEO focuses on appearing in ranked search result links. AEO focuses on being cited as the answer by AI tools, bypassing the link list entirely. Both matter: SEO builds the indexed, authoritative foundation that AEO draws from, while AEO structures that content specifically for AI extraction and citation.",
      },
      {
        q: "Does AEO work for small local businesses?",
        a: "Yes — and often more effectively than for large brands. Local intent queries ('best plumber in Leeds', 'top web designer near me') have fewer competitors optimised for AI answers, giving local businesses a faster path to AI citation than competing in broad national markets.",
      },
      {
        q: "What is FAQ schema and why does it matter for AEO?",
        a: "FAQ schema (FAQPage JSON-LD) is structured code added to your webpage that marks up your Q&A content so search engines and AI tools can extract it directly. Pages with FAQ schema are 60% more likely to appear in Google AI Overviews, making it the single highest-impact AEO implementation step.",
      },
      {
        q: "How long does it take for AEO to show results?",
        a: "Most businesses begin appearing in Google AI Overviews within 60–90 days of implementing AEO changes, assuming the site is already indexed. Consistent AI citation across ChatGPT and Perplexity typically develops over 3–6 months as authority signals accumulate.",
      },
    ],
  },

  // ─── NEW ARTICLE 2 ───────────────────────────────────────────────────────────
  {
    slug: "local-business-ai-search-visibility",
    tag: "AEO",
    accent: "bg-[#00D4FF]/10 text-[#0099b8]",
    bar: "bg-[#00D4FF]",
    title: "How to Get Your Local Business Found on ChatGPT, Perplexity & Google AI",
    excerpt:
      "AI search tools are where your customers are going first. Here's exactly how to make your local business visible on every major AI platform — step by step.",
    readTime: "8 min read",
    date: "May 2026",
    dateISO: "2026-05-19",
    metaDescription:
      "Step-by-step guide to getting your local business visible on ChatGPT, Perplexity, and Google AI Overviews in 2026. Practical AEO tactics for local businesses.",
    authorName: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    faqs: [
      {
        q: "How does ChatGPT decide which local businesses to recommend?",
        a: "ChatGPT draws from its training data (web content, directories, reviews) and, when using browsing, from live web searches. Businesses with consistent citations across Yelp, Google, Apple Maps, and authoritative directories, combined with content that explicitly names their service and location, are more likely to appear in ChatGPT recommendations.",
      },
      {
        q: "Does having a Google Business Profile help with ChatGPT visibility?",
        a: "Yes — indirectly. A complete, verified GBP profile ensures your business data is consistent across Google's ecosystem, which is a significant data source for AI training and real-time browsing. GBP reviews and information also surface in Perplexity's search results, which use live web data.",
      },
      {
        q: "Do I need separate strategies for Google AI vs ChatGPT?",
        a: "The foundational strategy is the same: quality indexed content, FAQ schema, Organisation schema, and consistent citations. Google AI Overviews respond faster to technical changes on your own website. ChatGPT and Perplexity citation is more influenced by third-party mentions, reviews, and directory presence. Combining both optimisations covers all platforms.",
      },
      {
        q: "How do I check if my business appears in AI search results?",
        a: "Test manually and regularly. In ChatGPT, ask: 'What's the best [your service] in [your city]?' In Perplexity, ask the same question. In Google, search the query and look for the AI Overview. Log which platforms mention your business and which don't. Google Search Console now shows impressions from AI Overview features.",
      },
    ],
  },

  // ─── NEW ARTICLE 3 ───────────────────────────────────────────────────────────
  {
    slug: "schema-markup-local-business-guide",
    tag: "TECHNICAL SEO",
    accent: "bg-primary/10 text-primary",
    bar: "bg-primary",
    title: "Schema Markup for Local Businesses: The Step-by-Step Guide",
    excerpt:
      "Schema markup is the code that makes AI engines cite your business instead of a competitor's. Here's exactly how to add every type that matters — with real examples.",
    readTime: "10 min read",
    date: "May 2026",
    dateISO: "2026-05-19",
    metaDescription:
      "Complete guide to schema markup (JSON-LD structured data) for local businesses in 2026. Step-by-step implementation of FAQPage, LocalBusiness, Organization, and Article schema.",
    authorName: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    faqs: [
      {
        q: "What is schema markup and why does it matter for local businesses?",
        a: "Schema markup (structured data) is code added to your website that explicitly tells search engines and AI tools what your content means — your business type, location, services, reviews, and FAQs. Local businesses with complete schema markup appear in rich search results and AI-generated answers at a significantly higher rate than those without it.",
      },
      {
        q: "Which schema type has the biggest impact for AEO?",
        a: "FAQPage schema has the highest documented impact for AI Overview appearances — pages with FAQPage JSON-LD are 60% more likely to be featured. LocalBusiness schema is essential for local search visibility. Organization schema builds entity authority across all AI platforms. Implement all three as a priority.",
      },
      {
        q: "Do I need a developer to add schema markup?",
        a: "Not necessarily. JSON-LD schema is added as a script tag in your page's HTML and doesn't require changes to your visible content. In WordPress, plugins like Yoast SEO or Rank Math add basic schema automatically. For advanced implementation or custom schema types, a developer is helpful but not essential if you're comfortable editing HTML.",
      },
      {
        q: "How do I check if my schema markup is correct?",
        a: "Use Google's Rich Results Test (search.google.com/test/rich-results) to validate your schema. It shows which schema types Google detected, any errors or warnings, and a preview of how your page might appear in rich results. Run this test after adding or modifying any schema.",
      },
      {
        q: "Can wrong schema markup hurt my rankings?",
        a: "Incorrect schema (misrepresenting content, adding fake reviews, or using spam schema) can result in a manual penalty from Google. Schema that's simply formatted incorrectly is ignored rather than penalised. Always validate with the Rich Results Test and follow Google's structured data guidelines.",
      },
    ],
  },

  // ─── NEW ARTICLE 4 ───────────────────────────────────────────────────────────
  {
    slug: "local-business-website-cost-2026",
    tag: "WEB DESIGN",
    accent: "bg-mint/10 text-[#0fa870]",
    bar: "bg-mint",
    title: "How Much Does a Local Business Website Cost in 2026?",
    excerpt:
      "Website pricing varies wildly — from $500 to $50,000. Here's what you actually get at each price point, what to avoid, and what a local business genuinely needs.",
    readTime: "7 min read",
    date: "May 2026",
    dateISO: "2026-05-19",
    metaDescription:
      "Transparent breakdown of local business website costs in 2026. What you get at each price tier, what to avoid, and how to choose the right investment for your stage.",
    authorName: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    faqs: [
      {
        q: "How much should a small local business spend on a website in 2026?",
        a: "A local business website that generates consistent leads and ranks in search should cost between $800 and $3,500 for initial build. Below $800, you're likely getting a template with no SEO or conversion architecture. Above $3,500 makes sense only if you need custom functionality, e-commerce, or are in a highly competitive market requiring advanced technical SEO.",
      },
      {
        q: "What's the difference between a $500 and a $2,500 website?",
        a: "A $500 website is typically a basic template with minimal customisation, no copywriting, no SEO architecture, and no conversion optimisation. A $2,500 website includes custom design to your brand, professional copywriting, technical SEO foundation, performance optimisation, schema markup, and conversion-focused layout. The difference in leads generated is usually 5–10× over 12 months.",
      },
      {
        q: "Should I use a website builder like Wix or Squarespace?",
        a: "Website builders are viable for brand-new businesses with very limited budgets who need something online quickly. However, they have significant limitations for SEO and AEO — restricted schema markup, limited performance optimisation, and template constraints. For a local business serious about search visibility and lead generation, a professionally built site on WordPress, Webflow, or Next.js will significantly outperform a Wix or Squarespace site within 6 months.",
      },
      {
        q: "What ongoing costs should I budget for after my website is built?",
        a: "Typical ongoing costs: hosting ($20–$50/month for managed hosting), domain ($15–$20/year), SSL (often included with hosting), and maintenance ($50–$150/month or as-needed). If you add SEO services, budget $300–$800/month for ongoing optimisation. Total ongoing investment for a maintained, optimised local business site is typically $400–$1,000/month.",
      },
    ],
  },

  // ─── NEW ARTICLE 5 ───────────────────────────────────────────────────────────
  {
    slug: "aeo-vs-seo-differences",
    tag: "STRATEGY",
    accent: "bg-purple-pale text-purple-700",
    bar: "bg-purple-500",
    title: "AEO vs SEO: What's the Difference and Which Does Your Business Need?",
    excerpt:
      "SEO gets you ranked. AEO gets you cited. In 2026, you need both — but the order and priority depends on where your business is right now.",
    readTime: "7 min read",
    date: "May 2026",
    dateISO: "2026-05-19",
    metaDescription:
      "AEO vs SEO: clear breakdown of the differences, how they work together, and which to prioritise first for your local business in 2026.",
    authorName: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
    faqs: [
      {
        q: "What is the main difference between AEO and SEO?",
        a: "SEO (Search Engine Optimization) focuses on ranking your website in traditional search result links. AEO (Answer Engine Optimization) focuses on getting your content cited by AI tools — ChatGPT, Perplexity, Google AI Overviews — when they generate answers to user queries. SEO earns you a position in a list; AEO earns you the answer itself.",
      },
      {
        q: "Can I do AEO without doing SEO first?",
        a: "AEO works best on a foundation of solid SEO. AI engines cite content from indexed, authoritative pages — which SEO creates. Without the indexed foundation, AEO schema and content structure have nothing to build on. However, some AEO steps (FAQ schema, Answer Capsule content, GBP completion) provide immediate benefit even on a basic SEO foundation.",
      },
      {
        q: "Which gives faster results: AEO or SEO?",
        a: "Technical SEO and GBP optimisation often show ranking improvement within 4–8 weeks. AEO results — appearances in AI Overviews and ChatGPT citations — typically develop over 60–90 days for Google AI and 3–6 months for ChatGPT and Perplexity. Both strategies compound over time, but SEO typically shows faster initial movement.",
      },
      {
        q: "Will SEO become obsolete because of AI search?",
        a: "No. Traditional search results still handle hundreds of billions of queries monthly, and organic links remain the primary driver of web traffic. AI Overviews supplement rather than replace organic results for most query types. Additionally, AI engines draw their knowledge from SEO-indexed content — strong SEO is the foundation that AEO citation is built on.",
      },
      {
        q: "How much should I budget for AEO vs SEO?",
        a: "For most local businesses, a 60/40 split in favour of SEO in the first year makes sense — build the indexed foundation first. From year two onward, a 50/50 split between SEO maintenance and AEO development reflects the growing importance of AI-generated answers. The specific budget split depends on your competitive market and whether you're building from scratch or optimising an existing presence.",
      },
    ],
  },
];

export const featuredArticle = allArticles.find(
  (a) => a.slug === "google-reviews-not-enough"
)!;

export const listedArticles = allArticles.filter(
  (a) => a.slug !== "google-reviews-not-enough"
);

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}
