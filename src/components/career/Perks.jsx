import React from 'react';
import office from "../../assets/images/perks.png";

const perksData = [
    {
        title: "Bonuses",
        description: "We appreciate your hard work by providing a performance-based bonus."
    },
    {
        title: "Leave Allowance",
        description: "We believe in work-life balance that’s why we offer 18 days of paid leave and 24 days of unpaid leave within the year."
    },
    {
        title: "Leave Encashment",
        description: "We will never ignore your unused leave, it's encashable at the end of the year."
    },
    {
        title: "Employee of the Month",
        description: "We also measure your overall monthly performance and reward your hard work with a cash prize."
    },
    {
        title: "Holidays",
        description: "As we are based in Pakistan, you can enjoy Pakistani holidays with your family and loved ones."
    }
];

const Perks = () => {
    return (
        <section className="bg-gray-100 flex flex-col lg:flex-row items-center mb-16 gap-12 pt-16 lg:py-0">
            <div className="lg:w-2/5 flex justify-center lg:justify-start order-2 lg:order-1">
                <img
                    src={office}
                    alt="Scriptify Office"
                    className="w-full max-h-[700px] max-w-lg sm:max-w-lg md:max-w-2xl lg:max-w-lg object-cover"
                />
            </div>

            <div className="lg:w-3/5 w-full px-4 lg:px-12 order-1 lg:order-2 text-[#0d2144]">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
                    Our Perks And Benefits
                </h2>
                <p className="text-base sm:text-lg lg:text-md mb-8 text-justify text-gray-600">
                    We understand the importance of financial security and work-life balance. That’s why we have collected a range of perks designed to support your career and daily life.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {perksData.map((perk, index) => (
                        <li key={index} className="flex items-start">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white mr-4 px-2">
                                ✔
                            </div>
                            <div className='text-gray-600'>
                                <strong className='text-[#0d2144]'>{perk.title}</strong><br />
                                {perk.description}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Perks;
