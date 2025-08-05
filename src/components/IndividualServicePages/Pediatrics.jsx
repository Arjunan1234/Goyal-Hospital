import React from "react";
import "./pediatrics.scss";
import DepartmentHeader from "../DepartmentHeader/DepartmentHeader";
import { PediatricsDepartmentHeader, PediatricsDepartmentHeaderContent, PediatricsFacilityHeader, PediatricsFacilityHeaderContent, PediatricsOdpBookingContent, PediatricsOdpBookingHeader } from "../../constants/serviceDetailsContent";
import DepartmentFacility from "../DepartmentFacility/DepartmentFacility";
import OdpBooking from "../OdpBooking/OdpBooking";
const Pediatrics = () => {
  return (
    <>
      <div className="pediatricsWrapper">
         <DepartmentHeader
          title={PediatricsDepartmentHeader}
          content={PediatricsDepartmentHeaderContent}
        />
        <DepartmentFacility
          title={PediatricsFacilityHeader}
          content={PediatricsFacilityHeaderContent}
        />
        <OdpBooking
          title={PediatricsOdpBookingHeader}
          content={PediatricsOdpBookingContent}
        />
      </div>
    </>
  );
};

export default Pediatrics;
