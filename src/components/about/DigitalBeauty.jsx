import React from "react";

const DigitalBeauty = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-6 xl:px-36 py-16">
            <div className="flex flex-wrap md:flex-nowrap items-center divide-x-0 md:divide-x divide-gray-900">
                {/* Left Text Section */}
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0 pr-0 md:pr-10">
                    <h2 className="text-2xl lg:text-4xl font-semibold mb-4" style={{ lineHeight: "45px" }}>
                        Crafting digital beauty, one project at a time.
                    </h2>
                    <p className="text-gray-900 text-justify">
                        Scriptify delivers top-notch digital products with a focus on quality, innovation, and customer satisfaction. Our team of experts have over 10 years of experience in web and mobile development, ensuring your ideas are transformed into successful online businesses that stand out from the competition.
                    </p>
                </div>


                {/* Right Text Section */}
                <div className="w-full lg:w-1/2 md:pl-10">
                    <p className="text-blue-500 font-semibold text-xl lg:text-3xl text-justify" style={{ lineHeight: "40px" }}>
                        Unlock the potential of your online presence with Scriptify’s proven track record of delivering top-notch web solutions to over 500 clients worldwide.
                    </p>
                </div>
            </div>
        </div>
        </section>
    );
};

export default DigitalBeauty;
