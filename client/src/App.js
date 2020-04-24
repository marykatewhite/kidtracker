import React, { Component } from "react";
import DashboardPage from "../src/pages/dashboard/dashboard";
import UserStore from "./stores/UserStore.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./pages/loginpage/login";
import { observer } from 'mobx-react';

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize";




class App extends Component {

  async componentDidMount() {
    try {
      let res = await fetch("/isLoggedIn", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      });
      let result = await res.json();
      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      } else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    } catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogOut() {
    try {
      let res = await fetch("/logout", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      });
      let result = await res.json();
      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = "";
      }
    } catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  componentDidMount() {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }

  render() {
    if (UserStore.isLoggedIn) {
      return (
        <div>
          <div className="contentdiv">
            <DashboardPage />
          </div>
        </div>
      );
	}
	else {


	componentDidMount() {
		let sidenav = document.querySelector("#slide-out");
		M.Sidenav.init(sidenav, {});
	}



	render() {

		return (
		  <div>
			<div className="contentdiv">
			  <LoginPage />
			</div>
		  </div>
		);
	  }

    // return (
    //   <>
    //     <Router>
    //       <div>
    //         <div className="contentdiv">
    //           <Route exact path="/" component={LoginPage} />
    //           <Route exact path="/dashboard" component={DashboardPage} />
    //         </div>
    //       </div>
    //     </Router>
    //   </>
    // );
  }
}

export default observer(App);
