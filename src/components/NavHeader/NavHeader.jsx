import { useNavigate, useLocation } from "react-router-dom";
import "./navHeader.scss";
import IconButton from "../IconButton/IconButton";
import phoneCall from "../../assets/images/phoneCall.svg";

const NavHeader = () => {
  const navContents = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Speciality", path: "/speciality" },
    { label: "Careers", path: "/career" },
    { label: "Gallery", path: "/gallery" },
    { label: "TPA", path: "/tpa" },
  ];
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <section className="navHeader">
        <div className="container navHeaderContainer">
          <div className="navigationContainer">
            {navContents.map((item, index) => (
              <span
                key={index}
                className={location.pathname === item.path ? "highLighted" : ""}
                onClick={() => {
                  navigate(item.path);
                }}
              >
                {item.label}
              </span>
            ))}
          </div>
          <div className="navButtonContainer">
            {/* <div className="navButton">
              <IconButton
                textColor="#242424"
                buttonBackgroundColor="#F0F0F0"
                image={report}
                buttonContent="Online Report"
              />
            </div> */}
            <div className="navButton">
              <IconButton
                buttonContent="Contact Us"
                image={phoneCall}
                onClick={() => {
                  window.location.href = "tel:+919841248842";
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavHeader;
