import React from "react";
import "./footer.scss";
import websiteLogoFooter from "../../assets/images/websiteLogoFooter.svg";
import backgroundPattern from "../../assets/images/pattern.png";
import useScreenMobile from "../../hooks/useScreenMobile";

import phone from "../../assets/svg/phoneCall.svg";
import calender from "../../assets/svg/calender.svg";
import FadeUp from "../FadeUp/FadeUp";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const isMobile = useScreenMobile({ size: 992 });
  const navigate = useNavigate();
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
            <p
              onClick={() => {
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=goyalhospital@gmail.com",
                  "_blank"
                );
              }}
            >
              <FadeUp>📧 goyalhospital@gmail.com</FadeUp>
            </p>
            <p
              onClick={() => {
                window.location.href = "tel:+919841248842";
              }}
            >
              <FadeUp>📞 +91 98412 48842</FadeUp>
            </p>
          </div>
          <div className="buttons">
            <button
              onClick={() => {
                window.location.href = "tel:+919841248842";
              }}
            >
              <FadeUp>Contact Us</FadeUp>
              <img src={phone} alt="" />
            </button>
            <button onClick={() => navigate("/book-appointment")}>
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
              <li onClick={() => navigate("/about")}>
                <FadeUp> About Us</FadeUp>
              </li>
              <li onClick={() => navigate("/speciality")}>
                <FadeUp> Our Mission & Vision</FadeUp>
              </li>
              <li onClick={() => navigate("/career")}>
                <FadeUp> Careers</FadeUp>
              </li>
              <li onClick={() => navigate("/gallery")}>
                <FadeUp> Our Gallery</FadeUp>
              </li>
            </ul>
          </div>

          {/* <div className="linksSection">
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
          </div> */}
        </div>
      </div>
      <div className="footerBottom">
        <p className="footerCopyright">
          <FadeUp> Copyright © 2023 Goyal Hospital & Urology Centre</FadeUp>
        </p>
        <div className="privacyContainer">
          <span onClick={() => navigate("/privacy-policy")}>
            Privacy Policy
          </span>{" "}
          |{" "}
          <span onClick={() => navigate("/disclaimer")}>
            Terms and Condition
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
