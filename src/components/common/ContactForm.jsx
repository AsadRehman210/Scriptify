import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    workPhone: "",
    channelName: "",
    message: "",
    isRobot: false,
  });
  const [loading, setLoading] = useState(false); // Added loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      isRobot: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user is not a robot
    if (!formData.isRobot) {
      toast.error("Please confirm you are not a robot.");
      return;
    }

    setLoading(true);

    // Prepare the email data
    const templateParams = {
      fullName: formData.fullName,
      workEmail: formData.workEmail,
      workPhone: formData.workPhone,
      channelName: formData.channelName,
      message: formData.message,
      from_name: "Scriptify",
    };

    // Send the email using EmailJS
    emailjs
      .send(
        "service_z045sz3",
        "template_y21do3f",
        templateParams,
        "zUOwvwfY5QWnjHYiC"
      ) // Replace with your EmailJS details
      .then((response) => {
        console.log("Message sent successfully", response);
        toast.success("Your message has been sent!");
        setFormData({
          fullName: "",
          workEmail: "",
          workPhone: "",
          channelName: "",
          message: "",
          isRobot: false,
        });
        setLoading(false); // Set loading to false after successful submission
      })
      .catch((error) => {
        console.error("Failed to send message", error);
        alert("Oops! Something went wrong. Please try again.");
        setLoading(false); // Set loading to false after an error
      });
  };

  return (
    <div className="w-full max-w-lg lg:max-w-md bg-white p-6 shadow-lg text-[#0d2144]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-6">
          <input
            type="text"
            placeholder="Full Name*"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="p-3 border-b border-black focus:border-blue-600 focus:outline-none placeholder-gray-500"
            required
          />
          <input
            type="email"
            placeholder="Work Email*"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleChange}
            className="p-3 border-b border-black focus:border-blue-600 focus:outline-none placeholder-gray-500"
            required
          />
          <input
            type="text"
            placeholder="Work Phone*"
            name="workPhone"
            value={formData.workPhone}
            onChange={handleChange}
            className="p-3 border-b border-black focus:border-blue-600 focus:outline-none placeholder-gray-500"
            required
          />
          <input
            type="text"
            placeholder="Channel Name/URL*"
            name="channelName"
            value={formData.channelName}
            onChange={handleChange}
            className="p-3 border-b border-black focus:border-blue-600 focus:outline-none placeholder-gray-500"
            required
          />
          <textarea
            placeholder="Message *"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border-b border-black focus:border-blue-600 focus:outline-none placeholder-gray-500"
            required
          ></textarea>

          <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border border-gray-300 rounded-md w-full">
            {/* Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={formData.isRobot}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                // required
              />
              <label className="ml-3 text-[#0d2144]">I'm not a robot</label>
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
                <div className="text-center" style={{ fontSize: "8px" }}>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Privacy
                  </a>
                  {" - "}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="flex gap-2 justify-center items-center bg-[#1AA54A] hover:bg-orange-600 text-white font-normal text-lg py-3 px-12 rounded-lg mt-4 mx-auto"
          >
            {loading ? (
              <>
              
              Get in Touch
              <svg
                className="animate-spin h-5 w-5 mr-3 bg-white"
                viewBox="0 0 24 24"
              ></svg>
            </>
            
            ) : (
              "Get in Touch"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
