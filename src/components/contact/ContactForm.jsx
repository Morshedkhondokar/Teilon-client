import { useState } from "react";

const subjects = [
  "Order Issue",
  "Return & Refund",
  "Product Inquiry",
  "Partnership",
  "Other",
];

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect your backend / emailjs here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-24 border-b border-black/10">
        <div className="flex flex-col items-center justify-center text-center py-20 border border-black/10 rounded-3xl">
          <p className="text-5xl mb-6">✦</p>
          <h3 className="text-2xl font-extrabold text-black mb-3">
            Message Sent!
          </h3>
          <p className="text-sm text-gray-500 max-w-sm leading-relaxed mb-8">
            Thanks for reaching out. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all"
          >
            Send Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 border-b border-black/10">

      {/* ───── Label ───── */}
      <div className="flex items-center gap-4 mb-16">
        <span className="w-8 h-px bg-black" />
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gray-400">
          Send a Message
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">

        {/* ───── Left: heading ───── */}
        <div className="lg:w-1/3 shrink-0">
          <h2 className="text-4xl font-extrabold text-black leading-tight mb-4">
            We Read <br />
            <span className="text-gray-300">Every Message.</span>
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Whether it's a complaint, compliment, or curiosity — your words
            matter to us. Fill out the form and we'll be in touch shortly.
          </p>
        </div>

        {/* ───── Right: form ───── */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5">

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="border border-black/15 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-black transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                required
                className="border border-black/15 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-black transition-all"
              />
            </div>
          </div>

          {/* Phone + Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+880 1700 000000"
                className="border border-black/15 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-black transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Subject
              </label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="border border-black/15 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-all bg-white cursor-pointer"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              rows={5}
              className="border border-black/15 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-black transition-all resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="self-start inline-flex items-center gap-3 bg-black text-white text-sm font-extrabold px-10 py-4 rounded-full hover:bg-gray-800 transition-all group mt-2"
          >
            Send Message
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;