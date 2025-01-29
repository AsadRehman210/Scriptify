import React from 'react';

const ServicesProcess = () => {
  
  const steps = [
    {
      title: 'Your Need Assessment',
      icon: 'fas fa-search',
      description:
        'The process begins with understanding your specific needs. We dive deep into your objectives, target audience, and overall vision to create a tailored approach that guarantees success.',
    },
    {
      title: 'Planning and Strategy',
      icon: 'fas fa-pencil-alt',
      description:
        'This involves crafting detailed strategies, identifying trending SEO keywords, outlining engaging scripts, and mapping out visually appealing thumbnails.',
    },
    {
      title: 'Implementation',
      icon: 'fas fa-cogs',
      description:
        'Our team transforms the strategy into reality by creating compelling scripts, designing eye-catching thumbnails, editing high-quality videos, and optimizing your YouTube channel for growth and visibility.',
    },
    {
      title: 'Quality Assurance',
      icon: 'fas fa-check-circle',
      description:
        'We conduct a thorough quality check before delivering the finished product. Every element is reviewed to ensure it meets your expectations and achieves your goals. At Scriptify, our process is designed to provide user-centric content that drives results.',
    },
  ];

  

  return (
    <section className='bg-gray-50'>
       <div className=" container mx-auto px-6 xl:px-36 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0d2144] text-center">
      Our Process Of <span className="text-blue-500">Content Creation</span> 
      </h2>
      <p className="text-gray-600 text-center mt-4">
      At Scriptify, we have crafted a seamless 4-step process to create content that aligns with your vision and captivates your audience. With a focus on your goals, our team works diligently to deliver results that truly resonate. 
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 flex flex-cols"
          >
            <div className="flex ">
              <div className="text-3xl text-blue-500 mr-4 w-8 h-8"> 
              <i className={step.icon}></i>
              </div>
            </div>
            <div className=''>
            <h3 className="text-xl font-semibold text-[#0d2144]">{step.title}</h3>

            <p className="text-gray-600">{step.description}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
   
  );
};

export default ServicesProcess;
