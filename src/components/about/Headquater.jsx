import React from 'react';
import logo1 from "../../assets/images/logo1.jpg"
import logo2 from "../../assets/images/logo2.jpg"
import logo3 from "../../assets/images/logo3.jpg"
import logo4 from "../../assets/images/logo4.jpg"
import logo5 from "../../assets/images/logo5.jpg"
import logo6 from "../../assets/images/logo6.jpg"
import logo7 from "../../assets/images/logo7.jpg"
import Headq from "../../assets/images/headquater.webp"

const Headquarter = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center lg:items-center">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-12 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Headquartered in <span className="text-blue-600">Ontario, Canada</span>
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Scriptify boasts a proven track record of delivering top-notch custom software solutions to clients ranging from Fortune 500 companies to startups, including Walmart, SharkTank, Rogers, PostMedia, Bell, Telus, Cafebonappetit, and Nescafe, since 2009.
        </p>
        {/* Logos Section */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          <img src={logo1} alt="TRFFK" className="h-12 object-contain" />
          <img src={logo2} alt="Walmart" className="h-12 object-contain" />
          <img src={logo3} alt="LS Logistics" className="h-12 object-contain" />
          <img src={logo4} alt="Rogers" className="h-12 object-contain" />
          <img src={logo5} alt="GruffyGoat" className="h-12 object-contain" />
          <img src={logo6} alt="Nescafe" className="h-12 object-contain" />
          <img src={logo7} alt="Nescafe" className="h-12 object-contain" />
          {/* Add more logos as needed */}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img src={Headq} alt="Scriptify Headquarters" className="w-full h-[600px] shadow-lg" />
      </div>
    </div>
  );
};

export default Headquarter;
