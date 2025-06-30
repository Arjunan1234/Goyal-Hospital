import { useEffect, useRef } from "react";
import "./modal.scss";

const Modal = ({ isOpen = false, handleClose = () => {}, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"; // Prevent scrolling when modal is open

    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;
  return (
    <div
      className="modal"
      ref={modalRef}
     
    >
      <div
        className="modalContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
