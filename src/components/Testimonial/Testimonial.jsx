import React, { useRef } from "react";
import "./testimonial.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import leftArrow from "../../assets/svg/leftArrowWhite.svg";
import rightArrow from "../../assets/svg/rightArrowWhite.svg";
import doubleQuotesYellow from "../../assets/svg/doubleQuotesYellow.svg";
import star from "../../assets/svg/star.svg";
import FadeUp from "../FadeUp/FadeUp";

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      name: "Pankaj Sachdeva",
      message: `Excellant experience in Goyal Hospital. Doctors (Dr.A.K. Gupta & Others) are very cooperative. Nursing and other staff are also very polite & helpful. I would like to strongly recommend for this Hospital.`,
    },
    {
      name: "Shivam Pawar",
      message: `Dr S. S Bhagat is a very good Dr he treat his petient like his family members and his staff also good DR anil goyal is a great learder and very inspirational`,
    },
    {
      name: "Rahul Gupta",
      message: `Good hospital in east Delhi, all the services and to every department is so nice. My all family members consultant to Goyal hospital whenever required. Thanks to all the staff members. :-) I am a happy customer.`,
    },
    {
      name: "Shivam Pawar",
      message: `Dr S. S Bhagat is a very good Dr he treat his petient like his family members and his staff also good DR anil goyal is a great learder and very inspirational`,
    },
    {
      name: "Rahul Gupta",
      message: `Good hospital in east Delhi, all the services and to every department is so nice. My all family members consultant to Goyal hospital whenever required. Thanks to all the staff members. :-) I am a happy customer.`,
    },
    {
      name: "Shivam Pawar",
      message: `Dr S. S Bhagat is a very good Dr he treat his petient like his family members and his staff also good DR anil goyal is a great learder and very inspirational`,
    },
    {
      name: "Rahul Gupta",
      message: `Good hospital in east Delhi, all the services and to every department is so nice. My all family members consultant to Goyal hospital whenever required. Thanks to all the staff members. :-) I am a happy customer.`,
    },
  ];

  return (
    <section className="container testimonailContainer">
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
            fill="#FFA250"
          />
        </svg>
        <FadeUp> Patient Testimonials</FadeUp>
      </p>
      <h2 className="section-title">
        <FadeUp>What Our Patients Say</FadeUp>
      </h2>
      <p className="section-description">
        <FadeUp>
          Hear firsthand experiences from people whose lives we've touched with
          care and compassion.
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
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="profile">
                <img src={doubleQuotesYellow} alt={name} className="avatar" />
                <div>
                  <h3 className="name">
                    {" "}
                    <FadeUp> {item?.name}</FadeUp>
                  </h3>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <img src={star} alt="" index={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="message">
                <FadeUp>{item?.message}</FadeUp>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination"></div>
    </section>
  );
};

export default Testimonial;
