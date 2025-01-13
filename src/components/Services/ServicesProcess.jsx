import React from 'react';

const ServicesProcess = () => {
  
  const steps = [
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
    <section className='bg-gray-50'>
       <div className=" container mx-auto px-6 xl:px-36 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0d2144] text-center">
      Our Process Of <span className="text-blue-500">Content Creation</span> 
      </h2>
      <p className="text-gray-600 text-center mt-4">
      We follow a 4-step simple process to create user-centric designs while considering your key goals. Our team will work hard and deep-dive to understand your needs which will provide you with perfect results that resonate perfectly with your needs.
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
