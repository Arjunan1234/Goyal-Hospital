import "./terms.scss";
const termsList = [
  "We use secure systems and encryption standards to keep your personal information confidential and protected.",
  "We will never disclose, sell, or share your personal data—including your name, contact details, or medical history—with any third party without your explicit permission.",
  "While we may use cookie technology to enhance website navigation, we do not store sensitive personal information such as financial data in cookies.",
  "Please note that our website may contain links to external sites, whose privacy practices may differ from those of Goyal Hospital. We recommend reviewing the privacy policies of those sites independently.",
];
const policyList = [
  "What personal information we collect",
  "How and why we use that information",
  "How your privacy is safeguarded",
];
const informationList = [
  " Name",
  "Phone number",
  "Email address.",
  "Appointment details",
  "Feedback or messages you send us",
];
const autoInformationList = [
  "Device information (make, model, operating system, etc.)",
  "IP address and general location data",
  "Browser type and usage behavior on our website",
];
const useOfInformationList = [
  "To process appointments and provide better medical services",
  "To communicate important updates or health alerts",
  "To improve our website/app based on analytics and user behavior",
  "To personalize your experience with Goyal Hospital services",
];
const Terms = () => {
  return (
    <>
      <section className="terms">
        <div className="container termsContianer">
          <div className="termsWrapper">
            <h1>Terms and Conditions for Usage</h1>
            <p>
              Goyal Hospital is committed to protecting your privacy. We
              understand the importance of maintaining confidentiality while
              offering access to our medical services, both online and offline.
            </p>
            <h3>
              To ensure your data is safe and your trust is honored, we adhere
              to the following principles:
            </h3>
            <ul className="ensure">
              {termsList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>
              If you have questions or concerns about how your data is handled,
              feel free to email us at <a className="email">privacy@goyalhospital.com</a>, and we will
              respond within 24 hours.
            </p>
          </div>
          <div className="policyWrapper">
            <h1>Our Privacy Policy Covers:</h1>
            <ul className="policyList">
              {policyList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h2>Information We Collect</h2>
            <p>
              We collect certain information to improve our services, deliver
              personalized care, and ensure smooth user experience. This may
              include:
            </p>
            <h3>1. Information You Provide:</h3>
            <ul className="informationList">
              {informationList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>2. Automatically Collected Information:</h3>
            <ul className="autoInformationList">
              {autoInformationList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>We may use this information in the following ways:</h3>
            <ul className="useOfInformationList">
              {useOfInformationList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="analytics">
              Analytics data may be shared with trusted third-party tools solely
              to enhance performance and user experience. We do not share or
              sell personally identifiable information for marketing purposes.
            </p>
            <p className="query">
              If you have any privacy-related queries, reach us at:
              <a className="email"> privacy@goyalhospital.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
