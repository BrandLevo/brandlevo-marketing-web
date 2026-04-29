export default function MissionVisionSection() {
  return (
    <section className="py-xxxl px-lg bg-surface">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-xxl items-center">
        <div className="space-y-xl">
          <div className="border-l-4 border-primary pl-lg">
            <h2 className="font-h2 text-h2 mb-md">Our Mission</h2>
            <p className="font-body text-body text-slate">
              To systematic professionalize brand equity through functional
              design systems that empower businesses to scale with clarity and
              purpose.
            </p>
          </div>
          <div className="border-l-4 border-mist pl-lg">
            <h2 className="font-h2 text-h2 mb-md">Our Vision</h2>
            <p className="font-body text-body text-slate">
              Creating a future where every brand interaction is meaningful,
              consistent, and powered by rigorous design intelligence.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-md">
          <div className="bg-purple-xpale p-lg rounded-xl flex flex-col justify-center text-center">
            <span className="text-h1 font-h1 text-primary">12y</span>
            <span className="font-eyebrow text-eyebrow">EXPERIENCE</span>
          </div>
          <div className="bg-fog p-lg rounded-xl flex flex-col justify-center text-center">
            <span className="text-h1 font-h1 text-ink">450+</span>
            <span className="font-eyebrow text-eyebrow">PROJECTS</span>
          </div>
          <div className="bg-ink p-lg rounded-xl flex flex-col justify-center text-center col-span-2">
            <span className="text-h1 font-h1 text-white">99%</span>
            <span className="font-eyebrow text-eyebrow text-mist">CLIENT RETENTION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
