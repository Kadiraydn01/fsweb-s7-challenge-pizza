import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Order = () => {
  const [sayac, setSayac] = useState(0);
  const [selectedSize, setSelectedSize] = useState("küçük");
  const [selectedHamur, setSelectedHamur] = useState("inceKenar");
  const [ekstraMalzemeler, setEkstraMalzemeler] = useState([]);
  const [boyutlar] = useState([
    { name: "küçük", price: 85.5 },
    { name: "orta", price: 105.5 },
    { name: "büyük", price: 125.5 },
  ]);

  const ekstraMalzemeFiyat = 5;
  const kalınKenarFiyat = 15;
  const inceKenarFiyat = 10;

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
    selectedHamur === "inceKenar" ? inceKenarFiyat : kalınKenarFiyat;
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
        <Form>
          <FormGroup>
            <h4>
              Boyut Seçiniz <span className="yildiz">*</span>{" "}
            </h4>
            <FormGroup check>
              <Label check>
                <Input
                  name="radio1"
                  type="radio"
                  value="küçük"
                  checked={selectedSize === "küçük"}
                  onChange={handleSizeChange}
                />
                Küçük
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  name="radio1"
                  type="radio"
                  value="orta"
                  checked={selectedSize === "orta"}
                  onChange={handleSizeChange}
                />
                Orta
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  name="radio1"
                  type="radio"
                  value="büyük"
                  checked={selectedSize === "büyük"}
                  onChange={handleSizeChange}
                />
                Büyük
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="exampleSelect">
              <h4>
                Hamur Seç<span className="yildiz">*</span>
              </h4>
            </Label>
            <br />
            <Input
              id="exampleSelect"
              name="select"
              type="select"
              onChange={handleHamurChange}
            >
              <option value="inceKenar">İnce Kenar</option>
              <option value="kalınKenar">Kalın Kenar</option>
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
          </Form>
        </div>
      </div>
      <hr className="hr-class" />
      <div className="sayac-2">
        <div className="buolur">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button className="btn-1" onClick={handleDecrement}>
              -
            </Button>
            <div
              className="sayac-3"
              style={{ margin: "0 10px", fontSize: "24px" }}
            >
              {sayac}
            </div>
            <Button className="btn-2" onClick={handleIncrement}>
              +
            </Button>
          </div>
        </div>
        <div className="siparis-toplam">
          <div>
            <h3>Sipariş Toplamı</h3>
          </div>
          <div>
            <h4>
              Seçimler:
              {ekstraMalzemeToplamFiyat.toFixed(2)} ₺
            </h4>
          </div>
          <div>
            <h4>
              Toplam:
              {toplamFiyat.toFixed(2)} ₺
            </h4>
          </div>
          <Button className="btn-sayac">SİPARİŞ VER</Button>
        </div>
      </div>
    </>
  );
};

export default Order;
