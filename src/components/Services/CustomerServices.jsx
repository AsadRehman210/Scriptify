import React from "react";

const CustomerServices = () => {
  
   const services = [
    {
      title: 'Understanding Needs',
      icon: 'fas fa-search',
      description:
        'We start with a detailed discussion and consider your specific needs, goals, target audience, and objectives.',
    },
    {
      title: 'Planning and Strategy',
      icon: 'fas fa-pencil-alt',
      description:
        'Once your goal is clear, we create strategies including trending keywords for SEO, outlining the scripts, and mapping the visuals.',
    },
    {
      title: 'Implementation',
      icon: 'fas fa-cogs',
      description:
        'Now we implement our strategies and create engaging scripts, and creative thumbnails, edit videos, and optimize your channel for SEO.',
    },
    {
      title: 'Final Review and Delivery',
      icon: 'fas fa-check-circle',
      description:
        'Before delivering the final results, we perform a quality check to ensure it meets your specific needs.',
    },
  ];


  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 xl:px-36 py-16">
        <div className=" text-center">
          <h2 className="text-3xl font-bold">
          Our Custom 
          <span className="text-blue-500"> Content Creation </span> 
           Services For Everyone
          </h2>
          <p className="mt-4 text-gray-600">
          Let us help to maximize your digital presence with our expert content creation solutions that are customizable according to your needs. Our team is an expert in delivering high-quality services that improve user experience.
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
