import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import heroone from "/one.jpg"
import herotwo from "/Two.jpg"
import herothree from "/Three.jpg"
import herofour from "/Four.jpg"
import { Autoplay} from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import Button from './reusableComponents/Button';
const Hero = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-[35px] md:px-28 py-8">
          {/* Text Section */}
          <div className="w-full lg:w-[70%]">
            <h1 className="text-[50px] font-bold capitalize mb-6 leading-tight">
              Unlock Your Potential with Byway
            </h1>
            <p>
              Welcome to Byway, where learning knows no bounds. We believe that
              education is the key to personal and professional growth, and we're
              here to guide you on your journey to success.
            </p>
            <Button
              btnText="Start your instructor journey"
              btnStyle="bg-[#3B82F6] dark:bg-red-500 text-white w-full lg:w-max justify-center lg:justify-start rounded-md mt-6 mb-10 lg:mb-0"
            />
          </div>
          {/* Image Section */}
          <div className="mt-5">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
              <SwiperSlide className="p-5 lg:p-16">
                <img src={heroone} alt="Mentor Holding Class Notes" />
              </SwiperSlide>
              <SwiperSlide className="p-5 lg:p-16">
                <img src={herotwo} alt="Mentor Holding Class Notes" />
              </SwiperSlide>
              <SwiperSlide className="p-5 lg:p-16">
                <img src={herothree} alt="Mentor Holding Class Notes" />
              </SwiperSlide>
              <SwiperSlide className="p-5 lg:p-16">
                <img src={herofour} alt="Mentor Holding Class Notes" />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      );
    };

export default Hero