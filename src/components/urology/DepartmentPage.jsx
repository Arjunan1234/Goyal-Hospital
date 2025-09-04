import DepartmentHeader from "../DepartmentHeader/DepartmentHeader";

import DepartmentFacility from "../DepartmentFacility/DepartmentFacility";

import "./urology.scss";
import OdpBooking from "../OdpBooking/OdpBooking";
import Equipment from "../Equipment/Equipment";
import { gynaeDepartmentHeaderContent, gynaeEquipmentContent, gynaeEquipmentHeader, gynaeFacilityHeader, gynaeFacilityHeaderContent, gynaeOdpBookingContent, gynaeOdpBookingHeader, urologyEquipmentHeader } from "../../constants/serviceDetailsContent";
const DepartmentPage = () => {
  return (
    <>
      <div className="urologyWrapper">
        <DepartmentHeader
          title={gynaeEquipmentHeader}
          content={gynaeDepartmentHeaderContent}
        />
        <DepartmentFacility
          title={gynaeFacilityHeader}
          content={gynaeFacilityHeaderContent}
        />
        <OdpBooking
          title={gynaeOdpBookingHeader}
          content={gynaeOdpBookingContent}
        />
        <Equipment
          title={urologyEquipmentHeader}
          content={gynaeEquipmentContent}
        />
      </div>
    </>
  );
};

export default DepartmentPage;
