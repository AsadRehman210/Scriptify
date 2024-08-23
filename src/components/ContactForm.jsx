import React from 'react';

const ContactForm = () => {
  return (
    <div className="w-full max-w-lg lg:max-w-md bg-white p-6 shadow-lg">
      <form>
        <div className="flex flex-col space-y-6">
          <input
            type="text"
            placeholder="Full Name*"
            className="p-3 border-b border-black focus:border-blue-600 focus:outline-none placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Work Email*"
            className="p-3 border-b border-black focus:border-blue-600 focus:outline-none placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Work Phone*"
            className="p-3 border-b border-black focus:border-blue-600 focus:outline-none placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Company Name*"
            className="p-3 border-b border-black focus:border-blue-600 focus:outline-none placeholder-gray-500"
          />
          <textarea
            placeholder="Message *"
            className="p-3 border-b border-black focus:border-blue-600 focus:outline-none placeholder-gray-500"
          ></textarea>

          <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border border-gray-300 rounded-md w-full">
            {/* Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label className="ml-3 text-gray-800">I'm not a robot</label>
            </div>
            {/* CAPTCHA Image */}
            <div className="flex items-center flex-col">
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="reCAPTCHA"
                className="w-8 h-8"
              />
              <div className="text-gray-500 mt-1" style={{ fontSize: "10px" }}>
                <span>reCAPTCHA</span>
                <div className='text-center' style={{ fontSize: "8px" }}>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Privacy
                  </a>
                  {" - "}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-normal text-lg py-3 px-12 rounded-lg mt-4 mx-auto"
          >
            Get in Touch
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;
