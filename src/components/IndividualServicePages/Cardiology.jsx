import React from "react";
import "./cardiology.scss";
import DepartmentHeader from "../DepartmentHeader/DepartmentHeader";
import {
  cardiologyDepartmentHeader,
  cardiologyDepartmentHeaderContent,
  cardiologyFacilityHeader,
  cardiologyFacilityHeaderContent,
  cardiologyOdpBookingContent,
  cardiologyOdpBookingHeader,
} from "../../constants/serviceDetailsContent";
import DepartmentFacility from "../DepartmentFacility/DepartmentFacility";
import OdpBooking from "../OdpBooking/OdpBooking";
const Cardiology = () => {
  return (
    <>
      <div className="cardiologyWrapper">
        <DepartmentHeader
          title={cardiologyDepartmentHeader}
          content={cardiologyDepartmentHeaderContent}
        />
        <DepartmentFacility
          title={cardiologyFacilityHeader}
          content={cardiologyFacilityHeaderContent}
        />
         <OdpBooking
          title={cardiologyOdpBookingHeader}
          content={cardiologyOdpBookingContent}
        />
      </div>
    </>
  );
};

export default Cardiology;
