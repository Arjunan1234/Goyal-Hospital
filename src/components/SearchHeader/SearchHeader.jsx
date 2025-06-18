import IconButton from "../IconButton/IconButton";

import logo from "../../assets/images/logo.svg";
import Calendar from "../../assets/images/Calendar.svg";

import "./searchHeader.scss";
import useScreenMobile from "../../hooks/useScreenMobile";
import menuNormal from "../../assets/images/menuNormal.svg";
import menuClose from "../../assets/images/menuClose.svg";
import SearchBar from "../SearchBar/SearchBar";
import { useState, useEffect } from "react";
import report from "../../assets/images/report.svg";
import phoneCall from "../../assets/images/phoneCall.svg";
import { useNavigate } from "react-router-dom";

const mobileNavContents = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Careers", path: "/career" },
  { label: "Gallery", path: "/gallery" },
];
const SearchHeader = () => {
  const isMobile = useScreenMobile({ size: 568 });
  const [isDropDownShow, setIsDropDownShow] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 568) {
        setIsDropDownShow(!isDropDownShow);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDropDownShow]);

  useEffect(() => {
    if (!isDropDownShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDropDownShow]);

  return (
    <>
      <section className="searchHeader">
        <div className="searchHeaderContainer">
          <div className="mainContent">
            <div className="logo">
              <div className="imageWrapper">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div className="inputContainer">
              <SearchBar />
            </div>
          </div>
          <div className="buttonContainer">
            {!isMobile ? (
              <IconButton buttonContent="Book Appointment" image={Calendar} />
            ) : (
              <div
                className="humburger"
                onClick={() => setIsDropDownShow(!isDropDownShow)}
              >
                <img
                  src={isDropDownShow ? menuNormal : menuClose}
                  alt="dropdown"
                />
              </div>
            )}
          </div>
        </div>
        {isMobile && !isDropDownShow && (
          <div className="dropDownWrapper show">
            <div className="navWrapper">
              {mobileNavContents.map((item, index) => (
                <span
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setIsDropDownShow(!isDropDownShow); // close dropdown after navigation
                  }}
                >
                  {item.label}
                </span>
              ))}
            </div>
            <div className="buttonWrapper">
              <IconButton
                textColor="#242424"
                buttonBackgroundColor="#F0F0F0"
                image={report}
                buttonContent="Online Report"
              />
              <IconButton buttonContent="Contact Us" image={phoneCall} />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SearchHeader;
