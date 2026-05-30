import Link from "next/link";
import { Hash, Globe, AtSign, Share2, Mail, Phone } from "lucide-react";

const services = [
  { label: "AEO — AI Search", href: "/services" },
  { label: "SEO & Local Search", href: "/services" },
  { label: "Website Development", href: "/services" },
  { label: "ICP Strategy", href: "/services" },
  { label: "Sales Consultation", href: "/services" },
  { label: "Brand Uplift", href: "/services" },
  { label: "Content & Copywriting", href: "/services" },
  { label: "Hosting & Support", href: "/services" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

// Update "#" hrefs with real profile URLs when created
const socials = [
  { icon: Hash, href: "#", label: "X (Twitter)" },       // TODO: https://twitter.com/brandlevo
  { icon: Globe, href: "https://www.linkedin.com/company/brandlevo/", label: "LinkedIn" },
  { icon: AtSign, href: "https://www.instagram.com/brandlevo/", label: "Instagram" },
  { icon: Share2, href: "#", label: "Facebook" },         // TODO: https://facebook.com/brandlevo
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
              <img src="/logo.svg" alt="BrandLevo" className="h-9 w-auto" />
            </Link>
            <p className="text-body-sm text-slate leading-relaxed max-w-[220px]">
              Where Intelligence Meets Elevation. AI-native strategy for brands ready to dominate.
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
                  <a href="mailto:sales@brandlevo.com" className="flex items-center gap-xs text-body-sm text-slate hover:text-primary transition-colors">
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    sales@brandlevo.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919895883315" className="flex items-center gap-xs text-body-sm text-slate hover:text-primary transition-colors">
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    +91 98958 83315
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
