import React, { Component } from 'react';


export default class Order extends Component {
    renderOrder = key => {
        const car = this.props.cars[key];
        const count = this.props.order[key];
        const isAvailable = car && car.status === 'true';
        if(!car){
            return null;
        }
        if (!isAvailable){
            return <li key={key}> Sorry {car ? car.name : 'car'} is unavail </li>
        }
            return (
                <li key={key}>
                <p>{count} item {car.name}</p>
                <p>${count * car.price}</p>
                <button onClick={()=>this.props.removeFromOrder(key)}>del</button>
                </li>
            );
        };

    render()
    {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key)=>{
            const car = this.props.cars[key];
            const count = this.props.order[key];
            const isAvailable = car && car.status === 'true';
           if(isAvailable) {
               return prevTotal + (count * car.price);
           }
           return prevTotal;
        }, 0);
        return  (<div>
                    <h3>ORDER here</h3>
                     <ul>{orderIds.map(this.renderOrder)} </ul>
                    <div></div>
                    <h4>TOTAL:</h4>
                    <div>${total}</div>
                </div>
        )
    };
}