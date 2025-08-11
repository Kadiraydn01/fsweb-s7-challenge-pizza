import React from "react";
import "./ModernOrder.css";

const Order3 = ({ selectedHamur, onSelectHamur }) => {
  const handleHamurChange = (event) => {
    onSelectHamur(event.target.value);
  };

  return (
    <div className="modern-form-section">
      <h4 className="section-title">
        <span role="img" aria-label="pizza">
          🍕
        </span>
        Hamur Kalınlığı <span className="yildiz">*</span>
      </h4>
      <select
        className="modern-select"
        value={selectedHamur || ""}
        onChange={handleHamurChange}
      >
        <option value="">Hamur kalınlığını seçiniz</option>
        <option value="İnce Kenar">İnce Kenar (+10₺)</option>
        <option value="Kalın Kenar">Kalın Kenar (+15₺)</option>
        <option value="Orta Kenar">Orta Kenar (+12₺)</option>
      </select>
    </div>
  );
};

export default Order3;
