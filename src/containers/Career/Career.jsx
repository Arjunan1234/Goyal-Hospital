import CommonBanner from "../../components/CommonBanner/CommonBanner";
import JobList from "../../components/JobList/JobList";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";

import phoneCall from "../../assets/images/phoneCall.svg";
import {
  careerPageBannerTitle,
  careerPageBannerContent,
} from "../../constants/bannerContents";
const Career = () => {
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
      <Footer />
    </div>
  );
};

export default Career;
