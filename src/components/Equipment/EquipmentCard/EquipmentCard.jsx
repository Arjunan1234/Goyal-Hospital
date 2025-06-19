import "./equipmentCard.scss";

const EquipmentCard = ({ icon, title, content }) => {
  return (
    <>
      <div className="equipmentCardContainer">
        <div className="imageWrapper">
            <img src={icon} alt="icon" />
        </div>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </>
  );
};

export default EquipmentCard;
