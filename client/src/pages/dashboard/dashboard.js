import React, { Component } from "react";

import Navbar from "../../components/navbar/navbar";
import StudentList from "../../components/studentlist/studentList";
import SideNav from "../../components/sidebarnav";
import { Sidenav } from "materialize-css";
import "./style.css";

function DashboardPage() {
	return (
		<>
			<Navbar />
			<div className='row'>
				<div className='col s12 '>
					<SideNav />
				</div>
				<div className='row'>
					<div className='col s12 studentList '>
						<StudentList />
					</div>
				</div>
			</div>
		</>
	);
}

export default DashboardPage;
