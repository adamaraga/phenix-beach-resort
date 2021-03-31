import React from 'react';
import {Link } from "react-router-dom";
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';

function Room({room}) {
   const {name, slug, price, images} = room;
    return (
        <article className='room'>
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single room"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className='btn-primary room-link'> features </Link>
                {/* <p className="room-info">{name}</p> */}
                
            </div>
            <div style={{ backgroundImage: `linear-gradient(rgba(12, 75, 138, 0.801), rgba(12, 75, 138, 0.808)), url(${images[0]})` }} className='room-name'> 
               <p>{name}</p> 
            </div>
        </article>
    )
}

Room.propTypes ={
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}

export default Room
