const ContactHero = () => {
  return (
    <section className="py-20 border-b border-black/10">

      {/* ───── Label ───── */}
      <div className="flex items-center gap-4 mb-10">
        <span className="w-8 h-px bg-black" />
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gray-400">
          Get In Touch
        </p>
      </div>

      {/* ───── Heading + subtext ───── */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-black leading-none tracking-tight">
          Let's <br />
          <span className="text-gray-300">Talk.</span>
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed max-w-sm lg:mb-2">
          Have a question, feedback, or just want to say hello? We'd love to
          hear from you. Our team usually responds within 24 hours.
        </p>
      </div>

      {/* ───── 3 quick info cards ───── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
        {[
          { label: "Email Us", value: "hello@yourstore.com", icon: "✉" },
          { label: "Call Us", value: "+880 1700 000000", icon: "☎" },
          { label: "Visit Us", value: "Dhaka, Bangladesh", icon: "⊙" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-start gap-4 border border-black/10 rounded-2xl px-6 py-5 hover:border-black transition-all"
          >
            <span className="text-xl text-black/30 mt-0.5">{item.icon}</span>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">
                {item.label}
              </p>
              <p className="text-sm font-bold text-black">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ContactHero;