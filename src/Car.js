import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Car extends Component {
    static propTypes = {
        details: PropTypes.shape({
            img: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            price: PropTypes.number,
            status: PropTypes.string
        }),
        addToOrder: PropTypes.func
    };

    render() {
        const {img, name, desc ,price, status} = this.props.details;
        const isAvailable = status === 'true';
        return(
           <li>
               <img src={img} alt={name}/>
               <h5>{name}</h5>
               <span>{price}</span>
               <p>{desc}</p>
               <button
                   disabled={!isAvailable}
                   onClick={() => this.props.addToOrder(this.props.index)}
                 >{isAvailable ? 'add to cart' : 'sold out'}
               </button>
           </li>
        )
    }
}