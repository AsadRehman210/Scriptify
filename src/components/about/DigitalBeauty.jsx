import React from "react";

const DigitalBeauty = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-6 xl:px-36 py-16">
            <div className="flex flex-wrap md:flex-nowrap items-center divide-x-0 md:divide-x divide-gray-900">
                {/* Left Text Section */}
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0 pr-0 md:pr-10">
                    <h2 className="text-2xl lg:text-4xl font-semibold mb-4 text-[#0d2144]" style={{ lineHeight: "45px" }}>
                    Let’s Drive Digital Excellence With Us
                    </h2>
                    <p className="text-gray-600 text-justify">
                    At Scriptify, we are proud of creating digital solutions. From scriptwriting and video editing to thumbnail designs and YouTube SEO, we ensure quality work with measurable results. This will ensure their ideas succeed and lead their business in the competitive market.

                    </p>
                </div>


                {/* Right Text Section */}
                <div className="w-full lg:w-1/2 md:pl-10">
                    <p className="text-blue-500 font-semibold text-xl lg:text-3xl text-justify" style={{ lineHeight: "40px" }}>
                    Discover digital excellence, expand your global reach with Scriptify’s high-quality services, and include 30+ satisfied clients.
                    </p>
                </div>
            </div>
        </div>
        </section>
    );
};

export default DigitalBeauty;
