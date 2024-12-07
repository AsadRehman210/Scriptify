import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { NavLink } from "react-router-dom";

const SampleSlider = () => {
  const [autoplay, setAutoplay] = useState({
    delay: 2000,
    disableOnInteraction: false,
  });

  const slides = [
    {
      id: 1,
      title_Highlight: "YouTube Channel",
      title: "Unlock the Full Potential of Your YouTube Channel",
      content:
      "From scriptwriting to YouTube SEO, we offer services to elevate your content. Whether you need compelling stories, stunning visuals, or optimized reach, we have the expertise to help you succeed.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      color: "bg-blue-200",
      bgImage: "https://www.example.com/your-image1.jpg",
    },
    {
      id: 2,
      title_Highlight: "Scriptwriting",
      title: "Turn Ideas into Captivating Scripts that Speak to Your Audience",
      content:
        "Great content begins with a well-written script. Our expert scriptwriters turn your ideas into engaging narratives that capture your audience’s attention and keep them hooked from start to finish.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      color: "bg-green-500",
      bgImage: "https://www.example.com/your-image2.jpg",
    },
    {
      id: 3,
      title_Highlight: "Voiceover",
      title: "Bring Your Story to Life with Professional Voiceovers",
      content:
        "The right voice can elevate your message and create a lasting impact. Our talented voiceover artists deliver crisp, clear, and engaging performances.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      color: "bg-red-500",
      bgImage: "https://www.example.com/your-image3.jpg",
    },
    {
      id: 4,
      title_Highlight: "Video Editing",
      title: "Transform Raw Footage into Stunning Visual Masterpieces",
      content:
        "Our professional video editors bring your footage to life with seamless transitions, dynamic effects, and polished finishes.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      color: "bg-yellow-500",
      bgImage: "https://www.example.com/your-image4.jpg",
    },
    {
      id: 5,
      title_Highlight: "Thumbnail Design",
      title: "Eye-Catching Thumbnails That Drive Clicks",
      content:
        "Our designers create striking thumbnails that grab attention and encourage viewers to click.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      color: "bg-purple-500",
      bgImage: "https://www.example.com/your-image5.jpg",
    },
    {
      id: 6,
      title_Highlight: "YouTube SEO",
      title: "Optimize Your Content for Maximum Visibility",
      content:
        "We optimize your content with targeted keywords, metadata, and strategies designed to boost visibility.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      color: "bg-red-300",
      bgImage: "https://www.example.com/your-image6.jpg",
    },
  ];

  // Handle mouse enter and leave to stop and resume autoplay
  const handleMouseEnter = () => {
    setAutoplay({ ...autoplay, disableOnInteraction: true });
  };

  const handleMouseLeave = () => {
    setAutoplay({ ...autoplay, disableOnInteraction: false });
  };

  return (
    <div
      className="max-w-full h-screen bg-no-repeat bg-cover bg-center flex items-center relative"
      style={{
        backgroundImage: `url("https://www.ropstam.com/wp-content/uploads/2023/05/header-about-ropstam-solutions-scaled-1.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      onMouseEnter={handleMouseEnter} // Move the mouse events here
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={autoplay}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className={`px-6 py-8 h-full flex items-center`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Content Column */}
            <div
              className="w-full h-full gap-8 text-white p-8"
              style={{ pointerEvents: "none" }} // Disable pointer events on content
            >
              <div className="w-full lg:w-4/6 mx-auto flex flex-col align-center justify-center px-2 md:px-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-shadow-lg text-center">
                  {/* <span className="text-blue-500">
                    {slide.title_Highlight}:{" "}
                  </span> */}
                  {slide.title_Highlight}: {slide.title}
                </h2>
                <p className="text-base md:text-lg mb-6 text-center">
                  {slide.content}
                </p>
                <NavLink
                  href="/job-openings"
                  className="text-white font-semibold text-sm px-10 py-2 rounded-md border border-white hover:bg-blue-800 hover:text-white transition duration-300 mx-auto"
                >
                  Get Started
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SampleSlider;
