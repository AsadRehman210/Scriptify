import React from "react";

const Experience = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-6 xl:px-36 py-16 flex flex-wrap items-center">
                {/* Stats Section */}
                <div className="w-full lg:w-1/2 flex flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-1/2 pr-4 mb-6">
                        <h3 className="text-blue-600 text-lg font-semibold">2009</h3>
                        <h2 className="text-xl font-bold mt-2">For 13+ years</h2>
                        <p className="mt-2 text-gray-600 text-justify">
                            Ropstam has been a leading innovator in software development, delivering solutions to complex challenges.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/2 pr-4 mb-6">
                        <h3 className="text-blue-600 text-lg font-semibold">1500+</h3>
                        <h2 className="text-xl font-bold mt-2">Projects Completed</h2>
                        <p className="mt-2 text-gray-600 text-justify">
                            Our team of industry experts will skillfully craft a personalized online presence that brings your unique vision to life.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/2 pr-4 mb-6">
                        <h3 className="text-blue-600 text-lg font-semibold">100+</h3>
                        <h2 className="text-xl font-bold mt-2">Talented Members</h2>
                        <p className="mt-2 text-gray-600 text-justify">
                            Our team includes seasoned IT professionals with over a decade of experience in the industry.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/2 pr-4 mb-6">
                        <h3 className="text-blue-600 text-lg font-semibold">500+</h3>
                        <h2 className="text-xl font-bold mt-2">Happy Clients</h2>
                        <p className="mt-2 text-gray-600 text-justify">
                            At the heart of our successful business lies a commitment to putting customers' requirements first.
                        </p>
                    </div>
                </div>

                {/* Video Section */}
                <div className="w-full lg:w-1/2 pr-4 mb-6">
                    <div className="relative" style={{ paddingTop: '56.25%' }}> 
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/UzmFSDI60Ig"
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            // style={{ border: 'none' }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
