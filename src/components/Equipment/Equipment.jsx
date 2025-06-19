import "./equipment.scss";
import EquipmentCard from "./EquipmentCard/EquipmentCard";

const Equipment = ({ title, content }) => {
  return (
    <>
      <div className="equipmentWrapper">
        <h2>{title}</h2>
        <div className="equipmentCarContainer">
            {
                content.map((item)=>(
                    <EquipmentCard icon={item.icon} title={item.title} content={item.content}/>
                ))
            }
        </div>
      </div>
    </>
  );
};

export default Equipment;
