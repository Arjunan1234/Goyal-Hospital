import React, { useRef } from "react";
import "../DoctorCarousel/doctorCarousel.scss";
import "./newDental.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import leftArrow from "../../assets/svg/leftArrow.svg";
import rightArrow from "../../assets/svg/rightArrow.svg";

import FadeUp from "../FadeUp/FadeUp";

const NewDental = ({ heading, para, images, para2 }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container newDental">
      <h2 className="newHeading">{heading}</h2>
      <p className="newSubHeading">{para}</p>
      <p className="newSubHeading">{para2}</p>

      <section className="doctor-section">
        <button
          ref={prevRef}
          className="custom-nav custom-prev"
          aria-label="Previous"
        >
          <img src={leftArrow} alt="Previous" />
        </button>
        <button
          ref={nextRef}
          className="custom-nav custom-next"
          aria-label="Next"
        >
          <img src={rightArrow} alt="Next" />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{
            el: ".customPagination",
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className}"></span>`,
          }}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {images.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="doctor-card">
                <div className="doctor-image-wrapper">
                  <img src={doctor.image} alt={doctor.name} />
                </div>
                <div className="doctor-content">
                  <h3>
                    <FadeUp>{doctor.name}</FadeUp>
                  </h3>
                  <p>{doctor.specialty}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="customPagination"></div>
      </section>
    </div>
  );
};

export default NewDental;
