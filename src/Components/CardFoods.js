import PropTypes from 'prop-types';
import "../styles/cardFoods.css"
import { Zoom } from 'react-reveal';
export default function CardFoods({image,title,description}){
    return (
        <Zoom>
            <div className="container-card">
            <img src={image} />
            <div className="card-body">
                <h2 className='primary-text'>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
        </Zoom>
    )
}

CardFoods.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}