import React from "react";
import "./aboutUsSection.scss";
import aboutUs from "../../assets/images/aboutUs.png";
import aboutUsMobile from "../../assets/images/aboutUsMobile.png";

import eye from "../../assets/images/eye.svg";

import rocket from "../../assets/images/rocket.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import useScreenMobile from "../../hooks/useScreenMobile";
import FadeUp from "../FadeUp/FadeUp";

const AboutUsSection = () => {
  const isMobile = useScreenMobile({ size: 992 });
  return (
    <div className="container aboutUsSection">
      <div className="aboutImage">
        <img src={isMobile ? aboutUsMobile : aboutUs} alt="About Us" />
      </div>
      <div className="aboutContent">
        <p className="sectionLabel">
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
          <FadeUp> About Us</FadeUp>
        </p>
        <h2 className="sectionTitle">
          {" "}
          <FadeUp>Excellence In Every Step</FadeUp>
        </h2>
        <p className="sectionDescription">
          <FadeUp>
            With expert doctors, modern facilities, and a caring team, we're
            redefining healthcare experiences.
          </FadeUp>
        </p>

        <div className="aboutPoints">
          <div className="aboutPoint">
            <div className="pointIcon">
              <img src={eye} alt="" />
            </div>
            <div className="pointText">
              <h4>
                <FadeUp>Our Vision</FadeUp>
              </h4>
              <p>
                <FadeUp>
                  Goyal hospital & Urology Centre aspires to provide quality
                  Hi-tech healthcare services to all sections of society at
                  affordable cost.
                </FadeUp>
              </p>
            </div>
          </div>

          <div className="aboutPoint">
            <div className="pointIcon">
              <img src={rocket} alt="" />
            </div>
            <div className="pointText">
              <h4>
                <FadeUp>Our Mission</FadeUp>
              </h4>
              <p>
                <FadeUp>
                  To provide compassionate patient care by our dedicated medical
                  and support staff for satisfied service delivery.
                </FadeUp>
              </p>
            </div>
          </div>
        </div>

        <button className="aboutButton">
          About Us <img src={rightArrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AboutUsSection;
