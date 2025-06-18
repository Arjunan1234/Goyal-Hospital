import React from "react";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";
import DoctorCarousel from "../../components/DoctorCarousel/DoctorCarousel";
import ContactHeader from "../../components/ContactHeader/ContactHeader";

const Home = () => {
  return (
    <div>
      <DoctorCarousel />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
