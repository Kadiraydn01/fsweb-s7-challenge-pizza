import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import resim1 from "./adv-aseets/mvp-banner.png";
import resim2 from "./adv-aseets/kart-1.png";
import resim3 from "./adv-aseets/kart-2.png";
import resim4 from "./adv-aseets/kart-3.png";
import resim5 from "./adv-aseets/food-1.png";
import resim6 from "./adv-aseets/food-2.png";
import resim7 from "./adv-aseets/food-3.png";
import ikon from "./adv-aseets/icons/1.svg";
import ikon1 from "./adv-aseets/icons/2.svg";
import ikon2 from "./adv-aseets/icons/3.svg";
import ikon3 from "./adv-aseets/icons/4.svg";
import ikon4 from "./adv-aseets/icons/5.svg";
import ikon5 from "./adv-aseets/icons/6.svg";
const Home = () => {
  const history = useHistory();

  const handleAciktimClick = () => {
    history.push("/order");
  };

  return (
    <>
      <div className="home-div">
        <h3>Teknolojik Yemekler</h3>
        <br />

        <h1>
          <span>fırsatı kaçırma</span>
          <br />
          KOD ACIKTIRIR <br />
          PİZZA DOYURUR
        </h1>

        <button className="btn" onClick={handleAciktimClick}>
          ACIKTIM
        </button>
        <img src={resim1} alt="" />
      </div>
      <div className="ikons">
        <img src={ikon} alt=""></img>
        <p>YENİ Kore</p>
        <img src={ikon1} alt=""></img>
        <p>Pizza</p>
        <img src={ikon2} alt=""></img>
        <p>Burger</p>
        <img src={ikon3} alt=""></img>
        <p>Kızartmalar</p>
        <img src={ikon4} alt=""></img>
        <p>Fast Food</p>
        <img src={ikon5} alt=""></img>
        <p>Gazlı İçecek</p>
      </div>
      <div className="sol-taraf">
        <div
          className="ilk-resim"
          style={{
            backgroundImage: `url(${resim2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: 416,
            width: 520,
          }}
        >
          <h1>
            Özel <br /> Lezzetus
          </h1>
          <p>Position Absolute Acı Burger</p>
          <button className="siparis " onClick={handleAciktimClick}>
            SİPARİŞ VER
          </button>
        </div>
        <div className="sag-taraf">
          <div
            className="ikinci-resim"
            style={{
              backgroundImage: `url(${resim3})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: 200,
              width: 600,
            }}
          >
            <h3>
              Hackathlon <br /> Burger Menü
            </h3>
            <button className="siparis " onClick={handleAciktimClick}>
              SİPARİŞ VER
            </button>
          </div>
          <div
            className="ücüncü-resim"
            style={{
              backgroundImage: `url(${resim4})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: 200,
              width: 600,
            }}
          >
            <h3>
              <span className="yildiz">Çooook </span>hızlı
              <br /> npm gibi kurye
            </h3>
            <button className="siparis " onClick={handleAciktimClick}>
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </div>
      <div className="menu-aciklama">
        <h5>en çok paketlenen menüler</h5>
        <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
      </div>
      <div>
        <div className="ikon-2">
          <button>
            <img src={ikon} alt=""></img>
            <p>Ramen</p>
          </button>
          <button className="siyah">
            <img src={ikon1} alt=""></img>
            <p>Pizza</p>
          </button>
          <button>
            <img src={ikon2} alt=""></img>
            <p>Burger</p>
          </button>
          <button>
            <img src={ikon3} alt=""></img>
            <p>French fries</p>
          </button>
          <button>
            <img src={ikon4} alt=""></img>
            <p>Fast Food</p>
          </button>
          <button>
            <img src={ikon5} alt=""></img>
            <p>Soft drinks</p>
          </button>
        </div>
      </div>
      <div className="yemek-menu">
        <div className="terminal">
          <img src={resim5} alt=""></img>

          <h4>Terminal Pizza</h4>
          <div className="abs">
            <p>4.9</p>
            <p>(200)</p>
            <p>
              <strong>80₺ </strong>
            </p>
          </div>
        </div>

        <div className="absolute">
          <img src={resim6} alt=""></img>
          <h4>Position Absolute Acı Pizza</h4>
          <div className="abs">
            <p>4.9</p>
            <p>(920)</p>
            <p>
              <strong>85 ₺ </strong>
            </p>
          </div>
        </div>

        <div className="tavuklu">
          <img src={resim7} alt=""></img>
          <h4>useEffect Tavuklu Burger</h4>
          <div className="abs">
            <p>4.9</p>
            <p>(462)</p>
            <p>
              <strong>75 ₺ </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
