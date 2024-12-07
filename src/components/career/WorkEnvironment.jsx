import React from 'react';
import workEnv from  "../../assets/images/work Environment.png"

const WorkEnvironment = () => {
    return (
        <section className="bg-white ">
           <div className='container mx-auto px-6 xl:px-36 py-16 lg:h-[900px] flex flex-col lg:flex-row justify-between items-center'>
             {/* Text Section */}
             <div className=" lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-8 sm:leading-10 font-bold mb-6">
                    Be a part of a progressive work environment at <span className='text-blue-700'>Scriptify</span>,
                    where diversity and creativity are celebrated.
                </h1>
                <p className="text-base sm:text-lg md:text-lg lg:text-md mb-8 text-justify font-thin">
                    At Scriptify, we foster strong partnerships and support growth for all employees. Our inclusive workplace culture is driven by our commitment to providing economic, intellectual, and emotional value. Through a variety of practices, policies, and processes, we offer opportunities for professional development and continuous learning, ensuring our team is equipped to achieve success.
                </p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 text-base sm:text-lg md:text-xl">
                    Connect with Us
                </button>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pl-10 ">
                <img
                    src={workEnv}
                    alt="Work Environment"
                    className="w-full h-auto max-w-lg sm:max-w-lg md:max-w-2xl lg:max-w-lg object-cover"
                />
            </div>
           </div>
        </section>
    );
}

export default WorkEnvironment;
