import React from "react";
import "./doctorCarousel.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import doctors from "../../constants/doctors";

const DoctorCarousel = () => {
  return (
    <section className="doctor-section">
      <p className="section-subtitle">Our Doctors</p>
      <h2 className="section-title">Meet Our Specialist Doctors</h2>
      <p className="section-description">
        Our team of specialist doctors is dedicated to providing expert care
        across a wide range of medical fields.
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{
          el: ".custom-pagination",
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
              <img src={doctor.image} alt={doctor.name} />
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination"></div>
    </section>
  );
};

export default DoctorCarousel;
