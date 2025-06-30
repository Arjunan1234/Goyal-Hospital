import React, { useEffect } from "react";
import TPAContents from "./TPAContents/TPAContents";

const TPA = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <>
      <div className="tpaPage">
        <TPAContents />
      </div>
    </>
  );
};

export default TPA;
