import useScreenMobile from "../../../hooks/useScreenMobile";
import "./disclaimerContents.scss";
const termsList = [
  "You will not use this site for any purpose that is unlawful or prohibited by these terms.",
  "You accept that Goyal Hospital may revise these terms at any time without prior notice. Continued use of the site implies your acceptance of any changes.",
  "You are responsible for complying with local laws if you are accessing this site from outside India.",
  "The website may contain errors or inaccuracies. Goyal Hospital reserves the right to make corrections or improvements at any time without notice.",
];

const warrantyList = [
  "The website will be uninterrupted or error-free.",
  "Content downloaded from this website will be free of viruses or harmful components.",
];
const DisclaimerContent = () => {
  const isMobile = useScreenMobile({ size: 568 });
  return (
    <>
      <secion className="disclaimerContents">
        <div className="container disclaimerContentsContainer">
          <h1>Disclaimer & Terms of Use – Goyal Hospital</h1>
          {isMobile && (
            <div className="textContainer">
              <div className="contentContainer">
                <p>
                  This website is intended for informational purposes only. The
                  content provided here is not a substitute for professional
                  medical advice, diagnosis, or treatment by a qualified doctor
                  or licensed healthcare provider.
                </p>
                <p>
                  Visitors should not rely on the information on this website
                  for making any healthcare decisions. Any action taken based
                  solely on information found here is done at your own risk and
                  may lead to harmful consequences. Always consult with a
                  certified medical professional for guidance related to your
                  health or medical condition.
                </p>
                <p>
                  Goyal Hospital does not accept liability, directly or
                  indirectly, for any loss, damage, or injury arising from
                  reliance on the information presented on this website.
                </p>
              </div>
            </div>
          )}
          <div className="textContainer">
            <h3>Medical Disclaimer</h3>
            <div className="contentContainer">
              <p>
                This website is intended for informational purposes only. The
                content provided here is not a substitute for professional
                medical advice, diagnosis, or treatment by a qualified doctor or
                licensed healthcare provider.{isMobile && <br />} Visitors
                should not rely on the information on this website for making
                any healthcare decisions. Any action taken based solely on
                information found here is done at your own risk and may lead to
                harmful consequences. Always consult with a certified medical
                professional for guidance related to your health or medical
                condition.
              </p>
              <p>
                Goyal Hospital does not accept liability, directly or
                indirectly, for any loss, damage, or injury arising from
                reliance on the information presented on this website.
              </p>
              {isMobile && (
                <p>
                  If you have questions or concerns about how your data is
                  handled, feel free to email us at{" "}
                  <a
                    className="email"
                    href="mailto:privacy@goyalhospital.com"
                    target="_blank"
                  >
                    privacy@goyalhospital.com
                  </a>
                  , and we will respond within 24 hours.
                </p>
              )}
            </div>
          </div>
          <div className="textContainer">
            <h3>Third-Party Links</h3>
            <div className="contentContainer">
              <p>
                Our website may contain links to external websites for reference
                or convenience. These links are provided in good faith, but
                Goyal Hospital is not responsible for the content, accuracy, or
                practices of any linked third-party site. The inclusion of any
                links does not imply an endorsement or recommendation.
              </p>
              <p>
                Any views or opinions expressed on linked websites are solely
                those of the respective authors, and Goyal Hospital disclaims
                any responsibility for damages or consequences arising from
                visiting such sites.
              </p>
            </div>
          </div>
          <div className="textContainer">
            <h3>Terms & Conditions for Website Usage</h3>
            <div className="contentContainer">
              <p>
                By accessing and using this website, you agree to comply with
                the following terms:
              </p>
              <ul className="term">
                {termsList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="textContainer">
            <h3>No Warranty Clause</h3>
            <div className="contentContainer">
              <p>
                All content on this website is provided "as is" and "as
                available" without any express or implied warranties. Goyal
                Hospital makes no guarantees regarding the accuracy,
                reliability, completeness, or timeliness of any information.
              </p>
              <p>We do not warrant that:</p>
              <ul className="warrantyList">
                {warrantyList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>
                Visitors are responsible for using appropriate safeguards when
                accessing or downloading content.
              </p>
            </div>
          </div>
          <div className="textContainer">
            <h3>Copyright & Intellectual Property</h3>
            <div className="contentContainer">
              {isMobile ? (
                <p>
                  All materials on this website text, images, logos, graphics,
                  and other content—are owned by or licensed to Goyal Hospital,
                  and are protected under applicable copyright laws. You may
                  download or print content from this site for personal,
                  non-commercial use only, provided you retain all copyright
                  notices. No material may be copied, reproduced, distributed,
                  or used for commercial purposes without express written
                  permission from Goyal Hospital. No license is granted for use
                  of any trademarks appearing on this website without prior
                  authorization.
                </p>
              ) : (
                <>
                  <p>
                    All materials on this website text, images, logos, graphics,
                    and other content—are owned by or licensed to Goyal
                    Hospital, and are protected under applicable copyright laws.
                  </p>
                  <p>
                    You may download or print content from this site for
                    personal, non-commercial use only, provided you retain all
                    copyright notices. No material may be copied, reproduced,
                    distributed, or used for commercial purposes without express
                    written permission from Goyal Hospital. No license is
                    granted for use of any trademarks appearing on this website
                    without prior authorization.
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="textContainer">
            <h3>Jurisdiction & Legal Terms</h3>
            <div className="contentContainer">
              {isMobile ? (
                <p>
                  This agreement is governed by the laws of India. Any disputes
                  arising from the use of this website shall be subject to the
                  exclusive jurisdiction of the courts in New Delhi.
                  {isMobile && <br />} Use of this website is unauthorized in
                  jurisdictions where any part of these terms is unenforceable.
                  Users accessing the site from outside India do so at their own
                  risk and are responsible for compliance with local laws.
                  {isMobile && <br />} These terms do not affect your statutory
                  rights as a consumer. Any rights not explicitly granted herein
                  are reserved.
                </p>
              ) : (
                <>
                  <p>
                    This agreement is governed by the laws of India. Any
                    disputes arising from the use of this website shall be
                    subject to the exclusive jurisdiction of the courts in New
                    Delhi.
                  </p>
                  <p>
                    Use of this website is unauthorized in jurisdictions where
                    any part of these terms is unenforceable. Users accessing
                    the site from outside India do so at their own risk and are
                    responsible for compliance with local laws. These terms do
                    not affect your statutory rights as a consumer. Any rights
                    not explicitly granted herein are reserved.
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="textContainer">
            <h3>Contact Information</h3>
            <div className="contentContainer">
              <p>
                For questions or concerns related to this website or our privacy
                practices, please contact:{" "}
                <a
                  className="email"
                  href="mailto:privacy@goyalhospital.com"
                  target="_blank"
                >
                  privacy@goyalhospital.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </secion>
    </>
  );
};

export default DisclaimerContent;
