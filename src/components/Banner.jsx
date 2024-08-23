import React from 'react';

const Banner = ({ heading, content, subHeading, button, btnRightContent }) => {
    return (
        <section
            className="relative bg-cover bg-center h-auto lg:h-screen flex items-center py-12"
            style={{
                backgroundImage: `url("https://www.ropstam.com/wp-content/uploads/2023/05/header-about-ropstam-solutions-scaled-1.webp")`
            }}
        >
            <div className='absolute inset-0 bg-blue-900 opacity-70'></div>
            <div className="container mx-auto px-4 z-10">
                <div className="rounded-lg max-w-3xl flex flex-col items-center md:items-start">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-bold mb-4 text-center md:text-start">
                        {heading}
                    </h1>
                    <h2 className='text-white text-lg sm:text-2xl md:text-3xl lg:text-md xl:text-3xl font-bold mb-4 text-center md:text-start'>
                        {subHeading}
                    </h2>
                    <p className="text-white text-base sm:text-lg md:text-xl lg:text-lg mb-6 text-justify w-full lg:max-w-2xl">
                        {content}
                    </p>
                    <div className="flex flex-col md:flex-row justify-center md:justify-start w-full space-y-4 md:space-y-0 md:space-x-4">
                        <a
                            href="/job-openings"
                            className="inline-block text-white font-semibold text-sm px-10 py-2 rounded-md border border-white hover:bg-blue-800 hover:text-white transition duration-300 mx-auto md:mx-0"
                        >
                            {button}
                        </a>

                        {btnRightContent &&
                            <a
                                href="/job-openings"
                                className="inline-block text-white text-sm font-semibold text-center px-10 py-2 rounded-md hover:bg-orange-600 transition duration-300 bg-orange-500 mx-auto md:mx-0"
                            >
                                {btnRightContent}
                            </a>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
