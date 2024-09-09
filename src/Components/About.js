import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Fade, Zoom,Roll,LightSpeed } from "react-reveal";

const About = () => {
  return (
    <div id="about" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <Zoom>
          
        <img src={AboutBackgroundImage} alt="" />
        </Zoom>
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Acerca de</p>
        <Zoom>
        <h1 className="primary-heading">
         
        La comida es una parte importante de una dieta equilibrada
       </h1>
         </Zoom>
        <Zoom>
        <p className="primary-text">
        La comida es esencial para mantener una dieta equilibrada, aportando los nutrientes necesarios para una vida saludable. Elegir opciones frescas y naturales mejora el bienestar físico y mental.
        </p>
        </Zoom>
        
       {/* <Zoom>
       <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
       </Zoom> */}
        {/* <div className="about-buttons-container">
         <Zoom>
         <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
         </Zoom>
        </div> */}
      </div>
    </div>
  );
};

export default About;
