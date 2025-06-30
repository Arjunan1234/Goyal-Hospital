import AppointmentWrapper from "../../components/AppointmentWrapper/AppointmentWrapper";
import ContactUs from "../../components/ContactUs/ContactUs";
import "./bookAppointment.scss";
const BookAppointment = () => {
  return (
    <>
      <div className="bookAppointmentPage">
        <AppointmentWrapper />
        <ContactUs />
      </div>
    </>
  );
};

export default BookAppointment;
