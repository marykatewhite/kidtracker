import React, { Component } from "react";
import Logo from "./components/logo/logo";
// import Navbar from "./components/navbar/navbar";
import ClassList from "./components/class/class";
import StudentProfile from "./components/studentprofile/studentProfile";
import Login from "./components/login/login";
import Chat from "./components/chat/chat";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

class App extends Component {
	render() {
		return (
			<>
				{" "}
				{/* <div>{<Navbar />}</div> */}
				<div>{<Logo />}</div>
				<div>{<ClassList teacherName='Mr.Sims' />}</div>
				<div>{<StudentProfile />}</div>
				<div>{<Login />}</div>{" "}
				<div><Chat /></div>
			</>
		);
	}
}

export default App;
