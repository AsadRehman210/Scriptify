// import React from "react";

// const WhyChooseUs = () => {
//   const features = [
//     {
//       icon: "fas fa-cogs",
//       number: "14+",
//       title: "Years Experience",
//     },
//     {
//       icon: "fas fa-users",
//       number: "100+",
//       title: "Talented Squad",
//     },
//     {
//       icon: "fas fa-tasks",
//       number: "100+",
//       title: "Projects Delivered",
//     },
//     {
//       icon: "fas fa-paint-brush",
//       number: "300+",
//       title: "Designs Built",
//     },
//     {
//       icon: "fas fa-globe",
//       number: "30+",
//       title: "Countries Served",
//     },
//     {
//       icon: "fas fa-star",
//       number: "100%",
//       title: "Client Satisfaction",
//     },
//   ];

//   return (
//     <div className="bg-white py-10 px-5 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
//       {/* Introduction Section */}
//       <div className="flex flex-col gap-4 md:w-1/2">
//         <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
//           Why Choose Ropstam as Your{" "}
//           <span className="text-blue-500">UI/UX Design Company</span>
//         </h2>
//         <p className="text-gray-600 mt-4 text-sm md:text-base">
//           At Ropstam, we are more than just a UI/UX design company; we are your
//           dedicated design allies, committed to elevating your brand in the
//           digital landscape. Here’s why you should entrust your design needs to
//           us:
//         </p>
//         <h3 className="text-lg md:text-xl font-bold text-[#0d2144]">
//           Let’s Start a New UI/UX Design Project Together
//         </h3>
//         <button className="bg-orange-500 text-white mt-6 w-auto px-6 py-3 rounded-lg shadow hover:bg-orange-600">
//           Estimate Project
//         </button>
//       </div>

//       {/* Features Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:w-1/2">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="bg-blue-500 p-6 rounded-tl-lg rounded-tr-[50px] rounded-br-lg rounded-bl-[50px] text-center text-white shadow-lg"
//           >
//             <div className="text-4xl mb-4">
//               <i className={feature.icon}></i>
//             </div>
//             <h3 className="text-3xl font-bold">{feature.number}</h3>
//             <p className="text-lg font-semibold">{feature.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;

import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "fas fa-cogs",
      number: "14+",
      title: "Years Experience",
    },
    {
      icon: "fas fa-users",
      number: "100+",
      title: "Talented Squad",
    },
    {
      icon: "fas fa-tasks",
      number: "100+",
      title: "Projects Delivered",
    },
    {
      icon: "fas fa-paint-brush",
      number: "300+",
      title: "Designs Built",
    },
    {
      icon: "fas fa-globe",
      number: "30+",
      title: "Countries Served",
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
          {/* Introduction Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Why Choose Ropstam as Your{" "}
              <span className="text-blue-500">UI/UX Design Company</span>
            </h2>
            <p className="text-gray-600 mt-4 text-sm md:text-base">
              At Ropstam, we are more than just a UI/UX design company; we are
              your dedicated design allies, committed to elevating your brand in
              the digital landscape. Here’s why you should entrust your design
              needs to us:
            </p>
            <h3 className="text-lg md:text-xl font-bold text-[#0d2144] pt-6">
              Let’s Start a New UI/UX Design Project Together
            </h3>
            <button className="bg-orange-500 text-white mt-6 mx-auto w-auto px-6 py-3 rounded-lg shadow hover:bg-orange-600 text-left">
              Estimate Project
            </button>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:w-1/2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-500 p-6 rounded-tl-lg rounded-tr-[50px] rounded-br-lg rounded-bl-[50px] text-center text-white shadow-lg"
              >
                <div className="text-4xl mb-4">
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
