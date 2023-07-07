import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import VNRestaurant from "../../img/vn-restaurant.png";
import Contact from "../../img/contact.png";
import Dentist from "../../img/dentist.png";
import Pokemon from "../../img/pokemon.png";
import "swiper/css";

export const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span>recent project</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        // install Swiper modules
        // spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://vnrestaurant.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={VNRestaurant} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://contact-app-five-psi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Contact} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://keyukidau4.github.io/dentist-responsive/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Dentist} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://pokemon-tut-mu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Pokemon} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
