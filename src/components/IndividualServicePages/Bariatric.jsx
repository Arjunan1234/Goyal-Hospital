import React from "react";
import "./bariatric.scss"
import DepartmentHeader from "../DepartmentHeader/DepartmentHeader";
import { bariatricDepartmentHeader, bariatricDepartmentHeaderContent, bariatricFacilityHeader, bariatricFacilityHeaderContent, bariatricOdpBookingContent, bariatricOdpBookingHeader } from "../../constants/serviceDetailsContent";
import DepartmentFacility from "../DepartmentFacility/DepartmentFacility";
import OdpBooking from "../OdpBooking/OdpBooking";
const Bariatric = () => {
  return (
    <>
      <div className="bariatricWrapper">
          <DepartmentHeader
          title={bariatricDepartmentHeader}
          content={bariatricDepartmentHeaderContent}
        />
          <DepartmentFacility
          title={bariatricFacilityHeader}
          content={bariatricFacilityHeaderContent}
        />
        <OdpBooking
          title={bariatricOdpBookingHeader}
          content={bariatricOdpBookingContent}
        />
      </div>
    </>
  );
};

export default Bariatric;
