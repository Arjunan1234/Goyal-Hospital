import InputComponent from "../InputComponent/InputComponent";
import IconButton from "../IconButton/IconButton";

import logo from "../../assets/images/logo.svg";
import Calendar from "../../assets/images/Calendar.svg";

import "./searchHeader.scss";

const SearchHeader = () => {
  return (
    <>
      <section className="searchHeader">
        <div className="searchHeaderContainer">
          <div className="mainContent">
            <div className="logo">
              <div className="imageWrapper">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div className="inputContainer">
              <InputComponent />
            </div>
          </div>
          <div className="buttonContainer">
            <IconButton buttonContent="Book Appointment" image={Calendar} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchHeader;
