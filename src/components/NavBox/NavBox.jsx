import "./navBox.scss";

const NavBox = ({ title, content }) => {
  return (
    <>
      <div className="navBoxContainer">
        <h4>{title}</h4>
        <div className="navBoxContent">
          {content.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBox;
