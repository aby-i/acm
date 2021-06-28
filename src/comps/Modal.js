import React from "react";

const Modal = ({ selected, setSelected }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelected(null);
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selected} alt="preview" />
    </div>
  );
};

export default Modal;
