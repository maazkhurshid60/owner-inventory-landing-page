"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ReactNode } from "react";

interface BrandsSwiperProps<T> {
  slides: T[];
  renderSlide: (slide: T, index: number) => ReactNode;
  swiperOptions?: Record<string, unknown>;
}

export default function BrandsSwiper<T>({
  slides,
  renderSlide,
  swiperOptions = {},
}: BrandsSwiperProps<T>) {
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      spaceBetween={20}
      slidesPerView={1.5}
      loop={true}
       fadeEffect={{ crossFade: true }}
      speed={1200} // Smooth transition speed
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      freeMode={false} // disable free mode for smoother autoplay
      watchSlidesProgress={true} // helps smooth rendering
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      className="mySwiper overflow-x-hidden"
      {...swiperOptions}
    >
      {slides.map((slide: any, i) => (
        <SwiperSlide key={slide.id || i}>{renderSlide(slide, i)}</SwiperSlide>
      ))}
    </Swiper>
  );
}
