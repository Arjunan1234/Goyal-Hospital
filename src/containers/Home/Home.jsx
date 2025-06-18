import React from "react";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";
import DoctorCarousel from "../../components/DoctorCarousel/DoctorCarousel";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
import EconomicTimes from "../../components/EconomicTimes/EconomicTimes";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import CommonBanner from "../../components/CommonBanner/CommonBanner";

const Home = () => {
  return (
    <div>
      <CommonBanner />
      <DoctorCarousel />
      <AboutUsSection />
      <ServicesSection />
      <EconomicTimes />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
