import React from "react";
import ContactForm from "./ContactForm";
import { NavLink } from "react-router-dom";

export const ContactUS = ({
  title,
  description,
  phoneNumber,
  email,
  buttonText,
}) => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center custom-bg-contact"
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
              <NavLink to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white font-bold py-2 px-6 rounded">
                {buttonText}
              </NavLink>
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
