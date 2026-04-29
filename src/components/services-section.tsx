import Image from "next/image";
import { TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-xxxl px-lg bg-snow">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-xxl">
          <span className="font-eyebrow text-eyebrow text-primary">
            CORE CAPABILITIES
          </span>
          <h2 className="font-h2 text-h2 mt-sm">Systematic Design Solutions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md h-auto md:h-[600px]">
          {/* Service 1: Strategy */}
          <div className="md:col-span-1 md:row-span-2 bg-surface p-xl rounded-2xl border border-fog flex flex-col justify-between bento-card shadow-sm hover:shadow-md">
            <div>
              <div className="w-12 h-12 bg-purple-xpale rounded-lg flex items-center justify-center mb-lg">
                <TrendingUp className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-h3 text-h3 mb-md">Strategic Intelligence</h3>
              <p className="text-slate font-body mb-md">
                Competitive auditing and market positioning built on
                data-driven insights rather than just trends.
              </p>
            </div>
            <ul className="space-y-sm">
              <li className="flex items-center gap-sm font-body-sm text-ink">
                <CheckCircle className="text-primary w-4 h-4" />
                Competitive Audits
              </li>
              <li className="flex items-center gap-sm font-body-sm text-ink">
                <CheckCircle className="text-primary w-4 h-4" />
                Market Positioning
              </li>
            </ul>
          </div>
          {/* Service 2: Identity */}
          <div className="md:col-span-2 bg-purple-deeper p-xl rounded-2xl flex items-center justify-between overflow-hidden relative bento-card">
            <div className="relative z-10 max-w-sm">
              <h3 className="font-h3 text-h3 text-white mb-md">Brand Identity</h3>
              <p className="text-mist font-body">
                Crafting visual languages that resonate. We create the soul of
                your business through typography and form.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-40">
              <Image
                alt="Minimal logo concepts"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx0XaNH9M4Ldhrvbf_HWjT1awX__Wa2BnkX_5kMq5l0zNc6fA6Sgxy5crpKZlDC7eJ6SFAu-xLgZDcpojRcdgHjdjdBlVOOWQdK_sQqWIwF5z0APmFkPV8nse2n9aYgyVHA9CM1BJ8u0pKWqnrKakP0I_0nEzuJNI2LXCQI15m_mM-h5N_iI9C2sSKhvNZGx5OZ0H0p1-AtBFZWR3gBik-43WiQ9bTDYq7q8YY9-G26gZeSIb4W9na2ycUPjK8cfNlzzSPJA9hkIc"
                fill
                unoptimized
              />
            </div>
          </div>
          {/* Service 3: Systematic Design */}
          <div className="md:col-span-2 bg-surface p-xl rounded-2xl border border-fog flex flex-col md:flex-row gap-lg bento-card shadow-sm hover:shadow-md">
            <div className="flex-1">
              <h3 className="font-h3 text-h3 mb-md">Systematic Design</h3>
              <p className="text-slate font-body mb-lg">
                Scalable design systems that bridge the gap between marketing
                and product engineering teams.
              </p>
              <button className="text-primary font-bold flex items-center gap-sm hover:gap-md transition-all cursor-pointer bg-transparent border-none p-0">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-sm">
              <div className="bg-fog h-20 rounded-lg flex items-center justify-center font-mono text-xs">
                ATOM.01
              </div>
              <div className="bg-purple-pale h-20 rounded-lg flex items-center justify-center font-mono text-xs">
                MOL.02
              </div>
              <div className="bg-purple-xpale h-20 rounded-lg flex items-center justify-center font-mono text-xs">
                ORG.03
              </div>
              <div className="bg-mist h-20 rounded-lg flex items-center justify-center font-mono text-xs">
                SYS.04
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
