import "./iconButton.scss";

const IconButton = ({
  buttonContent = "content",
  image,
  buttonBackgroundColor = "#195AFF",
  textColor = "#fff",
  onClick,
  disabled = false,
  isIconNeed = true
}) => {
  return (
    <button
      className="iconButtonContainer"
      style={{ backgroundColor: buttonBackgroundColor }}
      onClick={onClick}
      disabled={disabled}
    >
      <span style={{ color: textColor }}>{buttonContent}</span>
     {isIconNeed && <div className="imageWrapper">
        <img src={image} alt="icon" />
      </div>}
    </button>
  );
};

export default IconButton;
