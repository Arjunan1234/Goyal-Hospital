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
import cardRedirection from "../../assets/images/cardRedirection.svg";
export const cardsContent = [
  [
    {
      Title: "Urology",
      redirection:"Urology & Andrology",
      icon: uro,
      iconAltText: "Urology",
      doctorsList: ["DR. ANIL GOYAL"],
    },
    {
      Title: "Surgery",
      icon: surgery,
      iconAltText: "surgery",
      redirection: "Surgery",
      doctorsList: ["Dr. S.S. Bhagat", "Dr. Sandeep Jain", "Dr. Pradeep Saini"],
    },
    {
      Title: "EYE",
      icon: eye,
      iconAltText: "eye",
      redirection: "Eye",
      doctorsList: ["Dr. Pravin Kumar"],
    },
  ],
  [
    {
      Title: "Gynocology & Obsetetrics",
      icon: gyno,
      redirection: "Gynecology",
      iconAltText: "gyno",
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
      Title: "Medicine",
      icon: medicine,
      redirection: "Medicine",
      iconAltText: "medicine",
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
      Title: "Orthopaedics",
      icon: ortho,
      iconAltText: "ortho",
      redirection: "Orthopedics",
      doctorsList: [
        "Dr. Amit Srivastava ",
        "Dr. Vivek Chhimpa ",
        "Dr. Rahul Sahu",
        "Dr. Apoorva Sehgal ",
        "Dr. Sanyam Jain",
      ],
    },
  ],
  [
    {
      Title: "Pediatrics",
      icon: pediatrics,
      redirection: "Pediatrics",
      iconAltText: "pediatrics",
      doctorsList: [
        " Dr. Piyush Jain",
        "Dr. Sanjay Kappor",
        "Dr. Rajeev Gupta",
        "Dr. Ajay Kumar	",
        "Dr. Anil Jain	",
      ],
    },

    {
      Title: "Anesthesia",
      icon: anesthesia,
      iconAltText: "anesthesia",
      redirection: "Anesthesia",
      doctorsList: [
        "Dr. Pradeep Sharma",
        "Dr. Shiv Patel",
        "Dr. Ankit Luthra",
        "Dr. Ramesh Subedi",
      ],
    },
    {
      Title: "Cardiology",
      icon: cardiology,
      redirection: "Cardiology",
      iconAltText: "cardiology",
      doctorsList: [
        "Dr. Dheeraj Garg",
        "Dr. Lalit Gupta",
        "Dr. Parnessh Arora",
        "Dr. Vineet Bhatia",
      ],
    },
  ],
  [
    {
      Title: "Neurology",
      icon: cardiology,
      redirection: "Neurology",
      iconAltText: "Neurology",
      doctorsList: ["Dr. Abhinav Gupta", "Dr. Shitla Prasad Pathak", ""],
    },
    {
      Title: "Gastroenterology",
      icon: cardiology,
      redirection: "Gastroenterology",
      iconAltText: "Gastroenterology",
      doctorsList: ["Dr. Ashish Garg", "Dr. Anando Sengupta"],
    },
    {
      Title: "Dermatology",
      icon: cardiology,
      redirection: "Dermatology",
      iconAltText: "Dermatology",
      doctorsList: ["Dr. Puneet Aggarwal", "Dr. Navrattan Surana"],
    },
  ],
  [
    {
      Title: "Bariatric",
      icon: cardiology,
      redirection: "Bariatric",
      iconAltText: "Bariatric",
      doctorsList: ["Dr. Yogesh Agarwal"],
    },
    {
      Title: "Plastic",
      icon: cardiology,
      redirection: "Plastic",
      iconAltText: "Plastic",
      doctorsList: ["Dr. Ayush Jain", "Dr. R.K. Sharma"],
    },
  ],
];

const DoctorCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    navigate("/service-details", { state: { department: title } });
  };
  const isMobile = useScreenMobile({ size: 568 });

  const defaultVisibleRows = isMobile ? 1 : 5;
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
                    className={`doctorsCardsItem doctorsCardsItem${index}`}
                    key={index}
                    onClick={() => handleCardClick(item.redirection)}
                  >
                    <div className="imageWrapper">
                      <img
                        className="logoIcon"
                        src={item.icon}
                        alt={item.iconAltText}
                      />
                    </div>
                    <div className="mainContent">
                      <div className="title">
                        <p>
                          <FadeUp>{item.Title}</FadeUp>
                        </p>
                        <div className="imageWrapper">
                          <img src={cardRedirection} alt="redirection" />
                        </div>
                      </div>

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
