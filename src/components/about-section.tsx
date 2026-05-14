import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-xxxl px-lg bg-snow" id="about-us">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-xxl items-center">

        {/* Left: Visual */}
        <div className="reveal-left relative aspect-[4/3] rounded-2xl overflow-hidden bg-fog flex items-center justify-center order-2 md:order-1">
          <div className="text-center p-xl">
            <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-lg flex items-center justify-center text-white text-2xl font-bold font-display">
              BL
            </div>
            <p className="text-h4 text-ink mb-xs">BrandLevo Team</p>
            <p className="text-body-sm text-slate">Designers · Developers · Marketers</p>
          </div>
        </div>

        {/* Right: Copy */}
        <div className="reveal-right order-1 md:order-2">
          <span className="text-eyebrow text-primary block mb-md">ABOUT US</span>
          <h2 className="text-h2 text-ink mb-xl">
            Built for Small Businesses,{" "}
            <span className="text-primary italic">By People Who've Run Them.</span>
          </h2>

          <p className="text-body-lg text-slate mb-lg">
            BrandLevo started when our founder watched his dad — a 30-year veteran electrician — lose business to a competitor with a flashy website and half the experience. We built his dad a site. The phone hasn't stopped ringing since.
          </p>
          <p className="text-body text-slate mb-xxl">
            That's why we exist: to give small, hardworking businesses the digital presence the big guys take for granted. No agency-speak. No 80-page contracts. Just websites that work — and a team that stays in your corner.
          </p>

          <Link
            href="#audit"
            className="inline-flex items-center gap-sm bg-primary text-on-primary px-xl py-md rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            Work With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
