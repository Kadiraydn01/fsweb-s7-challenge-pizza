import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ text = "Yükleniyor..." }) => {
  return (
    <div className="loading-container">
      <div className="pizza-spinner">
        <span role="img" aria-label="Pizza loading">🍕</span>
      </div>
      <p className="fade-in" style={{ animationDelay: '0.5s' }}>
        {text}
      </p>
    </div>
  );
};

export default LoadingSpinner;
