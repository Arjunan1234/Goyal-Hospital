// import { useEffect, useRef } from "react";
// import "./modal.scss";

// const Modal = ({ isOpen = false, handleClose = () => {}, children }) => {
//   const modalRef = useRef(null);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto"; // Prevent scrolling when modal is open

//     const handleOutsideClick = (e) => {
//       if (modalRef.current && !modalRef.current.contains(e.target)) {
//         handleClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("mousedown", handleOutsideClick);
//     } else {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, [isOpen, handleClose]);

//   if (!isOpen) return null;
//   return (
//     <div className="modal">
//       <div
//         className="modalContainer"
//         ref={modalRef}
//         onClick={(e) => {
//           e.stopPropagation();
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React from "react";
import "./modal.scss";

const Modal = ({ isOpen = false, handleClose = () => {}, children }) => {
 
// Prevent background scroll
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="modal"  onClick={handleClose} >
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

