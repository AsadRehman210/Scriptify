import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  // Array containing card data
  // const servicesData = [
  //   {
  //     title: "Blockchain Development",
  //     description:
  //       "Transform your business with secure, scalable blockchain solutions. We create custom networks and smart contracts.",
  //     iconClass: "fas fa-link",
  //   },
  //   {
  //     title: "Web Applications",
  //     description:
  //       "We build dynamic web applications as per your needs to enhance user experience.",
  //     iconClass: "fas fa-globe",
  //   },
  //   {
  //     title: "Mobile Applications",
  //     description:
  //       "Create engaging and intuitive mobile apps that deliver seamless experiences on iOS and Android platforms.",
  //     iconClass: "fas fa-mobile-alt",
  //   },
  //   {
  //     title: "Blockchain Development",
  //     description:
  //       "Transform your business with secure, scalable blockchain solutions. We create custom networks and smart contracts.",
  //     iconClass: "fas fa-link",
  //   },
  //   {
  //     title: "Web Applications",
  //     description:
  //       "We build dynamic web applications as per your needs to enhance user experience.",
  //     iconClass: "fas fa-globe",
  //   },
  //   {
  //     title: "Mobile Applications",
  //     description:
  //       "Create engaging and intuitive mobile apps that deliver seamless experiences on iOS and Android platforms.",
  //     iconClass: "fas fa-mobile-alt",
  //   },
  // ];

  const servicesData = [
    {
      title: "Script Writing",
      description:
        "Our expert team will help you convey your message directly to audiences through compelling scripts that perfectly align with your vision.",
      iconClass: "fas fa-pen-nib", // Icon class
    },
    {
      title: "Voiceover",
      description:
        "Let us help you to give your audience a more personal touch with our professional voiceover services.",
      iconClass: "fas fa-microphone", // Icon class
    },
    {
      title: "Video Editing",
      description:
        "We are also providing engaging video editing services to our clients whether you want to promote your business or just want to engage with your audience.",
      iconClass: "fas fa-video", // Icon class
    },
    {
      title: "Thumbnail Creation",
      description:
        "Grab your audience's attention in the first 5 seconds with our attention-grabbing thumbnail designs.",
      iconClass: "fas fa-image", // Icon class
    },
    {
      title: "YouTube SEO",
      description:
        "To make your channel more visible to your target audience, we will help to optimize tags, titles, content, and descriptions for the targeted keywords.",
      iconClass: "fas fa-chart-line", // Icon class
    },
  ];
  

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 xl:px-36 py-16">
        {/* Heading Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0d2144] md:text-4xl">
            Our <span className="text-blue-500">Services</span>
          </h2>
          <p className="mt-2 text-gray-600">
          We are helping businesses to succeed with innovative solutions, expert service, and a passion for excellence.
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
