import React from "react";
import "./economicTimes.scss";
import doctorImage from "../../assets/images/doctorEconomic.png";
import double from "../../assets/svg/doubleQuotes.svg";
import economic from "../../assets/svg/economic.svg";
import useScreenMobile from "../../hooks/useScreenMobile";
const EconomicTimes = () => {
  const isMobile = useScreenMobile({ size: 992 });
  return (
    <section className="container testimonialSection">
      <div className="testimonialContent">
        <div className="leftContent">
          <img src={double} alt="" className="double" />
          <h2 className="greetingText">
            <span className="dropCap"></span>Dear Dr Goyal,
          </h2>
          <div className="messageBox">
            <p>
              This is Anumeha Chaturvedi. Hope this finds you well. I'm writing
              to convey my heartfelt gratitude for the exceptional treatment and
              care taken for my mother when she was admitted to Goyal Hospital &
              Urology Centre on Friday for a kidney stone issue. Right from the
              start of the consultation till the procedure was done on Friday,
              everything went off very smoothly. Dr Arvind Tiwari put us at
              ease, and went out of his way to reassure us. I was very touched
              by his attention to detail and how he patiently and kindly
              explained all the details to us. He is clearly brilliant at what
              he does. I would also like to thank all the staff members of the
              hospital who were very cooperative and helpful with us. The
              services offered at your hospital are excellent and I would highly
              recommend this hospital for all issues linked to this field. Thank
              you.
            </p>
          </div>
          <div className="authorDetails">
            <p>
              <strong>Anumeha Chaturvedi,</strong>
              <br />
              Senior Assistant Editor
            </p>
            <img
              src={economic}
              alt="The Economic Times"
              className="publicationLogo"
            />
          </div>
        </div>
        {!isMobile && (
          <div className="rightImage">
            <img src={doctorImage} alt="Doctor reading report" />
          </div>
        )}
      </div>
    </section>
  );
};

export default EconomicTimes;
