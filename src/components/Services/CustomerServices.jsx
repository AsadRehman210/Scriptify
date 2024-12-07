import React from "react";

const CustomerServices = () => {
  const services = [
    {
      id: 1,
      icon: "fas fa-globe",
      title: "Website UI/UX Design",
      description:
        "We craft immersive website experiences optimized for user engagement and conversion.",
    },
    {
      id: 2,
      icon: "fas fa-mobile-alt",
      title: "Mobile UI/UX Design",
      description:
        "Our mobile app designs and user interfaces provide intuitive navigation and flows for flawless mobile interactions.",
    },
    {
      id: 3,
      icon: "fas fa-paint-brush",
      title: "Graphic Design",
      description:
        "Creating visually stunning designs that align with your brand identity and engage your audience.",
    },
    {
      id: 4,
      icon: "fas fa-chart-bar",
      title: "Data Visualization",
      description:
        "Turning complex data into visually appealing and easy-to-understand graphics.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 xl:px-36 py-16">
        <div className=" text-center">
          <h2 className="text-3xl font-bold">
            Our <span className="text-blue-500">Custom UI/UX</span> Design
            Services
          </h2>
          <p className="mt-4 text-gray-600">
            Ropstam offers cutting-edge UI/UX design services to create
            intuitive, engaging digital experiences. With an expert team of
            designers and researchers, we help companies craft user-focused
            products that delight customers.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group border-2 rounded-lg p-6 flex flex-col w-64 hover:bg-blue-600 hover:text-white"
            >
              <div className="text-3xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2 group-hover:text-white">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerServices;
