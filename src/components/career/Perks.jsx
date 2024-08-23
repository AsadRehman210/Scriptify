import React from 'react';
import office from "../../assets/images/perks.png"

const Perks = () => {
    return (
        <section className="bg-gray-100 flex flex-col lg:flex-row items-center mb-16 gap-12 pt-16 lg:py-0">
            {/* Left Column - Image */}
            <div className="lg:w-2/5 flex justify-center lg:justify-start order-2 lg:order-1">
                <img
                    src={office}
                    alt="Scriptify Office"
                    className="w-full max-h-[700px] max-w-lg sm:max-w-lg md:max-w-2xl lg:max-w-lg object-cover"
                />
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-3/5 w-full px-4 lg:px-12 order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
                    Our Perks
                </h2>
                <p className="text-base sm:text-lg lg:text-md mb-8 text-justify">
                    At Scriptify, we believe in providing our employees with a work environment they love while also ensuring they are financially comfortable. That’s why we offer fantastic benefits and perks to help support their daily lives.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <li className="flex items-start">
                        <span className="flex items-center justify-center h-8 rounded-full bg-blue-500 text-white mr-4 px-2">
                            ✔
                        </span>
                        <span>
                            <strong>Bonuses</strong><br />
                            Pay rise, promotions, and top opportunities for professional development.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <span className="flex items-center justify-center h-8 rounded-full bg-blue-500 text-white mr-4 px-2">
                            ✔
                        </span>
                        <span>
                            <strong>Health Insurance</strong><br />
                            Healthcare coverage and wellness benefits.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <span className="flex items-center justify-center h-8 rounded-full bg-blue-500 text-white mr-4 px-2">
                            ✔
                        </span>
                        <span>
                            <strong>Provident Funds</strong><br />
                            Maximize Your Tax & Investment Benefits with Our Company Sponsored Provident Funds.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <span className="flex items-center justify-center h-8 rounded-full bg-blue-500 text-white mr-4 px-2">
                            ✔
                        </span>
                        <span>
                            <strong>Vehicle</strong><br />
                            Company maintained vehicle along with fuel allowance.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <span className="flex items-center justify-center h-8 rounded-full bg-blue-500 text-white mr-4 px-2">
                            ✔
                        </span>
                        <span>
                            <strong>Parental Leaves</strong><br />
                            When it comes to feelings, work isn’t the priority.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <span className="flex items-center justify-center h-8 rounded-full bg-blue-500 text-white mr-4 px-2">
                            ✔
                        </span>
                        <span>
                            <strong>Training</strong><br />
                            Mentors to guide and support you. Training programs to polish your skills.
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Perks;
