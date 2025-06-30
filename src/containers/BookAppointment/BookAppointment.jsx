import { useEffect } from "react";
import AppointmentWrapper from "../../components/AppointmentWrapper/AppointmentWrapper";
import ContactUs from "../../components/ContactUs/ContactUs";
import "./bookAppointment.scss";
const BookAppointment = () => {
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
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
