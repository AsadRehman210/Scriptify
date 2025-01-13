import React from "react";
import { NavLink } from "react-router-dom";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "fas fa-cogs",
      number: "6+",
      title: "Years Experience",
    },
    {
      icon: "fas fa-users",
      number: "10+",
      title: "Talented Team",
    },
    {
      icon: "fas fa-tasks",
      number: "100+",
      title: "Projects Completed",
    },
    {
      icon: "fas fa-globe",
      number: "3+",
      title: "Countries Served",
    },
    {
      icon: "fas fa-comments",
      number: "30+",
      title: "Positive Feedback",
    },
    {
      icon: "fas fa-star",
      number: "100%",
      title: "Client Satisfaction",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 xl:px-36 py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-[#0d2144]">
              Why Choose Scriptify Team as Your
              <span className="text-blue-500"> Service Provider</span>
            </h2>

            <p className="text-gray-600 mt-4 text-sm md:text-base">
              Our team of experts tailors each approach to the specific needs of
              your channel, utilizing advanced analytics and the latest trends
              in video marketing. We focus on comprehensive support from SEO
              optimization to community building, ensuring each client achieves
              sustainable growth and enhanced viewer engagement. This dedicated
              approach makes Scriptify a leader in effective YouTube automation.
            </p>
            <h3 className="text-lg md:text-xl font-bold text-[#0d2144] pt-6">
              Let's take a quick look at why you should choose us.
            </h3>
            <div className="mt-6">
              <NavLink
                to="/contact"
                className="bg-orange-500  text-white mx-auto w-auto px-6 py-3 rounded-lg shadow hover:bg-orange-600 text-left"
              >
                Estimate Project
              </NavLink>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:w-1/2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-500 p-6 rounded-tl-lg rounded-tr-[50px] rounded-br-lg rounded-bl-[50px] text-center text-white shadow-lg"
              >
                <div className="text-3xl mb-4">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-3xl font-bold">{feature.number}</h3>
                <p className="text-lg font-semibold">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;