import leftArrow from "../../assets/images/leftArrow.svg";
import SearchBar from "../SearchBar/SearchBar";
import AppointmentCardsSection from "./AppointmentCardsSection/AppointmentCardsSection";
import "./appointmentWrapper.scss";

import sampleDoctor from "../../assets/images/sampleDoctor.png";
import panel from "../../assets/images/panel.svg";
import blueClock from "../../assets/images/blueClock.svg";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppointmentWrapper = () => {
  const appointmentCardsData = [
    {
      drName: "Dr. Michael Chen",
      design: "MBBS, MD (CARDIOLOGY)",
      drPhoto: sampleDoctor,
      details: [
        {
          icon: panel,
          content: "On Panel: Yes",
        },
        {
          icon: blueClock,
          content: "Tuesday to Saturday 1 pm to 6 pm",
        },
      ],
      buttonText: "Schedule Appointment",
    },
    {
      drName: "Dr. Ravi Patel",
      design: "MD, DNB (ORTHOPEDICS)",
      drPhoto: sampleDoctor,
      details: [
        {
          icon: panel,
          content: "On Panel: Yes",
        },

        {
          icon: blueClock,
          content: "Wednesday to Sunday 11 am to 5 pm",
        },
      ],
      buttonText: "Schedule Appointment",
    },
    {
      drName: "Dr. Sarah Johnson",
      design: "BSc, MSc (NEUROLOGY)",
      drPhoto: sampleDoctor,
      details: [
        {
          icon: panel,
          content: "On Panel: Yes",
        },

        {
          icon: blueClock,
          content: "Monday to Friday 10 am to 4 pm",
        },
      ],
      buttonText: "Schedule Appointment",
    },
    {
      drName: "Dr. Emma Thompson",
      design: "MBBS, MD (PEDIATRICS)",
      drPhoto: sampleDoctor,
      details: [
        {
          icon: panel,
          content: "On Panel: Yes",
        },

        {
          icon: blueClock,
          content: "Monday to Thursday 9 am to 3 pm",
        },
      ],
      buttonText: "Schedule Appointment",
    },
    {
      drName: "Dr. Liam Wilson",
      design: "MBBS, MS (GENERAL SURGERY)",
      drPhoto: sampleDoctor,
      details: [
        {
          icon: panel,
          content: "On Panel: Yes",
        },

        {
          icon: blueClock,
          content: "Tuesday to Friday 2 pm to 7 pm",
        },
      ],
      buttonText: "Schedule Appointment",
    },
    {
      drName: "Dr. Olivia Brown",
      design: "MD, DCH (INTERNAL MEDICINE)",
      drPhoto: sampleDoctor,
      details: [
        {
          icon: panel,
          content: "On Panel: Yes",
        },

        {
          icon: blueClock,
          content: "Monday to Saturday 8 am to 2 pm",
        },
      ],
      buttonText: "Schedule Appointment",
    },
    {
      drName: "Dr. Noah Davis",
      design: "MBBS, MD (DERMATOLOGY)",
      drPhoto: sampleDoctor,
      details: [
        {
          icon: panel,
          content: "On Panel: Yes",
        },

        {
          icon: blueClock,
          content: "Thursday to Sunday 12 pm to 6 pm",
        },
      ],
      buttonText: "Schedule Appointment",
    },
  ];
  const [searchValue, setSearchValue] = useState("");
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const inputContainerRef = useRef(null);
  const navigate = useNavigate();

  // Filtered list based on search input
  const filteredDoctors = appointmentCardsData.filter((item) =>
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

  return (
    <>
      <secion className="appointment">
        <div className="container appointmentContainer">
          <div className="backContainer">
            <div className="back">
              <div className="imageWrapper">
                <img src={leftArrow} alt="back" />
              </div>
              <span>Back</span>
            </div>
          </div>
          <div className="searchContainer">
            <div className="search">
              <SearchBar
                placeHolerText="Search by Doctor or Speciality"
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
          </div>
          <div className="appointmentsCardsContainer">
            <AppointmentCardsSection cardsData={filteredDoctors} />
          </div>
        </div>
      </secion>
    </>
  );
};

export default AppointmentWrapper;
