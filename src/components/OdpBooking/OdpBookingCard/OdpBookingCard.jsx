import "./odpBookingCard.scss";
import IconButton from "../../IconButton/IconButton";

const OdpBookingCard = ({
  drImage,
  drName,
  design,
  details,
  buttonText,
  overWriteClass,
  onButtonClick,
}) => {
  return (
    <>
      <div className={`odpBookingCardContainer ${overWriteClass}`}>
        <div className="imageWrapper">
          {/* <img src={drImage} alt={drName} /> */}
        </div>
        <div className="cardMainContent">
          <div className="drName">
            <h4>{drName}</h4>
            <h5>{design}</h5>
          </div>
          <div className="drDetailsContainer">
            {details.map((item, index) => (
              <div className="detailsItem" key={index}>
                <div className="imageWrapper">
                  <img src={item.icon} alt="icon" />
                </div>
                <span>{item.content}</span>
              </div>
            ))}
          </div>
          <div className="availButton">
            <IconButton
              buttonContent={buttonText}
              isIconNeed={false}
              onClick={onButtonClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OdpBookingCard;
