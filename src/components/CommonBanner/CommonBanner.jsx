import IconButton from "../IconButton/IconButton";
import "./commonBanner.scss";
import Calendar from "../../assets/images/Calendar.svg";
const CommonBanner = ({
  title,
  Content,
  buttonContent = "Book Appointment",
  buttonIcon = Calendar,
  overWriteClass = "",
  isCareerBannerTrue = false,
}) => {
  return (
    <>
      <section className={`commonBanner ${overWriteClass}`}>
        <div className="container commonBannerContainer">
          <div className="backgroundBanner">
            <div className="mainContent">
              <div className="textContainer">
                {isCareerBannerTrue ? (
                  <>
                    <h1>We’re Hiring</h1>
                    <h1>Work at the Heart of Change</h1>
                  </>
                ) : (
                  <h1>{title}</h1>
                )}
                <p>{Content}</p>
              </div>
              <div className="buttonContainer">
                <IconButton buttonContent={buttonContent} image={buttonIcon} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonBanner;
