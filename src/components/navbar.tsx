"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-fog/60">
        <div className="max-w-container-max mx-auto px-md sm:px-xl">
          <div className="h-16 flex items-center justify-between gap-xl">

            {/* Logo */}
            <Link href="/" onClick={close} className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Original.svg" alt="BrandLevo" className="h-10 w-auto" />
            </Link>

            {/* Nav pill — desktop */}
            <nav className="hidden md:flex items-center gap-xs bg-snow border border-fog rounded-full px-md py-[6px]">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-body font-medium text-slate hover:text-primary transition-colors px-md py-[6px] rounded-full hover:bg-purple-xpale"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-md">
              <a
                href="tel:+15551234567"
                className="hidden lg:flex items-center gap-xs text-body text-slate hover:text-primary transition-colors font-medium"
              >
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567
              </a>
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center bg-primary text-white px-lg py-[10px] rounded-full font-semibold text-body hover:opacity-90 hover:-translate-y-px transition-all active:scale-95 shadow-sm"
              >
                Book a Free Call
              </Link>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate hover:text-primary hover:bg-purple-xpale transition-colors"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ───────────────────────────────────────── */}
      {/* Backdrop */}
      <div
        onClick={close}
        className={[
          "fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm md:hidden transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden="true"
      />

      {/* Slide-down panel */}
      <div
        className={[
          "fixed top-16 left-0 right-0 z-40 bg-white border-b border-fog shadow-xl md:hidden",
          "transition-all duration-300 ease-in-out origin-top",
          open ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none",
        ].join(" ")}
      >
        <nav className="max-w-container-max mx-auto px-md py-lg flex flex-col gap-xs">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="text-body font-medium text-ink hover:text-primary hover:bg-purple-xpale rounded-xl px-md py-md transition-colors"
            >
              {l.label}
            </Link>
          ))}

          {/* Divider */}
          <div className="my-sm border-t border-fog" />

          {/* Phone */}
          <a
            href="tel:+15551234567"
            onClick={close}
            className="flex items-center gap-sm text-body text-slate hover:text-primary transition-colors font-medium px-md py-md rounded-xl hover:bg-purple-xpale"
          >
            <Phone className="w-4 h-4" />
            +1 (555) 123-4567
          </a>

          {/* CTA */}
          <Link
            href="/contact"
            onClick={close}
            className="mt-sm inline-flex justify-center items-center bg-primary text-white px-xl py-md rounded-full font-semibold text-body hover:opacity-90 transition-all active:scale-95 shadow-sm"
          >
            Book a Free Call
          </Link>
        </nav>
      </div>
    </>
  );
}
