import "./successMessage.scss";
import greenSuccessTick from "../../../assets/images/greenSuccessTick.svg";
const SuccessMessage = () => {
  return (
    <>
      <div className="successMessage">
        <div className="imageWrapper">
          <img src={greenSuccessTick} alt="success" />
        </div>
        <p >
          Thanks for your appointment request. You will receive the confirmation
          message to your phone number.
        </p>
      </div>
    </>
  );
};

export default SuccessMessage;
