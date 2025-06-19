import React from "react";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import JobList from "../../components/JobList/JobList";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";

const Career = () => {
  return (
    <div className="careerPage">
      <CommonBanner />
       <JobList />
       <ContactUs />
       <Footer />
    </div>
  );
};

export default Career;
