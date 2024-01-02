import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import imgUno from './Image/photo_2023-03-29_15-01-05.jpg'
import imgTres from './Image/juli.png'
import imgCuatro from './Image/photo_2022-12-06_12-33-12.jpg'
import imgCinco from './Image/photo_2023-03-29_14-47-21.jpg'
import imgSeis from './Image/_Q3A2233.jpg'
import imgSiete from './Image/photo_2023-03-29_15-00-55.jpg'
import imgOcho from './Image/Dra-Maria.png'

import '../../node_modules/swiper/swiper.css';
import '../../node_modules/swiper/modules/pagination/pagination.min.css';
import '../../node_modules/swiper/modules/navigation/navigation.min.css';
import '../Components/Css/styleCarrusel.css';

import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Carrusel() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper Carrusel"
            >
                <SwiperSlide><img src={imgUno} alt="" /></SwiperSlide>
                <SwiperSlide><img src={imgTres} alt="" /></SwiperSlide>
                <SwiperSlide><img src={imgCuatro} alt="" /></SwiperSlide>
                <SwiperSlide><img src={imgCinco} alt="" /></SwiperSlide>
                <SwiperSlide><img src={imgSeis} alt="" /></SwiperSlide>
                <SwiperSlide><img src={imgSiete} alt="" /></SwiperSlide>
                <SwiperSlide><img src={imgOcho} alt="" /></SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
