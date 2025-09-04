import leftArrow from "../../assets/images/leftArrow.svg";
import SearchBar from "../SearchBar/SearchBar";
import AppointmentCardsSection from "./AppointmentCardsSection/AppointmentCardsSection";
import "./appointmentWrapper.scss";

import sampleDoctor from "../../assets/images/sampleDoctor.png";
import panel from "../../assets/images/panel.svg";
import blueClock from "../../assets/images/blueClock.svg";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePersistentSearch from "../../hooks/usePersistentSearch";

export const allDoctors = [
  {
    drName: "Dr. Atul Kumar Gupta",
    design: "MBBS, MD (Internal Medicine)",
    drPhoto: sampleDoctor,
    details: [
      {
        icon: blueClock,
        content: "Mon-Sat 10:00 - 11:00 AM",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Saurabh Kansal",
    design: "MBBS, MD (Internal Medicine)",
    drPhoto: sampleDoctor,
    details: [
      {
        icon: blueClock,
        content: "Mon-Sat 08:30 - 9:30 AM",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Ankit Gupta",
    design: "MBBS, MD (Internal Medicine)",
    drPhoto: sampleDoctor,
    details: [
      {
        icon: blueClock,
        content: "Mon-Sat 10:00 - 1:00 PM",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Anil Goyal",
    design: "MBBS, MS (Surgery), McH (Urology), DNB (UROLOGY)",
    drPhoto: sampleDoctor,
    details: [
      
      {
        icon: blueClock,
        content: "Mon-Sat 11:00 - 1:00 PM",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Arvind Tiwari",
    design: "MBBS, MS (Surgery), McH (Urology)",
    drPhoto: sampleDoctor,
    details: [
     
      {
        icon: blueClock,
        content: "Mon-Sat 10:00 - 2:00 PM",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. S S Bhagat",
    design: "MBBS, MS",
    drPhoto: sampleDoctor,
    details: [
    
      {
        icon: blueClock,
        content: "Mon-Sat 11:30 - 1:30",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Jatinder Kumar",
    design: "MS, McH (Neuro Surgery)",
    drPhoto: sampleDoctor,
    details: [
     
      {
        icon: blueClock,
        content: "Mon-Sat 11:00 - 12:00",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Vivek Chhimpa",
    design: "MBBS, DNB (ORTHO) MNAMS",
    drPhoto: sampleDoctor,
    details: [
      
      {
        icon: blueClock,
        content: "Mon-Sat 11:30 - 12:30",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. S K Sarkar",
    design: "MBBS, DLO, PGDHHM, DNB (ENT)",
    drPhoto: sampleDoctor,
    details: [
     
      {
        icon: blueClock,
        content: "Tue, Wed, Fri, Sat 11:30 - 12:30",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Lalit Kumar Gupta",
    design: "MD, PGDCC (CARDIOLOGY)",
    drPhoto: sampleDoctor,
    details: [
    
      {
        icon: blueClock,
        content: "Mon-Sat 11:30 - 12:30 PM",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Navratan Surana",
    design: "MBBS, DVD, MD, AMIADVL",
    drPhoto: sampleDoctor,
    details: [
      
      {
        icon: blueClock,
        content: "Tue, Thur, Sat 10:00 - 11:00",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Puneet Agarwal",
    design: "MBBS, MD (Skin & VD)",
    drPhoto: sampleDoctor,
    details: [
      
      {
        icon: blueClock,
        content: "Only Friday 4:00 - 5:00 PM",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Nirupama Goyal",
    design: "MBBS, MS (Gynecologist)",
    drPhoto: sampleDoctor,
    details: [
    
      {
        icon: blueClock,
        content: "Mon-Sat 10:00 - 1:00, Mon/Wed/Fri 6:00 - 8:00 PM",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Anju Gaurtam",
    design: "MBBS, DGO",
    drPhoto: sampleDoctor,
    details: [
      
      {
        icon: blueClock,
        content: "Tue/Thu/Sat 2:00 - 8:00 PM",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Saiyam Jain",
    design: "MBBS, MS (ORTHO)",
    drPhoto: sampleDoctor,
    details: [
     
      {
        icon: blueClock,
        content: "Mon & Thu 4:00 - 5:00 PM",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Rohit Sharma",
    design: "MBBS, MD (PSYCHIATRIST)",
    drPhoto: sampleDoctor,
    details: [
     
      {
        icon: blueClock,
        content: "Tue/Fri 9:30 - 10:30",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Manish",
    design: "MBBS, DTCD, DNB (Respiratory Medicine)",
    drPhoto: sampleDoctor,
    details: [
     
      {
        icon: blueClock,
        content: "Mon-Fri 5:00 - 7:00",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Avani Gadhia",
    design: "Nutritionist",
    drPhoto: sampleDoctor,
    details: [
     
      {
        icon: blueClock,
        content: "Mon-Sat 12:00 - 1:00",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Rahul Sahu",
    design: "MBBS, MS ORTHO",
    drPhoto: sampleDoctor,
    details: [
      
      {
        icon: blueClock,
        content: "Mon-Sat 9:30 - 10:30",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Sandeep Gupta",
    design: "MBBS, MD, DNB",
    drPhoto: sampleDoctor,
    details: [
     
      {
        icon: blueClock,
        content: "Mon-Sat 11:30 - 1:00",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Sandeep Jain",
    design: "MBBS, DNB SURGERY",
    drPhoto: sampleDoctor,
    details: [
     
      {
        icon: blueClock,
        content: "Mon-Sat 6:00 - 7:00",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Rajeev Gupta",
    design: "MBBS, DCH",
    drPhoto: sampleDoctor,
    details: [
      
      {
        icon: blueClock,
        content: "Mon-Sat 12:00 - 1:00",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Ajay Kumar",
    design: "MBBS, DCH",
    drPhoto: sampleDoctor,
    details: [
     
      {
        icon: blueClock,
        content: "Mon-Sat 1:00 - 2:00",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Nidhi Singhal",
    design: "BDS, MDS",
    drPhoto: sampleDoctor,
    details: [
     
      {
        icon: blueClock,
        content: "Mon-Sat 9:00 - 10:00 & 5:00 - 7:00",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Vedang Khanna",
    design: "BDS & IMPLANTOLOGIST, C.C. ENDODONTIST",
    drPhoto: sampleDoctor,
    details: [
     
      {
        icon: blueClock,
        content: "Mon-Sat 10:00 - 2:00",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Ashish Garg",
    design: "MBBS, MD, DNB",
    drPhoto: sampleDoctor,
    details: [
     
      {
        icon: blueClock,
        content: "Mon/Wed/Fri 7:00 - 8:00",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    drName: "Dr. Ayush Jain",
    design: "MBBS, MS, McH, FICS",
    drPhoto: sampleDoctor,
    details: [
      
      {
        icon: blueClock,
        content: "On Call",
      },
    ],
    buttonText: "Schedule Appointment",
  },
];

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

  const [searchValue, setSearchValue] = usePersistentSearch();

  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const inputContainerRef = useRef(null);
  const navigate = useNavigate();

  // Filtered list based on search input
  const filteredDoctors = allDoctors.filter((item) =>
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
              <span style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
                Back
              </span>
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
