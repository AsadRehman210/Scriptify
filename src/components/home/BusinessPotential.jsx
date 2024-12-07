import React from "react";
import business from "../../assets/images/business.jpg"

const BusinessPotential = () => {
    return (
        <section className="bg-gray-50 ">
            <div className="container mx-auto px-6 xl:px-36 py-16 flex items-center justify-center">
                <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Content Section */}
                    <div className="">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
                            Unlock your business potential
                            <span className="text-blue-500"> with our expert outsourcing solutions</span>
                        </h1>
                        <p className="text-gray-600 text-lg mb-6 text-justify	">
                            We offer an extension to your in-house team by thoughtfully curating
                            the perfect team members for each task and project. With us, you can
                            access a team of skilled designers, developers, and project
                            managers, without the hassle of managing full-time employees.
                        </p>
                        <button className="bg-white w-auto text-blue-500 border border-blue-500 font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-500 hover:text-white transition">
                            Let’s Assemble Your Team
                        </button>

                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center items-center">
                        <div className=" max-w-full">
                            <img
                                src={business}
                                alt="Dashboard Mockup"
                                // className=" w-full shadow-lg rounded"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default BusinessPotential;
