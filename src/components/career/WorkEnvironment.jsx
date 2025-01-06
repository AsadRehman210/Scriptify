import React from 'react';
import workEnv from  "../../assets/images/work Environment.png"
import { NavLink } from 'react-router-dom';

const WorkEnvironment = () => {
    return (
        <section className="bg-white ">
           <div className='container mx-auto px-6 xl:px-36 py-16 lg:h-[900px] flex flex-col lg:flex-row justify-between items-center'>
             {/* Text Section */}
             <div className=" lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-8 sm:leading-10 font-bold mb-6 text-[#0d2144]">
                Be a Part Of Our Inclusive <span className='text-blue-700'>Environment</span>,
                    Where We Grow Together And Celebrate Our Success.
                </h1>
                <p className="text-base sm:text-lg md:text-lg lg:text-md mb-8 text-justify text-gray-600">
                At Scriptify, we are more than just a company, we are a community where diversity and creativity succeed. Our supportive environment is built on collaborations that grow employees and support their aims. With a strong focus on creating economic, intellectual, and emotional value, we ensure every team member feels valued. We also provide equal opportunities for learning and growth.
                </p>
                <NavLink to="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg  hover:bg-blue-600 text-base sm:text-lg md:text-xl">
                    Connect with Us
                </NavLink>
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
