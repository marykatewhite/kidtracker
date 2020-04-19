import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar";
import ClassList from "../../components/class/class";
import StudentList from "../../components/studentlist/studentList";
import Login from "../../components/login/login";
import Chat from "../../components/chat/chat";

function DashboardPage() {
	return (
		<>
			<Navbar />

			<div className='row'>
				<div className='col s12 '>
					<ClassList teacherName='Mr.Butt' />
				</div>
				<div className='row'>
					<div className='col s12 '>
						<StudentList />
					</div>
					<div className=''>
						<div className='col s12 '>
							<Chat />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default DashboardPage;
