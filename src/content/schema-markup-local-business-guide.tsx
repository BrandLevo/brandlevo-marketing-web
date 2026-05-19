import { AnswerCapsule, H2, H3, P, UL, LI, OL, OLI, Strong, Pre } from "@/components/article-components";

export default function ArticleContent() {
  return (
    <>
      <H2>What Is Schema Markup and Why Does It Matter?</H2>
      <AnswerCapsule>
        Schema markup (structured data) is code you add to your website that explicitly describes
        your content to search engines and AI tools in a machine-readable format. For local
        businesses, it's the technical bridge between having quality content and getting that content
        cited by AI engines. Without it, even well-written pages rely on AI tools to guess rather
        than extract and cite with confidence.
      </AnswerCapsule>
      <P>
        Businesses with complete schema markup earn AI citations, rich search results, and local
        knowledge panel features at significantly higher rates than those without it. Pages with
        FAQPage schema are 60% more likely to appear in Google AI Overviews. The implementation
        takes a few hours and the results compound indefinitely.
      </P>

      <H2>The Five Schema Types That Matter Most for Local Businesses</H2>
      <AnswerCapsule>
        The five schema types with the most impact for local businesses in priority order:
        FAQPage (60% more likely to appear in AI Overviews), LocalBusiness (establishes your
        location and service area), Organization (builds entity identity across AI platforms),
        Article (marks up blog content with author and date), and BreadcrumbList (provides
        contextual navigation for AI tools).
      </AnswerCapsule>

      <H3>1. LocalBusiness Schema</H3>
      <P>
        LocalBusiness schema establishes your physical location, contact details, and service area
        for search engines and AI tools. Add it to your homepage and contact page. At minimum,
        include your business name, address, phone number, URL, opening hours, and the services you
        offer.
      </P>
      <Pre>{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 High Street",
    "addressLocality": "Manchester",
    "postalCode": "M1 1AE",
    "addressCountry": "GB"
  },
  "telephone": "+44-161-000-0000",
  "url": "https://yourbusiness.com",
  "openingHours": "Mo-Fr 09:00-17:30"
}`}</Pre>

      <H3>2. FAQPage Schema</H3>
      <P>
        FAQPage schema is the single highest-impact AEO implementation step. Pages with FAQPage
        JSON-LD are 60% more likely to appear in Google AI Overviews. Add it to any page that
        contains question-and-answer content — service pages, your homepage, blog articles. Every
        Q&amp;A pair in your FAQ section should be included in the schema.
      </P>
      <Pre>{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What services do you offer?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer AEO, SEO, website development, and brand strategy."
    }
  }]
}`}</Pre>

      <H3>3. Organization Schema</H3>
      <P>
        Organization schema establishes your brand as a recognised entity across the web. Add it to
        your homepage. The critical field is <code className="text-primary bg-primary/8 px-sm py-[2px] rounded text-body-sm font-mono">sameAs</code> —
        include all your social profile URLs. This connects your website entity to your social
        presence, increasing AI tool confidence when recommending your business.
      </P>

      <H3>4. Article Schema</H3>
      <P>
        Add Article (or BlogPosting) schema to every blog article you publish. Include the headline,
        author name, published date, modified date, and publisher organisation. This tells AI tools
        your content is from a real author associated with a real organisation, dramatically
        increasing the likelihood of citation.
      </P>

      <H3>5. BreadcrumbList Schema</H3>
      <P>
        BreadcrumbList schema marks up the navigation hierarchy of your page. It appears in Google
        search results as navigational breadcrumbs and provides contextual location information to
        AI tools. Add it to all pages below your homepage (service pages, blog posts, about page).
      </P>

      <H2>How to Add JSON-LD Schema to Your Website</H2>
      <AnswerCapsule>
        JSON-LD schema is added as a script tag in your page HTML — typically in the head section
        or before the closing body tag. It does not affect your visible page content or design. In
        Next.js App Router, use a server component script tag. In WordPress, use Yoast SEO or Rank
        Math for automatic schema generation, or add JSON-LD directly to page templates.
      </AnswerCapsule>
      <P>
        In Next.js (App Router), add schema using a server component:
      </P>
      <Pre>{`export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    // ...
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* page content */}
    </>
  );
}`}</Pre>

      <H2>Validating Your Schema</H2>
      <AnswerCapsule>
        After adding schema markup, validate it immediately using Google's Rich Results Test at
        search.google.com/test/rich-results. Enter your page URL or paste your HTML and check for
        errors (red) and warnings (yellow). Fix all errors before publishing — incorrect schema is
        ignored or, in cases of deliberate misrepresentation, can result in a manual penalty.
      </AnswerCapsule>
      <OL>
        <OLI>Go to <Strong>search.google.com/test/rich-results</Strong></OLI>
        <OLI>Enter your page URL or paste your HTML</OLI>
        <OLI>Check for errors (red) and warnings (yellow) — fix all errors before publishing</OLI>
        <OLI>Verify the schema types Google detected match what you intended</OLI>
        <OLI>Re-validate every time you update your schema</OLI>
      </OL>

      <H2>Schema Maintenance</H2>
      <P>
        Schema markup requires occasional maintenance as your business changes. Update your
        LocalBusiness schema when you change phone numbers, addresses, or hours. Add new FAQ entries
        as your most common questions evolve. Keep article dates current — AI engines use{" "}
        <code className="text-primary bg-primary/8 px-sm py-[2px] rounded text-body-sm font-mono">dateModified</code>{" "}
        as a freshness signal. Set a monthly reminder to review and update your core schema files.
      </P>
    </>
  );
}
