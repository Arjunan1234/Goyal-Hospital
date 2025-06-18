import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/common.scss";

import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Services from "./containers/Services/Services";
import ServiceDetails from "./containers/ServiceDetails/ServiceDetails";
import Career from "./containers/Career/Career";
import Gallery from "./containers/Gallery/Gallery";
import "../src/styles/common.scss";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import SearchHeader from "./components/SearchHeader/SearchHeader";
const App = () => {
  return (
    <>
      <ContactHeader />
      <SearchHeader />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/career" element={<Career />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
