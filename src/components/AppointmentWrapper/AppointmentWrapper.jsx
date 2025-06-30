import leftArrow from "../../assets/images/leftArrow.svg";
import SearchBar from "../SearchBar/SearchBar";
import AppointmentCardsSection from "./AppointmentCardsSection/AppointmentCardsSection";
import "./appointmentWrapper.scss";

import sampleDoctor from "../../assets/images/sampleDoctor.png";
import panel from "../../assets/images/panel.svg";
import blueClock from "../../assets/images/blueClock.svg";

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
              <SearchBar placeHolerText="Search by Doctor or Speciality" />
            </div>
          </div>
          <div className="appointmentsCardsContainer">
            <AppointmentCardsSection cardsData={appointmentCardsData} />
          </div>
        </div>
      </secion>
    </>
  );
};

export default AppointmentWrapper;
