import React, { useRef } from "react";
import "./doctorCarousel.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import leftArrow from "../../assets/svg/leftArrow.svg";
import rightArrow from "../../assets/svg/rightArrow.svg";

import image1 from "../../assets/images/doctors/image1.png";
import image2 from "../../assets/images/doctors/image2.png";
import image3 from "../../assets/images/doctors/image3.png";
import image4 from "../../assets/images/doctors/image4.png";
import FadeUp from "../FadeUp/FadeUp";

const doctors = [
  {
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    image: image1,
  },
  {
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    image: image2,
  },
  {
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    image: image3,
  },
  {
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    image: image4,
  },
  {
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    image: image1,
  },
  {
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    image: image2,
  },
  {
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    image: image3,
  },
  {
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    image: image4,
  },
];

const DoctorCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="container doctor-section">
      <p className="section-subtitle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
        >
          <path
            d="M7.5 0.25C7.03587 0.25 6.59075 0.434375 6.26256 0.762563C5.93437 1.09075 5.75 1.53587 5.75 2V5.25H2.5C2.03587 5.25 1.59075 5.43437 1.26256 5.76256C0.934375 6.09075 0.75 6.53587 0.75 7V11C0.75 11.966 1.534 12.75 2.5 12.75H5.75V16C5.75 16.966 6.534 17.75 7.5 17.75H11.5C11.9641 17.75 12.4092 17.5656 12.7374 17.2374C13.0656 16.9092 13.25 16.4641 13.25 16V12.75H16.5C16.9641 12.75 17.4092 12.5656 17.7374 12.2374C18.0656 11.9092 18.25 11.4641 18.25 11V7C18.25 6.53587 18.0656 6.09075 17.7374 5.76256C17.4092 5.43437 16.9641 5.25 16.5 5.25H13.25V2C13.25 1.53587 13.0656 1.09075 12.7374 0.762563C12.4092 0.434375 11.9641 0.25 11.5 0.25H7.5Z"
            fill="#195AFF"
          />
        </svg>

        <FadeUp>Our Doctors</FadeUp>
      </p>
      <h2 className="section-title">
        {" "}
        <FadeUp>Meet Our Specialist Doctors</FadeUp>
      </h2>
      <p className="section-description">
        <FadeUp>
          {" "}
          Our team of specialist doctors is dedicated to providing expert care
          across a wide range of medical fields.
        </FadeUp>
      </p>

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
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {doctors.map((doctor, index) => (
          <SwiperSlide key={index}>
            <div className="doctor-card">
              <div className="doctor-image-wrapper">
                <img src={doctor.image} alt={doctor.name} />
              </div>
              <div className="doctor-content">
                <h3>
                  <FadeUp>{doctor.name}</FadeUp>
                </h3>
                <p>
                  <FadeUp>{doctor.specialty}</FadeUp>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="customPagination"></div>
    </section>
  );
};

export default DoctorCarousel;
