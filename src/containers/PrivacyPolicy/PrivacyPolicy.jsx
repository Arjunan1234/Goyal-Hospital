import React, { useEffect } from "react";
import Terms from "./Terms/Terms";

const PrivacyPolicy = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <>
      <div className="privacyPolicyPage">
        <Terms />
      </div>
    </>
  );
};

export default PrivacyPolicy;
