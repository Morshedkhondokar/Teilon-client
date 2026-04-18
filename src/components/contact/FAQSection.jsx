import { useState } from "react";

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "We deliver within 24 hours inside Dhaka and 48–72 hours across Bangladesh. You'll receive a tracking link once your order is shipped.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Yes! We offer hassle-free returns within 30 days of delivery. The product must be unused and in original packaging. Refunds are processed within 3–5 business days.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, you'll receive an SMS and email with a tracking link. You can also check your order status from your account dashboard.",
  },
  {
    question: "Do you offer Cash on Delivery?",
    answer:
      "Yes, we offer Cash on Delivery (COD) across Bangladesh. You can also pay via bKash, Nagad, or credit/debit card.",
  },
  {
    question: "How do I find the right size?",
    answer:
      "Every product page has a detailed size chart. If you're between sizes, we recommend sizing up. Still unsure? Chat with us on WhatsApp and we'll help you out.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24">

      {/* ───── Label ───── */}
      <div className="flex items-center gap-4 mb-16">
        <span className="w-8 h-px bg-black" />
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gray-400">
          FAQ
        </p>
      </div>

      {/* ───── Heading ───── */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
          Got Questions? <br />
          <span className="text-gray-300">We Got Answers.</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-xs lg:mb-1 leading-relaxed">
          Can't find what you're looking for? Send us a message using the form
          above and we'll get back to you.
        </p>
      </div>

      {/* ───── FAQ List ───── */}
      <div className="flex flex-col divide-y divide-black/10 border-t border-black/10">
        {faqs.map((faq, index) => (
          <div key={index} className="py-6">

            {/* ───── Question row ───── */}
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full text-left gap-6 group"
            >
              <span className="text-base font-bold text-black group-hover:underline underline-offset-4 transition-all">
                {faq.question}
              </span>
              <span className="text-xl font-light text-black/30 shrink-0 transition-transform duration-300"
                style={{ transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>

            {/* ───── Answer ───── */}
            {openIndex === index && (
              <p className="text-sm text-gray-500 leading-relaxed mt-4 max-w-2xl">
                {faq.answer}
              </p>
            )}

          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQSection;