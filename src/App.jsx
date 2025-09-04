import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/common.scss";
import whatsapp from "../src/assets/images/whatsapp.webp";
import scrollTop from "../src/assets/images/scrolltotop.png";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Services from "./containers/Services/Services";
import ServiceDetails from "./containers/ServiceDetails/ServiceDetails";
import Career from "./containers/Career/Career";
import Gallery from "./containers/Gallery/Gallery";
import "../src/styles/common.scss";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import useScreenMobile from "./hooks/useScreenMobile";
import NavHeader from "./components/NavHeader/NavHeader";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./containers/PrivacyPolicy/PrivacyPolicy";
import Disclaimer from "./containers/Disclaimer/Disclaimer";
import TPA from "./containers/TPA/TPA";
import BookAppointment from "./containers/BookAppointment/BookAppointment";
import { useEffect, useState } from "react";
const App = () => {
  const isMobile = useScreenMobile({ size: 568 });
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={whatsapp}
          alt="WhatsApp"
          style={{
            maxWidth: "50px",
            position: "fixed",
            right: "20px",
            bottom: "100px",
            zIndex: 999999,
            cursor: "pointer",
          }}
        />
      </a>
      {showScroll && (
        <img
          src={scrollTop}
          alt="Scroll to Top"
          onClick={scrollToTop}
          style={{
            maxWidth: "50px",
            position: "fixed",
            right: "20px",
            bottom: "40px",
            zIndex: 999999,
            cursor: "pointer",
          }}
        />
      )}
      {!isMobile && <ContactHeader />}
      <SearchHeader />
      {!isMobile && <NavHeader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/speciality" element={<Services />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/career" element={<Career />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/tpa" element={<TPA />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
