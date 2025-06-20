import React, { useEffect } from "react";
import ServiceDetailParentWrapper from "../../components/ServiceDetailParentWrapper/ServiceDetailParentWrapper";
import ContactUs from "../../components/ContactUs/ContactUs";
import { useLocation } from "react-router-dom";

const ServiceDetails = () => {
  const location = useLocation();
  const department = location.state?.department || "Urology & Andrology"; //
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="serviceDetailsPage">
        <ServiceDetailParentWrapper initialDepartment={department} />
        <ContactUs />
      </div>
    </>
  );
};

export default ServiceDetails;
