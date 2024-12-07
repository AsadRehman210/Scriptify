import React from "react";
import { ContactUS } from "../components/common/ContactUS";
import CustomerServices from "../components/Services/CustomerServices";
import ServicesProcess from "../components/Services/ServicesProcess";
import WhyChooseUs from "../components/Services/WhyChooseUs";
import Portfolio from "../components/common/Portfolio";
import SolutionForIndustry from "../components/Services/SolutionForIndustry";

export const Services = () => {
  const contactInfo = {
    title: "UI/UX Design Services",
    description:
      "Unlock the potential of exceptional UI/UX design services at Ropstam. Elevate your digital presence with our holistic approach, latest technology stack, and industry-specific solutions. Discover why we’re the best UI/UX design company for your brand’s success.",
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
      Explore="Explore More"/>
      <SolutionForIndustry />
    </main>
  );
};
