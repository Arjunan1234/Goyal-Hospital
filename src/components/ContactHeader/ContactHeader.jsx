import "./contactHeader.scss";
import phone from "../../assets/images/Phone.svg";
import Mail from "../../assets/images/Mail.svg";
import Clock from "../../assets/images/Clock.svg";
const ContactHeader = () => {
  const contactDetails = [
    {
      icon: Mail,
      content: "goyalhospital@gmail.com",
    },
    {
      icon: phone,
      content: "+91 98412 48842",
    },
  ];
  return (
    <>
      <section className=" contactHeader">
        <div className="container contactHeaderContainer">
          <div className="contactContainer">
            {contactDetails.map((item, index) => (
              <div className="contactDetail" key={index}>
                <div className="imageWrapper">
                  <img src={item.icon} alt="mail" />
                </div>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
          <div className="hoursContainer">
            <p>Working hours</p>
            <div className="timeContianer">
              <div className="imageWrapper">
                <img src={Clock} alt="Clock" />
              </div>
              <p>24/7</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHeader;
