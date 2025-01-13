import React from "react";
import Portfolio from "../components/common/Portfolio";
import CareerDiscuss from "../components/common/CareerDiscuss";
import Banner from "../components/common/Banner";

const PortfolioPage = () => {
  return (
    <main>
      <Banner
        heading="Explore Our Achievements"
        content="Look how we allow our clients to achieve their goals through engaging thumbnail designs, compelling scripts, engaging voiceovers, expert YouTube optimization, and stunning videos. Take a quick look at our portfolio and discover how we are a good fit."
      />
      <Portfolio
      headingOne="Explore"
      headingMidd="Our Portfolio"
      headingEnd="Highlights" 
        description = "Let’s take a look at some of our recent projects. We specialize in creating engaging and professional content that helps businesses grow and expand their audience effortlessly. We put effort into making your dream into reality."
      />
      <CareerDiscuss />
    </main>
  );
};

export default PortfolioPage;
