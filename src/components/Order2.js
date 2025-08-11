import React from "react";
import "./ModernOrder.css";

const Order2 = ({ selectedSize, onSelectSize }) => {
  const handleSizeChange = (event) => {
    const selectedSize = event.target.value;
    onSelectSize(selectedSize);
  };

  const boyutlar = [
    { name: "küçük", price: "65₺", description: "20cm" },
    { name: "orta", price: "85₺", description: "25cm" },
    { name: "büyük", price: "105₺", description: "30cm" },
  ];

  return (
    <div className="modern-form-section">
      <h4 className="section-title">
        <span role="img" aria-label="pizza">
          🍕
        </span>
        Boyut Seçiniz <span className="yildiz">*</span>
      </h4>
      <div className="size-options">
        {boyutlar.map((boyut) => (
          <div key={boyut.name} className="size-card">
            <input
              type="radio"
              id={`size-${boyut.name}`}
              name="size"
              value={boyut.name}
              checked={selectedSize === boyut.name}
              onChange={handleSizeChange}
              className="size-radio"
            />
            <label htmlFor={`size-${boyut.name}`} className="size-label">
              <div className="size-info">
                <span className="size-name">{boyut.name.toUpperCase()}</span>
                <span className="size-price">{boyut.price}</span>
                <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>
                  {boyut.description}
                </span>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order2;
