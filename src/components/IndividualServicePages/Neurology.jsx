import React from "react";
import "./neurology.scss"
import DepartmentHeader from "../DepartmentHeader/DepartmentHeader";
import { neurologyDepartmentHeader, neurologyDepartmentHeaderContent, neurologydpBookingContent, neurologyFacilityHeader, neurologyFacilityHeaderContent, neurologyOdpBookingHeader } from "../../constants/serviceDetailsContent";
import DepartmentFacility from "../DepartmentFacility/DepartmentFacility";
import OdpBooking from "../OdpBooking/OdpBooking";
const Neurology = () => {
  return (
    <>
      <div className="neurologyWrapper">
        <DepartmentHeader
          title={neurologyDepartmentHeader}
          content={neurologyDepartmentHeaderContent}
        />
        <DepartmentFacility
          title={neurologyFacilityHeader}
          content={neurologyFacilityHeaderContent}
        />
          <OdpBooking
          title={neurologyOdpBookingHeader}
          content={neurologydpBookingContent}
        />
      </div>
    </>
  );
};

export default Neurology;
