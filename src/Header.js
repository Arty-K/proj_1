import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        return(
        <div className="container">
            <div className="row">
                <header>
                    <h1>this is start page for an app</h1>
                    <h3 className="tagline">
                        <span>{this.props.tagline}</span>
                    </h3>
                </header>
            </div>
        </div>
        )
    }
}