"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      autoHeight={true} // ✅ Each slide adjusts height independently
      pagination={{
        clickable: true,
        renderBullet: (index, className) =>
          `<button class="${className}" type="button"></button>`, // ✅ no page reload
      }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="mySwiper overflow-x-hidden"
      {...swiperOptions}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>{renderSlide(slide, i)}</SwiperSlide>
      ))}
    </Swiper>
  );
}
