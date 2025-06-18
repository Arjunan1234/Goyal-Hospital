import { useNavigate } from "react-router-dom";
import "./navHeader.scss";
import IconButton from "../IconButton/IconButton";
import report from "../../assets/images/report.svg";
import phoneCall from "../../assets/images/phoneCall.svg";

const NavHeader = () => {
  const navContents = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Careers", path: "/career" },
    { label: "Gallery", path: "/gallery" },
  ];
  const navigate = useNavigate();

  return (
    <>
      <section className="navHeader">
        <div className="container navHeaderContainer">
          <div className="navigationContainer">
            {navContents.map((item, index) => (
              <span
                key={index}
                onClick={() => {
                  navigate(item.path);
                }}
              >
                {item.label}
              </span>
            ))}
          </div>
          <div className="navButtonContainer">
            <div className="navButton">
              <IconButton
                textColor="#242424"
                buttonBackgroundColor="#F0F0F0"
                image={report}
                buttonContent="Online Report"
              />
            </div>
            <div className="navButton">
              <IconButton buttonContent="Contact Us" image={phoneCall} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavHeader;
