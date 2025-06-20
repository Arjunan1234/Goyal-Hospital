import React, { useEffect } from "react";
import DoctorCards from "../../components/DoctorCards/DoctorCards";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import EconomicTimes from "../../components/EconomicTimes/EconomicTimes";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";
import {
  servicePageBannerTitle,
  servicePageBannerContent,
} from "../../constants/bannerContents";
const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="servicesPage">
      <CommonBanner
        title={servicePageBannerTitle}
        Content={servicePageBannerContent}
        overWriteClass="serviceBanner"
      />
      <DoctorCards />
      <EconomicTimes />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Services;
