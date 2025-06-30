import { useState } from "react";
import OdpBookingCard from "../../OdpBooking/OdpBookingCard/OdpBookingCard";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "./appointmentCardsSection.scss";
import Modal from "../../Modal/Modal";
import ModalContents from "../../ModalContents/ModalContents";
import SuccessMessage from "../../ModalContents/SuccessMessage/SuccessMessage";

const AppointmentCardsSection = ({ cardsData }) => {
  const [openCalendarIndex, setOpenCalendarIndex] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedDates, setSelectedDates] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(selectedDates, "selectedDates");
  console.log(openCalendarIndex, "openCalendarIndex");

  const handleButtonClick = (index) => {
    setOpenCalendarIndex(openCalendarIndex === index ? null : index);
  };

  const handleDateChange = (index, date) => {
    setSelectedDates((prev) => ({
      ...prev,
      [index]: date,
    }));
    setOpenCalendarIndex(null);
    setIsModalOpen(true); // Open the modal
    setShowSuccess(false); // Close calendar after selection
  };

  // Close modal and reset state if needed
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowSuccess(false);
    setSelectedDates({}); // Optionally clear selection
  };

  return (
    <>
      <div className="appointmentCardsSection">
        <h4>Book Appointment</h4>
        <div className="appointsCardsWrapper">
          {cardsData.map((item, index) => (
            <div className="bookingCardContainer" key={index}>
              <OdpBookingCard
                drImage={item.drPhoto}
                drName={item.drName}
                design={item.design}
                details={item.details}
                buttonText={item.buttonText}
                overWriteClass="appointmentCards"
                onButtonClick={() => handleButtonClick(index)}
              />
              <div className="calenderWrapper">
                {openCalendarIndex === index && (
                  <div className="calendarPopup">
                    <DateCalendar
                      value={selectedDates[index] || null}
                      onChange={(date) => handleDateChange(index, date)}
                      disablePast // disables past dates
                    />
                  </div>
                )}
              </div>
              <Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
                {!showSuccess ? (
                  <ModalContents onSuccess={() => setShowSuccess(true)} />
                ) : (
                  <SuccessMessage />
                )}
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppointmentCardsSection;
