import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-xxxl pb-xxl px-lg bg-snow">
      <div className="max-w-container-max mx-auto grid lg:grid-cols-2 items-center gap-xl">

        {/* Left: Copy */}
        <div className="z-10">
          <h1 className="text-h1 text-ink mb-lg">
            Get a Website That Actually{" "}
            <span className="text-primary italic">Brings You Customers</span>
            {" "}— Without the Tech Headache.
          </h1>

          <p className="text-body-lg text-slate max-w-lg mb-xl">
            Most small businesses lose customers every day to competitors who show up first on Google. We build simple, beautiful websites for local businesses — so the phone rings, the bookings come in, and you can get back to running the business you love.
          </p>

          <div className="flex flex-wrap items-center gap-md mb-xl">
            <Link
              href="#audit"
              className="bg-primary text-on-primary px-xl py-md rounded-lg font-semibold shadow-md hover:opacity-90 hover:-translate-y-px transition-all active:scale-95 inline-flex items-center gap-sm"
            >
              Get My Free Website Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#process"
              className="text-ink font-semibold hover:text-primary transition-colors inline-flex items-center gap-xs"
            >
              See How It Works →
            </Link>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center gap-md pt-lg border-t border-fog">
            <div className="flex items-center gap-xs">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </span>
              <span className="text-body-sm text-slate font-medium">4.9/5 from 80+ local businesses</span>
            </div>
            <span className="text-fog hidden sm:block">|</span>
            <div className="flex items-center gap-xs">
              <CheckCircle className="w-3.5 h-3.5 text-mint" />
              <span className="text-body-sm text-slate font-medium">No long-term contracts</span>
            </div>
            <span className="text-fog hidden sm:block">|</span>
            <div className="flex items-center gap-xs">
              <CheckCircle className="w-3.5 h-3.5 text-mint" />
              <span className="text-body-sm text-slate font-medium">Sites live in 14 days</span>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl purple-glow relative">
            <Image
              alt="Small business owner seeing their new website"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa639eI2IWpe9bgLlrazPLPLKtvOx7quSn5lOVYZltri3x5mziKw9rdZ0nh2rYXCPezuHZt8uO5dAo2iel9sn7tw0hbd5gNQntFxxqf5oHvJh4C6B2Za6PSvjesrSNZ6MzZ6vMhIisKe6OehP-wmBhMW5Pt1uiU-xsUZTIIiWFLyI-jmuCB81UEjkZcP2DsVrpgXVD5xLluX3FUcRbuQP1D1Kk5tvWsf9mrKvFGU7_DW96Kx88XCi7sqlTnIN7B4e1tug_ZGaQaC0"
              fill
              unoptimized
            />
          </div>

          {/* Floating testimonial */}
          <div className="absolute -bottom-sm -left-sm bg-surface p-lg rounded-xl shadow-xl border border-fog max-w-[230px]">
            <div className="flex gap-xs mb-xs">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-mint text-mint" />
              ))}
            </div>
            <p className="text-body-sm text-ink font-medium leading-snug">
              "We went from invisible online to fully booked in 60 days."
            </p>
            <p className="text-eyebrow text-slate mt-xs">— Maria R., Local Salon Owner</p>
          </div>

          {/* Floating stat */}
          <div className="absolute -top-sm -right-sm bg-primary p-md rounded-xl shadow-xl text-center min-w-[120px]">
            <p className="text-h2 text-white font-bold leading-none">+340%</p>
            <p className="text-eyebrow text-purple-pale mt-xs">MORE LEADS</p>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-0 right-0 -z-0 opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-primary rounded-full blur-[120px] -mr-40 -mt-40" />
      </div>
    </section>
  );
}
