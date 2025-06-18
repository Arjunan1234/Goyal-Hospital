import IconButton from "../IconButton/IconButton";
import "./commonBanner.scss";
import Calendar from "../../assets/images/Calendar.svg";
const CommonBanner = () => {
  return (
    <>
      <section className="commonBanner">
        <div className="container commonBannerContainer">
          <div className="backgroundBanner">
            <div className="mainContent">
              <div className="textContainer">
                <h1>
                  Excellence in Healthcare: Building Trust, Healing Lives.
                </h1>
                <p>
                  Goyal Hospitals: Leading multi-specialty care in Bengaluru,
                  dedicated to your well-being with state-of-the-art facilities.
                </p>
              </div>
              <div className="buttonContainer">
                <IconButton buttonContent="Book Appointment" image={Calendar}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonBanner;
