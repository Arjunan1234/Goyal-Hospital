import IconButton from "../IconButton/IconButton";
import "./commonBanner.scss";
import Calendar from "../../assets/images/Calendar.svg";
import FadeUp from "../FadeUp/FadeUp";
import { useNavigate } from "react-router-dom";
const CommonBanner = ({
  title,
  Content,
  buttonContent = "Book Appointment",
  buttonIcon = Calendar,
  overWriteClass = "",
  isCareerBannerTrue = false,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <section className={`commonBanner ${overWriteClass}`}>
        <div className="container commonBannerContainer">
          <div className="backgroundBanner">
            <div className="mainContent">
              <div className="textContainer">
                {isCareerBannerTrue ? (
                  <>
                    <h1>
                      <FadeUp>We’re Hiring</FadeUp>
                    </h1>
                    <h1>
                      <FadeUp>Work at the Heart of Change</FadeUp>
                    </h1>
                  </>
                ) : (
                  <h1>
                    <FadeUp> {title}</FadeUp>
                  </h1>
                )}
                <p>
                  <FadeUp>{Content}</FadeUp>
                </p>
              </div>
              <div className="buttonContainer">
                <IconButton
                  buttonContent={buttonContent}
                  image={buttonIcon}
                  onClick={() => navigate("/book-appointment")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonBanner;
