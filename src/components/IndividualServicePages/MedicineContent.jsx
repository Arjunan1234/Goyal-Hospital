import React from "react";
import "./medicine.scss"
import DepartmentHeader from "../DepartmentHeader/DepartmentHeader";
import DepartmentFacility from "../DepartmentFacility/DepartmentFacility";
import OdpBooking from "../OdpBooking/OdpBooking";
import { medicineDepartmentHeader, medicineDepartmentHeaderContent, medicineFacilityHeader, medicineFacilityHeaderContent, medicineOdpBookingContent, medicineOdpBookingHeader } from "../../constants/serviceDetailsContent";
const MedicineContent = () => {
  return (
    <>
      <div className="medicineWrapper">
         <DepartmentHeader
          title={medicineDepartmentHeader}
          content={medicineDepartmentHeaderContent}
        />
        <DepartmentFacility
          title={medicineFacilityHeader}
          content={medicineFacilityHeaderContent}
        />
        <OdpBooking
          title={medicineOdpBookingHeader}
          content={medicineOdpBookingContent}
        />
      </div>
    </>
  );
};

export default MedicineContent;
