import React from "react";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import Testimonial from "../../components/Testimonial/Testimonial";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import {
  aboutPageBannerTitle,
  aboutPageBannerContent,
} from "../../constants/bannerContents";
const About = () => {
  return (
    <>
      <div className="aboutPage">
        <CommonBanner
          title={aboutPageBannerTitle}
          Content={aboutPageBannerContent}
        />
        <AboutUsSection />
        <Testimonial />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default About;
