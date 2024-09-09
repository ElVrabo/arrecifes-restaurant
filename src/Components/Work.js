import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { Zoom } from "react-reveal";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Elegir comidas",
      text: "Elige los platillos que mas te agraden, en la seccion de platillos se encuentran los mas solicitados.",
    },
    {
      image: ChooseMeals,
      title: "Hacer el pedido",
      text: "Despues de elegir los platillos, deberas de hacer tu pedido.",
    },
    {
      image: DeliveryMeals,
      title: "Entregas rapidas",
      text: "Despues de tomar la orden de tu pedido, se cocinaran lo mas rapido posible para hacer una entrega satisfactoria.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
       <Zoom>
       <p className="primary-subheading">Trabajo</p>
        <h1 className="primary-heading">Como funciona</h1>
        {/* <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p> */}
       </Zoom>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <Zoom>
            <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Work;
