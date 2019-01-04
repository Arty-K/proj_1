import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class EditCarForm extends Component {
    static = {
        car: PropTypes.shape({
            name:PropTypes.string,
            price:PropTypes.number,
            status:PropTypes.string,
            desc:PropTypes.string,
            image:PropTypes.string
        }),
        index: PropTypes.string,
        updateCar: PropTypes.func
    };


    handleChange = (e) => {
        console.log(e.currentTarget.name);
        const updatedCar = {
            ...this.props.car,
            [e.currentTarget.name]: e.currentTarget.value
        };
        this.props.updateCar(this.props.index, updatedCar);
    };


    render() {
        return(
            <div className="container">
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.props.car.name}
                    />
                    <input
                        className="form-control"
                        type="text"
                        name="price"
                        onChange={this.handleChange}
                        value={this.props.car.price}
                    />
                    <select
                        className="form-control"
                        type="text"
                        name="status"
                        onChange={this.handleChange}
                        value={this.props.car.status}>
                        <option value={true}>available</option>
                        <option value={false}>unavailable</option>
                    </select>
                    <textarea
                        className="form-control"
                        name="desc"
                        onChange={this.handleChange}
                        value={this.props.car.desc}
                    />
                    <input
                        className="form-control"
                        type="text"
                        name="image"
                        onChange={this.handleChange}
                        value={this.props.car.image}
                    />
                    <button onClick={() => this.props.deleteCar(this.props.index)}>remove car</button>
                </div>
            </div>
        )
    }
}