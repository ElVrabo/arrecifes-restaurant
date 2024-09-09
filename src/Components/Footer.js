import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div id="footer" className="footer-logo-container">
            <h1 className="logo" >Arrecifes</h1>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <FaFacebookF />
          <SiLinkedin />
          {/* <BsYoutube /> */}
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Calidad</span>
          <span>Platillos</span>
          <span>Testimonios</span>
          <span>Trabajo</span>
        </div>
        <div className="footer-section-columns">
          <span>244-533-7783</span>
          <span>GreenDelight@gmail.com</span>
          <span>light@gmail.com</span>
          <span>fitness@food.com</span>
        </div>
        {/* <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
