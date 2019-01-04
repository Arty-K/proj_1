import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class AddForm extends Component {
    static propTypes = {
        addCar: PropTypes.func,
        _createCar: PropTypes.func
    };

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imgRef = React.createRef();

    _createCar = (e) => {
        //stop the form submitting
        e.preventDefault();
        const car = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            img: this.imgRef.current.value
        };
        this.props.addCar(car);

    };

    render() {
        return(
            <div className="container">
                <form className="form-edit" onSubmit={this._createCar}>
                    <div className="form-group">
                        <input
                            name="name"
                            ref={this.nameRef}
                            className="form-control"
                            placeholder="name" />
                        <input
                            name="price"
                            ref={this.priceRef}
                            className="form-control"
                            placeholder="price" />
                        <select
                            name="status"
                            ref={this.statusRef}
                            className="form-control"
                            placeholder="status" >
                                <option value={true}>available</option>
                                <option value={false}>unavailable</option>
                        </select>
                        <textarea
                            name="desc"
                            ref={this.descRef}
                            className="form-control"
                            placeholder="desc" />
                        <input
                            name="image"
                            ref={this.imgRef}
                            className="form-control"
                            placeholder="img" />
                    </div>

                    <button type="submit" className="btn btn-primary">+add car+</button>
                </form>
            </div>
        )
    }
}
