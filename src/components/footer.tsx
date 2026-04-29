import Link from "next/link";
import { Globe, Hash, AtSign, Share2, MapPin, Mail, Phone } from "lucide-react";

const services = [
  "Web Design & Development",
  "Search Engine Optimisation",
  "Answer Engine Optimisation",
  "Digital Marketing",
  "Brand Identity & Design",
];

const company = [
  { label: "About Us", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Insights", href: "#insights" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#contact" },
];

const resources = [
  { label: "Free Digital Audit", href: "#audit" },
  { label: "Blog", href: "#insights" },
  { label: "FAQ", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socials = [
  { icon: Hash, href: "#", label: "X / Twitter" },
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: AtSign, href: "#", label: "Instagram" },
  { icon: Share2, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-mist" id="contact">

      {/* Main footer grid */}
      <div className="max-w-container-max mx-auto px-lg pt-xxl pb-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl mb-xxl">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white font-display tracking-tight block mb-lg">
              BrandLevo
            </Link>
            <p className="text-body-sm text-mist mb-xl leading-relaxed">
              We help local businesses turn 5-star reputations into high-performance digital presences. Design, development, SEO, AEO, and digital marketing — all under one roof.
            </p>
            <div className="flex gap-md">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg bg-graphite hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <s.icon className="w-4 h-4 text-mist" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-eyebrow text-white mb-lg">SERVICES</h4>
            <ul className="space-y-md">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-body-sm text-mist hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-eyebrow text-white mb-lg">COMPANY</h4>
            <ul className="space-y-md">
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="text-body-sm text-mist hover:text-white transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-eyebrow text-white mb-lg">GET IN TOUCH</h4>
            <ul className="space-y-lg">
              <li className="flex items-start gap-sm">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="mailto:hello@brandlevo.com" className="text-body-sm text-mist hover:text-white transition-colors">
                  hello@brandlevo.com
                </a>
              </li>
              <li className="flex items-start gap-sm">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="tel:+15551234567" className="text-body-sm text-mist hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-body-sm text-mist">
                  Remote-first · Serving clients nationwide
                </span>
              </li>
            </ul>

            <div className="mt-xl">
              <h4 className="text-eyebrow text-white mb-lg">RESOURCES</h4>
              <ul className="space-y-md">
                {resources.slice(0, 3).map((r) => (
                  <li key={r.label}>
                    <Link href={r.href} className="text-body-sm text-mist hover:text-white transition-colors">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-graphite pt-lg flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="text-eyebrow text-slate">
            © 2025 BrandLevo. All rights reserved.
          </p>
          <div className="flex gap-lg">
            {resources.slice(3).map((r) => (
              <Link key={r.label} href={r.href} className="text-eyebrow text-slate hover:text-mist transition-colors">
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
