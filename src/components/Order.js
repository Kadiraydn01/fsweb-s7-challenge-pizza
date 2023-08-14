import React from "react";
import Order2 from "./Order2";
import Order3 from "./Order3";
import Ekmalzeme from "./Ekmalzeme";
import Yorum from "../Yorum";

const Order = () => {
  return (
    <>
      <div className="header1">
        <h2>Teknolojik Yemekler</h2>
        <p>
          Anasayfa - Seçenekler - <strong>Sipariş Oluştur</strong>
        </p>
      </div>
      <div>
        <h4 className="hdört">Position Absolute Acı Pizza</h4>
      </div>
      <div className="fiyat">
        <p>
          <strong>85.50 ₺ </strong>
        </p>
        <p>4.9</p>
        <p>(200)</p>
      </div>
      <div className="aciklama">
        <p>
          Bu pizzamızı yemeyen bin pişman. Gelin bu tadın enfesliğinin sizde
          farkına varın. Dalından taze koparılmış ürünlerimizle kendinizi bu
          tazelikle yenilenmiş hissedeceksiniz. Sonrasında yazdığınız kodlar
          Seniurlarınız tarafından takdir görecek. Sizde çok çalışıp hakkınızı
          alamıyorsanız bu pizzadan tadarak daha başarılı bir yazılımcı
          olabilirsiniz. Birde pizza yemek için İtalyaya gitmenize gerek yok, o
          pizza size bir tık uzakta!
        </p>
      </div>
      <div className="boyut">
        <Order2 />
        <Order3 />
      </div>
      <div className="malzeme-div">
        <Ekmalzeme />
      </div>
      <div>
        <Yorum />
      </div>
      <hr className="hr-class" />
    </>
  );
};

export default Order;
