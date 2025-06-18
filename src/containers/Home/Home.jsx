import React from "react";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";
import DoctorCarousel from "../../components/DoctorCarousel/DoctorCarousel";

const Home = () => {
  return (
    <div>
      <Header />
      <DoctorCarousel />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
