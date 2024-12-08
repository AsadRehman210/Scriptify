import React from 'react';
import Marquee from 'react-fast-marquee';
import logo1 from "../../assets/images/logo1.jpg";
import logo2 from "../../assets/images/logo2.jpg";
import logo3 from "../../assets/images/logo3.jpg";
import logo4 from "../../assets/images/logo4.jpg";
import logo5 from "../../assets/images/logo5.jpg";
import logo6 from "../../assets/images/logo6.jpg";
import logo7 from "../../assets/images/logo7.jpg";

const LogoSlider = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <div className="py-5 border-b border-gray-200">
      <Marquee direction="left" speed={100} gradient={true}>
        <div className="flex gap-28 items-center justify-between">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-12 h-12"
            >
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
         
        </div>
      </Marquee>
    </div>
  );
};

export default LogoSlider;
