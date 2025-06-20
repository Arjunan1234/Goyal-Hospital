import "./navBox.scss";

const NavBox = ({ title, content, onDeptClick, selectedDept }) => {
  return (
    <>
      <div className="navBoxContainer">
        <h4>{title}</h4>
        <div className="navBoxContent">
          {content.map((item, index) => (
            <span
              key={index}
              className={selectedDept === item ? "selectedDept" : ""}
              onClick={() => onDeptClick && onDeptClick(item)}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBox;
