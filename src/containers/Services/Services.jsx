import React from "react";
import DoctorCards from "../../components/DoctorCards/DoctorCards";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import EconomicTimes from "../../components/EconomicTimes/EconomicTimes";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";

const Services = () => {
  return (
    <div className="servicesPage">
      <CommonBanner />
      <DoctorCards />
       <EconomicTimes />
       <ContactUs />
       <Footer />
    </div>
  );
};

export default Services;
