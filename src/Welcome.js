import React, { Component } from 'react';
import Header from './Header';


export default class Welcome extends Component {
    myInput = React.createRef();

    goToSite = e => {
        //stop the form submitting
        e.preventDefault();
        //get text from form
        const storeName = this.myInput.current.value;
        this.props.history.push(`/my-page/${storeName}`);
    };

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Header tagline="tagline.props test"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h4>hi there,type some text to enter</h4>
                    </div>
                    <div className="col-6">
                        <form onSubmit={this.goToSite}>
                            <div className="input-group mb-3">
                                <input
                                    ref={this.myInput}
                                    required
                                    type="text"
                                    className="form-control"
                                    placeholder="your text here"
                                    label="Recipient's username"
                                    aria-describedby="basic-addon2"

                                />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="submit">enter the site</button>
                                    </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
