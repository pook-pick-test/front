import React from "react";
import './index.css';

const SwitchPageButton = ({ onClick, children, disabled, className }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`switch-page-button ${className ? className : ''}`}
      >
      {children}
    </button>
  );
};

export default SwitchPageButton;
