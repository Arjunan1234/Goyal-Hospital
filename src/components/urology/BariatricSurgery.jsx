import {
  minimalAccessDepartmentHeader,
  minimalAccessDepartmentHeaderContent,
  minimalAccessFacilityHeader,
  minimalAccessFacilityHeaderContent,
  minimalAccessOdpBookingContent,
  minimalAccessOdpBookingHeader,
} from "../../constants/serviceDetailsContent";
import DepartmentFacility from "../DepartmentFacility/DepartmentFacility";
import DepartmentHeader from "../DepartmentHeader/DepartmentHeader";
import Equipment from "../Equipment/Equipment";
import OdpBooking from "../OdpBooking/OdpBooking";

const BariatricSurgery = () => {
  return (
    <>
      <div className="urologyWrapper">
        <DepartmentHeader
          title={minimalAccessDepartmentHeader}
          content={minimalAccessDepartmentHeaderContent}
        />
        <DepartmentFacility
          title={minimalAccessFacilityHeader}
          content={minimalAccessFacilityHeaderContent}
        />
        <OdpBooking
          title={minimalAccessOdpBookingHeader}
          content={minimalAccessOdpBookingContent}
        />
      </div>
    </>
  );
};

export default BariatricSurgery;
