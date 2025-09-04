import React from "react";
import {
  surgeryDepartmentHeader,
  surgeryDepartmentHeaderContent,
  surgeryEquipmentContent,
  surgeryEquipmentHeader,
  surgeryFacilityHeader,
  surgeryFacilityHeaderContent,
  surgeryOdpBookingContent,
  surgeryOdpBookingHeader,
} from "../../constants/serviceDetailsContent";
import DepartmentHeader from "../DepartmentHeader/DepartmentHeader";
import DepartmentFacility from "../DepartmentFacility/DepartmentFacility";
import OdpBooking from "../OdpBooking/OdpBooking";
import Equipment from "../Equipment/Equipment";
import "./surgeryContent.scss";
const SurgeryContent = () => {
  return (
    <>
      <div className="surgeryWrapper">
        <DepartmentHeader
          title={surgeryDepartmentHeader}
          content={surgeryDepartmentHeaderContent}
        />
        <DepartmentFacility
          title={surgeryFacilityHeader}
          content={surgeryFacilityHeaderContent}
        />
        <OdpBooking
          title={surgeryOdpBookingHeader}
          content={surgeryOdpBookingContent}
        />
        <Equipment
          title={surgeryEquipmentHeader}
          content={surgeryEquipmentContent}
        />
      </div>
    </>
  );
};

export default SurgeryContent;
