"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ReactNode } from "react";
import './featureslder.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface CustomSwiperProps<T> {
  slides: T[];
  renderSlide: (slide: T, index: number) => ReactNode;
  swiperOptions?: Record<string, unknown>;
}

export default function FeaturesMainSwiper<T>({
  slides,
  renderSlide,
  swiperOptions = {},
}: CustomSwiperProps<T>) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      slidesPerGroup={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) =>
          `<span class="${className}"></span>`,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 1
        },
      }}
      className="mySwiper overflow-x-hidden"
      {...swiperOptions}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i} className="h-auto lg:pb-5 pb-[60px]">
          {renderSlide(slide, i)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}