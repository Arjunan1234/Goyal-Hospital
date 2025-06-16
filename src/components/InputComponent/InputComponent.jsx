import "./inputComponent.scss";
import search from "../../assets/images/search.svg";
const InputComponent = () => {
  return (
    <div className="inputComponentContainer">
      <div className="imageWrapper">
        <img src={search} alt="search" />
      </div>
      <input type="text" name="" id="" placeholder="Find a doctor" />
    </div>
  );
};

export default InputComponent;
