import Link from "next/link";
import { Mail, Phone, MapPin, Hash, Globe, AtSign, Share2 } from "lucide-react";

const services = [
  { label: "Web Design & Development", href: "/services" },
  { label: "Local SEO", href: "/services" },
  { label: "Google Business Profile", href: "/services" },
  { label: "AEO — Answer Engine Optimisation", href: "/services" },
  { label: "Hosting & Support", href: "/services" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: Hash, href: "#", label: "X" },
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: AtSign, href: "#", label: "Instagram" },
  { icon: Share2, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="max-w-container-max mx-auto px-lg">

        {/* Top row: brand + CTA */}
        <div className="py-xxl grid md:grid-cols-2 gap-xl items-center border-b border-white/10">
          <div>
            <Link href="/" className="block mb-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/White.svg" alt="BrandLevo" className="h-9 w-auto" />
            </Link>
            <p className="text-body text-white/60 max-w-xs leading-relaxed">
              Websites that bring you customers. Built for local businesses that are ready to grow.
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-h3 text-white mb-md">
              Ready to get found online?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-sm bg-primary text-white px-xl py-md rounded-full font-semibold hover:opacity-90 transition-all"
            >
              Book a Free Call
            </Link>
          </div>
        </div>

        {/* Middle row: links */}
        <div className="py-xxl grid sm:grid-cols-2 md:grid-cols-4 gap-xl border-b border-white/10">

          {/* Services */}
          <div>
            <p className="text-eyebrow text-white/40 mb-lg">SERVICES</p>
            <ul className="space-y-sm">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-body-sm text-white/60 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-eyebrow text-white/40 mb-lg">COMPANY</p>
            <ul className="space-y-sm">
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="text-body-sm text-white/60 hover:text-white transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-eyebrow text-white/40 mb-lg">CONTACT</p>
            <ul className="space-y-md">
              <li>
                <a href="mailto:hello@brandlevo.com" className="flex items-start gap-sm text-body-sm text-white/60 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                  hello@brandlevo.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="flex items-start gap-sm text-body-sm text-white/60 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-sm text-body-sm text-white/60">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                Remote-first · Worldwide
              </li>
            </ul>
          </div>

          {/* Stay in touch */}
          <div>
            <p className="text-eyebrow text-white/40 mb-lg">FOLLOW US</p>
            <div className="flex flex-wrap gap-sm mb-xl">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl border border-white/10 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
                >
                  <s.icon className="w-4 h-4 text-white/70" />
                </a>
              ))}
            </div>
            <div>
              <p className="text-eyebrow text-white/40 mb-md">WEEKLY TIP</p>
              <div className="flex gap-sm">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-md py-sm text-body-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 transition-colors"
                />
                <button className="shrink-0 bg-primary text-white px-md py-sm rounded-lg text-body-sm font-semibold hover:opacity-90 transition-all">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-lg flex flex-col sm:flex-row justify-between items-center gap-sm">
          <p className="text-body-sm text-white/40">
            © 2026 BrandLevo. All rights reserved.
          </p>
          <div className="flex items-center gap-lg">
            <a href="#" className="text-body-sm text-white/40 hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="text-body-sm text-white/40 hover:text-white/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
