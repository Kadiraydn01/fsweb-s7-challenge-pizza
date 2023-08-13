import React, { useState } from "react";
import { Button } from "reactstrap";
const Sayac1 = () => {
  const [sayac, setSayac] = useState(0);
  const [fiyat, setFiyat] = useState(0.0);

  const handleIncrement = () => {
    setSayac(sayac + 1);
    setFiyat(fiyat + 1.5);
  };

  const handleDecrement = () => {
    if (sayac > 0) {
      setSayac(sayac - 1);
      setFiyat(fiyat - 1.5);
    }
  };

  return (
    <div className="sayac-2">
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
        <h4>Toplam</h4>
        <Button className="btn-sayac">SİPARİŞ VER</Button>
      </div>
    </div>
  );
};

export default Sayac1;
