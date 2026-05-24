/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import { AnswerCapsule, H2, H3, P, UL, LI, OL, OLI, Strong } from "@/components/article-components";

export default function ArticleContent() {
  return (
    <>
      <H2>Month 1: Get Found</H2>
      <AnswerCapsule>
        The first 30 days are about building the technical foundations that every other digital
        marketing activity depends on. Without them, content marketing, advertising, and social
        media all underperform. The goal of month one is simple: make sure Google can find you,
        understand what you do, and surface your business to relevant local searches. Four actions,
        one week each.
      </AnswerCapsule>

      <H3>Week 1: Launch Your Website</H3>
      <P>
        You need a fast, mobile-responsive website with at minimum: a homepage, a services page,
        an about page, and a contact page. Each page needs your business name, location, phone
        number, and a clear description of what you do. Register with Google Search Console and
        submit your sitemap so Google can index your site immediately. Don't overthink the design
        in week one — structure and speed matter more than aesthetics at this stage.
      </P>

      <H3>Week 2: Set Up and Verify Google Business Profile</H3>
      <P>
        Create or claim your GBP listing at{" "}
        <a href="https://business.google.com" className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
          business.google.com
        </a>
        . Complete every available field: description, categories, services, hours, and contact
        information. Request verification — for most businesses this takes 2–5 days. Add at least
        10 photos. This is the single most important action in your first month.
      </P>

      <H3>Week 3: Build Your Core Citations</H3>
      <P>
        List your business on Bing Places, Apple Maps, Yelp, Facebook, and LinkedIn. Use your
        canonical NAP (name, address, phone) identically on every platform. These five platforms
        cover the majority of online map and local search queries alongside Google.
      </P>

      <H3>Week 4: Launch Your First Service Page Content</H3>
      <P>
        Write one detailed service page targeting your primary service + your city. Minimum 500
        words, including your location, the specific service you provide, why customers choose you,
        and a strong call to action. This page will begin ranking for local service queries within
        4–8 weeks.
      </P>

      <H2>Month 2: Get Trusted</H2>
      <AnswerCapsule>
        With foundations in place, month two focuses on building the trust signals that convert
        first-time visitors into enquiries — and the authority signals that improve your ranking
        over time. Four actions across four weeks: generate your first reviews, add social proof
        to your website, publish your first blog post, and set up analytics with conversion
        tracking.
      </AnswerCapsule>

      <H3>Week 5: Get Your First Reviews</H3>
      <P>
        Email or text your first 10–20 customers a direct link to your GBP review page. Don't
        incentivise reviews — this violates Google's policies. Simply ask: "Would you mind leaving
        us a quick Google review? It helps us enormously." A personalised ask converts at 5–10×
        the rate of a generic request. Aim for 10 reviews by the end of week 6.
      </P>

      <H3>Week 6: Add Social Proof to Your Website</H3>
      <P>
        Add the testimonials, results, and reviews you've collected to your homepage and service
        pages. Include before-and-after results where possible. If you don't have testimonials yet,
        add a results-focused paragraph describing the specific outcomes customers achieve with your
        service.
      </P>

      <H3>Week 7: Publish Your First Blog Post</H3>
      <P>
        Write one 800–1,200 word article answering the most common question your customers ask.
        Structure it with the Answer Capsule format: lead with a direct 50-word answer, then
        provide supporting detail. This begins building topical authority and will appear in Google
        results for long-tail queries within 2–4 weeks.
      </P>

      <H3>Week 8: Set Up Analytics</H3>
      <P>
        Install Google Analytics 4 on your website and set up conversion tracking for phone number
        clicks, form submissions, and booking page visits. Without conversion tracking, you cannot
        measure what's working and invest accordingly. This is non-negotiable before starting any
        paid advertising.
      </P>

      <H2>Month 3: Get Booked</H2>
      <AnswerCapsule>
        Month three is about optimising your conversion path and beginning to scale what's working.
        By now you should be receiving organic enquiries. Weeks 9–10 focus on conversion rate
        optimisation — reviewing Analytics data, fixing the five conversion elements. Weeks 11–12
        add paid amplification with Google Local Services Ads or Search Ads, starting with a small
        daily budget once conversion tracking is proven.
      </AnswerCapsule>

      <H3>Weeks 9–10: Conversion Rate Optimisation</H3>
      <P>
        Review your Analytics data. Where are visitors dropping off? Check your homepage — is the
        primary CTA clear and above the fold? Is your phone number visible in the header? Is your
        contact form three fields or fewer? Make the five conversion improvements and measure the
        impact over the following two weeks.
      </P>

      <H3>Weeks 11–12: Add Paid Amplification</H3>
      <P>
        With conversion tracking in place and a converting website, you can now run Google Local
        Services Ads or Google Search Ads profitably. Start with a small daily budget ($10–$20)
        targeting your primary service + city. Monitor cost per lead and scale up the campaigns
        that generate the best results.
      </P>

      <H2>After 90 Days</H2>
      <P>
        A business that executes this blueprint thoroughly will typically have: 10–30 first-page
        keyword rankings, 15–25 Google reviews, 50+ consistent local citations, functioning
        conversion tracking, and a baseline of organic enquiries to build from. Months 4–12 compound
        this foundation — more content, more citations, more reviews, and progressively stronger
        ranking positions across your category.
      </P>
    </>
  );
}
