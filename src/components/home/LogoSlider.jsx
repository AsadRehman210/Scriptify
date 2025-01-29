import React from 'react';
import Marquee from 'react-fast-marquee';

// Import all logos
import logo1 from '../../assets/images/logo1.webp';
import logo2 from '../../assets/images/logo2.webp';
import logo3 from '../../assets/images/logo3.webp';
import logo4 from '../../assets/images/logo4.webp';
import logo6 from '../../assets/images/logo6.webp';
import logo8 from '../../assets/images/logo 8.webp';
import logo9 from '../../assets/images/logo 9.webp';
import logo10 from '../../assets/images/logo 10.webp';
import logo11 from '../../assets/images/logo 11.webp';
import logo12 from '../../assets/images/logo 12.webp';
import logo13 from '../../assets/images/logo 13.webp';
import logo14 from '../../assets/images/logo 14.webp';

const LogoSlider = () => {
  const logos = [logo1, logo2, logo3, logo4, logo6, logo8, logo9, logo10, logo11, logo12, logo13, logo14];

  // Duplicate the logos array to ensure a continuous loop
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="py-5 border-b border-gray-200">
      <Marquee direction="left" speed={50} play={true} gradient={false} debug={true}>
        {extendedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-12 h-12 mx-10"
          >
            <img
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="object-contain max-w-full max-h-full"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoSlider;
