import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import OurVision from "../components/about/OurVision";
import AboutStats from "../components/about/AboutStats";
import WhyChooseUs from "../components/about/WhyChooseUs";
import AboutCTA from "../components/about/AboutCTA";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AboutHero />
      <OurStory />
      <OurVision />
      <AboutStats />
      <WhyChooseUs />
      <AboutCTA />
    </div>
  );
};

export default AboutPage;