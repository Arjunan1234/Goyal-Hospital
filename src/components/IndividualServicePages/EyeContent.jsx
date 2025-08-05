import React from "react";
import {
  eyeDepartmentHeader,
  eyeDepartmentHeaderContent,
  eyeOdpBookingContent,
  eyeOdpBookingHeader,
 
  surgeryFacilityHeader,
  surgeryFacilityHeaderContent,
} from "../../constants/serviceDetailsContent";
import DepartmentHeader from "../DepartmentHeader/DepartmentHeader";
import DepartmentFacility from "../DepartmentFacility/DepartmentFacility";
import OdpBooking from "../OdpBooking/OdpBooking";
// import Equipment from "../Equipment/Equipment";
import "./eye.scss";
const EyeContent = () => {
  return (
    <>
      <div className="eyeWrapper">
        <DepartmentHeader
          title={eyeDepartmentHeader}
          content={eyeDepartmentHeaderContent}
        />
        <DepartmentFacility
          title={surgeryFacilityHeader}
          content={surgeryFacilityHeaderContent}
        />
        <OdpBooking
          title={eyeOdpBookingHeader}
          content={eyeOdpBookingContent}
        />
        {/* <Equipment
          title={surgeryEquipmentHeader}
          content={surgeryEquipmentContent}
        /> */}
      </div>
    </>
  );
};

export default EyeContent;
