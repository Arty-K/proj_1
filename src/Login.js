import React from 'react';


const Login = props => (
    <nav>
        <h2>inv login</h2>
        <p>sign in</p>
        <button
            className="facebook"
            onClick={() => props.authenticate("Facebook")}>
            Log in with fb
        </button>
    </nav>
);
export default Login;