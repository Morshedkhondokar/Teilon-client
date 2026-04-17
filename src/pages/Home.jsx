import React from "react";
import Hero from "../components/home/Hero";
import NewArrivalsSection from "../components/home/NewArrivalsSection";
import TopSellingSection from "../components/home/TopSellingSection";

function Home() {
  return (
    <div>
      <Hero />
      <NewArrivalsSection />
      <TopSellingSection />
    </div>
  );
}

export default Home;
