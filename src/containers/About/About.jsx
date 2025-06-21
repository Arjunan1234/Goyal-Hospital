import React, { useEffect } from "react";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import Testimonial from "../../components/Testimonial/Testimonial";
import ContactUs from "../../components/ContactUs/ContactUs";

import {
  aboutPageBannerTitle,
  aboutPageBannerContent,
} from "../../constants/bannerContents";
const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
      </div>
    </>
  );
};

export default About;
