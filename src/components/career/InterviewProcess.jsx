import React, { useState } from 'react';
import { accordionData } from './AccordionDats';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const InterviewProcess = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="container mx-auto px-6 xl:px-36 py-16 text-[#0d2144]">
                <h1 className="text-3xl font-bold mb-6">
                    Interview At <span className="text-blue-500">Scriptify</span>
                </h1>
                <p className="text-gray-600 mb-10">
                Our interview process varies in different regions but below you will get a general interview process of Scriptify Solutions Inc. and some effective tips.
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Interview Process Section */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-blue-500">Interview Process</h2>
                        <p className="text-gray-600 mb-6 lg:min-h-[4.7rem]">
                        The journey to become a part of Scriptify is as dynamic as our global presence. Here is a general overview of the Scriptify Interview Process.
                        </p>
                        <div className="space-y-4">
                            {accordionData.slice(0, 4).map((item, index) => (
                                <div key={index} className="bg-white p-4 shadow-sm rounded">
                                    <button
                                        className="flex justify-between items-center w-full text-left"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span className="text-lg font-semibold">{item.title}</span>
                                        <i className={`fas fa-chevron-${openAccordion === index ? 'up' : 'down'} text-gray-500`}></i>
                                    </button>
                                    {openAccordion === index && (
                                        <div className="mt-4 text-gray-600 transition-all duration-300 ease-in-out">
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Interview Tips Section */}
                    <div>
                        <h2 className="text-3xl text-blue-500 font-bold mb-4">Interview Tips</h2>
                        <p className="text-gray-600 mb-6 lg:min-h-[4.7rem]">
                        To help you stay confident and focused during the interview, we will mention some simple yet helpful tips that help to reduce your nervousness and boost your confidence.
                        </p>
                        <div className="space-y-4">
                            {accordionData.slice(4).map((item, index) => (
                                <div key={index + 4} className="bg-white p-4 shadow-sm rounded">
                                    <button
                                        className="flex justify-between items-center w-full text-left"
                                        onClick={() => toggleAccordion(index + 4)}
                                    >
                                        <span className="text-lg font-semibold">{item.title}</span>
                                        <i className={`fas fa-chevron-${openAccordion === index + 4 ? 'up' : 'down'} text-gray-500`}></i>
                                    </button>
                                    {openAccordion === index + 4 && (
                                        <div className="mt-4 text-gray-600 transition-all duration-300 ease-in-out">
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewProcess;
