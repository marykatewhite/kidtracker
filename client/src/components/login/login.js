import React from "react";

function Login() {
    return (
        <div className="row">
        <form className="col s12 offset-s3">
            <div className="row">
                <div className="input-field col s6">
                    <input id="email" type="email" className="validate" />
                    <label for="email">Email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input id="password" type="password" className="validate" />
                    <label for="password">Password</label>
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    </button>
                </div>
            </div>
        </form>
    </div>
    );
}

export default Login;
