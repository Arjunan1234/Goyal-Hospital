import React, { useEffect } from "react";
import TPAContents from "./TPAContents/TPAContents";
import TpaGreenImageCard from "../../components/TpaGreenImageCard/TpaGreenImageCard"
const TPA = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <>
      <div className="tpaPage">
        <TPAContents />
        <TpaGreenImageCard />
      </div>
    </>
  );
};

export default TPA;
