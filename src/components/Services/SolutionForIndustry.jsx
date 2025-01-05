import React, { useState } from "react";
import Ecommerce from "../../assets/images/p1.webp"
import Real from "../../assets/images/p2.webp"
import Finance from "../../assets/images/p3.webp"
// import Education from "../../assets/images/p5.webp"


const SolutionForIndustry = () => {
  const [activeTab, setActiveTab] = useState("Ecommerce");

  const tabContent = {
    Technology:
      "We serve the tech industry by creating videos with clear and informative scripts and high-quality editing to explain difficult topics easily.",
    "Health and Fitness":
      "We also create health and fitness content with professional video editing, engaging scripts, and voiceovers. From workout tutorials to healthy tips, we help you to connect with your audience.",
    Travel:
      "Share your travel journey with compelling stories and beautiful visuals, our content creation and YouTube automation services make your audience feel like they are part of the journey.",
    "Fashion and Beauty":
      "Bring your fashion expertise creatively through engaging scripts, stunning visuals, and professional voiceovers. Our services make your makeup tutorials and trendy tips more impactful.",
    Comedy:
      "Our team will help you a lot to make funny and engaging content that helps your users come back for more humor.",
    Education:
      "Our professional scripts and edited educational content ensure clear, concise, and easy-to-understand information that helps your viewers to learn effectively.",
    "Mindfulness and Meditation":
      "Our team will help you to create soothing scripts and edited videos that help your audience connect with their inner peace and relaxation.",
    Automation:
      "Whether it's car reviews, mechanic tips, or tutorials, our services will not only educate but also inspire the target audience and highlight your automotive expertise.",
    Science:
      "Bring the wonder of science and exploration to real life, our team will make the content educational, inspiring, and entertaining.",
    History:
      "We will also help you to share fascinating stories, historical facts, and events in a simple format for your audience through our services.",
    "Political Commentary":
      "Our team will also work to provide you with informational political commentary with clear and engaging videos on the issues that matter the most.",
    Politics:
      "Engage with your audience through well-researched political content whether it's current issues or political debates, we will help you craft compelling videos.",
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
            Content Creation
              <span className="text-black"> For Every Industry</span>
            </h2>
            <p className="mb-6">
            Our exceptional and versatile services serve different industries. We provide customized services that perfectly meet market trends and get user attention at first.
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
