const reasons = [
  {
    icon: "✦",
    title: "Premium Quality",
    desc: "Every product is handpicked and quality-checked before it reaches you. No compromises, ever.",
    stat: "10K+",
    statLabel: "Products Checked",
  },
  {
    icon: "◈",
    title: "Affordable Prices",
    desc: "We work directly with brands to cut out the middleman and pass the savings straight to you.",
    stat: "40%",
    statLabel: "Avg. Savings",
  },
  {
    icon: "⟳",
    title: "Fast Delivery",
    desc: "Order today, wear tomorrow. We ship across the country within 24–48 hours, guaranteed.",
    stat: "24hr",
    statLabel: "Avg. Delivery",
  },
  {
    icon: "◎",
    title: "Easy Returns",
    desc: "Not happy? Return within 30 days — no questions asked, full refund guaranteed every time.",
    stat: "30",
    statLabel: "Day Returns",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 border-b border-black/10">

      {/* ───── Section Label ───── */}
      <div className="flex items-center gap-4 mb-16">
        <span className="w-8 h-px bg-black" />
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gray-400">
          Why Choose Us
        </p>
      </div>

      {/* ───── Heading Row ───── */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black leading-none tracking-tight">
          More Than <br />
          <span className="text-gray-300">Just Clothes.</span>
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-sm lg:mb-1">
          We obsess over every detail so you don't have to. From the stitch to
          the shipment — we've got you covered.
        </p>
      </div>

      {/* ───── Cards Grid ───── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reasons.map((reason, index) => (
          <div
            key={reason.title}
            className={`relative p-8 rounded-3xl border border-black/10 group hover:border-black transition-all duration-300 overflow-hidden
              ${index === 0 ? "bg-black text-white" : "bg-white"}
            `}
          >
            {/* ───── Big background number ───── */}
            <p
              className={`absolute -bottom-4 -right-2 text-[100px] font-extrabold leading-none select-none pointer-events-none
                ${index === 0 ? "text-white/5" : "text-black/5"}
              `}
            >
              {String(index + 1).padStart(2, "0")}
            </p>

            {/* ───── Icon ───── */}
            <span
              className={`text-2xl mb-6 block ${
                index === 0 ? "text-white/60" : "text-black/30"
              }`}
            >
              {reason.icon}
            </span>

            {/* ───── Title ───── */}
            <h3
              className={`text-xl font-extrabold mb-3 ${
                index === 0 ? "text-white" : "text-black"
              }`}
            >
              {reason.title}
            </h3>

            {/* ───── Desc ───── */}
            <p
              className={`text-sm leading-relaxed mb-8 ${
                index === 0 ? "text-white/60" : "text-gray-500"
              }`}
            >
              {reason.desc}
            </p>

            {/* ───── Bottom stat ───── */}
            <div
              className={`flex items-end gap-2 border-t pt-6 ${
                index === 0 ? "border-white/10" : "border-black/10"
              }`}
            >
              <p
                className={`text-3xl font-extrabold leading-none ${
                  index === 0 ? "text-white" : "text-black"
                }`}
              >
                {reason.stat}
              </p>
              <p
                className={`text-xs mb-0.5 uppercase tracking-widest ${
                  index === 0 ? "text-white/40" : "text-gray-400"
                }`}
              >
                {reason.statLabel}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WhyChooseUs;