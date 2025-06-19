import "./departmentFacility.scss";
import blueTick from "../../assets/images/blueTick.svg";
const DepartmentFacility = ({ title, content }) => {
  return (
    <>
      <div className="departmentFacilityWrapper">
        <h1>{title}</h1>
        <div className="facilityContentContainer">
          {content.map((item, index) => (
            <div className="facilityItem" key={index}>
              <div className="imageWrapper">
                <img src={blueTick} alt="check" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DepartmentFacility;
