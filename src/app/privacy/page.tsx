import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How BrandLevo collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="bg-white py-xxxl px-lg">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-h1 text-ink mb-sm">Privacy Policy</h1>
        <p className="text-body-sm text-slate mb-xxl">Last updated: 1 June 2026</p>

        <div className="prose-custom space-y-xl text-slate text-body leading-relaxed">

          <section>
            <h2 className="text-h3 text-ink mb-md">1. Who we are</h2>
            <p>
              BrandLevo (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a digital marketing agency based in Kakkanad, Kochi, Kerala, India — 682042.
              We provide AI-powered websites, SEO, AEO, and brand growth services.
              You can reach us at <a href="mailto:sales@brandlevo.com" className="text-primary hover:underline">sales@brandlevo.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">2. What information we collect</h2>
            <p className="mb-sm">We only collect information you give us directly:</p>
            <ul className="list-disc pl-lg space-y-xs">
              <li><strong>Contact form</strong> — first name, last name, email address, business name, and your message.</li>
              <li><strong>Booking calls</strong> — when you book via Calendly, Calendly collects your name, email, and preferred time slot. We receive a copy of that booking confirmation.</li>
              <li><strong>Email correspondence</strong> — any emails you send to our business address.</li>
            </ul>
            <p className="mt-sm">We do not use cookies, tracking pixels, or analytics tools on this site. We do not collect any information passively.</p>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">3. How we use your information</h2>
            <ul className="list-disc pl-lg space-y-xs">
              <li>To respond to your enquiry or message.</li>
              <li>To schedule and conduct your free audit call.</li>
              <li>To send you a proposal or follow-up you have requested.</li>
            </ul>
            <p className="mt-sm">We do not send unsolicited marketing emails. We do not sell, rent, or share your data with any third party for their marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">4. Third-party services</h2>
            <ul className="list-disc pl-lg space-y-xs">
              <li><strong>Resend</strong> — we use Resend to deliver email from our contact form. Your form submission is transmitted to Resend&apos;s servers to send the email. See <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Resend&apos;s Privacy Policy</a>.</li>
              <li><strong>Calendly</strong> — booking calls are managed through Calendly. When you book a call, you interact directly with Calendly&apos;s platform. See <a href="https://calendly.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Calendly&apos;s Privacy Policy</a>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">5. How long we keep your data</h2>
            <p>
              We retain your contact details and message for as long as necessary to manage your enquiry and any resulting project relationship — typically no longer than 3 years after our last interaction. You can ask us to delete your data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">6. Your rights</h2>
            <p className="mb-sm">You have the right to:</p>
            <ul className="list-disc pl-lg space-y-xs">
              <li>Request a copy of the personal information we hold about you.</li>
              <li>Ask us to correct inaccurate information.</li>
              <li>Ask us to delete your information.</li>
              <li>Withdraw any consent you have given at any time.</li>
            </ul>
            <p className="mt-sm">
              To exercise any of these rights, email us at <a href="mailto:sales@brandlevo.com" className="text-primary hover:underline">sales@brandlevo.com</a> with the subject line &quot;Data Request&quot;. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">7. Security</h2>
            <p>
              This website is served over HTTPS. Form submissions are transmitted securely. We do not store payment card information — we do not process payments online.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">8. Changes to this policy</h2>
            <p>
              If we make material changes to this policy, we will update the date at the top of this page. Continued use of our site after any change constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-ink mb-md">9. Contact</h2>
            <p>
              Questions about this policy? Email <a href="mailto:sales@brandlevo.com" className="text-primary hover:underline">sales@brandlevo.com</a> or write to us at BrandLevo, Kakkanad, near Infopark, Kochi, Kerala 682042, India.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
