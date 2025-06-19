import OdpBookingCard from "./OdpBookingCard/OdpBookingCard";
import "./odpBooking.scss";
const OdpBooking = ({ title, content }) => {
  return (
    <>
      <div className="odpBookingWrapper">
        <h1>{title}</h1>
        <div className="odpCardContainer">
          {content.map((item) => (
            <OdpBookingCard
              drImage={item.drPhoto}
              drName={item.drName}
              design={item.design}
              details={item.details}
              buttonText={item.buttonText}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OdpBooking;
