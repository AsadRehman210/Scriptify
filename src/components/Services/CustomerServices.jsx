import React from "react";

const CustomerServices = () => {
  
   const services = [
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
        <div className=" text-center">
          <h2 className="text-3xl font-bold text-[#0d2144]">
          Our Custom 
          <span className="text-blue-500"> Content Creation </span> 
           Services For Everyone
          </h2>
          <p className="mt-4 text-gray-600">
          Let us help to maximize your digital presence with our expert content creation solutions that are customizable according to your needs. Our team is an expert in delivering high-quality services that improve user experience.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-[#0d2144]">
          {services.map((service) => (
            <div
              key={service.id}
              className="group border-2 rounded-lg p-6 flex flex-col w-64 hover:bg-blue-600 hover:text-white"
            >
              <div className="text-3xl mb-4 ">
                <i className={service.iconClass}></i>
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
