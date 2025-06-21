import React, { useEffect } from "react";
import ContactUs from "../../components/ContactUs/ContactUs";


const Gallery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="galleryPage">
      <ContactUs />
    
    </div>
  );
};

export default Gallery;
