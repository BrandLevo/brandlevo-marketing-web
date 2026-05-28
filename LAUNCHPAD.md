# BrandLevo — Maximum Visibility Launchpad

> Full plan: ICP · Trust audit · SEO tools · GBP setup · Social strategy · Content calendar · Execution checklists  
> Last updated: 28 May 2026

---

## 0. IMMEDIATE FIXES (Do These First)

The site is live and indexed on Google. Three technical bugs are hurting performance and search visibility right now. Fix these before any promotion.

### Fix A — OG Image Corrupted (Causing Performance Drop 96 → 89/87)
`public/og-default.jpg` is actually a **PNG file** renamed to .jpg. It's 889×697px at 72KB instead of the correct 1200×630 JPEG at ~60KB. This causes LCP regression because the browser detects the format mismatch.
- **Action**: Re-export as a true JPEG 1200×630 and replace `public/og-default.jpg`
- **Expected result**: Performance score returns to 95+

### Fix B — No Favicon Appearing in Google Results (Blog Logo Missing)
Only 16×16 and 32×32 favicon sizes are declared in metadata. **Google requires 48×48 minimum** to display a site icon next to search results. The 192×192 icon already exists at `public/android-chrome-192x192.png` — it just isn't declared in `src/app/layout.tsx`.
- **Action**: Add `{ url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" }` to the `icons.icon` array in `src/app/layout.tsx`
- **Expected result**: Site icon appears next to all Google results within 1–2 weeks

### Fix C — Remove Fake Content Before Any Outreach
The site currently has placeholder testimonials (Priya Shah, Marcus Reilly, Linda Okafor, Daniel Hartmann), unverified stats (80+, 3.4×, 4.9★), and fictional case studies. These are placeholders. Since BrandLevo has no clients yet, replace with honest empty states.
- **Action**: See Section 2 below for exact content replacements
- **Why urgent**: The site is already indexed. Anyone searching "BrandLevo" will see these claims. If investigated, they destroy credibility before you've started.

### Fix D — Founding Year in llms.txt
`public/llms.txt` says `Founded: 2024` but the website copy says founded 2019. These contradict each other — AI crawlers will flag the inconsistency.
- **Action**: Update `llms.txt` to match the real founding year (update `Founded:` line)

### Fix E — Dead 52KB Asset
`public/logo-black.png` (52KB) was added but is not used anywhere in the codebase.
- **Action**: Delete `public/logo-black.png`

---

## 1. Who We Are & Our ICP

### Business Identity
BrandLevo is a **full-service digital growth agency** based in Kochi, Kerala. We help local businesses get found on Google *and* AI search tools (ChatGPT, Perplexity, Google AI Overviews). Core positioning: one of the only agencies in Kochi/Kerala offering dedicated AEO (Answer Engine Optimisation) alongside traditional SEO.

### Primary ICP — Ideal Customer Profile

| Dimension | Profile |
|---|---|
| **Who** | Owner-operator of a local service business |
| **Location** | Kochi / Kerala / Tier-2 Indian cities |
| **Revenue** | ₹25L–₹2Cr/year |
| **Size** | 1–20 employees |
| **Industry** | Clinics, salons, wedding vendors, coaching, legal, trades, restaurants, hotels |
| **Pain point** | "My competitors rank higher even though I'm better" / "No online presence" |
| **Trigger event** | Lost a customer to a competitor / searched their own business on Google and didn't find it |
| **Tech comfort** | Low — wants done-for-you, no jargon |
| **Budget** | ₹20K–₹50K one-time + ₹5K–₹15K/month ongoing |
| **Decision style** | Emotional + ROI buyer; decides alone, no procurement |

### Secondary ICP
UK/US diaspora-owned SMEs wanting India-priced quality with international-standard AEO/SEO execution.

### Anti-ICP (Do Not Target)
- Enterprise / corporates (in-house teams)
- "Just a logo" requests with no digital intent
- Price shoppers under ₹10K

---

## 2. Trust Content Audit — What's Strong, What's Broken

### What's Strong
- Core headline is genuinely differentiated: *"Google ranks pages. AI cites brands."*
- INR pricing is transparent and competitive — no hidden fees
- Service descriptions are outcome-focused, not feature-lists
- AEO-native positioning is early-mover and credible
- FAQ schema coverage is excellent (5 pages with FAQPage JSON-LD)
- Technical foundation — schema, llms.txt, robots.txt — is production-quality

### What's Broken — Fix These Before Any Outreach

**1. CRITICAL — All Testimonials Are Placeholder (No Real Clients Yet)**
BrandLevo currently has no real clients. The testimonials (Priya Shah, Marcus Reilly, Linda Okafor, Daniel Hartmann) are placeholders. The site is already indexed on Google — anyone who searches will see these claims.
- **Fix**: Replace testimonials section with honest "Be our first client" CTA or remove entirely
- **Honest copy example**: "We're just getting started — and we'd love to make you our first success story. Book a free audit." 

**2. CRITICAL — Stats Are Placeholder (0 Real Clients)**
"80+ businesses launched", "3.4× lead growth", "4.9★" are placeholder numbers.
- **Fix**: Remove stats counters entirely OR replace with founding promise stats: "14-day launch guarantee", "30-day results", "0 lock-in contracts" — these are process promises, not fabricated outcomes

**3. CRITICAL — Founding Year Inconsistency**
- Website copy says: **Founded 2019**
- `public/llms.txt` says: **Founded: 2024**
- Fix `llms.txt` to match the real founding year

**4. HIGH — Dead Social sameAs Links in Schema**
The JSON-LD schemas reference `twitter.com/brandlevo`, `linkedin.com/company/brandlevo`, `facebook.com/brandlevo`, `instagram.com/brandlevo` — none of which exist yet. Dead sameAs links hurt entity authority.
- **Fix**: Create accounts first (Section 7), then update `src/lib/schema.ts`

**5. HIGH — Case Studies Are Fictional**
"Dental clinic Kochi", "Photography studio Kerala" with specific results — placeholders.
- **Fix**: Replace with "Results coming soon — we're actively onboarding our first clients" OR show the service methodology without claiming specific client results

**6. MEDIUM — Team Has No Real Photos or LinkedIn Links**
James R., Sara C., Tom N., Aisha M. — placeholder names with initials only.
- **Fix**: Replace with real team info. If it's just you, own it — "Founded by [Your Name]. I personally handle every client." is stronger than 4 made-up team members.

---

## 3. Technical SEO / Crawl Audit

### Current Status

| File / Signal | Status | Notes |
|---|---|---|
| `robots.txt` | GOOD | All crawlers allowed; GPTBot, ClaudeBot, PerplexityBot explicitly permitted |
| `llms.txt` | GOOD (1 fix needed) | Comprehensive — but founding year wrong (2024 vs 2019) |
| `sitemap.xml` | GOOD | 19 URLs, correct priorities, submitted to GSC |
| Organization schema | GOOD | Global (layout.tsx) |
| LocalBusiness schema | GOOD | Home + Contact, with Kochi geo coordinates |
| FAQPage schema | GOOD | Homepage, services, pricing, contact, blog posts |
| Article schema | GOOD | All 11 blog posts |
| BreadcrumbList schema | GOOD | Blog articles |
| Service schema | GOOD | Services page |
| Person schema | GOOD | About page (team) |
| HowTo schema | GOOD | Process page |
| Canonical tags | GOOD | All pages |
| OpenGraph / Twitter cards | GOOD | All pages |
| Google verification | GOOD | Meta tag present in layout.tsx |
| Core Web Vitals | GOOD | Lighthouse 96/100 |

### Fixes Required

| # | Issue | File | Fix |
|---|---|---|---|
| 1 | `llms.txt` founding year: 2024 | `public/llms.txt` | Change to real year |
| 2 | Dead sameAs social URLs | `src/lib/schema.ts` | Update with real handles after account creation |
| 3 | Static sitemap | `public/sitemap.xml` | Must manually update when new blog posts are added |
| 4 | OG image preview | `public/og-default.jpg` | Test via opengraph.xyz — confirm looks good on WhatsApp/LinkedIn shares |

---

## 4. Google Visibility in Kochi — "BrandLevo" Search

If searching "BrandLevo" in Kochi doesn't surface the site yet, it's because Google hasn't indexed it (normal for new sites). Actions to accelerate:

1. GSC → Sitemaps → add `https://www.brandlevo.com/sitemap.xml`
2. GSC → URL Inspection → Request indexing for all 8 main pages individually
3. Create Google Business Profile (Section 5) — dramatically accelerates local indexing
4. Post on LinkedIn with a link to `brandlevo.com` — creates first external backlink signal
5. List on Justdial, Sulekha, Clutch.co — free citation signals

---

## 5. Google Business Profile (GBP) — Without a Physical Office

BrandLevo is a **service-area business** — you serve clients at their location. Google fully supports this. No office address is required.

### Step-by-Step Setup

1. Go to https://business.google.com
2. Search "BrandLevo" — if not found, click **Add your business**
3. Business name: `BrandLevo`
4. Category (primary): `Digital Marketing Agency`
5. Category (secondary): `Internet Marketing Service`
6. **"Do customers visit your location?"** → Select **NO**
7. Set service areas: `Kochi`, `Ernakulam`, `Kerala`, `India`
8. Phone: `+91 98958 83315`
9. Website: `https://www.brandlevo.com`
10. Email: `sales@brandlevo.com`
11. **Verification**: Choose phone/email/video option (no postcard needed for service-area businesses)

### After Verification — Fill Everything

- [ ] Upload logo (square PNG, minimum 250×250px — use `logo-black.png`)
- [ ] Upload cover photo (1024×576px minimum — use a branded graphic, not stock)
- [ ] Add 5+ photos (team, workspace/laptop setup, screen mockups)
- [ ] List all 5 services with descriptions
- [ ] Set business hours Mon–Fri 09:00–18:00 (matches schema)
- [ ] Write 750-character business description — include: "digital marketing agency Kochi", "SEO", "AEO", "website design Kerala"
- [ ] Add website URL and booking link (Calendly)
- [ ] Enable messaging
- [ ] Post a GBP Post every week (news/offer/update)
- [ ] Ask first clients for Google reviews — target 5 reviews in first 30 days

---

## 6. Tools — SEO, AI Citation & Monitoring

### SEO Tools

| Tool | Cost | Use For |
|---|---|---|
| Google Search Console | Free | Indexing, clicks, impressions, coverage errors, rich results |
| Google Rich Results Test | Free | Validate JSON-LD schema (FAQ, LocalBusiness, HowTo) |
| PageSpeed Insights | Free | Core Web Vitals — LCP, CLS, FID |
| Screaming Frog | Free (500 URLs) | Full site crawl — broken links, missing meta |
| Ahrefs Webmaster Tools | Free | Backlinks, keyword rankings |
| Ubersuggest | Free (limited) | Keyword ideas, competitor analysis |
| opengraph.xyz | Free | Test OG image preview on social shares |
| Semrush | Paid / trial | Full keyword + competitor + backlink research |
| Moz Local | Paid | Citation building across Indian and global directories |

### AI Citation / AEO Monitoring Tools

| Tool | Cost | Use For |
|---|---|---|
| Perplexity.ai | Free | Manual citation check — search your keywords weekly |
| ChatGPT (web search on) | Free | Manual: "best AEO agency Kochi" / "digital marketing Kerala" |
| Google AI Mode | Free | Check AI Overview inclusion (search from India, incognito) |
| Otterly.ai | Paid (trial free) | Dedicated AI citation tracker — tracks rankings across LLMs |
| Profound | Paid | AI search visibility dashboard |
| Brandwatch / Mention | Paid | Brand mention monitoring including AI sources |

### Free Minimum Stack (Zero Budget)
**GSC + Rich Results Test + PageSpeed + Ahrefs Webmaster Tools + manual Perplexity/ChatGPT checks every 2 weeks**

### Directories to List On (Free Citations)

| Directory | URL | Impact |
|---|---|---|
| Justdial | justdial.com | High — India local search |
| Sulekha | sulekha.com | High — South India local |
| IndiaMART | indiamart.com | Medium — B2B |
| Clutch.co | clutch.co | High — agency credibility globally |
| Sortlist | sortlist.in | Medium — agency directory |
| AgencySpotter | agencyspotter.com | Medium |
| GoodFirms | goodfirms.co | Medium — Indian agency credibility |
| DesignRush | designrush.com | Low–Medium |

---

## 7. Social Media — Platform Priority & Account Setup

### Priority Order (for BrandLevo)

| # | Platform | Priority | Why |
|---|---|---|---|
| 1 | **LinkedIn** | CRITICAL | B2B decision-makers; agency credibility; AEO/SEO thought leadership; schema sameAs |
| 2 | **Instagram** | CRITICAL | Kerala local businesses heavily active here; Reels get organic reach |
| 3 | **Google Business Profile** | CRITICAL | Local search visibility + reviews + Maps (covered in Section 5) |
| 4 | **YouTube** | HIGH | "How to get on ChatGPT" videos — evergreen, high trust, AEO-native format |
| 5 | **WhatsApp Business** | HIGH | Kerala market specifically — clients expect it; broadcast lists |
| 6 | **X (Twitter)** | MEDIUM | SEO/AEO community; schema sameAs authority |
| 7 | **Facebook** | MEDIUM | Kerala local businesses still on FB; Groups; Ads targeting |

**Skip for now**: TikTok, Pinterest, Threads (wrong audience for B2B local services)

### Handles to Register (all @brandlevo)
- `linkedin.com/company/brandlevo`
- `instagram.com/brandlevo`
- `x.com/brandlevo`
- `youtube.com/@brandlevo`
- `facebook.com/brandlevo`
- WhatsApp Business: +91 98958 83315

**After creating accounts**: Update `src/lib/schema.ts` → `sameAs` array with all real URLs.

---

## 8. First Post on Each Platform

### LinkedIn

```
We built BrandLevo because we watched brilliant businesses in Kochi 
lose customers to mediocre competitors with better Google rankings.

That's not a skill problem. That's a visibility problem.

BrandLevo is our fix.

We're one of the first agencies in Kerala offering AEO — 
Answer Engine Optimisation — helping local businesses get cited 
by ChatGPT, Perplexity, and Google AI Overviews.

Not just ranked. Cited.

If you run a business in Kochi and your customers can't find you 
online, let's talk. Free 30-minute audit call — no pitch, just clarity.

www.brandlevo.com

#BrandLevo #DigitalMarketing #Kochi #Kerala #AEO #LocalSEO
```

### Instagram (Carousel — 5 slides)

- **Slide 1**: "Your competitors rank higher on Google. Here's why." (bold, dark bg)
- **Slide 2**: Reason 1 — No Google Business Profile (icon + 1 sentence)
- **Slide 3**: Reason 2 — Website not mobile-optimised
- **Slide 4**: Reason 3 — No local keywords in your content
- **Slide 5**: "We fix all 3 in 14 days. Free audit. Link in bio." (CTA)

**Caption**: "Swipe to see why your business might be invisible online — and how to fix it. Free audit call at brandlevo.com 👆 #Kochi #Kerala #LocalBusiness #SEO #DigitalMarketing #BrandLevo"

### Google Business Profile (First Post)

"BrandLevo is now live! We help local businesses in Kochi get found on Google and AI search tools like ChatGPT and Perplexity. Book a free 30-minute digital audit — no obligation. Visit brandlevo.com"

### X (Twitter)

```
We built an AEO agency in Kochi before most people knew what AEO was.

Google ranks pages. AI cites brands.

Local businesses in Kerala are invisible to both.

We fix that.

→ brandlevo.com
```

### YouTube (First Video — Script Outline)

**Title**: "Why your Kochi business doesn't show up on ChatGPT (and how to fix it)"
- **Hook (0–15s)**: "I searched for the best dentist in Kochi on ChatGPT. 3 businesses came up. Yours wasn't one of them. Here's why."
- **Problem (15–60s)**: How AI search decides who to cite — and why Google rankings aren't enough anymore
- **Solution (60–180s)**: What AEO is, what signals AI tools use (structured content, schema, entity authority)
- **CTA**: "I'll audit your business for free — no pitch. Book at brandlevo.com"

### WhatsApp Business (Broadcast Message)

"Hi — this is James from BrandLevo. We've just launched a free digital audit for Kochi businesses — 30 minutes, I'll show you exactly why you're not showing up on Google or AI search and what it would take to fix it. No charge, no obligation. Reply here to book."

---

## 9. Content Calendar — First 4 Weeks

### Week 1 — Launch

| Day | Platform | Content |
|---|---|---|
| Mon | LinkedIn | Company launch post (above) |
| Mon | Instagram | Brand intro story — "We're live" |
| Tue | GBP | First GBP post — "BrandLevo is open" |
| Wed | LinkedIn | Repurpose: "What is AEO and why your Kochi business needs it" (link to blog) |
| Thu | Instagram | Carousel: "3 reasons your business isn't on Google" (above) |
| Fri | X | "How AI search works — and why it changes everything for local businesses" |
| Sat | WhatsApp | Status + broadcast: "BrandLevo is live. Free audits available this week." |

### Week 2 — Education

| Day | Platform | Content |
|---|---|---|
| Mon | LinkedIn | "AEO vs SEO — what's actually different?" (repurpose blog post) |
| Tue | Instagram | Before/after website redesign concept mockup |
| Wed | GBP | Post: "Free website audit for Kochi businesses — spots limited" |
| Thu | LinkedIn | Poll: "How does your business get most of its new customers?" |
| Fri | Instagram | Reel: "What happens when someone asks ChatGPT for a [service] in Kochi?" |
| Sat | X | Thread: "5 things a Kochi business website needs in 2026 (most have none)" |

### Week 3 — Social Proof

| Day | Platform | Content |
|---|---|---|
| Mon | LinkedIn | Real client result (name + outcome — even if small) |
| Tue | Instagram | "How we helped [real client] get their first online enquiry in 2 weeks" |
| Wed | GBP | Post: "Client result — [business type], [city], [outcome]" |
| Thu | LinkedIn | Article: "Google Business Profile mistakes costing Kochi businesses leads" |
| Fri | Instagram | Carousel: "What a properly set-up local SEO looks like (checklist)" |

### Week 4 — CTA Week

| Day | Platform | Content |
|---|---|---|
| Mon | LinkedIn | "We have 2 audit slots left this month — free 30-min call" |
| Tue | Instagram | Story: countdown timer to end-of-month audit offer |
| Wed | YouTube | First video upload (draft + record this week) |
| Thu | LinkedIn | "Month 1 in numbers" — honest recap even if small |
| Fri | All | Round-up + teaser for next month |

---

## 10. Content Ideas Bank

### LinkedIn (Thought Leadership — post 3×/week)
1. "Why 60% of Google searches end without a click — and what that means for your business"
2. "The business owner's guide to AI search in 2026"
3. "How we built a website in 14 days for a Kerala clinic — what happened next"
4. "Why 'digital marketing' is broken for small businesses in India"
5. "What we learned from auditing 20 Kochi business websites"
6. "AEO is just SEO with better manners — here's what that means"
7. "The exact questions people ask ChatGPT when looking for your service in Kochi"
8. "Why your Google reviews don't help you rank on AI search"

### Instagram (Visual / Reels — 4×/week)
1. Reel: "I asked ChatGPT for the best [service] in Kochi — here's what it said"
2. Carousel: "Your website checklist for 2026" (10 slides, swipeable)
3. Before/after: ugly website vs BrandLevo rebuild
4. "Day in the life at a digital agency in Kochi" (authentic, phone video)
5. "How one blog post got a Kerala business 40 new enquiries"
6. Reel: Answer to "what is AEO" in 60 seconds

### YouTube (Educational — 1×/month)
1. "How to get your business on ChatGPT search in 2026" — full tutorial
2. "Google Business Profile setup for Kochi businesses — full walkthrough"
3. "What is AEO? Explained simply for business owners"
4. "How to check if your website is hurting your Google rankings"
5. "Local SEO for Kerala businesses — step by step"

### WhatsApp Broadcast (weekly)
1. "Digital tip of the week" — 1 short actionable tip
2. Offer: "2 free audit slots available this week"
3. Case study result (screenshot with permission)
4. Blog/video alert: "Just published: [title]"

---

## 11. Master Execution Checklist

### Phase 1 — Fix Trust Signals (Do This First, Before Any Promotion)
- [ ] Fix `llms.txt` founding year — must match website copy
- [ ] Fix or remove unverified testimonials (Priya Shah, Marcus Reilly, Linda Okafor, Daniel Hartmann)
- [ ] Verify or reduce stats (80+, 3.4×, 4.9★) to what's actually real
- [ ] Get at least 1 real client's permission to use their name/results
- [ ] Add real team headshots and LinkedIn links to the About page
- [ ] Test OG image on opengraph.xyz — confirm it looks good on shares

### Phase 2 — Accounts & GBP (Week 1)
- [ ] Create GBP at business.google.com (service-area — no address needed)
- [ ] Verify GBP via phone/email/video
- [ ] Complete all GBP fields (see Section 5 checklist)
- [ ] Create LinkedIn company page (brandlevo)
- [ ] Create Instagram account (@brandlevo)
- [ ] Create X account (@brandlevo)
- [ ] Create YouTube channel (@brandlevo)
- [ ] Create Facebook page (brandlevo)
- [ ] Set up WhatsApp Business (+91 98958 83315)
- [ ] Update `src/lib/schema.ts` → `sameAs` array with all real social URLs
- [ ] Deploy updated schema

### Phase 3 — GSC & Indexing (Week 1)
- [ ] GSC → Sitemaps → submit `https://www.brandlevo.com/sitemap.xml`
- [ ] GSC → URL Inspection → Request indexing: `/`, `/services`, `/pricing`, `/about`, `/contact`, `/process`, `/blog`, `/case-studies`
- [ ] GSC → URL Inspection → Request indexing: all 11 blog posts
- [ ] GSC → Settings → Address settings → set preferred domain to `www.brandlevo.com`
- [ ] Confirm 301 redirect: `brandlevo.com` → `www.brandlevo.com` active (Vercel dashboard)

### Phase 4 — Citations & Directories (Week 2)
- [ ] List on Justdial
- [ ] List on Sulekha
- [ ] List on IndiaMART
- [ ] List on Clutch.co
- [ ] List on GoodFirms
- [ ] List on Sortlist.in
- [ ] Add GBP link to website footer

### Phase 5 — Content & Social Launch (Week 1–2)
- [ ] Post LinkedIn launch post
- [ ] Post Instagram launch carousel
- [ ] Post first GBP update
- [ ] Post first X tweet
- [ ] Send WhatsApp broadcast (first 10 contacts)
- [ ] Post Week 2 content (education week)

### Phase 6 — AEO Monitoring (Ongoing)
- [ ] Set up tracking spreadsheet: columns = Date, Tool (Perplexity/ChatGPT/Google AI), Query, Cited? (Y/N), Citation text
- [ ] Run manual checks every 2 weeks (see queries below)
- [ ] Log all results — AEO is a slow build; the data matters

### AEO Check Queries (run in Perplexity, ChatGPT, Google AI)
- "best digital marketing agency in Kochi"
- "what is AEO answer engine optimization"
- "how to get my business found on ChatGPT"
- "digital marketing agency Kerala"
- "AEO vs SEO difference"
- "answer engine optimization for local business India"

### Phase 7 — Monthly Rhythm
- [ ] 3× LinkedIn posts/week
- [ ] 4× Instagram posts/week (2 Reels, 2 carousels)
- [ ] 1× YouTube video/month
- [ ] 1× new blog post/month
- [ ] 1× GBP post/week
- [ ] Fortnightly AEO citation checks (log in tracking spreadsheet)
- [ ] Monthly GSC review (impressions, clicks, coverage, rich results)
- [ ] Monthly PageSpeed check

---

## 12. 90-Day Milestone Targets

| Metric | Target | How to Measure |
|---|---|---|
| Pages indexed | 19/19 sitemap URLs | GSC → Coverage → Valid |
| GSC impressions | 500+/month | GSC → Search results |
| GSC clicks | 50+/month | GSC → Search results |
| Branded search position | Top 3 for "BrandLevo" | GSC → Queries |
| AI citations | 1+ mention (Perplexity or ChatGPT) | Manual check spreadsheet |
| FAQ rich results | Active on homepage + services + pricing | GSC → Enhancements → FAQ |
| External backlinks | 5+ (directories + LinkedIn) | Ahrefs Webmaster Tools |
| GBP reviews | 5+ real reviews | GBP dashboard |
| LinkedIn followers | 200+ | LinkedIn analytics |
| Instagram followers | 500+ | Instagram insights |

---

## 13. Quick-Reference Tool Links

| Goal | Tool | URL |
|---|---|---|
| Search Console | GSC | search.google.com/search-console |
| Schema validation | Rich Results Test | search.google.com/test/rich-results |
| Core Web Vitals | PageSpeed Insights | pagespeed.web.dev |
| Full site crawl | Screaming Frog | screamingfrog.co.uk |
| Backlinks & keywords | Ahrefs Webmaster | ahrefs.com/webmaster-tools |
| Keyword research | Ubersuggest | neilpatel.com/ubersuggest |
| OG image test | OpenGraph.xyz | opengraph.xyz |
| AI citation check | Perplexity | perplexity.ai |
| AI citation check | ChatGPT | chatgpt.com |
| AI citation tracker | Otterly | otterly.ai |
| GBP setup | Google Business | business.google.com |
| Social scheduling | Buffer | buffer.com |
| Graphic design | Canva | canva.com |
| Video editing | CapCut / DaVinci | — |
| Local citations | Moz Local | moz.com/local |
