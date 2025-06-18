import React from "react";
import "./Footer.scss";
import websiteLogoFooter from "../../assets/images/websiteLogoFooter.svg";
import backgroundPattern from "../../assets/images/pattern.png";
import useScreenMobile from "../../hooks/useScreenMobile";

const Footer = () => {
  const isMobile = useScreenMobile({ size: 992 });

  return (
    <footer className="footer container">
      {!isMobile && <img src={backgroundPattern} alt="" className="pattern" />}
      <div className="footerContainer">
        <div className="footerLeft">
          <img src={websiteLogoFooter} alt="Goyal Hospital" className="logo" />
          <h2>Your Health, Our Priority</h2>
          <h2>Anytime, Anywhere</h2>
          <div className="contactInfo">
            <p>📧 goyalhospital@gmail.com</p>
            <p>📞 +91 98412 48842</p>
          </div>
          <div className="buttons">
            <button>Contact Us 📞</button>
            <button>Book Appointment 📅</button>
          </div>
        </div>

        <div className="footerRight">
          <div className="linksSection">
            <h3>Quick links</h3>
            <ul>
              <li>About Us</li>
              <li>Our Mission & Vision</li>
              <li>Careers</li>
              <li>Our Gallery</li>
            </ul>
          </div>

          <div className="linksSection">
            <h3>Services</h3>
            <ul>
              <li>Pharmacy Services</li>
              <li>Medical Specialties</li>
              <li>Health Checkups</li>
              <li>Health Consultation</li>
              <li>Emergency Services</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        Copyright © 2023 Goyal Hospital & Urology Centre
      </div>
    </footer>
  );
};

export default Footer;
