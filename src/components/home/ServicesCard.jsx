import React from 'react';

const ServicesCard = ({ title, description, iconClass }) => {
  return (
    <div className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg">
      <div className="flex items-center justify-between text-blue-500 text-4xl mb-4">
        {/* Dynamic Title and Icon */}
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <i className={iconClass}></i> {/* Dynamic Icon */}
      </div>
      {/* Dynamic Description */}
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default ServicesCard;
