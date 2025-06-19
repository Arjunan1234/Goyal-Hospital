import "./departmentHeader.scss"
const DepartmentHeader = ({ title, content }) => {
  return (
    <>
      <div className="departmentHeaderWrapper">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </>
  );
};

export default DepartmentHeader;
