import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaClock, FaTruck, FaHeart } from "react-icons/fa";
import "./Success.css";
import LoadingSpinner from "./components/LoadingSpinner";

const Success = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { orderData } = props.location.state || {};

  useEffect(() => {
    // Simüle edilmiş yükleme süresi
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="main-body">
        <LoadingSpinner text="Siparişiniz hazırlanıyor..." />
      </div>
    );
  }

  if (!orderData) {
    return (
      <div className="main-body">
        <div className="success-icon fade-in">
          <FaCheckCircle />
        </div>
        <div className="success-baslik">
          <h2 className="slide-up">Teknolojik Yemekler</h2>
        </div>
        <div className="success-basari">
          <p className="sari slide-up" style={{ animationDelay: "0.2s" }}>
            <FaTruck style={{ marginRight: "10px" }} />
            lezzetin yolda
          </p>
          <h1 className="slide-up" style={{ animationDelay: "0.4s" }}>
            SİPARİŞİNİZ ALINDI!
          </h1>
        </div>
        <hr />
        <div>
          <p>Position Absolute Acı Pizza</p>
        </div>
        <div className="order-status">
          <FaClock style={{ marginRight: "10px" }} />
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
      <div className="success-icon fade-in">
        <FaCheckCircle />
      </div>

      <div className="success-baslik">
        <h2 className="slide-up">Teknolojik Yemekler</h2>
      </div>

      <div className="success-basari">
        <p className="sari slide-up" style={{ animationDelay: "0.2s" }}>
          <FaTruck style={{ marginRight: "10px" }} />
          lezzetin yolda
        </p>
        <h1 className="slide-up" style={{ animationDelay: "0.4s" }}>
          SİPARİŞİNİZ ALINDI!{" "}
          <FaHeart style={{ color: "#FDC913", marginLeft: "10px" }} />
        </h1>
      </div>

      <hr className="hr-class" />

      <div className="absol slide-up" style={{ animationDelay: "0.6s" }}>
        <h3>Position Absolute Acı Pizza</h3>
      </div>

      <div
        className="delivery-status slide-up"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="status-item">
          <FaCheckCircle className="status-icon completed" />
          <span>Sipariş Alındı</span>
        </div>
        <div className="status-item">
          <FaClock className="status-icon active" />
          <span>Hazırlanıyor</span>
        </div>
        <div className="status-item">
          <FaTruck className="status-icon" />
          <span>Yolda</span>
        </div>
      </div>

      <div className="detay slide-up" style={{ animationDelay: "1s" }}>
        <p>
          Ürün Boyutu: <strong>{selectedSize}</strong>
        </p>
        <p>
          Hamur Kalınlığı: <strong>{selectedHamur}</strong>
        </p>
        <div className="extras">
          <p>Ekstra Malzemeler:</p>
          <ul className="ullar-1">
            {ekstraMalzemeler &&
              ekstraMalzemeler.map((malzeme, index) => (
                <li key={index}>{malzeme}</li>
              ))}
          </ul>
        </div>
      </div>

      <div
        className="success-toplam slide-up"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="ortala">
          <div className="secim">
            <p>Ekstra Malzeme Toplamı:</p>
            <p>{ekstraMalzemeToplamFiyat}₺</p>
          </div>
        </div>
        <div className="ortala">
          <div className="toplam">
            <p>
              <strong>Toplam Tutar:</strong>
            </p>
            <p>
              <strong>{toplamFiyat}₺</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
