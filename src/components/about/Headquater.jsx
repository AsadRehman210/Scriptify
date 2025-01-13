import React from "react";
import logo1 from "../../assets/images/logo1.webp";
import logo2 from "../../assets/images/logo2.webp";
import logo3 from "../../assets/images/logo3.webp";
import logo4 from "../../assets/images/logo4.webp";
import logo5 from "../../assets/images/logo5.webp";
import logo6 from "../../assets/images/logo6.webp";
import logo8 from '../../assets/images/logo 8.webp';
import logo9 from '../../assets/images/logo 9.webp';
import logo10 from '../../assets/images/logo 10.webp';
import logo11 from '../../assets/images/logo 11.webp';
import logo12 from '../../assets/images/logo 12.webp';
import logo13 from '../../assets/images/logo 13.webp';
import logo14 from '../../assets/images/logo 14.webp';
import Headq from "../../assets/images/headquater.webp";

const logos = [
  { src: logo1, alt: "TRFFK" },
  { src: logo2, alt: "Walmart" },
  { src: logo3, alt: "LS Logistics" },
  { src: logo4, alt: "Rogers" },
  { src: logo5, alt: "GruffyGoat" },
  { src: logo6, alt: "Nescafe" },
  { src: logo8, alt: "Trovexgo" },
  { src: logo9, alt: "Attraction code" },
  { src: logo10, alt: "Debate Dissent" },
  { src: logo11, alt: "Grand revel" },
  { src: logo12, alt: "Almulkbir" },
  { src: logo13, alt: "Pop the Balloon" },
  { src: logo14, alt: "Tech Revolt" },
];

const Headquarter = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 xl:px-36 py-16 flex flex-col lg:flex-row items-center lg:items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#0d2144]">
            Headquartered in
            <span className="text-blue-600"> New York</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6">
          Unlock your business potential with Scriptify. Let us help you to transform your ideas into effective YouTube Automation Solutions. We have delivered our outstanding work to our global 30+ clients.
          </p>
          {/* Logos Section */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-12 object-contain"
              />
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={Headq}
            alt="Scriptify Headquarters"
            className="w-full h-[600px] shadow-lg object-fill"
          />
        </div>
      </div>
    </section>
  );
};

export default Headquarter;
