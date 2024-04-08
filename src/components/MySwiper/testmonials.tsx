'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules"
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

export default function MySwiper2() {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={32}
            grabCursor={true}
            loop={true}
            modules={[Pagination, Navigation]}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                1000: {
                    slidesPerView: 2
                },
                500: {
                    slidesPerView: 3
                },
                300: {
                    slidesPerView: 1
                }
            }}
            navigation={true}
            className="mySwiper"
        >
            <SwiperSlide className="swiper-slide">
                <div className="">
                    <Image
                        src="/images/test2/1.png"
                        alt="Depoimento"
                        width={1131}
                        height={1177}
                        layout="cover"
                        className="rounded-xl h-full"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="">
                    <Image
                        src="/images/test2/2.png"
                        alt="Depoimento"
                        width={1131}
                        height={1177}
                        layout="cover"
                        className="rounded-xl h-full"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="">
                    <Image
                        src="/images/test2/3.png"
                        alt="Depoimento"
                        width={1131}
                        height={1177}
                        layout="cover"
                        className="rounded-xl h-full"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="">
                    <Image
                        src="/images/test2/4.png"
                        alt="Depoimento"
                        width={1131}
                        height={1177}
                        layout="cover"
                        className="rounded-xl h-full"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="">
                    <Image
                        src="/images/test2/5.png"
                        alt="Depoimento"
                        width={1131}
                        height={1177}
                        layout="cover"
                        className="rounded-xl h-full"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="">
                    <Image
                        src="/images/test2/6.png"
                        alt="Depoimento"
                        width={1131}
                        height={1177}
                        layout="cover"
                        className="rounded-xl h-full"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="">
                    <Image
                        src="/images/test2/7.png"
                        alt="Depoimento"
                        width={1131}
                        height={1177}
                        layout="cover"
                        className="rounded-xl h-full"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="">
                    <Image
                        src="/images/test2/8.png"
                        alt="Depoimento"
                        width={1131}
                        height={1177}
                        layout="cover"
                        className="rounded-xl h-full"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="">
                    <Image
                        src="/images/test2/9.png"
                        alt="Depoimento"
                        width={1131}
                        height={1177}
                        layout="cover"
                        className="rounded-xl h-full"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}