import "./doctorCards.scss";
import uro from "../../assets/images/departmentIcons/uro.svg";
import surgery from "../../assets/images/departmentIcons/surgery.svg";
import eye from "../../assets/images/departmentIcons/eye.svg";
import gyno from "../../assets/images/departmentIcons/gyno.svg";
import medicine from "../../assets/images/departmentIcons/medicine.svg";
import ortho from "../../assets/images/departmentIcons/ortho.svg";
import pediatrics from "../../assets/images/departmentIcons/pediatrics.svg";
import anesthesia from "../../assets/images/departmentIcons/anesthesia.svg";
import cardiology from "../../assets/images/departmentIcons/cardiology.svg";
import SearchBar from "../SearchBar/SearchBar";
import IconButton from "../IconButton/IconButton";
import downArrow from "../../assets/images/downArrow.svg";
import upArrow from "../../assets/images/upArrow.svg";
import { useEffect, useState } from "react";
import useScreenMobile from "../../hooks/useScreenMobile";
import FadeUp from "../FadeUp/FadeUp";
import { useNavigate } from "react-router-dom";
const cardsContent = [
  [
    {
      icon: uro,
      iconAltText: "Urology",
      Title: "Urology",
      doctorsList: ["Dr. Anil Goyal", "Dr. Arvind Tiwari"],
    },
    {
      icon: surgery,
      iconAltText: "surgery",
      Title: "Surgery",
      doctorsList: ["Dr. S.S. Bhagat", "Dr. Sandeep Jain", "Dr. Pradeep Saini"],
    },
    {
      icon: eye,
      iconAltText: "eye",
      Title: "EYE",
      doctorsList: ["Dr. Pravin Kumar", "Dr. Anil Biltoria"],
    },
  ],
  [
    {
      icon: gyno,
      redirection: "Gynecology",
      iconAltText: "gyno",
      Title: "Gynocology & Obsetetrics",
      doctorsList: [
        "Dr. Nirupama Goyal",
        "Dr. Aparna Gupta",
        "Dr. Anju Gautam",
        "Dr. Parmeen Sachdeva",
        "Dr. Radha Jain",
        "Dr. Madhu Sarkar",
        "Dr. Santosh Sharma",
      ],
    },
    {
      icon: medicine,
      redirection: null,
      iconAltText: "medicine",
      Title: "Medicine",
      doctorsList: [
        "Dr. Rajiv Bansal",
        "Dr. Atul kumar Gupta",
        "Dr. Susheel Garg",
        "Dr. Harbans Sachdeva",
        "Dr. Lalit",
        "Dr. Bikramaditya Deb",
      ],
    },
    {
      icon: ortho,
      iconAltText: "ortho",
      redirection: "Orthopedics",
      Title: "Orthopaedics",
      doctorsList: [
        "Dr. Piyush Jain",
        "Dr. Sanjay Kappor",
        "Dr. Rajeev Gupta",
        "Dr. Ajay Kumar",
        "Dr. Anil Jain",
      ],
    },
  ],
  [
    {
      icon: pediatrics,
      redirection: "Pediatrics",
      iconAltText: "pediatrics",
      Title: "Pediatrics",
      doctorsList: [
        "Dr. Amit Srivastava",
        "Dr. Vivek Chhimpa",
        "Dr. Rahul Sahu",
        "Dr. Apoorva Sehgal",
        "Dr. Sanyam Jain",
      ],
    },

    {
      icon: anesthesia,
      iconAltText: "anesthesia",
      redirection: null,
      Title: "Anesthesia",
      doctorsList: [
        "Dr. Pradeep Sharma",
        "Dr. Shiv Patel",
        "Dr. Ankit Luthra",
        "Dr. Ramesh Subedi",
      ],
    },
    {
      icon: cardiology,
      redirection: "Cardiology",
      iconAltText: "cardiology",
      Title: "Cardiology",
      doctorsList: [
        "Dr. Dheeraj Garg",
        "Dr. Lalit Gupta",
        "Dr. Parnessh Arora",
        "Dr. Vineet Bhatia",
      ],
    },
  ],
];

const DoctorCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    navigate("/service-details", { state: { department: title } });
  };
  const isMobile = useScreenMobile({ size: 568 });

  const defaultVisibleRows = isMobile ? 1 : 3;
  const [visibleRows, setVisibleRows] = useState(defaultVisibleRows);

  useEffect(() => {
    setVisibleRows(defaultVisibleRows);
    // eslint-disable-next-line
  }, [isMobile]);

  const handleToggle = () => {
    if (visibleRows < cardsContent.length) {
      setVisibleRows((prev) => prev + 1);
    } else if (visibleRows === cardsContent.length) {
      setVisibleRows(1);
    }
  };

  const isLoadLessMode = visibleRows === cardsContent.length;

  return (
    <>
      <section className="doctorCards">
        <div className="container doctorCardsContainer">
          <div className="searchWrapper">
            <div className="doctorSearchContainer">
              <SearchBar />
            </div>
          </div>
          <div className="cardsWrapper">
            {cardsContent.slice(0, visibleRows).map((row, rowIndex) => (
              <div className={`row row${rowIndex + 1}`} key={rowIndex}>
                {row.map((item, index) => (
                  <div
                    className="doctorsCardsItem"
                    key={index}
                    onClick={() => handleCardClick(item.redirection)}
                  >
                    <div className="imageWrapper">
                      <img src={item.icon} alt={item.iconAltText} />
                    </div>
                    <div className="mainContent">
                      <p>
                        <FadeUp>{item.Title}</FadeUp>
                      </p>
                      <div className="doctorList">
                        {item.doctorsList.map((doctor, doctorIndex) => (
                          <span key={doctorIndex}>
                            <FadeUp>{doctor}</FadeUp>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {isMobile && (
            <div className="loadButtonWrapper">
              <div className="loadButtonContainer">
                <IconButton
                  image={isLoadLessMode ? upArrow : downArrow}
                  buttonContent={isLoadLessMode ? "Load Less" : "Load More"}
                  textColor="#FFFFFF"
                  onClick={handleToggle}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DoctorCards;
