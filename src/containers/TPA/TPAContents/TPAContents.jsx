import TPAImage from "./TPAImage/TPAImage";

import {
  governmentTitle,
  governmentContent,
  thirdPartyTitle,
  thirdPartyContent,
  governmentTpaMobileLogos1,
  governmentTpaLogos1,
  thirdPartyTpaMobileLogos1,
  thirdPartyTpaLogos1
} from "../../../constants/TPAImage";

import "./tpaContents.scss";
import useScreenMobile from "../../../hooks/useScreenMobile";

const TPAContents = () => {
  const isMobile = useScreenMobile({ size: 568 });
  return (
    <>
      <section className="tpaContents">
        <div className="container tpaContentContainer">
          <div className="titleContainer">
            <h1> List of Empanelled Organizations </h1>
            <p>
              Goyal Hospital is empanelled with a wide range of government
              bodies and Third-Party Administrators (TPAs) to ensure seamless
              healthcare access and cashless treatment for eligible patients.
            </p>
          </div>
          <TPAImage
            title={governmentTitle}
            content={governmentContent}
            // imageContents={
            //   isMobile ? governmentTpaMobileLogos : governmentTpaLogos
            // }
            imageContents={
              isMobile ? governmentTpaMobileLogos1 : governmentTpaLogos1
            }
          />
          <TPAImage
            title={thirdPartyTitle}
            content={thirdPartyContent}
            imageContents={isMobile ? thirdPartyTpaMobileLogos1 : thirdPartyTpaLogos1}
          />
        </div>
      </section>
    </>
  );
};

export default TPAContents;
