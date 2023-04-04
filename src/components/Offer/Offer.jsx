import React from 'react';
import './Offer.css';
import { offer } from '../../Data';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Offer = () => {
    return (
        <section className='offer section' id='offer'>

            <h2 className='section-title' data-title='Offer'>
                Select offer for you
            </h2>

            <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="container">
                {offer.map(({ img, title, discount, description }, index) => {
                    return (
                        <SwiperSlide >
                            <div className='offer-items' key={index}>
                                <div className="offer-img-wrapper">
                                    <img src={img} alt="" className="offer-img" />
                                </div>
                                <div className="offer-content">
                                    <h3 className="offer-title">{title}</h3>
                                    <span className="offer-discount">{discount}</span>
                                    <p className="offer-description">{description}</p>
                                    <a href="/" className="btn offer-btn">Order Now</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>


        </section>
    );
};

export default Offer;