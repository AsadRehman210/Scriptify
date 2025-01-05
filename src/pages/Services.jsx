import React from "react";
import { ContactUS } from "../components/common/ContactUS";
import CustomerServices from "../components/Services/CustomerServices";
import ServicesProcess from "../components/Services/ServicesProcess";
import WhyChooseUs from "../components/Services/WhyChooseUs";
import Portfolio from "../components/common/Portfolio";
import SolutionForIndustry from "../components/Services/SolutionForIndustry";

export const Services = () => {
  const contactInfo = {
    title: "Maximize Your Online Presence With Our Expert Solutions",
    description:
      "Get the full potential of your business with our expert content creation services. Our goal-centric approach, advanced technology, and industry-specific solutions will boost your online visibility and drive user engagement effectively.",
    buttonText: "Let's Get Started",
  };
  return (
    <main>
      <ContactUS
        title={contactInfo.title}
        description={contactInfo.description}
        buttonText={contactInfo.buttonText}
      />
      <CustomerServices />
      <ServicesProcess />
      <WhyChooseUs />
      <Portfolio
      description = "Discover the power of our expertise in our collective portfolio, showcasing content creation for every industry. Also, explore our outstanding thumbnails work and see how we help YouTube channels to succeed."
      Explore="Explore More"/>
      <SolutionForIndustry />
    </main>
  );
};
