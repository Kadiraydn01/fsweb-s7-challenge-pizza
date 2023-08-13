import React from "react";
import resim1 from "./adv-aseets/mvp-banner.png";

const Home = () => {
  return (
    <div className="home-div">
      <h3>Teknolojik Yemekler</h3>
      <br />
      <h2>KOD ACIKTIRIR</h2>
      <h2>PİZZA DOYURUR</h2>
      <button className="btn">ACIKTIM</button>
      <img src={resim1} alt="" />
    </div>
  );
};

export default Home;
