import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Inventory from './Inventory';
import Car from './Car';
import Order from './Order';
import sampleCars from './sampleCars';
import base from './base';



export default class App extends Component {
    state = {
        cars: {},
        order: {}
    };

    static propTypes = {
        match: PropTypes.object
    }

    componentDidMount(){
        const localStorageRef = localStorage.getItem(this.props.match.params.storeName);
        if (localStorageRef) {
            this.setState({ order : JSON.parse(localStorageRef)})
        }
        this.ref = base.syncState(`${this.props.match.params.storeName}/cars`, {
            context: this,
            state: 'cars'
        });
    };

    componentDidUpdate(){
        console.log(this.state.order);
        localStorage.setItem(this.props.match.params.storeName, JSON.stringify(this.state.order))
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }
    addCar = car => {
        // TAKE A COPY OF THE EXISTING STATE
        const cars = {...this.state.cars};
        // ADD OUR NEW car TO cars
        cars[`car${Date.now()}`] = car;
        //SET THE NEW cars OBJECT TO STATE
        this.setState({cars});
    };

    updateCar = (key, updateCar) => {
        // TAKE A COPY
        const cars = {...this.state.cars};
        // update
        cars[key] = updateCar;
        //SETstate
        this.setState ({cars});
    };

    deleteCar = key => {
      const cars = {...this.state.cars};
        cars[key] = null;
        this.setState ({cars});
    };

    loadSamples = () => {
       this.setState({cars: sampleCars});
    };

    addToOrder = (key) => {
        // TAKE A COPY OF THE EXISTING STATE
        const order = {...this.state.order};
        // ADD TO THE ORDER OR UPDATE THE NUMBER
        order[key] = order[key] + 1 || 1;
        //SETSTATE TO UPDATE
        this.setState({order});
    };

    removeFromOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState ({order});
    };

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-5 columns">
                        <h3>menu</h3>
                        <ul>
                            {Object.keys(this.state.cars).map(key => (<Car
                                                key={key}
                                                index={key}
                                                details={this.state.cars[key]}
                                                addToOrder={this.addToOrder}
                                   />
                            ))}
                        </ul>
                    </div>

                    <div className="col-sm-3 columns">
                        <Order
                            cars={this.state.cars}
                            order={this.state.order}
                            key={this.state.key}
                            removeFromOrder={this.removeFromOrder}
                        />
                    </div>

                    <div className="col-sm-4 columns">
                        <Inventory
                            addCar={this.addCar}
                            deleteCar={this.deleteCar}
                            updateCar={this.updateCar}
                            loadSamples={this.loadSamples}
                            cars={this.state.cars}
                            storeName={this.props.match.params.storeName}
                        />
                    </div>
                </div>
            </div>
        )
    }
}