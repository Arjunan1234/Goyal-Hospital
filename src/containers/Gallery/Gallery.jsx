import React, { useEffect } from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="galleryPage">
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Gallery;
