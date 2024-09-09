import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Zoom } from "react-reveal";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
         <Zoom>
         <h1 className="primary-heading">
           Tu comida saludable entregada rapidamente
          </h1>
          <p className="primary-text">
          Los chefs de alternancia saludables hacen todo el trabajo de preparación, como orinar, picar y marinar, para que pueda cocinar un alimento fresco.
          </p>
         </Zoom>
          <Zoom>
          <button className="secondary-button" onClick={()=>{
            const sectionDishes = document.getElementById('dishes')
            if(sectionDishes){
              sectionDishes.scrollIntoView({behavior:"smooth"})
            }
          }} >
            Ver platillos <FiArrowRight />{" "}
          </button>
          </Zoom>
        </div>
        <div className="home-image-section">
          <Zoom>

          <img src={BannerImage} alt="" />
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Home;
