import React from "react";
import business from "../../assets/images/business.webp";
import { NavLink } from "react-router-dom";

const BusinessPotential = () => {
  return (
    <section className="bg-gray-50 ">
      <div className="container mx-auto px-6 xl:px-36 py-16 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <h1 className="text-4xl font-bold text-[#0d2144] mb-4 leading-tight">
              Boost your YouTube Channel
              <span className="text-blue-500">
                {" "}
                with our YouTube Automation Solution
              </span>
            </h1>
            <p className="text-gray-600 text-md mb-6 text-justify	">
              Do you feel you’re being backed by limited resources and time? We
              have got the solutions. Our expert services provide you instant
              access to an expert team of skilled YouTube search engine
              optimizers, scriptwriters, video editors, thumbnail designers, and
              voiceover artists. We carefully select the perfect team member for
              each task and project so you can focus on growing your business
              and audience instead of managing a full-time team.
            </p>
            <NavLink
              to="/contact"
              className="bg-white w-auto text-blue-500 border border-blue-500 font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-500 hover:text-white transition"
            >
              Let’s Assemble Your Team
            </NavLink>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center">
            <div className=" max-w-full">
              <img src={business} alt="Dashboard Mockup" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPotential;
