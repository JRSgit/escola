import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import './Swiper.scss'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules

const swipers = [

  "https://images.pexels.com/photos/7944035/pexels-photo-7944035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7944064/pexels-photo-7944064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/901964/pexels-photo-901964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7944035/pexels-photo-7944035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7944035/pexels-photo-7944035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7944035/pexels-photo-7944035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]


function Swipers() {
  return (

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
      className="mySwiper"
    >
      {
        swipers.map((sw, i) => (
          <SwiperSlide key={i}>
            <img src={sw} alt="imagens" />
          </SwiperSlide>
        ))
      }

    </Swiper>

  )
}

export default Swipers