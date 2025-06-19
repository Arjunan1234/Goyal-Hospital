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

import "./urology.scss";
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
      </div>
    </>
  );
};

export default Urology;
