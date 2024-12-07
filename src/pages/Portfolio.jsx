import React from "react";
import Portfolio from "../components/common/Portfolio";
import CareerDiscuss from "../components/common/CareerDiscuss";
import Banner from "../components/common/Banner";

const PortfolioPage = () => {
  return (
    <main>
      <Banner
        heading="Discover Success Stories"
        content="At our company, we assist our clients in achieving growth by utilizing state-of-the-art technologies, exceptional designs, and inventive software solutions. Take inspiration from similar challenges in software development."
      />
      <Portfolio />
      <CareerDiscuss />
    </main>
  );
};

export default PortfolioPage;
