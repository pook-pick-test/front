import React from "react";
import './index.css';

const SwipePageButton = ({ onClick, children, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="swipe-page-button">
      {children}
    </button>
  );
};

export default SwipePageButton;
