import React from 'react';
import './index.css';

const ProgressBar = ({ currentStep, totalSteps, className}) => {
  const percent = (currentStep / totalSteps) * 100;


  return (
    <div className={`progress-bar-wrapper ${className || ''}`}>
      <div className="progress-text">{currentStep} / {totalSteps}</div>
      <div className="progress-bar-bg">
        <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
