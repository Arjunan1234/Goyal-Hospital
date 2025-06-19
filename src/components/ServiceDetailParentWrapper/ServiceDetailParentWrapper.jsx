import NavBox from "../NavBox/NavBox";
import "./serviceDetailParentWrapper.scss";
import {
  navBoxTitle,
  navBoxContent,
} from "../../constants/serviceDetailsContent";
import leftArrow from "../../assets/images/leftArrow.svg";
import Urology from "../urology/Urology";
const ServiceDetailParentWrapper = () => {
  return (
    <>
      <section className="serviceDetailParenWrapper">
        <div className="container serviceDetailParenWrapperContainer">
          <div className="navBoxWrapper">
            <NavBox title={navBoxTitle} content={navBoxContent} />
          </div>
          <div className="mainContentWrapper">
            <div className="backContainer">
              <div className="imageWrapper">
                <img src={leftArrow} alt="back" />
              </div>
              <span>Back</span>
            </div>
            <div className="departmentDetailWrapper">
              <Urology />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailParentWrapper;
