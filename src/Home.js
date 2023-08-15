import React from "react";
import { useHistory } from "react-router-dom";
import resim1 from "./adv-aseets/mvp-banner.png";
import "./Home.css";

const Home = () => {
  const history = useHistory();

  const handleAciktimClick = () => {
    history.push("/order");
  };

  return (
    <div className="home-div">
      <h3>Teknolojik Yemekler</h3>
      <br />
      <h1>
        KOD ACIKTIRIR <br />
        PİZZA DOYURUR
      </h1>

      <button className="btn" onClick={handleAciktimClick}>
        ACIKTIM
      </button>
      <img src={resim1} alt="" />
    </div>
  );
};

export default Home;
