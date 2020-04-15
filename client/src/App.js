import React, { Component } from "react";
import Logo from "./components/logo/logo";
import Navbar from "./components/navbar/navbar";
import ClassList from "./components/class/class";
import StudentProfile from "./components/studentprofile/studentProfile";
import Login from "./components/login/login";


import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

class App extends Component {
	render() {
		return (
			<>
				<Navbar />
				{/* <Logo />
				<Login /> */}
				<ClassList teacherName='Mr.Simm' />
				<StudentProfile />
				
			</>
		);
	}
}

export default App;
