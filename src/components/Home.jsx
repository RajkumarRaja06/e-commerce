import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/home.css';

import slider2 from '../../public/assets/home2.png.webp';
import slider4 from '../../public/assets/home4.png.webp';

const Home = () => {
  return (
    <div className='home'>
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
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='home-slider1'>
            <div className='home-slider1-content'>
              <h6>SPRING / SUMMER COLLECTION 2017</h6>
              <h1>Get up to 30% Off New Arrivals</h1>
              <Link to='shop'>
                <button type='button'>SHOP NOW</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='home-slider2'>
            <div className='home-slider2-img'>
              <img src={slider2} alt='img' />
            </div>
            <div className='home-slider2-content'>
              <div>
                <span>Flat</span>
                <h3>75% Off</h3>
              </div>
              <h1>IT’S HAPPENING THIS SEASON!</h1>
              <Link to='shop'>
                <button type='button'>PURCHASE NOW</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='home-slider3'>
            <div className='home-slider3-img'>
              <img src={slider4} alt='img' />
            </div>
            <div className='home-slider3-content'>
              <div>
                <span>Flat</span>
                <h3>75% Off</h3>
              </div>
              <h1>Winter Collection</h1>
              <p>Best Cloth Collection By 2020!</p>
              <Link to='shop'>
                <button type='button'>Shop NOW</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
