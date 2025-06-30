import { useEffect } from "react";
import DisclaimerContent from "./DisclaimerContents/DisclaimerContent";

const Disclaimer = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <>
      <div className="disclaimerPage">
        <DisclaimerContent />
      </div>
    </>
  );
};

export default Disclaimer;
