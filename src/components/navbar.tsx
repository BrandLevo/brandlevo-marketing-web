"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={[
          "bg-white/95 backdrop-blur-md border-b border-fog sticky top-0 z-50 transition-all duration-300",
          scrolled ? "shadow-sm" : "shadow-none",
        ].join(" ")}
      >
        <div className="max-w-container-max mx-auto px-md sm:px-xl">
          <div className="h-24 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" onClick={close} className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-white.svg" alt="BrandLevo" className="h-14 w-auto" />
            </Link>

            {/* Pill nav — desktop (lg+) */}
            <nav className="hidden lg:flex items-center bg-snow border border-fog rounded-full px-1.5 py-1.5 gap-0.5">
              {links.map((l) => {
                const isActive = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={[
                      "text-body-sm px-md py-[6px] rounded-full transition-all duration-200 whitespace-nowrap",
                      isActive
                        ? "bg-primary text-white font-semibold shadow-sm"
                        : "text-slate font-medium hover:text-primary hover:bg-purple-xpale",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right — CTA + hamburger */}
            <div className="flex items-center gap-sm">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center bg-primary text-white px-lg py-[9px] rounded-full text-body-sm font-semibold hover:opacity-90 hover:-translate-y-px transition-all active:scale-95 shadow-sm"
              >
                Book a Free Brand Audit
              </Link>

              {/* Compact CTA on md only (between 768–1024px) */}
              <Link
                href="/contact"
                className="hidden md:inline-flex lg:hidden items-center bg-primary text-white px-md py-[7px] rounded-full text-body-sm font-semibold hover:opacity-90 transition-all"
              >
                Free Audit
              </Link>

              {/* Hamburger — below lg */}
              <button
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="lg:hidden w-9 h-9 rounded-lg border border-fog flex items-center justify-center text-slate hover:text-primary hover:border-primary/50 transition-colors"
              >
                {open ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={close}
        role="presentation"
        className={[
          "fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm lg:hidden transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden="true"
      />

      {/* Mobile / tablet drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          "fixed top-24 left-0 right-0 z-40 bg-white border-b border-fog shadow-lg lg:hidden",
          "transition-all duration-300 ease-in-out origin-top",
          open ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none",
        ].join(" ")}
      >
        <nav className="max-w-container-max mx-auto px-md py-md flex flex-col gap-xs">
          {[...links, { label: "Contact", href: "/contact" }].map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className={[
                  "px-md py-[10px] rounded-xl text-body-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/8 text-primary font-semibold"
                    : "text-ink hover:text-primary hover:bg-purple-xpale",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}

          <div className="my-xs border-t border-fog" />

          <Link
            href="/contact"
            onClick={close}
            className="inline-flex justify-center items-center bg-primary text-white px-xl py-[10px] rounded-full text-body-sm font-semibold hover:opacity-90 transition-all active:scale-95"
          >
            Book a Free Brand Audit
          </Link>
        </nav>
      </div>
    </>
  );
}
