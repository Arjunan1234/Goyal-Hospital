import "./marqueeCards.scss";
import bed from "../../assets/images/marqueeCardsImages/bed.svg";
import heart from "../../assets/images/marqueeCardsImages/heart.svg";
import uro from "../../assets/images/marqueeCardsImages/uro.svg";
import pain from "../../assets/images/marqueeCardsImages/pain.svg";
import lab from "../../assets/images/marqueeCardsImages/lab.svg";
import hemo from "../../assets/images/marqueeCardsImages/hemo.svg";
import Marquee from "react-fast-marquee";

const MarqueeCards = () => {
  const marqueeCardsData = [
    {
      icon: bed,
      title: "100-Bedded Facility",
      content: "Spacious hospital designed for comprehensive patient care.",
    },
    {
      icon: heart,
      title: "16 Hi-Tech ICU",
      content: "Advanced intensive care for critical cases and emergencies.",
    },
    {
      icon: uro,
      title: "Urodynamics",
      content: "Specialized testing for urinary function and bladder health.",
    },
    {
      icon: pain,
      title: "Pain-Free Delivery",
      content: "Modern, comfortable, and safe childbirth experience.",
    },
    {
      icon: lab,
      title: "Laboratory Services",
      content: "Accurate diagnostic testing with quick results.",
    },
    {
      icon: hemo,
      title: "Hemodialysis",
      content: "Expert renal care and dialysis support for kidney patients.",
    },
  ];
  return (
    <section className="marqueeCards">
      <div className="marqueeCardsContainer">
        <Marquee
          pauseOnHover
          gradient={false}
          speed={50}
          className="marqueeTag"
        >
          {marqueeCardsData.map((item, index) => (
            <div className="cardContainer" key={index}>
              <div className="imageWrapper">
                <img src={item.icon} alt="icon" />
              </div>
              <div className="textContainer">
                <p className="cardTitle">{item.title}</p>
                <p className="cardContent">{item.content}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default MarqueeCards;
