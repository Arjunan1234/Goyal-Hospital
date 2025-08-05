import React from "react";
import "./anesthesia.scss";
import DepartmentHeader from "../DepartmentHeader/DepartmentHeader";
import {
  anesthesiaDepartmentHeader,
  anesthesiaDepartmentHeaderContent,
  anesthesiaFacilityHeader,
  anesthesiaFacilityHeaderContent,
  anesthesiaOdpBookingContent,
  anesthesiaOdpBookingHeader,
} from "../../constants/serviceDetailsContent";
import DepartmentFacility from "../DepartmentFacility/DepartmentFacility";
import OdpBooking from "../OdpBooking/OdpBooking";
const Anesthesia = () => {
  return (
    <>
      <div className="anesthesiaWrapper">
        <DepartmentHeader
          title={anesthesiaDepartmentHeader}
          content={anesthesiaDepartmentHeaderContent}
        />
        <DepartmentFacility
          title={anesthesiaFacilityHeader}
          content={anesthesiaFacilityHeaderContent}
        />
        <OdpBooking
          title={anesthesiaOdpBookingHeader}
          content={anesthesiaOdpBookingContent}
        />
      </div>
    </>
  );
};

export default Anesthesia;
