import React, { useState } from "react";
import { Button } from "reactstrap";

const Sayac1 = () => {
  const [sayac, setSayac] = useState(0);
  const [selectedSize, setSelectedSize] = useState("küçük");
  const [ekstraMalzemeler, setEkstraMalzemeler] = useState([]);
  const [boyutlar] = useState([
    { name: "küçük", price: "84.5" },
    { name: "orta", price: "104.5" },
    { name: "büyük", price: "124.5" },
  ]);

  const ekstraMalzemeFiyat = 5;

  const handleIncrement = () => {
    setSayac(sayac + 1);
  };

  const handleDecrement = () => {
    if (sayac > 0) {
      setSayac(sayac - 1);
    }
  };
  const handleSizeChange = (selectedSize) => {
    setSelectedSize(selectedSize);
  };

  const selectedSizeObject = boyutlar.find(
    (item) => item.name === selectedSize
  );
  const boyutFiyat = selectedSizeObject ? selectedSizeObject.price : 0;
  const ekstraMalzemeToplamFiyat = ekstraMalzemeler.length * ekstraMalzemeFiyat;
  const toplamFiyat = (boyutFiyat + ekstraMalzemeToplamFiyat) * sayac;

  return (
    <div className="sayac-2">
      <div style={{ display: "flex", flexDirection: "column" }}></div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button className="btn-1" onClick={handleDecrement}>
          -
        </Button>
        <div className="sayac-3" style={{ margin: "0 10px", fontSize: "24px" }}>
          {sayac}
        </div>
        <Button className="btn-2" onClick={handleIncrement}>
          +
        </Button>
      </div>
      <div className="siparis-toplam">
        <div>
          <h3>Sipariş Toplamı</h3>
        </div>
        <h4>Seçimler</h4>
        {ekstraMalzemeler.map((malzeme, index) => (
          <div key={index}>{malzeme}</div>
        ))}
        <h4>Toplam: {toplamFiyat.toFixed(2)} ₺</h4>
        <Button className="btn-sayac">SİPARİŞ VER</Button>
      </div>
    </div>
  );
};

export default Sayac1;
