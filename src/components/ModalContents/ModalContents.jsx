import IconButton from "../IconButton/IconButton";
import "./modalContents.scss";
import PhoneNumberInput from "./PhoneNumberInput/PhoneNumberInput";
import rightHorizontalArrow from "../../assets/images/rightHorizontalArrow.svg";
import OtpInput from "./OtpInput/OtpInput";
import { useState } from "react";
const ModalContents = ({ onSuccess }) => {
  const [step, setStep] = useState(1); // 1: phone, 2: otp
  const [phone, setPhone] = useState("");

  // Handler for phone number input
  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  // Handler for "Get OTP" button
  const handleGetOtp = () => {
    if (phone.length === 10) {
      setStep(2);
    }
  };

  // Handler for OTP success
  const handleOtpSuccess = () => {
    if (onSuccess) onSuccess();
  };
  return (
    <div className="modalConntensWrapper">
      <h4 className="title">Confirm Your Appoinment</h4>
      <div className="mainContent">
        <div className="inputContainer">
          {step === 1 && (
            <PhoneNumberInput value={phone} onChange={handlePhoneChange} />
          )}
          {step === 2 && <OtpInput onSuccess={handleOtpSuccess} />}
        </div>
        <div className="submitButton">
          <div className="getOtpButtonWrapper">
            {step === 1 && (
              <IconButton
                buttonContent="Get OTP"
                image={rightHorizontalArrow}
                disabled={phone.length !== 10}
                onClick={handleGetOtp}
              />
            )}
          </div>
          <div className="verifyOtpButtonWrapper">
            {step === 2 && (
              <IconButton
                buttonContent="Verify OTP"
                image={rightHorizontalArrow}
                disabled={phone.length !== 10}
                onClick={handleOtpSuccess}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContents;
