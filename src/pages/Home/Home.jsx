import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import kdh_hero_banner from "../../assets/kdh_hero_banner.jpg";
import kdh_hero_title from "../../assets/kdh_hero_title.png";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={kdh_hero_banner} className="banner-img" />
        <div className="hero-caption">
          <img src={kdh_hero_title} className="caption-img" />
          <p>
            A K-pop girl group must harness the power of their music to protect
            the world from demons in this action-packed animated adventure.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} /> Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} /> More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        {" "}
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top Pics for You"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
