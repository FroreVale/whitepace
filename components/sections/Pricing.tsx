"use client"

import Image from "next/image";
import dash from "@/public/work/dash.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Pricing() {
  return (
    <section className="bg-background text-foreground">
      <div className="px-4 py-20 max-w-370 mx-auto">
        {/* Text Content */}
        <div className="flex flex-col gap-6 justify-center items-center">
          <h2 className="relative z-0 font-bold text-4xl md:text-[54px] text-center w-fit">
            Choose your plan
            <div className="absolute -z-10 -bottom-8 right-0 sm:-right-8 lg:left-0 h-10 w-63">
              {" "}
              <Image src={dash} alt="Dash" />{" "}
            </div>
          </h2>
          <p className="text-lg text-center lg:text-start">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </p>
        </div>

        {/* Swiper */}
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
