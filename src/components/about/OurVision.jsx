const pillars = [
  {
    number: "01",
    title: "Sustainable Fashion",
    desc: "By 2027, 60% of our catalog will be made from eco-friendly materials. Style and planet can coexist.",
  },
  {
    number: "02",
    title: "Empower Local Designers",
    desc: "We are building a platform for local Bangladeshi designers to showcase their talent to the world.",
  },
  {
    number: "03",
    title: "Fashion For All",
    desc: "No budget limit, no body type limit. Premium fashion should be a right, not a privilege.",
  },
];

const OurVision = () => {
  return (
    <section className="py-24 border-b border-black/10">

      {/* ───── Section Label ───── */}
      <div className="flex items-center gap-4 mb-16">
        <span className="w-8 h-px bg-black" />
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gray-400">
          Our Vision
        </p>
      </div>

      {/* ───── Top Row: Heading + Intro ───── */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black leading-none tracking-tight">
          Dressing <br />
          <span className="text-gray-300">the Future.</span>
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-sm lg:mb-1">
          We are not just selling clothes — we are building a movement. A future
          where fashion is inclusive, sustainable, and deeply human.
        </p>
      </div>

      {/* ───── Full width image ───── */}
      <div className="relative w-full h-64 sm:h-80 lg:h-120 rounded-3xl overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=80"
          alt="Our vision"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with quote */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold max-w-2xl leading-tight">
            "The future of fashion is conscious, inclusive, and unstoppable."
          </p>
          <span className="mt-4 text-white/50 text-xs tracking-widest uppercase">
            Our Manifesto
          </span>
        </div>
      </div>

      {/* ───── Three Pillars ───── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-black/10 rounded-3xl overflow-hidden">
        {pillars.map((pillar, index) => (
          <div
            key={pillar.number}
            className={`p-8 hover:bg-black hover:text-white transition-all duration-300 group
              ${index !== pillars.length - 1 ? "border-b sm:border-b-0 sm:border-r border-black/10" : ""}
            `}
          >
            <span className="text-xs font-bold tracking-widest text-gray-300 group-hover:text-white/40 uppercase">
              {pillar.number}
            </span>
            <h3 className="text-lg font-extrabold text-black group-hover:text-white mt-3 mb-3">
              {pillar.title}
            </h3>
            <p className="text-sm text-gray-500 group-hover:text-white/70 leading-relaxed">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default OurVision;