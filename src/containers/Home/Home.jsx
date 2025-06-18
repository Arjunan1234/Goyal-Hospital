import React from "react";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";
import DoctorCarousel from "../../components/DoctorCarousel/DoctorCarousel";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
import EconomicTimes from "../../components/EconomicTimes/EconomicTimes";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";

const Home = () => {
  return (
    <div>
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
