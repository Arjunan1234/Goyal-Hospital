import React, { useEffect } from "react";
import ServiceDetailParentWrapper from "../../components/ServiceDetailParentWrapper/ServiceDetailParentWrapper";
import ContactUs from "../../components/ContactUs/ContactUs";

const ServiceDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="serviceDetailsPage">
        <ServiceDetailParentWrapper />
        <ContactUs />
      </div>
    </>
  );
};

export default ServiceDetails;
