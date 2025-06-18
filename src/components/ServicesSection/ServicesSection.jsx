import React from "react";
import "./servicesSection.scss";

import clock from "../../assets/svg/clock.svg";
import user from "../../assets/svg/user.svg";
import pediatrics from "../../assets/svg/pediatrics.svg";
import laboratory from "../../assets/svg/pediatrics.svg";
import medical from "../../assets/svg/medical.svg";
import group from "../../assets/svg/group.png";
import phone from "../../assets/images/Phone.svg";

const services = [
  {
    title: "24/7 Emergency Services",
    icon: clock,
    description:
      "Goyal Hospital & Urology Centre – multispeciality hospital la a pioneer centre in the heart of Krishna Nagar, Delhi for Advance care, GHUC has a team of qualified and experienced Doctors",
  },
  {
    title: "Critical Care",
    icon: user,
    description:
      "The ICU is supported by superspecialty facilities like: Cardiology, CT scan, high end lab services, Dialysis and Neurology reference, etc.",
  },
  {
    title: "Pediatrics",
    icon: pediatrics,
    description:
      "GHUC has a team of qualified, experienced and competent pediatricians who ensure 24 hours availability of their service for morning and evening OPD and emergency cases.",
  },
  {
    title: "Laboratory",
    icon: laboratory,
    description:
      "Laboratory has ‘State of the Art’ equipment with fully automated random access Biochemistry and Electrolyte Analyser, Haematology and Immunology Auto Analyzers.",
  },
  {
    title: "Medical Checkup",
    icon: medical,
    description:
      "Regular health checkups to monitor your well-being and detect potential issues early.",
  },
  {
    title: "Emergency Call",
    image: group,
    description:
      "Quick access to emergency services, ensuring immediate care when you need it the most.",
    isDark: true,
  },
];

const ServicesSection = () => {
  return (
    <div className="container servicesSection">
      <h4 className="sectionSubtitle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
        >
          <path
            d="M7.5 0.25C7.03587 0.25 6.59075 0.434375 6.26256 0.762563C5.93437 1.09075 5.75 1.53587 5.75 2V5.25H2.5C2.03587 5.25 1.59075 5.43437 1.26256 5.76256C0.934375 6.09075 0.75 6.53587 0.75 7V11C0.75 11.966 1.534 12.75 2.5 12.75H5.75V16C5.75 16.966 6.534 17.75 7.5 17.75H11.5C11.9641 17.75 12.4092 17.5656 12.7374 17.2374C13.0656 16.9092 13.25 16.4641 13.25 16V12.75H16.5C16.9641 12.75 17.4092 12.5656 17.7374 12.2374C18.0656 11.9092 18.25 11.4641 18.25 11V7C18.25 6.53587 18.0656 6.09075 17.7374 5.76256C17.4092 5.43437 16.9641 5.25 16.5 5.25H13.25V2C13.25 1.53587 13.0656 1.09075 12.7374 0.762563C12.4092 0.434375 11.9641 0.25 11.5 0.25H7.5Z"
            fill="#195AFF"
          />
        </svg>
        Our Services
      </h4>
      <h2 className="servicesHeading">Comprehensive Healthcare Solutions</h2>
      <p className="servicesDescription">
        At CareLink, we offer a wide range of medical services tailored to your
        needs, from routine check-ups to specialized treatments.
      </p>

      <div className="servicesGrid">
        {services.map((service, index) => (
          <div
            className={`serviceCard ${service.isDark ? "darkCard" : ""}`}
            key={index}
            style={
              service.image ? { backgroundImage: `url(${service.image})` } : {}
            }
          >
            {!service.image ? (
              <div className="serviceIcon">
                <img src={service.icon} alt="" />
              </div>
            ) : null}
            <div className="serviceContent">
              <h3 className="serviceTitle">{service.title}</h3>
              <p className="serviceText">{service.description}</p>
              {service.isDark && (
                <button className="contactButton">
                  Contact Us <img src={phone} alt="" />{" "}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
