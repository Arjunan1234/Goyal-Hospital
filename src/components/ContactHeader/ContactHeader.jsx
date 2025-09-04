import "./contactHeader.scss";
import phone from "../../assets/images/Phone.svg";
import Mail from "../../assets/images/Mail.svg";
import clocksvg from "../../assets/images/clocksvg.svg";
const ContactHeader = () => {
  const contactDetails = [
    {
      icon: Mail,
      content: "drgoyalhospital@gmail.com",
      // href: "mailto:goyalhospital@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=drgoyalhospital@gmail.com",
    },
    {
      icon: phone,
      content: "011-35021200",
      href: "tel:011-35021200",
    },
  ];
  return (
    <>
      <section className=" contactHeader">
        <div className="container contactHeaderContainer">
          <div className="contactContainer">
            {contactDetails.map((item, index) => (
              <a
                className="contactDetail"
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="imageWrapper">
                  <img src={item.icon} alt="mail" />
                </div>
                <p>{item.content}</p>
              </a>
            ))}
          </div>
          <div className="hoursContainer">
            <p>Working hours</p>
            <div className="timeContianer">
              <div className="imageWrapper">
                <img src={clocksvg} alt="Clock" />
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
