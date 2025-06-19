import "./iconButton.scss";

const IconButton = ({
  buttonContent = "content",
  image,
  buttonBackgroundColor = "#195AFF",
  textColor = "#fff",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className="iconButtonContainer"
      style={{ backgroundColor: buttonBackgroundColor }}
      onClick={onClick}
      disabled={disabled}
    >
      <span style={{ color: textColor }}>{buttonContent}</span>
      <div className="imageWrapper">
        <img src={image} alt="icon" />
      </div>
    </button>
  );
};

export default IconButton;
