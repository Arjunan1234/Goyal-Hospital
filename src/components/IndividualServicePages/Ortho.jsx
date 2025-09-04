import React from "react";
import DepartmentHeader from "../DepartmentHeader/DepartmentHeader";
import {
  orthoDepartmentHeader,
  orthoDepartmentHeaderContent,
  orthoFacilityHeader,
  orthoFacilityHeaderContent,
  orthoOdpBookingContent,
  orthoOdpBookingHeader,
} from "../../constants/serviceDetailsContent";
import DepartmentFacility from "../DepartmentFacility/DepartmentFacility";
import OdpBooking from "../OdpBooking/OdpBooking";
import "./ortho.scss"
const Ortho = () => {
  return (
    <>
      <div className="orthoWrapper">
        <DepartmentHeader
          title={orthoDepartmentHeader}
          content={orthoDepartmentHeaderContent}
        />
        <DepartmentFacility
          title={orthoFacilityHeader}
          content={orthoFacilityHeaderContent}
        />
        <OdpBooking
          title={orthoOdpBookingHeader}
          content={orthoOdpBookingContent}
        />
      </div>
    </>
  );
};

export default Ortho;
