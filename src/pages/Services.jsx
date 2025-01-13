import React from "react";
import { ContactUS } from "../components/common/ContactUS";
import CustomerServices from "../components/Services/CustomerServices";
import ServicesProcess from "../components/Services/ServicesProcess";
import WhyChooseUs from "../components/Services/WhyChooseUs";
import Portfolio from "../components/common/Portfolio";
import SolutionForIndustry from "../components/Services/SolutionForIndustry";

export const Services = () => {
  const contactInfo = {
    title: "Boost your YouTube Channel with our Expert Automation Solution!",
    description:
      "Effortlessly grow your channel as we handle everything—from Video Creation to SEO-optimized titles and descriptions and perfect upload scheduling. Gain more views, attract subscribers, and focus on what you do best: creating amazing content. Let us take care of the rest. Your YouTube success starts here!",
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
      headingOne="Check Out"
      headingMidd="Our Portfolio"
      headingEnd="For Better Understanding"
      description = "Discover the power of our expertise in our collective portfolio, showcasing content creation for every industry. Also, explore our outstanding thumbnails work and see how we help YouTube channels to succeed."
      Explore="Explore More"/>
      <SolutionForIndustry />
    </main>
  );
};
