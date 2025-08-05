import "./odpBookingCard.scss";
import IconButton from "../../IconButton/IconButton";
import { useState } from "react";
import BookContact from "../../ContactUs/BookContact";
import Modal from "../../Modal/Modal";

const OdpBookingCard = ({
  drImage,
  drName,
  design,
  details,
  buttonText,
  overWriteClass,
  onButtonClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(drName);
  const handleOpenModal = () => {
    setIsModalOpen(true);
    setShowSuccess(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
              onClick={() => {
                handleOpenModal();
                if (onButtonClick) onButtonClick();
              }}
            />
          </div>

          <Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
            {!showSuccess && (
              <BookContact
                doctorName={selectedDoctor}
                // Add callbacks or props here to set showSuccess & selectedDate if needed
              />
            )}
          </Modal>
        </div>
      </div>
    </>
  );
};

export default OdpBookingCard;
