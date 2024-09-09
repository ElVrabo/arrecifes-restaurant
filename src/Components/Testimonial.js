import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import { Zoom } from "react-reveal";

const Testimonial = () => {
  return (
    <div id="testimonials" className="work-section-wrapper">
      <div className="work-section-top">
        <Zoom>
        <p className="primary-subheading">Testimonios</p>
        <h1 className="primary-heading">Lo que dicen</h1>
        {/* <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p> */}
        </Zoom>
      </div>
      <Zoom>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Visitar este restaurante ha transformado mi forma de comer. Los platillos son frescos, deliciosos y me hacen sentir lleno de energía sin sacrificar el sabor.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Leonardo Lopez</h2>
      </div>
      </Zoom>
    </div>
  );
};

export default Testimonial;
