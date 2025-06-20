import React from "react";
import "./footer.scss";
import websiteLogoFooter from "../../assets/images/websiteLogoFooter.svg";
import backgroundPattern from "../../assets/images/pattern.png";
import useScreenMobile from "../../hooks/useScreenMobile";

import phone from "../../assets/svg/phoneCall.svg";
import calender from "../../assets/svg/calender.svg";
import FadeUp from "../FadeUp/FadeUp";
const Footer = () => {
  const isMobile = useScreenMobile({ size: 992 });

  return (
    <footer className="footer container">
      {!isMobile && <img src={backgroundPattern} alt="" className="pattern" />}
      <div className="footerContainer">
        <div className="footerLeft">
          <img src={websiteLogoFooter} alt="Goyal Hospital" className="logo" />
          <h2>
            <FadeUp>Your Health, Our Priority</FadeUp>
          </h2>
          <h2>
            <FadeUp>Anytime, Anywhere</FadeUp>
          </h2>
          <div className="contactInfo">
            <p>
              <FadeUp>📧 goyalhospital@gmail.com</FadeUp>
            </p>
            <p>
              <FadeUp>📞 +91 98412 48842</FadeUp>
            </p>
          </div>
          <div className="buttons">
            <button>
              <FadeUp>Contact Us</FadeUp>
              <img src={phone} alt="" />
            </button>
            <button>
              <FadeUp> Book Appointment </FadeUp>
              <img src={calender} alt="" />
            </button>
          </div>
        </div>

        <div className="footerRight">
          <div className="linksSection">
            <h3>
              <FadeUp> Quick links</FadeUp>
            </h3>
            <ul>
              <li>
                <FadeUp> About Us</FadeUp>
              </li>
              <li>
                <FadeUp> Our Mission & Vision</FadeUp>
              </li>
              <li>
                <FadeUp> Careers</FadeUp>
              </li>
              <li>
                <FadeUp> Our Gallery</FadeUp>
              </li>
            </ul>
          </div>

          <div className="linksSection">
            <h3>
              <FadeUp> Services</FadeUp>
            </h3>
            <ul>
              <li>
                <FadeUp> Pharmacy Services</FadeUp>
              </li>
              <li>
                <FadeUp> Medical Specialties</FadeUp>
              </li>
              <li>
                <FadeUp> Health Checkups</FadeUp>
              </li>
              <li>
                <FadeUp> Health Consultation</FadeUp>
              </li>
              <li>
                <FadeUp> Emergency Services</FadeUp>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <FadeUp> Copyright © 2023 Goyal Hospital & Urology Centre</FadeUp>
      </div>
    </footer>
  );
};

export default Footer;
