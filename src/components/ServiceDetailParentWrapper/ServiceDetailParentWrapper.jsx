import NavBox from "../NavBox/NavBox";
import "./serviceDetailParentWrapper.scss";
import {
  navBoxTitle,
  navBoxContent,
} from "../../constants/serviceDetailsContent";
import Urology from "../urology/Urology";
import useScreenMobile from "../../hooks/useScreenMobile";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DepartmentPage from "../urology/DepartmentPage";
import SurgeryContent from "../IndividualServicePages/SurgeryContent";
import EyeContent from "../IndividualServicePages/EyeContent";
const departmentComponents = {
  Cardiology: () => <div>Cardiology</div>,
  Neurology: () => <div>Neurology</div>,
  Orthopedics: () => <div>Orthopedics Component</div>,
  Gastroenterology: () => <div>Gastroenterology Component</div>,
  "Urology & Andrology": Urology,
  Gynecology: () => (
    <div>
      <DepartmentPage />
    </div>
  ),
  Pediatrics: () => <div>Pediatrics Component</div>,
  Dermatology: () => <div>Dermatology Component</div>,
  Bariatric: () => <div></div>,
  Plastic: () => <div>Pediatrics Component</div>,
  Surgery:  SurgeryContent,
  Eye: EyeContent
};
const ServiceDetailParentWrapper = ({ initialDepartment }) => {
  const [selectedDept, setSelectedDept] = useState("Urology & Andrology");

  const isTab = useScreenMobile({ size: 992 });
  const navigate = useNavigate();
  useEffect(() => {
    setSelectedDept(initialDepartment);
  }, [initialDepartment]);

  const handleDeptClick = (deptName) => {
    setSelectedDept(deptName);
  };
  const SelectedComponent =
    departmentComponents[selectedDept] ||
    (() => <div>Select a department</div>);
  return (
    <>
      <section className="serviceDetailParenWrapper">
        <div className="container serviceDetailParenWrapperContainer">
          {!isTab && (
            <div className="navBoxWrapper">
              <NavBox
                title={navBoxTitle}
                content={navBoxContent}
                onDeptClick={handleDeptClick}
                selectedDept={selectedDept}
              />
            </div>
          )}
          <div className="mainContentWrapper">
            <div
              className="backContainer"
              onClick={() => navigate("/speciality")}
            >
              <div className="imageWrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_82_2880)">
                    <path
                      d="M12.5 5L7.5 10L12.5 15"
                      stroke="black"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_82_2880">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span>Back</span>
            </div>
            <div className="departmentDetailWrapper">
              {/* <Urology /> */}
              <SelectedComponent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailParentWrapper;
