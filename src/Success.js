import React from "react";
import "./Success.css";

const Success = (props) => {
  const { orderData } = props.location.state || {};

  if (!orderData) {
    return (
      <div>
        <div>
          <h2>Teknolojik Yemekler</h2>
        </div>
        <div>
          <p>lezzetin yolda</p>
          <h1>SİPARİŞİNİZ ALINDI!</h1>
        </div>
        <hr />
        <div>
          <p>Position Absolute Acı Pizza</p>
        </div>
        <div>
          <h3>Sipariş verisi bulunmuyor.</h3>
        </div>
      </div>
    );
  }

  const {
    selectedSize,
    selectedHamur,
    ekstraMalzemeler,
    ekstraMalzemeToplamFiyat,
    toplamFiyat,
  } = orderData;

  return (
    <div className="main-body">
      <div className="success-baslik">
        <h2>Teknolojik Yemekler</h2>
      </div>
      <div className="success-basari">
        <p className="sari">lezzetin yolda</p>
        <h1>SİPARİŞİNİZ ALINDI!</h1>
      </div>
      <hr className="hr-class" />
      <div className="absol">
        <h3>Position Absolute Acı Pizza</h3>
      </div>
      <div className="detay">
        <p>Ürün Boyutu: {selectedSize}</p>
        <p>Hamur Kalınlığı: {selectedHamur}</p>
        <p>Ekstra Malzemeler:</p>
        <ul className="ullar-1">
          {ekstraMalzemeler.map((malzeme, index) => (
            <li key={index}>{malzeme}</li>
          ))}
        </ul>
      </div>
      <div className="success-toplam">
        <h3>Sipariş Toplamı</h3>
        <div className="ortala">
          <h4>Seçimler</h4>
          <h4>{ekstraMalzemeToplamFiyat.toFixed(2)} ₺</h4>
        </div>
        <div className="ortala">
          <h4>Toplam</h4>
          <h4>{toplamFiyat.toFixed(2)} ₺ </h4>
        </div>
      </div>
    </div>
  );
};

export default Success;
