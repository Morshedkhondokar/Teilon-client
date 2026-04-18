const socials = [
  {
    name: "Instagram",
    handle: "@yourstore",
    url: "https://instagram.com",
    icon: "◈",
    desc: "Follow us for daily style inspiration and new arrivals.",
  },
  {
    name: "Facebook",
    handle: "YourStore",
    url: "https://facebook.com",
    icon: "◉",
    desc: "Join our community of 20K+ fashion lovers.",
  },
  {
    name: "TikTok",
    handle: "@yourstore",
    url: "https://tiktok.com",
    icon: "✦",
    desc: "Watch styling videos, hauls, and behind the scenes.",
  },
  {
    name: "WhatsApp",
    handle: "+880 1700 000000",
    url: "https://wa.me/8801700000000",
    icon: "◎",
    desc: "Chat with us directly for quick support.",
  },
];

const SocialLinks = () => {
  return (
    <section className="py-24 border-b border-black/10">

      {/* ───── Label ───── */}
      <div className="flex items-center gap-4 mb-16">
        <span className="w-8 h-px bg-black" />
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gray-400">
          Find Us Online
        </p>
      </div>

      {/* ───── Heading ───── */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
          We're Social. <br />
          <span className="text-gray-300">Come Say Hi.</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-xs lg:mb-1 leading-relaxed">
          Stay connected with us across all platforms for the latest drops,
          deals, and style tips.
        </p>
      </div>

      {/* ───── Social Cards ───── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socials.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className={`flex items-start gap-5 p-7 rounded-3xl border border-black/10 hover:border-black transition-all duration-300 group
              ${index === 0 ? "bg-black text-white" : "bg-white"}
            `}
          >
            {/* Icon */}
            <span
              className={`text-2xl mt-0.5 ${
                index === 0 ? "text-white/40" : "text-black/20"
              }`}
            >
              {social.icon}
            </span>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3
                  className={`text-base font-extrabold ${
                    index === 0 ? "text-white" : "text-black"
                  }`}
                >
                  {social.name}
                </h3>
                <span
                  className={`text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${
                    index === 0 ? "text-white/40" : "text-black/20"
                  }`}
                >
                  ↗
                </span>
              </div>
              <p
                className={`text-xs font-semibold mb-2 tracking-wide ${
                  index === 0 ? "text-white/50" : "text-gray-400"
                }`}
              >
                {social.handle}
              </p>
              <p
                className={`text-sm leading-relaxed ${
                  index === 0 ? "text-white/60" : "text-gray-500"
                }`}
              >
                {social.desc}
              </p>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
};

export default SocialLinks;