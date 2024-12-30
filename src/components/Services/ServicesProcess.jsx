import React from 'react';

const ServicesProcess = () => {
  const steps = [
    {
      title: 'Ideate',
      icon: '🧠',
      description:
        'We tap into proven ideation techniques like sketching, mind mapping, and design studios to explore many potential directions.',
    },
    {
      title: 'Prototype',
      icon: '📐',
      description:
        'We rapidly test concepts and ideas through information architecture, wireframing, and prototyping. This validation prevents wasting effort on flawed concepts.',
    },
    {
        title: 'Ideate',
        icon: '🧠',
        description:
          'We tap into proven ideation techniques like sketching, mind mapping, and design studios to explore many potential directions.',
      },
      {
        title: 'Prototype',
        icon: '📐',
        description:
          'We rapidly test concepts and ideas through information architecture, wireframing, and prototyping. This validation prevents wasting effort on flawed concepts.',
      },
    // Add more steps here if needed
  ];

  return (
    <section className='bg-gray-50'>
       <div className=" container mx-auto px-6 xl:px-36 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0d2144] text-center">
        Our <span className="text-blue-500">UI/UX</span> Design Process
      </h2>
      <p className="text-gray-600 text-center mt-4">
        At Ropstam, we follow a rigorous 6-step user-centered design process to
        create experiences that truly resonate with your users. By following this
        well-defined methodology, we ensure that every design we craft is
        user-centered, efficient, and optimized for your target audience and matches
        expected user behavior.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 flex flex-cols"
          >
            <div className="flex ">
              <div className="text-4xl text-blue-500 mr-4 w-8 h-8">{step.icon}</div>
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
