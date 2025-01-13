import React from "react";
import p1 from "../../assets/images/p1.webp";
import p2 from "../../assets/images/p2.webp";
import p3 from "../../assets/images/p3.webp";
import p4 from "../../assets/images/p4.webp";
import p5 from "../../assets/images/p5.webp";
import { NavLink } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    imageUrl: p1,
    title: "Beer Production",
    description: "How BEER is Made in a Factory",
    buttonText: "Watch the Video",
    uvideo: "https://www.youtube.com/watch?v=lM2GR2dNy68"
  },
  {
    id: 2,
    imageUrl: p2,
    title: "Silencing Debate",
    description: "Muslima Throws TANTRUM After Douglas Murray SILENCES Her With Harsh Truths!",
    buttonText: "Watch the Video",
    uvideo: "https://www.youtube.com/watch?v=3w0RqkkWUaY"
  },
  {
    id: 3,
    imageUrl: p3,
    title: "Asian Destinations",
    description: "15 Must Visit Asian Destinations You Shouldn’t Miss 2025",
    buttonText: "Watch the Video",
    uvideo: "https://www.youtube.com/watch?v=kdyU9o9NAys"
  },
  {
    id: 4,
    imageUrl: p4,
    title: "Relationship Advice",
    description: "10 Relationship Mistakes YOU MUST NEVER do with WOMEN -- Stoic Wisdom",
    buttonText: "Watch the Video",
    uvideo: "https://www.youtube.com/watch?v=eW6dpbTrYEA"
  },
  {
    id: 5,
    imageUrl: p5,
    title: "Ship Collisions",
    description: "Biggest Ship Collisions And Mistakes All Caught On Camera",
    buttonText: "Watch the Video",
    uvideo: "https://www.youtube.com/watch?v=pb7NFq36tT8"
  },
];


const Portfolio = ({ headingOne, headingMidd, headingEnd, description, Explore }) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 xl:px-36 py-16">
        <div className="max-w-3xl text-left">
          <h2 className="text-3xl font-bold text-[#0d2144]">
            {headingOne}
            <span className="text-blue-600"> {headingMidd}</span> {headingEnd}
          </h2>
          <p className="mt-4 text-blue-500 text-lg">
            {description}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <a
              href={item.uvideo}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
              className="relative group w-auto h-52 overflow-hidden rounded-lg shadow-lg"
            >
              {/* Background Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-fill"
              />

              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 right-0 h-auto bg-blue-600 bg-opacity-70 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="relative p-4">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-white text-sm text-left">
                    {item.description}
                  </p>
                  <button className="absolute right-4 -top-8 mt-4 px-4 py-2 bg-white hover:bg-orange-500 hover:text-white text-blue-600 rounded-lg font-medium shadow-md ">
                    {item.buttonText}
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
        {Explore && (
          <div className="pt-12 flex flex-col md:flex-row justify-center w-full space-y-4 md:space-y-0 md:space-x-4">
            <NavLink
              to="/portfolio"
              className=" inline-block text-blue-600 font-semibold text-lg px-10 py-4 rounded-md border border-blue-600 hover:bg-blue-800 hover:text-white transition duration-300 mx-auto md:mx-0"
            >
              {Explore}
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
