import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaPlus, FaMinus, FaShoppingCart, FaPizzaSlice } from "react-icons/fa";
import {
  showSuccessToast,
  showWarningToast,
  showPizzaToast,
} from "./ToastNotification";
import "../App.css";
import "./ModernOrder.css";
import resim0 from "../adv-aseets/adv-form-banner.png";
import pizzaImage from "../adv-aseets/food-1.png";
import Footer1 from "./Footer";
const Order = () => {
  const [sayac, setSayac] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedHamur, setSelectedHamur] = useState("secimYapin");
  const [ekstraMalzemeler, setEkstraMalzemeler] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    postalCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    orderNote: "",
  });
  const [boyutlar] = useState([
    { name: "M", price: 85.5 },
    { name: "L", price: 105.5 },
    { name: "XL", price: 125.5 },
  ]);

  const ekstraMalzemeFiyat = 5;
  const kalinKenarFiyat = 15;
  const inceKenarFiyat = 10;

  const history = useHistory();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // Sayfa açıldığında toast gösterme - sadece sessiz yükleme
  }, []);

  const handleOrder = () => {
    // Form validasyonu
    if (selectedHamur === "secimYapin") {
      showWarningToast("Lütfen hamur kalınlığını seçiniz!");
      return;
    }

    if (ekstraMalzemeler.length < 4) {
      showWarningToast("Lütfen en az 4 adet ekstra malzeme seçiniz!");
      return;
    }

    // Kişisel bilgiler validasyonu
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      showWarningToast("Lütfen tüm kişisel bilgileri doldurunuz!");
      return;
    }

    // Adres bilgileri validasyonu
    if (!formData.address || !formData.city || !formData.district) {
      showWarningToast("Lütfen adres bilgilerini doldurunuz!");
      return;
    }

    // Ödeme bilgileri validasyonu
    if (
      !formData.cardNumber ||
      !formData.expiryDate ||
      !formData.cvv ||
      !formData.cardName
    ) {
      showWarningToast("Lütfen ödeme bilgilerini doldurunuz!");
      return;
    }

    setIsLoading(true);
    showPizzaToast("Siparişiniz hazırlanıyor... 🔄");

    // Simüle edilmiş ödeme işlemi
    setTimeout(() => {
      const orderData = {
        selectedSize,
        selectedHamur,
        ekstraMalzemeler,
        ekstraMalzemeToplamFiyat,
        toplamFiyat,
        personalInfo: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
        },
        address: {
          address: formData.address,
          city: formData.city,
          district: formData.district,
          postalCode: formData.postalCode,
        },
        payment: {
          cardNumber: formData.cardNumber.slice(-4), // Son 4 hane
          cardName: formData.cardName,
        },
        orderNote: formData.orderNote,
        quantity: sayac,
      };

      showSuccessToast("Siparişiniz başarıyla oluşturuldu! ✅");
      showSuccessToast("Ödeme işlemi tamamlandı! 💳");

      history.push({
        pathname: "/success",
        state: { orderData },
      });
    }, 3000);
  };

  const handleIncrement = () => {
    setSayac(sayac + 1);
    // Toast bildirimini kaldırdık
  };

  const handleDecrement = () => {
    if (sayac > 1) {
      setSayac(sayac - 1);
      // Toast bildirimini kaldırdık
    } else {
      showWarningToast("En az 1 adet pizza sipariş etmelisiniz!");
    }
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    // Toast bildirimini kaldırdık
  };

  const toggleEkstraMalzeme = (malzeme) => {
    if (ekstraMalzemeler.includes(malzeme)) {
      setEkstraMalzemeler(ekstraMalzemeler.filter((item) => item !== malzeme));
      // Toast bildirimini kaldırdık
    } else {
      setEkstraMalzemeler([...ekstraMalzemeler, malzeme]);
      // Toast bildirimini kaldırdık
    }
  };

  const handleHamurChange = (event) => {
    setSelectedHamur(event.target.value);
    // Toast bildirimini kaldırdık
  };

  const selectedSizeObject = boyutlar.find(
    (item) => item.name === selectedSize
  );

  const boyutFiyat = selectedSizeObject ? selectedSizeObject.price : 0;
  const hamurFiyat =
    selectedHamur === "İnce Kenar"
      ? inceKenarFiyat
      : selectedHamur === "Kalın Kenar"
      ? kalinKenarFiyat
      : 0;
  const ekstraMalzemeToplamFiyat = ekstraMalzemeler.length * ekstraMalzemeFiyat;
  const toplamFiyat =
    (boyutFiyat + ekstraMalzemeToplamFiyat + hamurFiyat) * sayac;

  const ekstraMalzemelerList = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Jambonu",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Salam",
    "Ananas",
    "Kabak",
    "Turşu",
  ];
  return (
    <>
      <div>
        <div className="header1">
          <h1>Teknolojik Yemekler</h1>
        </div>
        <div className="header-photo">
          <img src={resim0} alt=""></img>
        </div>
        <div className="header1-p">
          <p>
            Anasayfa - Seçenekler -{" "}
            <span className="yildiz">Sipariş Oluştur</span>
          </p>
        </div>
      </div>
      <div className="order-container">
        <div className="pizza-info-section">
          <div className="pizza-info-content">
            <div className="pizza-visual">
              <img
                src={pizzaImage}
                alt="Position Absolute Acı Pizza"
                className="pizza-main-image"
              />
            </div>
            <div className="pizza-details">
              <h4 className="hdört">Position Absolute Acı Pizza</h4>
              <div className="fiyat">
                <p className="fiyat-p">
                  <strong>{boyutFiyat} ₺ </strong>
                </p>
                <p>4.9</p>
                <p>(200)</p>
              </div>
              <div className="aciklama">
                <p className="aciklama-p">
                  Bu pizzamızı yemeyen bin pişman. Gelin bu tadın enfesliğinin
                  sizde farkına varın. Dalından taze koparılmış ürünlerimizle
                  kendinizi bu tazelikle yenilenmiş hissedeceksiniz. Sonrasında
                  yazdığınız kodlar Seniurlarınız tarafından takdir görecek.
                  Sizde çok çalışıp hakkınızı alamıyorsanız bu pizzadan tadarak
                  daha başarılı bir yazılımcı olabilirsiniz. Birde pizza yemek
                  için İtalyaya gitmenize gerek yok, o pizza size bir tık
                  uzakta!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pizza Özelleştirme Bölümü */}
        <div className="customization-section">
          {/* Boyut Seçimi */}
          <div className="modern-form-section">
            <h4 className="section-title">
              <FaPizzaSlice className="section-icon" />
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
                      <span className="size-name">{boyut.name}</span>
                      <span className="size-price">{boyut.price} ₺</span>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Hamur Seçimi */}
          <div className="modern-form-section">
            <h4 className="section-title">
              <FaPizzaSlice className="section-icon" />
              Hamur Kalınlığı <span className="yildiz">*</span>
            </h4>
            <select
              className="modern-select"
              value={selectedHamur}
              onChange={handleHamurChange}
            >
              <option value="secimYapin">Hamur kalınlığını seçiniz</option>
              <option value="İnce Kenar">
                İnce Kenar (+{inceKenarFiyat} ₺)
              </option>
              <option value="Kalın Kenar">
                Kalın Kenar (+{kalinKenarFiyat} ₺)
              </option>
            </select>
          </div>

          {/* Ek Malzemeler */}
          <div className="modern-form-section">
            <h4 className="section-title">
              <FaPlus className="section-icon" />
              Ek Malzemeler
            </h4>
            <p className="section-subtitle">
              En fazla 10 malzeme seçebilirsiniz. (+{ekstraMalzemeFiyat} ₺)
            </p>

            <div className="ingredients-grid">
              {ekstraMalzemelerList.map((malzeme) => (
                <div key={malzeme} className="ingredient-card">
                  <input
                    type="checkbox"
                    id={`ingredient-${malzeme}`}
                    checked={ekstraMalzemeler.includes(malzeme)}
                    onChange={() => toggleEkstraMalzeme(malzeme)}
                    className="ingredient-checkbox"
                  />
                  <label
                    htmlFor={`ingredient-${malzeme}`}
                    className="ingredient-label"
                  >
                    <span className="checkmark"></span>
                    {malzeme}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Sipariş Notu */}
          <div className="modern-form-section">
            <h4 className="section-title">Sipariş Notu</h4>
            <textarea
              className="modern-textarea"
              name="orderNote"
              value={formData.orderNote}
              onChange={handleInputChange}
              placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
              rows="3"
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="form-container">
          {/* Kişisel Bilgiler Formu */}
          <div className="form-section">
            <h3 className="form-section-title">
              <i className="fas fa-user"></i>
              Kişisel Bilgiler
            </h3>
            <div className="form-grid">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Ad *"
                  className="modern-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Soyad *"
                  className="modern-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-posta *"
                  className="modern-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Telefon *"
                  className="modern-input"
                  required
                />
              </div>
            </div>
          </div>

          {/* Adres Bilgileri */}
          <div className="form-section">
            <h3 className="form-section-title">
              <i className="fas fa-map-marker-alt"></i>
              Teslimat Adresi
            </h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Adres *"
                  className="modern-textarea"
                  rows="3"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="İl *"
                  className="modern-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  placeholder="İlçe *"
                  className="modern-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  placeholder="Posta Kodu"
                  className="modern-input"
                />
              </div>
            </div>
          </div>

          {/* Ödeme Bilgileri */}
          <div className="form-section">
            <h3 className="form-section-title">
              <i className="fas fa-credit-card"></i>
              Ödeme Bilgileri
            </h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="Kart Numarası *"
                  className="modern-input"
                  maxLength="19"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  placeholder="AA/YY *"
                  className="modern-input"
                  maxLength="5"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="CVV *"
                  className="modern-input"
                  maxLength="4"
                  required
                />
              </div>
              <div className="form-group full-width">
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  placeholder="Kart Üzerindeki İsim *"
                  className="modern-input"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="hr-class" />

        <div className="sayac-2 fade-in" style={{ animationDelay: "0.6s" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <button className="modern-counter-btn" onClick={handleDecrement}>
                <FaMinus />
              </button>

              <div className="sayac-3 modern-counter">
                <FaPizzaSlice
                  style={{ marginRight: "10px", color: "#ce2829" }}
                />
                {sayac}
              </div>

              <button className="modern-counter-btn" onClick={handleIncrement}>
                <FaPlus />
              </button>
            </div>
          </div>

          <div
            className="siparis-toplam modern-order-summary slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="toplam2">
              <h3>Sipariş Toplamı</h3>
            </div>
            <div className="secim">
              <h4>Seçimler</h4>
              <h4>{ekstraMalzemeToplamFiyat.toFixed(2)} ₺</h4>
            </div>
            <div className="toplam">
              <h4>Toplam </h4>
              <h4>{toplamFiyat.toFixed(2)} ₺</h4>
            </div>

            <button
              className={`modern-order-btn ${isLoading ? "loading" : ""}`}
              onClick={handleOrder}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div
                    className="loading-spinner"
                    style={{
                      marginRight: "10px",
                      display: "inline-block",
                      fontSize: "1rem",
                    }}
                  >
                    ●
                  </div>
                  HAZıRLANıYOR...
                </>
              ) : (
                <>
                  <FaShoppingCart style={{ marginRight: "10px" }} />
                  SİPARİŞ VER
                </>
              )}
            </button>
            <br />
          </div>
        </div>
      </div>{" "}
      {/* Form container kapanış */}
      <Footer1 />
    </>
  );
};

export default Order;
