import { useState } from "react";
import OdpBookingCard from "../../OdpBooking/OdpBookingCard/OdpBookingCard";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "./appointmentCardsSection.scss";
import Modal from "../../Modal/Modal";
import SuccessMessage from "../../ModalContents/SuccessMessage/SuccessMessage";
import BookContact from "../../ContactUs/BookContact";

const AppointmentCardsSection = ({ cardsData }) => {
  const [openCalendarIndex, setOpenCalendarIndex] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedDates, setSelectedDates] = useState({});
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (index) => {
    setOpenCalendarIndex(openCalendarIndex === index ? null : index);
  };

  const handleDateChange = (index, date) => {
    setSelectedDates((prev) => ({
      ...prev,
      [index]: date,
    }));

    setSelectedDoctor(cardsData[index].drName);
    setSelectedDate(date.toDate()); // ✅ Convert dayjs to native Date
    setOpenCalendarIndex(null);
    setIsModalOpen(true);
    setShowSuccess(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowSuccess(false);
    setSelectedDates({});
  };

  return (
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
                    disablePast
                  />
                </div>
              )}
            </div>
            <Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
              {!showSuccess ? (
                <BookContact
                  doctorName={selectedDoctor}
                  selectedDate={selectedDate}
                />
              ) : (
                <SuccessMessage />
              )}
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentCardsSection;
