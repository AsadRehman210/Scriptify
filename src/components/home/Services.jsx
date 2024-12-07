import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  // Array containing card data
  const servicesData = [
    {
      title: "Blockchain Development",
      description:
        "Transform your business with secure, scalable blockchain solutions. We create custom networks and smart contracts.",
      iconClass: "fas fa-link", // Icon class
    },
    {
      title: "Web Applications",
      description:
        "We build dynamic web applications as per your needs to enhance user experience.",
      iconClass: "fas fa-globe", // Icon class
    },
    {
      title: "Mobile Applications",
      description:
        "Create engaging and intuitive mobile apps that deliver seamless experiences on iOS and Android platforms.",
      iconClass: "fas fa-mobile-alt", // Icon class
    },
    {
      title: "Blockchain Development",
      description:
        "Transform your business with secure, scalable blockchain solutions. We create custom networks and smart contracts.",
      iconClass: "fas fa-link", // Icon class
    },
    {
      title: "Web Applications",
      description:
        "We build dynamic web applications as per your needs to enhance user experience.",
      iconClass: "fas fa-globe", // Icon class
    },
    {
      title: "Mobile Applications",
      description:
        "Create engaging and intuitive mobile apps that deliver seamless experiences on iOS and Android platforms.",
      iconClass: "fas fa-mobile-alt", // Icon class
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 xl:px-36 py-16">
        {/* Heading Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Our <span className="text-blue-500">Services</span>
          </h2>
          <p className="mt-2 text-gray-600">
            Driving your Business Towards Success with Innovation, Digitization,
            and Passion.
          </p>
        </div>

        {/* Cards Section */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Render ServicesCard components dynamically */}
          {servicesData.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
              iconClass={service.iconClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
