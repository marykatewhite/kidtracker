import React from "react";
import StudentProfile from "../../components/studentprofile/studentProfile";
import "./studentList.css";

import Student from "../../schema/students";

function StudentList({ studentName }) {
	return (
		<>
			<ul className='collection with-header'>
				<li className='collection-header transparent z-depth-0'>
					<h4 className='studentheader'>Students</h4>
				</li>
				<li className='collection-item transparent z-depth-0'>
					<div className='studentname'>
						Alvin
						<a href='#modal1' className='secondary-content modal-trigger'>
							<i className='material-icons icon-creamyyy'>more</i>
						</a>
					</div>
				</li>
				<li className='collection-item transparent z-depth-0'>
					<div className='studentname'>
						Alvin
						<a href='#!' className='secondary-content'>
							<i className='material-icons icon-creamyyy'>more</i>
						</a>
					</div>
				</li>
				<li className='collection-item transparent z-depth-0'>
					<div className='studentname'>
						Alvin
						<a href='#!' className='secondary-content'>
							<i className='material-icons icon-creamyyy'>more</i>
						</a>
					</div>
				</li>
				<li className='collection-item transparent z-depth-0'>
					<div className='studentname'>
						Alvin
						<a href='#!' className='secondary-content'>
							<i className='material-icons icon-creamyyy'>more</i>
						</a>
					</div>
				</li>
			</ul>
			{/* Modal Layout */}

			<div id='modal1' className='modal'>
				<div className='modal-content'>
					<StudentProfile />

					<div id='model 1' className='modal-footer transparent z-depth-0'>
						<a href='#!' className='modal-close sendButton'>
							close
						</a>
						&nbsp; &nbsp; &nbsp;
						<a href='#!' data-target='slide-out' className='sendButton'>
							Send Student
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default StudentList;
