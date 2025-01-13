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
      title_Highlight: "Boost Your YouTube Success",
      title: "Discover the Power Of Impactful Channel",
      content:
        "We offer services from scriptwriting to YouTube SEO, we will help you to improve your content so that you can reach a global audience.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      color: "bg-blue-200",
      bgImage: "https://www.example.com/your-image1.jpg",
    },
    {
      id: 2,
      title_Highlight: "Engaging Scripts",
      title: "Turn Your Ideas Into Engaging Scripts That Inspire Your Audience",
      content:
        "Our expert team of scriptwriters will create engaging stories that perfectly align with your audience's tone, helping to keep your audience engaged from start to end.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      color: "bg-green-500",
      bgImage: "https://www.example.com/your-image2.jpg",
    },
    {
      id: 3,
      title_Highlight: "Make Your Voiceover More Relatable",
      title: "Bring Stories To Real-Life",
      content:
        "Make your voice more relatable with our talented voiceover artists who will boost the game, and provide you with clear and engaging voice-overs.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      color: "bg-red-500",
      bgImage: "https://www.example.com/your-image3.jpg",
    },
    {
      id: 4,
      title_Highlight: "Transform Raw Footage",
      title: "Turn Your Raw Stuff Into Stunning And Engaging Videos",
      content:
        "Our expert team will convert your raw footage into clear and stunning visuals with live effects that bring more views effortlessly.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      color: "bg-yellow-500",
      bgImage: "https://www.example.com/your-image4.jpg",
    },
    {
      id: 5,
      title_Highlight: "Boost Your Thumbnails Game",
      title: "Get More Clicks",
      content:
        "Our expert thumbnail designers create stunning visuals that spark curiosity and also encourage viewers to click and discover more.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      color: "bg-purple-500",
      bgImage: "https://www.example.com/your-image5.jpg",
    },
    {
      id: 6,
      title_Highlight: "SEO Boost",
      title: "Let YouTube SEO Be A Game Changer",
      content:
        "Our team will optimize your content for the relevant keywords, metadata, and descriptions to target the audience and perform well on the YouTube search engine.",
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
      className="max-w-full min-h-screen bg-no-repeat bg-cover bg-center flex items-center relative custom-bg-banner"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
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
            <div className="w-full h-full gap-8 text-white p-8">
              <div className="w-full lg:w-4/6 mx-auto flex flex-col align-center justify-center px-2 md:px-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-shadow-lg text-center">
                  <span className="text-[#1AA54A]">
                    {slide.title_Highlight && `${slide.title_Highlight} `}
                  </span>
                  <br />
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg mb-6 text-center">
                  {slide.content}
                </p>
                <NavLink
                  to="/contact"
                  className="text-white font-semibold text-sm px-10 py-2 rounded-md border border-[#1AA54A] bg-[#1AA54A] hover:bg-blue-800 hover:text-white hover:border-blue-800 transition duration-300 mx-auto"
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
