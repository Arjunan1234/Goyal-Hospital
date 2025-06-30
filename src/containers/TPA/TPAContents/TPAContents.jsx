import TPAImage from "./TPAImage/TPAImage";

import {
  governmentTitle,
  governmentContent,
  governmentTpaLogos,
  governmentTpaMobileLogos,
  thirdPartyTitle,
  thirdPartyContent,
  thirdPartyTpaLogos,
  thirdPartyTpaMobileLogos
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
            imageContents={
              isMobile ? governmentTpaMobileLogos : governmentTpaLogos
            }
          />
          <TPAImage
            title={thirdPartyTitle}
            content={thirdPartyContent}
            imageContents={isMobile ? thirdPartyTpaMobileLogos : thirdPartyTpaLogos}
          />
        </div>
      </section>
    </>
  );
};

export default TPAContents;
