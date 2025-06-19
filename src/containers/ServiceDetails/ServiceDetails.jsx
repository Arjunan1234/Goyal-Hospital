import React from "react";
import ServiceDetailParentWrapper from "../../components/ServiceDetailParentWrapper/ServiceDetailParentWrapper";
import ContactUs from "../../components/ContactUs/ContactUs";

const ServiceDetails = () => {
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
