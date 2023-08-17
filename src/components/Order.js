import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import "../App.css";
import resim0 from "../adv-aseets/adv-form-banner.png";
import Footer1 from "./Footer";
const Order = () => {
  const [sayac, setSayac] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedHamur, setSelectedHamur] = useState("secimYapin");
  const [ekstraMalzemeler, setEkstraMalzemeler] = useState([]);
  const [boyutlar] = useState([
    { name: "M", price: 85.5 },
    { name: "L", price: 105.5 },
    { name: "XL", price: 125.5 },
  ]);

  const ekstraMalzemeFiyat = 5;
  const kalinKenarFiyat = 15;
  const inceKenarFiyat = 10;

  const history = useHistory();

  const handleOrder = () => {
    const orderData = {
      selectedSize,
      selectedHamur,
      ekstraMalzemeler,
      ekstraMalzemeToplamFiyat,
      toplamFiyat,
    };
    history.push({
      pathname: "/success",
      state: { orderData },
    });
  };

  const handleIncrement = () => {
    setSayac(sayac + 1);
  };

  const handleDecrement = () => {
    if (sayac > 0) {
      setSayac(sayac - 1);
    }
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const toggleEkstraMalzeme = (malzeme) => {
    if (ekstraMalzemeler.includes(malzeme)) {
      setEkstraMalzemeler(ekstraMalzemeler.filter((item) => item !== malzeme));
    } else {
      setEkstraMalzemeler([...ekstraMalzemeler, malzeme]);
    }
  };

  const handleHamurChange = (event) => {
    setSelectedHamur(event.target.value);
  };

  const selectedSizeObject = boyutlar.find(
    (item) => item.name === selectedSize
  );

  const boyutFiyat = selectedSizeObject ? selectedSizeObject.price : 0;
  const hamurFiyat =
    selectedHamur === "inceKenar"
      ? inceKenarFiyat
      : selectedHamur === "kalinKenar"
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
      <div>
        <h4 className="hdört">Position Absolute Acı Pizza</h4>
      </div>
      <div className="fiyat">
        <p className="fiyat-p">
          <strong>{boyutFiyat} ₺ </strong>
        </p>
        <p>4.9</p>
        <p>(200)</p>
      </div>
      <div className="aciklama">
        <p className="aciklama-p">
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
        <Form className="boyut-form">
          <FormGroup>
            <h4>
              Boyut Seçiniz <span className="yildiz">*</span>
            </h4>
            <FormGroup check>
              <Label check>
                <Input
                  name="radio1"
                  type="radio"
                  value="M"
                  checked={selectedSize === "M"}
                  onChange={handleSizeChange}
                />
                M
              </Label>
            </FormGroup>
            <br />
            <FormGroup check>
              <Label check>
                <Input
                  name="radio1"
                  type="radio"
                  value="L"
                  checked={selectedSize === "L"}
                  onChange={handleSizeChange}
                />
                L
              </Label>
            </FormGroup>
            <br />
            <FormGroup check>
              <Label check>
                <Input
                  name="radio1"
                  type="radio"
                  value="XL"
                  checked={selectedSize === "XL"}
                  onChange={handleSizeChange}
                />
                XL
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="exampleSelect">
              <h4>
                Hamur Seç<span className="yildiz"> *</span>
              </h4>
            </Label>
            <br />
            <Input
              id="exampleSelect"
              name="select"
              bsSize="lg"
              className="mb-3"
              type="select"
              onChange={handleHamurChange}
            >
              <option value="secimYapin">Seçim Yapınız</option>
              <option value="inceKenar">İnce Kenar</option>
              <option value="kalinKenar">Kalın Kenar</option>
            </Input>
          </FormGroup>
        </Form>
      </div>
      <div className="malzeme-div">
        <div class="ekmalzeme-div">
          <h4>Ek Malzemeler</h4>
          <p>En Fazla 10 malzeme seçebilirsiniz. {ekstraMalzemeFiyat} ₺</p>

          <Form>
            <div class="checkbox-group">
              {ekstraMalzemelerList.map((malzeme) => (
                <FormGroup key={malzeme}>
                  <Input
                    id={`checkbox-${malzeme}`}
                    type="checkbox"
                    checked={ekstraMalzemeler.includes(malzeme)}
                    onChange={() => toggleEkstraMalzeme(malzeme)}
                  />
                  <Label for={`checkbox-${malzeme}`}>{malzeme}</Label>
                </FormGroup>
              ))}
            </div>
          </Form>
          <div>
            {/* <h4>Seçimler</h4>
            {ekstraMalzemeler.map((malzeme, index) => (
              <div key={index}>{malzeme}</div>
            ))} */}
          </div>
        </div>
      </div>
      <div>
        <div className="yorum">
          <Form>
            <FormGroup>
              <Label for="exampleText">
                <h3>Sipariş Notu</h3>
              </Label>
              <br />
              <Input
                className="yorum-input"
                id="exampleText"
                name="text"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                type="textarea"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">
                <h3>Adres Bilgilerini Giriniz</h3>
              </Label>
              <Input
                className="yorum-input"
                id="exampleText"
                name="text"
                placeholder="Adres giriniz!"
                type="textarea"
              />
            </FormGroup>
          </Form>
        </div>
      </div>
      <hr className="hr-class" />
      <div className="sayac-2">
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button className="btn-1" onClick={handleDecrement}>
              -
            </Button>
            <div className="sayac-3" style={{ fontSize: "32px" }}>
              {sayac}
            </div>
            <Button className="btn-2" onClick={handleIncrement}>
              +
            </Button>
          </div>
        </div>
        <div className="siparis-toplam">
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
          <Button className="btn-sayac" onClick={handleOrder}>
            SİPARİŞ VER
          </Button>
          <br />
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Order;
