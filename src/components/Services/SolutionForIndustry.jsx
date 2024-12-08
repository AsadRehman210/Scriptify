import React, { useState } from "react";
import Ecommerce from "../../assets/images/p1.webp"
import Real from "../../assets/images/p2.webp"
import Finance from "../../assets/images/p3.webp"
// import Education from "../../assets/images/p5.webp"


const SolutionForIndustry = () => {
  const [activeTab, setActiveTab] = useState("Ecommerce");

  const tabContent = {
    Ecommerce:
      "Ropstam has delivered optimized UI/UX designs for diverse ecommerce businesses. Our designers intially do user research to identify possible customer pain points & issues and then create user-centric online store experiences that drive higher conversion rates. We follow best practices for ecommerce UI/UX across web, mobile and apps by using the right tools such as fonts, colors, buttons, icons, etc.",
    "Real Estate": "Ropstam offers specialized real estate UI/UX design services. We design property search, listings, brokerage and property management interfaces that connect effectively with real estate users and their journey.",
    Finance:
      "Our financial services expertise has enabled us to design stellar UI/UX of custom software developed for fintech startups and leading financial institutions. We craft intuitive, simple, secure financial product interfaces catering to complex user needs.",
    // Education:
    //   "Our edtech UI/UX design experience spans learning management systems, online classrooms, education apps and more. We create engaging student and educator interfaces focused on learning outcomes.",
    // Logistics:
    //   "Ropstam has partnered with logistics companies to design seamless UI/UX for dispatch, delivery tracking and fleet management solutions used daily by drivers.",
    // Marketing:
    // "We have delivered user experience and user interface designs, and website development services for marketing SaaS platforms, campaign managers, social media tools and more. Our design maximizes marketer experience and productivity."
  };

  const tabImages = {
    Ecommerce: Ecommerce,
    "Real Estate": Real,
    Finance: Finance,
    // Education: Education,
    // Logistics: Ecommerce,
    // Marketing: Real,
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 xl:px-36 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8  ">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 h-[30rem] order-2 md:order-1">
            <img
              src={tabImages[activeTab]}
              alt={activeTab}
              className="rounded-lg shadow-lg h-full w-full"
            />
          </div>

          {/* Text and Tabs Section */}
          <div className="md:w-1/2 text-black order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
              UI/UX Design{" "}
              <span className="text-black">Solutions for Industries</span>
            </h2>
            <p className="mb-6">
              Our designers have created award-winning solutions across a
              diverse range of industries. This extensive experience allows us
              to craft customized UI/UX that aligns perfectly to your specific
              market context and end-users.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap border-b border-gray-300 mb-6 divide-x divide-gray-300">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  className={`px-2 py-2 text-sm md:text-base font-semibold  ${
                    activeTab === tab
                      ? " text-blue-600"
                      : "text-black hover:text-orange-600"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-black">
              <p>{tabContent[activeTab]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionForIndustry;
