import React, { useEffect } from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import NewDental from "../../components/NewDental/NewDental";

import image1 from "../../assets/images/dental/card-team.png";
import image2 from "../../assets/images/dental/card-team (1).png";
import image3 from "../../assets/images/dental/card-team (2).png";

import image4 from "../../assets/images/tobacco/card-team (3).png";
import image5 from "../../assets/images/tobacco/card-team (4).png";
import image6 from "../../assets/images/tobacco/card-team (5).png";

import image7 from "../../assets/images/world/card-team (6).png";
import image8 from "../../assets/images/world/card-team (7).png";
import image9 from "../../assets/images/world/card-team (8).png";

const doctors = [
  {
    image: image1,
  },
  { image: image2 },
  { image: image3 },

  {
    image: image1,
  },
  { image: image2 },
  { image: image3 },
];
const tobacoo = [
  {
    image: image4,
  },
  { image: image5 },
  { image: image6 },

  {
    image: image4,
  },
  { image: image5 },
  { image: image6 },
];

const world = [
  {
    image: image7,
  },
  { image: image8 },
  { image: image9 },

  {
    image: image7,
  },
  { image: image8 },
  { image: image9 },
];

const Gallery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="galleryPage">
      <NewDental
        heading="New Dental Unit Opening"
        para="GOYAL HOSPITAL & UROLOGY CENTRE "
        para2="Dr Anil Goyal, Dr Anil Chaturvedi,Dr S.S BHAGAT,Dr Megha Goyal,Dr Vivek Chimpa and Dr Vipin Rastogi"
        images={doctors}
      />
      <NewDental
        heading="World no Tobacco Day 31st May 2023"
        para="GOYAL HOSPITAL & UROLOGY CENTRE "
        para2="Dr Anil Goyal, Dr Anil Chaturvedi,Dr S.S BHAGAT,Dr Megha Goyal,Dr Vivek Chimpa and Dr Vipin Rastogi"
        images={tobacoo}
      />

      <NewDental
        heading="World Hypertension Day 2023"
        para="GOYAL HOSPITAL & UROLOGY CENTRE "
        para2=" Dr Anil Goyal, Dr Anil Chaturvedi and Dr Megha Goyal
"
        images={world}
      />
      <ContactUs />
    </div>
  );
};

export default Gallery;
