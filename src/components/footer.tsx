import Link from "next/link";
import { Hash, Globe, AtSign, Share2, Mail, Phone } from "lucide-react";

const services = [
  { label: "Web Design & Dev", href: "/services" },
  { label: "Local SEO", href: "/services" },
  { label: "Google Business Profile", href: "/services" },
  { label: "AEO — AI Search", href: "/services" },
  { label: "Hosting & Support", href: "/services" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: Hash, href: "#", label: "X (Twitter)" },
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: AtSign, href: "#", label: "Instagram" },
  { icon: Share2, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="reveal bg-snow border-t border-fog">
      <div className="max-w-container-max mx-auto px-md sm:px-xl">

        {/* Main row */}
        <div className="py-xxl grid md:grid-cols-[1fr_2fr] gap-xl md:gap-xxl">

          {/* Brand column */}
          <div>
            <Link href="/" className="block mb-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Original.svg" alt="BrandLevo" className="h-9 w-auto" />
            </Link>
            <p className="text-body-sm text-slate leading-relaxed max-w-[220px]">
              Where intelligence meets elevation. AI-powered growth for brands ready to rise.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-lg sm:gap-xl">
            {/* Services */}
            <div>
              <p className="text-eyebrow text-slate font-semibold tracking-widest uppercase mb-md">Services</p>
              <ul className="space-y-sm">
                {services.map((s) => (
                  <li key={s.label}>
                    <Link href={s.href} className="text-body-sm text-slate hover:text-primary transition-colors">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-eyebrow text-slate font-semibold tracking-widest uppercase mb-md">Company</p>
              <ul className="space-y-sm">
                {company.map((c) => (
                  <li key={c.label}>
                    <Link href={c.href} className="text-body-sm text-slate hover:text-primary transition-colors">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-eyebrow text-slate font-semibold tracking-widest uppercase mb-md">Contact</p>
              <ul className="space-y-sm">
                <li>
                  <a href="mailto:hello@brandlevo.com" className="flex items-center gap-xs text-body-sm text-slate hover:text-primary transition-colors">
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    hello@brandlevo.com
                  </a>
                </li>
                <li>
                  <a href="tel:+15551234567" className="flex items-center gap-xs text-body-sm text-slate hover:text-primary transition-colors">
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    +1 (555) 123-4567
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-fog py-lg flex flex-col sm:flex-row items-center justify-between gap-sm sm:gap-md">
          <p className="text-body-sm text-slate">© 2026 BrandLevo. All rights reserved.</p>

          <div className="flex items-center gap-lg">
            <a href="#" className="text-body-sm text-slate hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-body-sm text-slate hover:text-primary transition-colors">Terms</a>
          </div>

          <div className="flex items-center gap-sm">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-lg border border-fog bg-white flex items-center justify-center hover:border-primary hover:text-primary transition-all text-slate"
              >
                <s.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
