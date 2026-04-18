import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import SocialLinks from "../components/contact/SocialLinks";
import FAQSection from "../components/contact/FAQSection";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ContactHero />
      <ContactForm />
      <SocialLinks />
      <FAQSection />
    </div>
  );
};

export default Contact;