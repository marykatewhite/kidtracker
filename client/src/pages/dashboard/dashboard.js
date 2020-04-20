import React, { Component } from "react";

import Navbar from "../../components/navbar/navbar";
import ClassList from "../../components/class/class";
import StudentList from "../../components/studentlist/studentList";

import Chat from "../../components/chat/chat";
import SendButton from "../../components/button/index";
import SideNav from "../../components/sidebarnav";
import { Sidenav } from "materialize-css";

function DashboardPage() {
	return (
		<>
			<Navbar />
			<div className='row'>
				<div className='col s12 '>
					<SideNav />
				</div>
				<div className='row'>
					<div className='col s12 '>
						<StudentList />
					</div>
					{/* <div className=''>
						<div className='col s12 '>
							<Chat />
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
}

export default DashboardPage;
