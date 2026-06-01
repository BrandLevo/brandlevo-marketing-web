import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing use of the BrandLevo website and services.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="bg-white py-xxxl px-lg">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-h1 text-ink mb-sm">Terms of Service</h1>
        <p className="text-body-sm text-slate mb-xxl">Last updated: 1 June 2026</p>

        <div className="space-y-xl text-slate text-body leading-relaxed">

          <section>
            <h2 className="text-h3 text-ink mb-md">1. Who these terms apply to</h2>
            <p>
              These terms govern your use of the BrandLevo website at brandlevo.com (&quot;Site&quot;) operated by BrandLevo, Kakkanad, Kochi, Kerala, India — 682042.
              By accessing or using this Site, you agree to these terms. If you do not agree, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">2. What the Site is for</h2>
            <p>
              This Site provides information about BrandLevo&apos;s digital marketing services and allows you to enquire about or book a consultation. It is not a marketplace, SaaS platform, or subscription service.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">3. Accuracy of information</h2>
            <p>
              We make reasonable efforts to keep the information on this Site accurate and up to date. However, we make no warranties — express or implied — about the completeness, accuracy, or reliability of any content on the Site. Pricing, availability, and service descriptions are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">4. Free audit call</h2>
            <p>
              The free 20-minute audit call is a genuine no-obligation consultation. There is no charge for the call. We will share our findings with you regardless of whether you proceed with a paid engagement. Booking a call does not create a contract for services.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">5. Intellectual property</h2>
            <p>
              All content on this Site — including text, graphics, logos, and code — is owned by or licensed to BrandLevo. You may not reproduce, distribute, or create derivative works without our express written permission. Linking to the Site is permitted provided it does not imply endorsement.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">6. External links</h2>
            <p>
              This Site links to third-party services including Calendly and WhatsApp. We are not responsible for the content, privacy practices, or terms of those services. Clicking an external link is at your own discretion.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">7. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by applicable law, BrandLevo shall not be liable for any indirect, incidental, or consequential damages arising from your use of — or inability to use — this Site. Our total liability for any claim arising from use of the Site shall not exceed INR 1,000.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">8. Governing law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising from these terms or your use of this Site shall be subject to the exclusive jurisdiction of the courts in Ernakulam, Kerala, India.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">9. Changes to these terms</h2>
            <p>
              We may update these terms at any time. The date at the top of this page reflects the most recent revision. Continued use of the Site after changes are posted constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">10. Contact</h2>
            <p>
              Questions about these terms? Email <a href="mailto:sales@brandlevo.com" className="text-primary hover:underline">sales@brandlevo.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
