import React, { Component } from 'react';


export default class Car extends Component {
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