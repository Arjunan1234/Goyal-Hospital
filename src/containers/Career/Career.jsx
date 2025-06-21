import CommonBanner from "../../components/CommonBanner/CommonBanner";
import JobList from "../../components/JobList/JobList";
import ContactUs from "../../components/ContactUs/ContactUs";


import phoneCall from "../../assets/images/phoneCall.svg";
import {
  careerPageBannerTitle,
  careerPageBannerContent,
} from "../../constants/bannerContents";
import { useEffect } from "react";
const Career = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="careerPage">
      <CommonBanner
        title={careerPageBannerTitle}
        Content={careerPageBannerContent}
        buttonContent="Contact Us"
        buttonIcon={phoneCall}
        overWriteClass="careerBanner"
        isCareerBannerTrue={true}
      />
      <JobList />
      <ContactUs />
    
    </div>
  );
};

export default Career;
