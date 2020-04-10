import React, { Component } from "react";
// import logo from "./logo.svg";
// import ClassList from "./components/class/class";
import "./App.css";

import StudentCardComponent from "./components/student/student";

import "materialize-css/dist/css/materialize.min.css";

class App extends Component {
	render() {
		return (
			<div>
				<StudentCardComponent studentName={"Zach"} />
				{/* <ClassList /> */}
			</div>
		);
	}
}

export default App;
