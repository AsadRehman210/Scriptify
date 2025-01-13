import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {

  const servicesData = [
    {
      title: "Script Writing",
      description:
        "Our expert team will help you convey your message directly to audiences through compelling scripts that perfectly align with your vision.",
      iconClass: "fas fa-pen-nib",
    },
    {
      title: "Voiceover",
      description:
        "Let us help you to give your audience a more personal touch with our professional voiceover services.",
      iconClass: "fas fa-microphone",
    },
    {
      title: "Video Editing",
      description:
        "We are also providing engaging video editing services to our clients whether you want to promote your business or just want to engage with your audience.",
      iconClass: "fas fa-video",
    },
    {
      title: "Thumbnail Creation",
      description:
        "Grab your audience's attention in the first 5 seconds with our attention-grabbing thumbnail designs.",
      iconClass: "fas fa-image",
    },
    {
      title: "YouTube SEO",
      description:
        "To make your channel more visible to your target audience, we will help to optimize tags, titles, content, and descriptions for the targeted keywords.",
      iconClass: "fas fa-chart-line",
    },
    {
      title: "YouTube Channel managements",
      description:
        "We handle everything from uploading videos, managing playlists, analyzing performance, and engaging with your audience to help your channel grow efficiently.",
      iconClass: "fas fa-tasks",
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
