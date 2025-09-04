import React from "react";
import "./gastroenterology.scss"
import DepartmentHeader from "../DepartmentHeader/DepartmentHeader";
import { gastroenterologyDepartmentHeader, gastroenterologyDepartmentHeaderContent, gastroenterologyFacilityHeader, gastroenterologyFacilityHeaderContent, gastroenterologyOdpBookingContent, gastroenterologyOdpBookingHeader } from "../../constants/serviceDetailsContent";
import DepartmentFacility from "../DepartmentFacility/DepartmentFacility";
import OdpBooking from "../OdpBooking/OdpBooking";
const Gastroenterology = () => {
  return (
    <>
      <div className="gastroenterologyWrapper">
         <DepartmentHeader
          title={gastroenterologyDepartmentHeader}
          content={gastroenterologyDepartmentHeaderContent}
        />
         <DepartmentFacility
          title={gastroenterologyFacilityHeader}
          content={gastroenterologyFacilityHeaderContent}
        />
         <OdpBooking
          title={gastroenterologyOdpBookingHeader}
          content={gastroenterologyOdpBookingContent}
        />
      </div>
    </>
  );
};

export default Gastroenterology;
