import React from "react";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";
import DoctorCarousel from "../../components/DoctorCarousel/DoctorCarousel";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
import EconomicTimes from "../../components/EconomicTimes/EconomicTimes";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import MarqueeCards from "../../components/MarqueeCards/MarqueeCards";
import Testimonial from "../../components/Testimonial/Testimonial";
import JobList from "../../components/JobList/JobList";
import MomentsGallery from "../../components/MomentsGallery/MomentsGallery";

const Home = () => {
  return (
    <div>
      <CommonBanner />
      <MarqueeCards />
      <MomentsGallery />
      <JobList />
      <AboutUsSection />
      <ServicesSection />
      <DoctorCarousel />
      <Testimonial />

      <EconomicTimes />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
