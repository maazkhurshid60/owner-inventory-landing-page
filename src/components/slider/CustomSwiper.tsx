"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ReactNode } from "react";

interface CustomSwiperProps<T> {
  slides: T[];
  renderSlide: (slide: T, index: number) => ReactNode;
  swiperOptions?: Record<string, unknown>;
}

export default function CustomSwiper<T>({
  slides,
  renderSlide,
  swiperOptions = {},
}: CustomSwiperProps<T>) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]} // Added Autoplay module
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
          slidesPerGroup: 2
        },
        1024: { 
          slidesPerView: 2, 
          slidesPerGroup: 2 
        },
      }}
      className="mySwiper overflow-x-hidden flex items-stretch"
      {...swiperOptions}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i} className="flex items-stretch pb-[60px]">
          {renderSlide(slide, i)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}