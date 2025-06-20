import NavBox from "../NavBox/NavBox";
import "./serviceDetailParentWrapper.scss";
import {
  navBoxTitle,
  navBoxContent,
} from "../../constants/serviceDetailsContent";
import leftArrow from "../../assets/images/leftArrow.svg";
import Urology from "../urology/Urology";
import useScreenMobile from "../../hooks/useScreenMobile";
const ServiceDetailParentWrapper = () => {
  const isTab = useScreenMobile({ size: 992 });

  return (
    <>
      <section className="serviceDetailParenWrapper">
        <div className="container serviceDetailParenWrapperContainer">
          {!isTab && (
            <div className="navBoxWrapper">
              <NavBox title={navBoxTitle} content={navBoxContent} />
            </div>
          )}
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
