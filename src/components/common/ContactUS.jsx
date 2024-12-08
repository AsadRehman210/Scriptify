// import React from 'react'
// import ContactForm from './ContactForm';
// import bg from "../../assets/images/Contact us.jpg";

// export const ContactUS = () => {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: `url(${bg})` }}>
//       <div className='absolute inset-0 bg-blue-900 opacity-70'></div>

//       <div className='relative z-10 container mx-auto px-4'>

//         <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-stretch py-20 space-y-10 lg:space-y-0 lg:space-x-10">

//           {/* Left Side */}
//           <div className="flex-1 flex flex-col justify-center text-white max-w-xl text-justify">
//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Contact Us</h2>
//             <p className="mt-4 text-sm sm:text-md lg:text-lg">
//               At Scriptify, we specialize in delivering exceptional digital experiences. From web development to design and maintenance, our experts are here to help. Contact us today to learn more about how we can achieve your software development goals.
//             </p>
//             <div className="mt-8 flex flex-col space-y-4 items-start">
//               <div className="flex space-x-4">
//                 <a href="tel:+923038974920" className="flex items-center hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
//                   <i className="fa-solid fa-phone mr-2 text-xl"></i> Call Us
//                 </a>
//                 <a href='mailto:scriptifyofficial@gmail.com' className="flex items-center hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
//                   <i className="fas fa-envelope mr-2"></i> Email Us
//                 </a>
//               </div>
//               <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white font-bold py-2 px-6 rounded">
//                 Explore Our Work
//               </button>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="flex-1 flex justify-center lg:justify-end">
//             <ContactForm />
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

import React from "react";
import ContactForm from "./ContactForm";
// import bg from "../../assets/images/Contact us.jpg";

export const ContactUS = ({
  title,
  description,
  phoneNumber,
  email,
  buttonText,
}) => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url("https://www.ropstam.com/wp-content/uploads/2023/05/header-about-ropstam-solutions-scaled-1.webp")`,
      }}
    >
      <div className="absolute inset-0 bg-blue-900 opacity-70"></div>

      <div className="relative z-10 container mx-auto px-6 xl:px-36">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-stretch py-20 space-y-10 lg:space-y-0 lg:space-x-10">
          {/* Left Side */}
          <div className="flex-1 flex flex-col justify-center text-white max-w-xl text-justify">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-left">
              {title}
            </h2>
            <p className="mt-4 text-sm sm:text-md lg:text-lg">{description}</p>
            <div className="mt-8 flex flex-col space-y-4 items-start">
              <div className="flex space-x-4">
                {phoneNumber && (
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                  >
                    <i className="fa-solid fa-phone mr-2 text-xl"></i> Call Us
                  </a>
                )}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                  >
                    <i className="fas fa-envelope mr-2"></i> Email Us
                  </a>
                )}
              </div>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white font-bold py-2 px-6 rounded">
                {buttonText}
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
