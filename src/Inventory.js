import React, { Component } from 'react';
import firebase from 'firebase';
import AddForm from './AddForm';
import EditCarForm from './EditCarForm';

import Login from './Login';
import base, { firebaseApp } from './base';


export default class Inventory extends Component {

    authHandler = async authData => {
       const store = await base.fetch(this.props.storeName, {context: this});
        console.log(store);

        console.log(authData);

    };

    authenticate = provider => {
       const authProvider = new firebase.auth[`${provider}AuthProvider`]();
       firebaseApp
           .auth()
           .signInWithPopup(authProvider)
           .then(this.authHandler);
    };

    render() {
        console.log(this.props.storeName);
        /*return <Login authenticate={this.authenticate}/>;*/
        return(
            <div className="container">

                <h2>Inventory title</h2>
                {Object.keys(this.props.cars).map(key =>
                    <EditCarForm
                        key={key}
                        index={key}
                        car={this.props.cars[key]}
                        updateCar={this.props.updateCar}
                        deleteCar={this.props.deleteCar}
                    />
                )}
                <AddForm addCar={this.props.addCar}/>
                <button onClick={this.props.loadSamples}>load samples</button>
            </div>
        )

    }
}