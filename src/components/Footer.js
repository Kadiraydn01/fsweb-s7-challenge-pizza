import React from "react";
import "./Footer.css";
import resim8 from "../adv-aseets/insta/li-0.png";
import resim9 from "../adv-aseets/insta/li-1.png";
import resim10 from "../adv-aseets/insta/li-2.png";
import resim11 from "../adv-aseets/insta/li-3.png";
import resim12 from "../adv-aseets/insta/li-4.png";
import resim13 from "../adv-aseets/insta/li-5.png";
import ikon6 from "../adv-aseets/icons/icon-1.png";
import ikon7 from "../adv-aseets/icons/icon-2.png";
import ikon8 from "../adv-aseets/icons/icon-3.png";

const Footer1 = () => {
  return (
    <div className="alt-kisim-1">
      <div className="alt-kisim">
        <div className="düzen">
          <h1>
            Teknolojik <br />
            Yemekler
          </h1>
          <div className="düzen-1">
            <img className="ikon-1" src={ikon6} alt=""></img>
            <p>
              34890 Kaynarca Mah. <br />
              Istanbul Türkiye
            </p>
          </div>
          <div className="düzen-1">
            <img className="ikon-1" src={ikon7} alt=""></img>
            <p>aciktim@teknolojikyemekler.com</p>
          </div>
          <div className="düzen-1">
            <img className="ikon-1" src={ikon8} alt=""></img>
            <p>+90 216 123 45 67</p>
          </div>
        </div>
        <div className="alt-menu">
          <h2>Sıccacık Menuler</h2>
          <br />
          <div>
            <p>Terminal Pizza </p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Fosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>
        </div>
        <div className="ikon-3">
          <h3>Instagram</h3>
          <div className="alt-ikon">
            <img src={resim8} alt=""></img>
            <img src={resim9} alt=""></img>
            <img src={resim10} alt=""></img>
            <img src={resim11} alt=""></img>
            <img src={resim12} alt=""></img>
            <img src={resim13} alt=""></img>
          </div>
        </div>
      </div>
      <hr className="hr-class-1" />

      <div className="footer">
        <p>@2023 Teknolojik Yemekler</p>
      </div>
    </div>
  );
};

export default Footer1;
