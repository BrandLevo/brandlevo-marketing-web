# BrandLevo Marketing Website

Live site: **https://www.brandlevo.com**

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.4 (App Router) |
| Styling | Tailwind CSS v4 + custom design system |
| Language | TypeScript |
| Email | Resend (contact form → sales@brandlevo.com) |
| Deployment | Vercel |
| DNS | Hostinger → Vercel |

## Lighthouse Scores

| Category | Score |
|---|---|
| Performance | 96 / 100 |
| Accessibility | 100 / 100 |
| Best Practices | 100 / 100 |
| SEO | 100 / 100 |

## Pages

| Route | Description |
|---|---|
| `/` | Homepage |
| `/services` | Services with AEO answer capsules + FAQ |
| `/process` | 4-phase 30-day process timeline |
| `/pricing` | INR pricing — ₹19,999 / ₹32,999 / ₹49,999 |
| `/case-studies` | Micro case studies |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual article pages (11 articles) |
| `/about` | About page |
| `/contact` | Contact + booking + Resend-wired form |

## Local Development

```bash
npm install
npm run dev
```

## Environment Variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Sends contact form submissions to sales@brandlevo.com |

Create `.env.local` and add the key. Never commit this file (already in `.gitignore`).

## Deployment

Pushes to `main` auto-deploy via Vercel. No manual steps needed.

## SEO / AEO

- Sitemap: `https://www.brandlevo.com/sitemap.xml` (19 URLs, submitted to GSC)
- Schema markup: Organization, FAQPage, Article, LocalBusiness, Service, BreadcrumbList, Speakable
- Google Search Console: verified via HTML meta tag
- robots.txt: allows all, references sitemap

## Pending (needs real data)

- [ ] Replace Calendly link with new one if URL changes
- [ ] GSC: submit new sitemap if pages are added
- [ ] Testimonial clients — confirm names are real before launch PR push
- [ ] Stats (80+, 3.4×, 4.9★) — confirm verifiable

---

© 2026 BrandLevo. All rights reserved.
