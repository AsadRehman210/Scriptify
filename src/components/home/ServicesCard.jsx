import React from 'react';

const ServicesCard = ({ title, description, iconClass }) => {
  return (
    <div className="group p-6 bg-white border rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg hover:scale-105 transform transition-all duration-300">
      <div className="flex items-center justify-between text-blue-500 text-4xl mb-4">
        <h3 className="text-lg font-bold text-[#0d2144] group-hover:text-white">{title}</h3>
        <i className={`${iconClass} text-3xl text-blue-500 group-hover:text-white`}></i> 
      </div>
      {/* Dynamic Description */}
      <p className="mt-2 text-gray-600 group-hover:text-white">{description}</p>
    </div>
  );
};

export default ServicesCard;
