import React from "react";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import Testimonial from "../../components/Testimonial/Testimonial";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <div className="aboutPage">
        <CommonBanner />
        <AboutUsSection />
        <Testimonial />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default About;
