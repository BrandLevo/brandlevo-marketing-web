import Link from "next/link";
import { Globe, Hash, AtSign, Share2, MapPin, Mail, Phone, ArrowRight } from "lucide-react";

const services = [
  { label: "Web Design & Development", href: "#services" },
  { label: "Local SEO", href: "#services" },
  { label: "Google Business Profile", href: "#services" },
  { label: "AEO — Answer Engine Optimisation", href: "#services" },
  { label: "Hosting & Support", href: "#services" },
];

const company = [
  { label: "About", href: "#about-us" },
  { label: "Our Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Hash, href: "#", label: "X / Twitter" },
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: AtSign, href: "#", label: "Instagram" },
  { icon: Share2, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer id="contact">
      {/* Main footer — deep brand purple */}
      <div className="bg-purple-deeper">
        <div className="max-w-container-max mx-auto px-lg pt-xxl pb-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl mb-xxl">

            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="block mb-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/White.svg" alt="BrandLevo" className="h-10 w-auto" />
              </Link>
              <p className="text-body-sm text-white/70 mb-lg leading-relaxed">
                Websites that bring you customers. We help local businesses turn 5-star reputations into 24/7 revenue machines.
              </p>
              <div className="flex gap-sm mb-xl">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  >
                    <s.icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
              <div className="space-y-sm">
                <a
                  href="mailto:hello@brandlevo.com"
                  className="flex items-center gap-sm text-body-sm text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-purple-light shrink-0" />
                  hello@brandlevo.com
                </a>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-sm text-body-sm text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-purple-light shrink-0" />
                  +1 (555) 123-4567
                </a>
                <span className="flex items-start gap-sm text-body-sm text-white/70">
                  <MapPin className="w-4 h-4 text-purple-light mt-0.5 shrink-0" />
                  Remote-first · Serving clients worldwide
                </span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-eyebrow text-white mb-lg tracking-widest">SERVICES</h4>
              <ul className="space-y-md">
                {services.map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      className="text-body-sm text-white/70 hover:text-white transition-colors"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-eyebrow text-white mb-lg tracking-widest">COMPANY</h4>
              <ul className="space-y-md">
                {company.map((c) => (
                  <li key={c.label}>
                    <Link
                      href={c.href}
                      className="text-body-sm text-white/70 hover:text-white transition-colors"
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-eyebrow text-white mb-lg tracking-widest">STAY IN TOUCH</h4>
              <p className="text-body-sm text-white/70 mb-lg leading-relaxed">
                One practical tip a week to grow your local business. No fluff — unsubscribe anytime.
              </p>
              <div className="flex flex-col gap-sm">
                <input
                  type="email"
                  placeholder="you@yourbusiness.com"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-md py-sm text-body-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors"
                />
                <button className="w-full bg-primary text-white rounded-lg py-sm font-semibold text-body-sm hover:opacity-90 transition-all inline-flex items-center justify-center gap-sm">
                  Subscribe
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar — slightly darker, clear contrast */}
      <div className="bg-ink">
        <div className="max-w-container-max mx-auto px-lg py-lg flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="text-body-sm text-white/60">
            © 2026 BrandLevo. All rights reserved.
          </p>
          <div className="flex gap-lg">
            <a href="#" className="text-body-sm text-white/60 hover:text-white/90 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-body-sm text-white/60 hover:text-white/90 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
