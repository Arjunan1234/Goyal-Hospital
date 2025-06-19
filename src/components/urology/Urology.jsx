import DepartmentHeader from "../DepartmentHeader/DepartmentHeader";

import DepartmentFacility from "../DepartmentFacility/DepartmentFacility";

import {
  urologyDepartmentHeader,
  urologyDepartmentHeaderContent,
} from "../../constants/serviceDetailsContent";

import {
  urologyFacilityHeader,
  urologyFacilityHeaderContent,
} from "../../constants/serviceDetailsContent";

import {
  urologyOdpBookingHeader,
  urologyOdpBookingContent,
} from "../../constants/serviceDetailsContent";

import {
  urologyEquipmentHeader,
  urologyEquipmentContent,
} from "../../constants/serviceDetailsContent";

import "./urology.scss";
import OdpBooking from "../OdpBooking/OdpBooking";
import Equipment from "../Equipment/Equipment";
const Urology = () => {
  return (
    <>
      <div className="urologyWrapper">
        <DepartmentHeader
          title={urologyDepartmentHeader}
          content={urologyDepartmentHeaderContent}
        />
        <DepartmentFacility
          title={urologyFacilityHeader}
          content={urologyFacilityHeaderContent}
        />
        <OdpBooking
          title={urologyOdpBookingHeader}
          content={urologyOdpBookingContent}
        />
        <Equipment
          title={urologyEquipmentHeader}
          content={urologyEquipmentContent}
        />
      </div>
    </>
  );
};

export default Urology;
