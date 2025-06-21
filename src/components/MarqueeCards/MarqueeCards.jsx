import "./marqueeCards.scss";
// import bed from "../../assets/images/marqueeCardsImages/bed.svg";
// import heart from "../../assets/images/marqueeCardsImages/heart.svg";
// import uro from "../../assets/images/marqueeCardsImages/uro.svg";
// import pain from "../../assets/images/marqueeCardsImages/pain.svg";
// import lab from "../../assets/images/marqueeCardsImages/lab.svg";
// import hemo from "../../assets/images/marqueeCardsImages/hemo.svg";
import Marquee from "react-fast-marquee";

const MarqueeCards = () => {
  const marqueeCardsData = [
    {
      // icon: bed,
      // title: "100-Bedded Facility",
      content: "Morethan 24 hours of excellence",
    },
    {
      // icon: bed,
      // title: "100-Bedded Facility",
      content: "100 Bedded Multi Speciality Hospital",
    },
    {
      // icon: bed,
      // title: "100-Bedded Facility",
      content: "Advanced Laser Laparoscopy Procedures",
    },
    {
      // icon: bed,
      // title: "100-Bedded Facility",
      content: "Advanced Laser Endoscopic Procedures",
    },
    {
      // icon: bed,
      // title: "100-Bedded Facility",
      content: "16 Bedded ICU",
    },
    {
      // icon: bed,
      // title: "100-Bedded Facility",
      content: "Level 2 Nursery",
    },
    {
      // icon: bed,
      // title: "100-Bedded Facility",
      content: "Modular Operation Theaters",
    },
    {
      // icon: bed,
      // title: "100-Bedded Facility",
      content: "Multi speciality OPD Services ",
    },
    {
      // icon: bed,
      // title: "100-Bedded Facility",
      content: "24 Hours Emergency Services",
    },
    {
      // icon: bed,
      // title: "100-Bedded Facility",
      content: "24 Hours Pharmacy Services",
    },
    {
      // icon: bed,
      // title: "100-Bedded Facility",
      content: "24 Hours Laboratory Services",
    },
    {
      // icon: bed,
      // title: "100-Bedded Facility",
      content: "24 Hours Ambulance Services",
    },
    {
      // icon: bed,
      // title: "100-Bedded Facility",
      content: "24 Hours X-Ray & CT Scan",
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
              {/* <div className="imageWrapper">
                <img src={item.icon} alt="icon" />
              </div> */}
              <div className="textContainer">
                {/* <p className="cardTitle">{item.title}</p> */}
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
