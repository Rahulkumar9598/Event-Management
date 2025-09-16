import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/slide1.jpg", // 👈 apni images ko /public/images me rakhiye
    title: "Welcome to EventHub",
    text: "We make your special days unforgettable with perfect planning.",
    button: "Explore Events",
  },
  {
    image: "/images/slide2.jpg",
    title: "Weddings & Celebrations",
    text: "From intimate weddings to grand receptions, we handle it all.",
    button: "Plan Your Wedding",
  },
  {
    image: "/images/slide3.jpg",
    title: "Corporate Events",
    text: "Professional corporate events with seamless execution.",
    button: "View Corporate Plans",
  },
];

const HomePage = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Swiper Background Slider */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {/* Background Image */}
            <div
              className="w-full h-screen bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Text Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                <motion.h1
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl"
                >
                  {slide.text}
                </motion.p>
                <motion.a
                  href="#events"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="mt-6 px-6 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition"
                >
                  {slide.button}
                </motion.a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePage;
