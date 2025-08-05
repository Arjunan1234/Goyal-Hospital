import DepartmentFacility from "../DepartmentFacility/DepartmentFacility";
import DepartmentHeader from "../DepartmentHeader/DepartmentHeader";
import Equipment from "../Equipment/Equipment";
import OdpBooking from "../OdpBooking/OdpBooking";

const PAEDIATRICS = () => {
  return (
    <>
      <div className="urologyWrapper">
        <DepartmentHeader
          title={paediatricsDepartmentHeader}
          content={paediatricsDepartmentHeaderContent}
        />
        <DepartmentFacility
          title={paediatricsFacilityHeader}
          content={paediatricsFacilityHeaderContent}
        />
        <OdpBooking
          title={minimalAccessOdpBookingHeader}
          content={minimalAccessOdpBookingContent}
        />
      </div>
    </>
  );
};

export default PAEDIATRICS;
