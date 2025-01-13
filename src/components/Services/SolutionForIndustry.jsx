import React, { useState } from "react";
import Travel from "../../assets/images/Travel.webp"
import Technology from "../../assets/images/Technology.webp"
import Psychology from "../../assets/images/Psychology.webp"
import History from "../../assets/images/History.webp"
import Mindfulness from "../../assets/images/Mindfulness and Meditation.webp"
import Food from "../../assets/images/Food processing.webp"
import Documentary from "../../assets/images/Documentary.webp"
import Comedy from "../../assets/images/Comedy.webp"
import tab from "../../assets/images/tab 9.webp"





const SolutionForIndustry = () => {
  const [activeTab, setActiveTab] = useState("Technology");

  const tabContent = {
    Technology:
      "We create clear, engaging tech videos with expert scripts and polished editing, making complex topics simple and accessible.",
    Documentary:
      "From workout tips to health advice, we craft engaging health and fitness videos with professional editing and captivating storytelling.",
    Travel:
      "Bring your travel stories to life! With stunning visuals and compelling narratives, we make your audience feel part of the journey.",
    Comedy:
      "Deliver laughs that keep your audience coming back! We specialize in creating funny, shareable, and engaging content.",
    "Mindfulness and Meditation":
      "Help your audience find peace with soothing scripts and beautifully edited videos designed for relaxation and mindfulness.",
    "Food Processing":
      "Highlight your culinary creations with expertly crafted videos that educate, inspire, and delight food enthusiasts.",
    History:
      "Share captivating historical tales and events through clear, engaging videos that connect with your audience.",
    "Political Commentary":
      "Deliver impactful political commentary with videos that are insightful, engaging, and designed to inform and inspire.",
    Psychology:
      "Explore the human mind with videos that simplify complex concepts, engaging and educating your audience effortlessly."
  };
  
  

  const tabImages = {
    Technology: Technology,
    Documentary: Documentary,
    Travel: Travel,
    Comedy:Comedy,
    "Mindfulness and Meditation": Mindfulness,
    "Food Processing": Food,
    History:History,
    "Political Commentary": tab,
    Psychology: Psychology

  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 xl:px-36 py-16">
        <div className="flex flex-col items-center gap-8  ">
          

          {/* Text and Tabs Section */}
          <div className="w-full text-[#0d2144]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
            Content Creation
              <span className="text-[#0d2144]"> For Every Industry</span>
            </h2>
            <p className="mb-6 text-gray-600">
            Our exceptional and versatile services serve different industries. We provide customized services that perfectly meet market trends and get user attention at first.
            </p>

            {/* Tabs */}
            <div className="flex overflow-x-auto whitespace-nowrap gap-4 py-4 custom-scrollbar">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-sm md:text-base rounded-full border-2 ${
                    activeTab === tab
                      ? " bg-blue-600 text-white border-blue-600"
                      : "bg-white text-blue-600 border-blue-600 hover:bg-orange-100"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-gray-600">
              <p className="mt-4">{tabContent[activeTab]}</p>
            </div>
          </div>

          {/* Image Section */}
          <div className=" mb-8 md:mb-0">
            <img
              src={tabImages[activeTab]}
              alt={activeTab}
              className="rounded-lg shadow-lg h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionForIndustry;
