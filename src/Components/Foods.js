import { useEffect } from "react"
import "../styles/foods.css"
import { foods } from "../data/foods"
import CardFoods from "./CardFoods"
import { Zoom } from "react-reveal"

export default function Foods(){

   
    return (
       <>
        <div id="dishes" className="container-subheading" >
        <Zoom>
        <p className="primary-subheading" >Platillos</p>
        <h1 className="primary-heading">Mas solicitados</h1>
        </Zoom>
        </div>
        <section className="section-foods" >
          {foods.map((food)=>(
            <CardFoods
            image={food.image}
            title={food.title}
            description={food.description}
            />
          ))}
        </section>
       </>
    )
}