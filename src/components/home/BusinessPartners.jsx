import React from "react";
import logo1 from "../../assets/images/logo1.jpg";
import logo2 from "../../assets/images/logo2.jpg";
import logo3 from "../../assets/images/logo3.jpg";
import logo4 from "../../assets/images/logo4.jpg";
import logo5 from "../../assets/images/logo5.jpg";
import logo6 from "../../assets/images/logo6.jpg";
import logo7 from "../../assets/images/logo7.jpg";

const ScrollingLogos = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

    return (
        <div className="bg-white py-4 overflow-hidden border border-black">
            <div className="scrolling-container flex items-center whitespace-nowrap">
                {/* Render logos twice for seamless looping */}
                {logos.concat(logos).map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className="h-12 mx-4"
                    />
                ))}
            </div>
        </div>
    );
};

export default ScrollingLogos;
