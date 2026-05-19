import { AnswerCapsule, H2, H3, P, UL, LI, OL, OLI, Strong, A } from "@/components/article-components";

export default function ArticleContent() {
  return (
    <>
      <H2>Why Most Local Business Websites Fail to Convert</H2>
      <AnswerCapsule>
        The average local business website converts less than 1% of visitors into enquiries or
        calls. That means if 200 people visit your site this week, fewer than two will contact you.
        This isn't primarily a traffic problem — it's a conversion architecture problem. Five
        specific elements determine whether a visitor becomes a lead, and most local business
        websites get at least three of them wrong.
      </AnswerCapsule>
      <P>
        The good news: fixing these five elements doesn't require a full redesign. Most can be
        implemented in a day on an existing site. Combined, they typically move local business
        conversion rates from under 1% to 2–5%, effectively doubling or tripling your leads from
        the same volume of traffic.
      </P>

      <H2>Fix 1: One Clear CTA Above the Fold</H2>
      <AnswerCapsule>
        Your homepage's primary job is to move visitors to one specific action — not to inform or
        impress. Most local business homepages have three or more competing CTAs. When everything
        is equally important, nothing is. Choose one primary action and make it the most visually
        dominant element above the fold. "Get a Free Quote in 24 Hours" consistently outperforms
        "Contact Us" by 20–40% in A/B tests.
      </AnswerCapsule>
      <P>
        The CTA should be specific and outcome-focused. "Contact Us" tells a visitor what to do.
        "Get a Free Quote in 24 Hours" tells them what they'll get. The second version consistently
        outperforms the first by 20–40% in A/B tests across local service businesses.
      </P>

      <H2>Fix 2: Phone Number in the Header</H2>
      <AnswerCapsule>
        A phone number visible in the header on every page is one of the highest-ROI changes you
        can make to a local business website. Mobile users — who make up 70%+ of local search
        traffic — will tap it directly. It also signals legitimacy and accessibility, reducing
        hesitation. If your phone number only appears on the Contact page, you're losing calls
        from every visitor who doesn't navigate there.
      </AnswerCapsule>

      <H2>Fix 3: Real Social Proof Above the Fold</H2>
      <AnswerCapsule>
        Generic trust signals ("We're the best in the business!") don't work. Specific social
        proof does. A results-driven testimonial — "We went from 3 enquiries a week to 15" —
        positioned above the fold converts significantly better than any marketing copy you can
        write about yourself. Display your Google star rating and review count on your homepage.
      </AnswerCapsule>
      <P>
        If you have Google reviews, display the star rating and count on your homepage. Social
        proof with specific numbers — "+340% in enquiries", "44% close rate" — is far more
        persuasive than generic claims of quality.
      </P>

      <H2>Fix 4: Mobile-First Speed</H2>
      <AnswerCapsule>
        Google research shows a 1-second delay in mobile page load reduces conversions by 20%.
        Local business sites built on slow themes, using uncompressed images, or loading large
        JavaScript libraries regularly load in 5–8 seconds on mobile — reducing their conversion
        potential by 60–80% compared to a well-optimised site. Run your site through PageSpeed
        Insights and target a mobile score above 70.
      </AnswerCapsule>
      <P>
        Run your site through <A href="https://pagespeed.web.dev">PageSpeed Insights</A>. A mobile
        score below 70 is directly hurting your conversion rate today. Common culprits: uncompressed
        images, large JavaScript bundles, slow hosting, and render-blocking resources.
      </P>

      <H2>Fix 5: Frictionless Enquiry Form</H2>
      <AnswerCapsule>
        If your contact form asks for name, email, phone, service type, message, budget, timeline,
        and how they found you — you've already lost most visitors. Long forms signal effort; effort
        kills conversions. A converting local business contact form needs three fields maximum:
        name, phone or email, and one open question. Add response time messaging next to the submit
        button to reduce uncertainty.
      </AnswerCapsule>
      <P>
        Response time messaging ("We respond within 2 hours") placed next to the submit button
        further increases form completion rates by reducing uncertainty about what happens after
        they click. Three fields, a clear action, and a response time promise — that's all you need.
      </P>

      <H2>Putting It Together</H2>
      <P>
        These five changes — clear CTA, visible phone number, specific social proof, fast mobile
        load, short contact form — are not expensive or technically complex. Most can be implemented
        in a day on an existing site. Combined, they typically move local business conversion rates
        from under 1% to 2–5%. More traffic without these fixes wastes marketing budget. Fix the
        bucket before filling it.
      </P>
    </>
  );
}
