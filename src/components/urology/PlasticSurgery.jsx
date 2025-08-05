import {
  plasticSurgeryDepartmentHeader,
  plasticSurgeryDepartmentHeaderContent,
  plasticSurgeryFacilityHeader,
  plasticSurgeryFacilityHeaderContent,
  plasticSurgeryOdpBookingContent,
  plasticSurgeryOdpBookingHeader,
} from "../../constants/serviceDetailsContent";
import DepartmentFacility from "../DepartmentFacility/DepartmentFacility";
import DepartmentHeader from "../DepartmentHeader/DepartmentHeader";
import Equipment from "../Equipment/Equipment";
import OdpBooking from "../OdpBooking/OdpBooking";

const PlasticSurgery = () => {
  return (
    <>
      <div className="urologyWrapper">
        <DepartmentHeader
          title={plasticSurgeryDepartmentHeader}
          content={plasticSurgeryDepartmentHeaderContent}
        />
        <DepartmentFacility
          title={plasticSurgeryFacilityHeader}
          content={plasticSurgeryFacilityHeaderContent}
        />
        <OdpBooking
          title={plasticSurgeryOdpBookingHeader}
          content={plasticSurgeryOdpBookingContent}
        />
      </div>
    </>
  );
};

export default PlasticSurgery;
