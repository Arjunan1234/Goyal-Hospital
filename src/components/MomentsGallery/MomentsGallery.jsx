import React from "react";
import "./MomentsGallery.scss";

import frame1 from "../../assets/images/frame1.png";
import frame2 from "../../assets/images/frame2.png";
import frame3 from "../../assets/images/frame3.png";
import frame4 from "../../assets/images/frame4.png";

const images = [frame1, frame2, frame3, frame4];

function MomentsGallery() {
  return (
    <div className=" container moments-gallery">
      <h1 className="gallery-title">
        Moments That Matter : Glimpse Into
        <br />
        Care At Goyal Hospitals
      </h1>
      <p className="gallery-subtitle">
        A visual journey through our milestones, moments, and medical
        excellence.
        <br />
        Experience the heart of healing beyond hospital walls.
      </p>
      <div className="gallery-images">
        {images.map((src, idx) => (
          <div className="gallery-image-wrapper" key={idx}>
            <img
              src={src}
              alt={`Moment ${idx + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MomentsGallery;
