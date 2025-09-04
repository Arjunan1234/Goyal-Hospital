import React from "react";
import DepartmentHeader from "../DepartmentHeader/DepartmentHeader";
import {
  dermatologyDepartmentHeader,
  dermatologyDepartmentHeaderContent,
  dermatologyFacilityHeader,
  dermatologyFacilityHeaderContent,
  dermatologyOdpBookingContent,
  dermatologyOdpBookingHeader,
} from "../../constants/serviceDetailsContent";
import DepartmentFacility from "../DepartmentFacility/DepartmentFacility";
import "./dermatology.scss";
import OdpBooking from "../OdpBooking/OdpBooking";
const Dermatology = () => {
  return (
    <>
      <div className="dermatologyWrapper">
        <DepartmentHeader
          title={dermatologyDepartmentHeader}
          content={dermatologyDepartmentHeaderContent}
        />
        <DepartmentFacility
          title={dermatologyFacilityHeader}
          content={dermatologyFacilityHeaderContent}
        />
        <OdpBooking
          title={dermatologyOdpBookingHeader}
          content={dermatologyOdpBookingContent}
        />
      </div>
    </>
  );
};

export default Dermatology;
