import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import hassan from "../../assets/images/Hassan Shukor.png";
import alexia from "../../assets/images/alexia-barrail.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";

const testimonialsData = [
  {
    image: alexia,
    quote:
      "“They met expectations with every aspect of design and development of the product, and we’ve seen an increase in downloads and monthly users.”",
    name: "Anton Neugebauer",
    title: "CEO, RealAdvice Agency",
  },
  {
    image: hassan,
    quote:
      "“Outstanding service! Our collaboration resulted in a highly successful product.”",
    name: "Emily Johnson",
    title: "CTO, TechWorld",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  useEffect(() => {
    // Function to apply custom styles to Swiper pagination bullets
    const stylePaginationBullets = () => {
      const bullets = document.querySelectorAll(".swiper-pagination-bullet");
      bullets.forEach((bullet) => {
        bullet.style.width = "16px"; // Adjust width as needed
        bullet.style.height = "16px"; // Adjust height as needed
        bullet.style.backgroundColor = "#007bff"; // Adjust background color as needed
      });

      const activeBullets = document.querySelectorAll(
        ".swiper-pagination-bullet-active"
      );
      activeBullets.forEach((bullet) => {
        bullet.style.width = "16px"; // Adjust width for active bullet
        bullet.style.height = "16px"; // Adjust height for active bullet
        bullet.style.backgroundColor = "#0056b3"; // Adjust background color for active bullet
      });
    };

    // Apply styles after Swiper initialization
    stylePaginationBullets();

    // Reapply styles on slide change
    document.addEventListener("swipermove", stylePaginationBullets);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("swipermove", stylePaginationBullets);
    };
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto px-6 py-16 md:px-12 lg:pl-36 lg:pr-0 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="w-full lg:w-2/5 mb-8 lg:mb-0 flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Why <span className="text-blue-600">our clients</span> love us?
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Our clients love us because we prioritize effective communication
            and are committed to delivering high-quality software solutions that
            meet the highest standards of excellence.
          </p>
          <NavLink
            to="/contact"
            className="bg-transparent border-[1px] border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 mr-auto"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Slider Section */}
        <div className="w-full lg:w-3/5 flex justify-center">
          <div className="w-full max-w-4xl">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="shadow-lg mb-4 lg:mb-0 h-[30vh] w-full md:w-[40vw] lg:h-[450px] lg:w-[300px] mx-auto lg:mx-0 object-cover"
                    />
                    <div className="bg-gray-100 p-4 lg:p-6 rounded-sm shadow-lg text-start border-l-4 border-blue-500 lg:absolute lg:left-[35%] w-full lg:w-auto text-xs sm:text-lg">
                      <p className="text-gray-600 italic mb-4 text-center lg:text-start border-l-2 border-blue-500 px-0 lg:px-8">
                        {testimonial.quote}
                      </p>
                      <p className="font-bold text-blue-600 text-center lg:text-start px-4 lg:px-8">
                        {testimonial.name}, {testimonial.title}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;