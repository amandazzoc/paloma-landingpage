"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";

const slides = [
  "/images/carrossel/slide1.png",
  "/images/carrossel/slide2.png",
  "/images/carrossel/slide3.png",
  "/images/carrossel/slide4.png",
  "/images/carrossel/slide5.png",
  "/images/carrossel/slide6.png",
];

export default function TestimonialsCarousel() {

  return (
    <Swiper
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode]}
      className="w-full mx-auto"
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1.3,
          spaceBetween: 0,
        },
        1000: {
          slidesPerView: 3.3,
          spaceBetween: 10,
        },
        1440: {
          slidesPerView: 4.3,
          spaceBetween: 10,
        },
        1980: {
          slidesPerView: 5.5,
          spaceBetween: 10,
        },
      }}
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div className="rounded-xl overflow-hidden  w-[280px] sm:w-[320px]">
            <Image
              src={src}
              alt={`Depoimento ${index + 1}`}
              width={400}
              height={427}
              className="w-full h-[427px] object-contain "
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
