import React from "react";
import Hero from "../components/home/Hero";
import NewArrivalsSection from "../components/home/NewArrivalsSection";
import TopSellingSection from "../components/home/TopSellingSection";
import BrowseByStyleSection from "../components/home/BrowseByStyleSection";

function Home() {
  return (
    <div>
      <Hero />
      <NewArrivalsSection />
      <TopSellingSection />
      <BrowseByStyleSection />
    </div>
  );
}

export default Home;
