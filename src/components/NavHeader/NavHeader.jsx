// import { useNavigate, useLocation } from "react-router-dom";
// import "./navHeader.scss";
// import IconButton from "../IconButton/IconButton";
// import phoneCall from "../../assets/images/phoneCall.svg";

// const NavHeader = () => {
//   const navContents = [
//     { label: "Home", path: "/" },
//     { label: "About", path: "/about" },
//     { label: "Speciality", path: "/speciality" },
//     { label: "Careers", path: "/career" },
//     { label: "Gallery", path: "/gallery" },
//     { label: "TPA", path: "/tpa" },
//   ];

//   const navigate = useNavigate();
//   const location = useLocation();

//   return (
//     <>
//       <section className="navHeader">
//         <div className="container navHeaderContainer">
//           <div className="navigationContainer">
//             {navContents.map((item, index) => (
//               <span
//                 key={index}
//                 className={location.pathname === item.path ? "highLighted" : ""}
//                 onClick={() => {
//                   navigate(item.path);
//                 }}
//               >
//                 {item.label}
//               </span>
//             ))}
//           </div>
//           <div className="navButtonContainer">
//             {/* <div className="navButton">
//               <IconButton
//                 textColor="#242424"
//                 buttonBackgroundColor="#F0F0F0"
//                 image={report}
//                 buttonContent="Online Report"
//               />
//             </div> */}
//             <div className="navButton">
//               <IconButton
//                 buttonContent="Contact Us"
//                 image={phoneCall}
//                 onClick={() => {
//                   window.location.href = "tel:+919841248842";
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default NavHeader;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./navHeader.scss";
import IconButton from "../IconButton/IconButton";
import phoneCall from "../../assets/images/phoneCall.svg";
import { cardsContent } from "../DoctorCards/DoctorCards";

const NavHeader = () => {
  const navContents = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Speciality", path: "" },
    { label: "Careers", path: "/career" },
    { label: "Gallery", path: "/gallery" },
    { label: "TPA", path: "/tpa" },
  ];

  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Show dropdown only when hovering "Speciality"
  const handleMouseEnter = (label) => {
    if (label === "Speciality") setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleCardClick = (card) => {
    // Use the same logic as DoctorCards component
    const redirectTo = card.redirection || card.Title;
    navigate("/service-details", { state: { department: redirectTo } });
    setShowDropdown(false);
  };

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
                  if (item.path) {
                    navigate(item.path);
                  }
                }}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={() => handleMouseLeave()}
                style={{ position: "relative" }} // For dropdown positioning
              >
                {item.label}

                {/* Dropdown for Speciality */}
                {item.label === "Speciality" && showDropdown && (
                  <div
                    className="specialityDropdown"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    {cardsContent.map((row, rowIndex) => (
                      <div key={rowIndex} className="dropdownRow">
                        {row.map((card, cardIndex) => (
                          <div
                            key={cardIndex}
                            className="dropdownCardTitle"
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent event bubbling to parent span
                              handleCardClick(card);
                            }}
                          >
                            {card.Title}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </span>
            ))}
          </div>

          <div className="navButtonContainer">
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
