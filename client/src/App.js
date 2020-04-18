import React, { Component } from "react";
import DashboardPage from "../src/pages/dashboard/dashboard";

import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from "./pages/loginpage/login";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

class App extends Component {
	render() {
		return (
			<>
				<Router>
					<div>
						<div className='contentdiv'>
							<Route exact path='/' component={LoginPage} />
							<Route exact path='/dashboard' component={DashboardPage} />
						</div>
					</div>
				</Router>
			</>
		);
	}
}

export default App;
