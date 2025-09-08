"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { translations } from "./utiles";

interface Slide {
  src: string;
  alt: string;
  caption: string;
}

export default function AutoCarousel() {
  const { language } = useLanguage();
  const [swiperDirection, setSwiperDirection] = useState<"rtl" | "ltr">("ltr");
  const t = translations[language];

  useEffect(() => {
    setSwiperDirection(language === "ar" ? "rtl" : "ltr");
  }, [language]);
  const slides: Slide[] = [
    {
      src: "/images/image2.jpg",
      alt: `${t.swipper1Text}`,
      caption: `${t.swipper1Text}`,
    },
    {
      src: "/images/image2.jpg",
      alt: `${t.swipper2Text}`,
      caption:`${t.swipper2Text}`,
    },
    {
      src: "/images/image1.jpg",
      alt: `${t.swipper3Text}`,
      caption: `${t.swipper3Text}`,
    },
  ];
  return (
    <div className="w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        slidesPerView={1}
        dir={swiperDirection}
        key={swiperDirection}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[400px] w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-xl px-4">
                  {slide.caption}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
