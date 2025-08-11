import React from 'react';
import './index.css';

const ProgressBar = ({ currentStep, totalSteps, className}) => {
  const percent = (currentStep / totalSteps) * 100;

  return (
    <div className={`progress-bar-bg ${className || ''}`}>
      <div 
        className="progress-bar-fill" 
        style={{ width: `${percent}%` }} 
      />
    </div>
  );
};

export default ProgressBar;
