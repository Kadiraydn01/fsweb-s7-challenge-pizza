import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
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
import Footer1 from "./components/Footer";

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleAciktimClick = () => {
    history.push("/order");
  };

  return (
    <>
      <div className="home-div fade-in">
        <h3 className="slide-up">Teknolojik Yemekler</h3>
        <br />

        <h1 className="slide-up" style={{ animationDelay: "0.2s" }}>
          <span className="highlight">fırsatı kaçırma</span>
          <br />
          KOD ACIKTIRIR <br />
          PİZZA DOYURUR
        </h1>

        <button
          className="btn modern-btn slide-up"
          onClick={handleAciktimClick}
          style={{ animationDelay: "0.4s" }}
        >
          <FaShoppingCart style={{ marginRight: "10px" }} />
          ACIKTIM
        </button>
        <img
          src={resim1}
          alt=""
          className="slide-up"
          style={{ animationDelay: "0.6s" }}
        />
      </div>

      <div className="ikons">
        {[
          { img: ikon, text: "YENİ Kore" },
          { img: ikon1, text: "Pizza" },
          { img: ikon2, text: "Burger" },
          { img: ikon3, text: "Kızartmalar" },
          { img: ikon4, text: "Fast Food" },
          { img: ikon5, text: "Gazlı İçecek" },
        ].map((item, index) => (
          <div
            key={index}
            className="icon-item"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={item.img} alt="" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="orta-kisim">
        <div className="front">
          <div className="sol-taraf">
            <div
              className="ilk-resim"
              style={{
                backgroundImage: `url(${resim2})`,
              }}
              data-aos="fade-right"
            >
              <h1>
                Özel <br /> Lezzetus
              </h1>
              <p>Position Absolute Acı Burger</p>
              <button className="siparis" onClick={handleAciktimClick}>
                SİPARİŞ VER
              </button>
            </div>
          </div>
          <div className="sag-taraf">
            <div
              className="ikinci-resim"
              style={{
                backgroundImage: `url(${resim3})`,
              }}
              data-aos="fade-left"
            >
              <h3>
                Hackathlon <br /> Burger Menü
              </h3>
              <button className="siparis" onClick={handleAciktimClick}>
                SİPARİŞ VER
              </button>
            </div>
            <div
              className="ücüncü-resim"
              style={{
                backgroundImage: `url(${resim4})`,
              }}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h3>
                <span className="yildiz">Çooook </span>hızlı
                <br /> npm gibi kurye
              </h3>
              <button className="siparis" onClick={handleAciktimClick}>
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
        <div className="menu-aciklama" data-aos="fade-up">
          <h5>en çok paketlenen menüler</h5>
          <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
        </div>
        <div>
          <div className="ikon-2" data-aos="fade-up">
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
          {[
            {
              img: resim5,
              title: "Terminal Pizza",
              rating: 4.9,
              reviews: 200,
              price: 80,
            },
            {
              img: resim6,
              title: "Position Absolute Acı Pizza",
              rating: 4.9,
              reviews: 920,
              price: 85,
            },
            {
              img: resim7,
              title: "useEffect Tavuklu Burger",
              rating: 4.9,
              reviews: 462,
              price: 75,
            },
          ].map((food, index) => (
            <div
              key={index}
              className={`food-card ${
                index === 0 ? "terminal" : index === 1 ? "absolute" : "tavuklu"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="food-image-container">
                <img src={food.img} alt="" />
                <div className="heart-icon">
                  <FaHeart />
                </div>
              </div>

              <h4>{food.title}</h4>
              <div className="abs">
                <div className="rating">
                  <FaStar className="star-icon" />
                  <span>{food.rating}</span>
                </div>
                <p>({food.reviews})</p>
                <p className="price">
                  <strong>{food.price}₺</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Home;
