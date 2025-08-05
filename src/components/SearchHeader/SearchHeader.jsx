import IconButton from "../IconButton/IconButton";

import logo from "../../assets/images/logo.svg";
import Calendar from "../../assets/images/Calendar.svg";

import "./searchHeader.scss";
import useScreenMobile from "../../hooks/useScreenMobile";
import menuNormal from "../../assets/images/menuNormal.svg";
import menuClose from "../../assets/images/menuClose.svg";
import SearchBar from "../SearchBar/SearchBar";
import { useState, useEffect, useRef } from "react";
import phoneCall from "../../assets/images/phoneCall.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { doctorsList } from "../../constants/doctors";
import usePersistentSearch from "../../hooks/usePersistentSearch";

const mobileNavContents = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Speciality", path: "/speciality" },
  { label: "Careers", path: "/career" },
  { label: "Gallery", path: "/gallery" },
];
const SearchHeader = () => {
  const [searchValue, setSearchValue] = usePersistentSearch();

  const isMobile = useScreenMobile({ size: 568 });
  const [isDropDownShow, setIsDropDownShow] = useState(false);

  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const inputContainerRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Filtered list based on search input
  const filteredDoctors = doctorsList.filter((item) =>
    item.drName.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Hide dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        inputContainerRef.current &&
        !inputContainerRef.current.contains(event.target)
      ) {
        setShowSearchDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isDropDownShow && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDropDownShow, isMobile]);

  return (
    <>
      <section className="container searchHeader">
        <div className="searchHeaderContainer">
          <div className="mainContent">
            <div className="logo" onClick={() => navigate("/")}>
              <div className="imageWrapper">
                <img src={logo} alt="logo" />
              </div>
            </div>
            {location.pathname !== "/book-appointment" && !isMobile && (
              <div className="inputContainer" ref={inputContainerRef}>
                <SearchBar
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    setShowSearchDropdown(true);
                  }}
                  onFocus={() => {
                    if (searchValue.trim() !== "") setShowSearchDropdown(true);
                  }}
                />
                {showSearchDropdown && searchValue.trim() !== "" && (
                  <div className="dropDownContainer">
                    {filteredDoctors.length > 0 ? (
                      filteredDoctors.map((item, index) => (
                        <p
                          key={index}
                          onClick={() => {
                            setSearchValue(item.drName);
                            setShowSearchDropdown(false);
                            navigate("/book-appointment");
                          }}
                          className="dropdown-item"
                        >
                          {item.drName}
                        </p>
                      ))
                    ) : (
                      <p className="dropdown-item">No doctors found</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="buttonContainer">
            {!isMobile ? (
              <IconButton buttonContent="Book Appointment" image={Calendar} />
            ) : (
              <div
                className="humburger"
                onClick={() => setIsDropDownShow((prev) => !prev)}
              >
                <img
                  src={isDropDownShow ? menuClose : menuNormal}
                  alt="dropdown"
                />
              </div>
            )}
          </div>
          {/* {isMobile && (
            <div
              className="humburger"
              onClick={() => setIsDropDownShow((prev) => !prev)}
            >
              <img
                src={isDropDownShow ? menuClose : menuNormal}
                alt="dropdown"
              />
            </div>
          )} */}
        </div>
        {isMobile && isDropDownShow && (
          <div className="dropDownWrapper show">
            <div className="navWrapper">
              {mobileNavContents.map((item, index) => (
                <span
                  key={index}
                  className={
                    location.pathname === item.path ? "highLighted" : ""
                  }
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
              {/* <IconButton
                textColor="#242424"
                buttonBackgroundColor="#F0F0F0"
                image={report}
                buttonContent="Online Report"
              /> */}
              <IconButton buttonContent="Contact Us" image={phoneCall} />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SearchHeader;
