import { useEffect, useRef, useState } from "react";
import "./otpInput.scss";
const OTP_LENGTH = 4;
const OTP_TIMER = 24;
const OtpInput = ({ onSuccess }) => {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
   const [timer, setTimer] = useState(OTP_TIMER);
  const inputsRef = useRef([]);

   // Timer effect
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

   useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      // All digits entered
      onSuccess && onSuccess();
    }
  }, [otp, onSuccess]);

  const handleChange = (e, idx) => {
    const value = e.target.value.replace(/\D/g, "");
    if (!value) return;
    const newOtp = [...otp];
    newOtp[idx] = value[0];
    setOtp(newOtp);
    if (idx < OTP_LENGTH - 1) {
      inputsRef.current[idx + 1].focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      if (otp[idx]) {
        const newOtp = [...otp];
        newOtp[idx] = "";
        setOtp(newOtp);
      } else if (idx > 0) {
        inputsRef.current[idx - 1].focus();
      }
    }
  };

   // Format timer as MM:SS
  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };
  return (
    <>
      <div className="otpInput">
        <label htmlFor="">Enter OTP</label>
        <div className="digitsContainer">
          <div className="inputsWrapper">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                className="otpDigit"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                ref={(el) => (inputsRef.current[idx] = el)}
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="one-time-code"
              />
            ))}
          </div>
          <span className="timer">{formatTime(timer)}</span>
        </div>
      </div>
    </>
  );
};

export default OtpInput;
