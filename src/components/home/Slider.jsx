import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Slider = () => {
  const slides = [
    { id: 1, title_Highlight: "YouTube Channel", title: "Unlock the Full Potential of Your YouTube Channel", content: "From captivating scriptwriting to powerful YouTube SEO, we provide a complete suite of services tailored to elevate your content. Whether you're looking to tell compelling stories, create eye-catching visuals, or optimize your reach, we've got the expertise to help you stand out and succeed.", video: "https://www.w3schools.com/html/mov_bbb.mp4", color: "bg-blue-200" },
    { id: 2, title_Highlight: "Scriptwriting", title: "Turn Ideas into Captivating Scripts that Speak to Your Audience", content: "Great content begins with a well-written script. Our expert scriptwriters turn your ideas into engaging narratives that capture your audience’s attention and keep them hooked from start to finish. Whether you need creative storytelling, informative scripts, or branded content, we’ve got you covered!", video: "https://www.w3schools.com/html/mov_bbb.mp4", color: "bg-green-500" },
    { id: 3, title_Highlight: "Voiceover", title: "Bring Your Story to Life with Professional Voiceovers", content: "The right voice can elevate your message and create a lasting impact. Our talented voiceover artists deliver crisp, clear, and engaging performances that match the tone and style of your content. From energetic and fun to calm and authoritative, we provide the perfect voice for your project.", video: "https://www.w3schools.com/html/mov_bbb.mp4", color: "bg-red-500" },
    { id: 4, title_Highlight: "Video Editing", title: "Transform Raw Footage into Stunning Visual Masterpieces", content: "Your content deserves to look its best. Our professional video editors bring your footage to life with seamless transitions, dynamic effects, and polished finishes. Whether it's for YouTube, marketing campaigns, or personal projects, we turn your vision into reality with high-quality editing services.", video: "https://www.w3schools.com/html/mov_bbb.mp4", color: "bg-yellow-500" },
    { id: 5, title_Highlight: "Thumbnail Design", title: "Eye-Catching Thumbnails That Drive Clicks", content: "First impressions matter! Our designers create striking thumbnails that grab attention and encourage viewers to click. With bold visuals, captivating text, and the perfect balance of color and design, we ensure your video stands out in a crowded digital landscape.", video: "https://www.w3schools.com/html/mov_bbb.mp4", color: "bg-purple-500" },
    { id: 6, title_Highlight: "YouTube SEO", title: "Optimize Your Content for Maximum Visibility", content: "Unlock the full potential of your videos with YouTube SEO. We optimize your content with targeted keywords, metadata, and strategies designed to boost visibility, grow your audience, and drive organic traffic. Let us help your videos reach the right audience with effective YouTube SEO tactics.", video: "https://www.w3schools.com/html/mov_bbb.mp4", color: "bg-red-300" },
  ];

  return (
    <div className="max-w-full h-screen bg-no-repeat bg-cover bg-center flex items-center" style={{
      backgroundImage: `url("https://www.ropstam.com/wp-content/uploads/2023/05/header-about-ropstam-solutions-scaled-1.webp") `
    }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
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
            className={`shadow-lg px-6 py-8 h-full flex items-center`}
          >
            {/* Content Column */}
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center w-full h-full gap-8">
              <div className="w-full flex flex-col justify-center px-6">
                <h2 className="text-4xl lg:text-6xl text-white font-bold mb-4">
                  <span className="text-blue-500">{slide.title_Highlight}: </span>
                  {slide.title}
                </h2>
                <p className="text-white text-lg">{slide.content}</p>
              </div>

              {/* Video Column */}
              <div className="w-full flex justify-center items-center">
                <video
                  src={slide.video}
                  className="rounded-lg shadow-md w-full max-w-[300px] sm:max-w-[400px] max-h-[250px] sm:max-h-[300px]"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
