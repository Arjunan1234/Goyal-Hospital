import React, { useEffect } from "react";

import ContactUs from "../../components/ContactUs/ContactUs";
import DoctorCarousel from "../../components/DoctorCarousel/DoctorCarousel";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
import EconomicTimes from "../../components/EconomicTimes/EconomicTimes";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import MarqueeCards from "../../components/MarqueeCards/MarqueeCards";
import Testimonial from "../../components/Testimonial/Testimonial";
import {
  homePageBannerContent,
  homePageBannerTitle,
} from "../../constants/bannerContents";
const Home = () => {
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <CommonBanner
        title={homePageBannerTitle}
        Content={homePageBannerContent}
      />
      <MarqueeCards />
      {/* <MomentsGallery /> */}

      <AboutUsSection />
      <ServicesSection />
      <DoctorCarousel />
      <Testimonial />

      <EconomicTimes />
      <ContactUs />
      
    </div>
  );
};

export default Home;
