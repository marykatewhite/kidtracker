import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  state = {
    currentuser: "",
  };

  setUser = () => {
    let name = document.getElementById("email").value;
    let username;

    if (name === "josi3006@hotmail.com") {
      username = "Mr. Sims";
      this.setState({ currentuser: "Mr. Sims" });
    } else if (name === "mkUltra@email.com") {
      username = "Miss White";
      this.setState({ currentuser: "Miss White" });
    } else {
      username = "Mr. Sadovszky";
      this.setState({ currentuser: "Mr. Sadovszky" });
    }

    window.localStorage.setItem("username", username);

    console.log("On login from if-else: ", username);
  };

  render() {
    return (
      <form className="col s12 offset-s3" id="loggyform">
        <div className="row">
          <div className="input-field col s6">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              className="validate"
              onChange={(val) => this.setInputValue("username", val)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              className="validate"
              onChange={(val) => this.setInputValue("password", val)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <button
              id="loginbutton"
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={this.setUser}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
