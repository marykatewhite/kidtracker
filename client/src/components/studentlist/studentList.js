import React from "react";

import "./studentList.css";

import Student from "../../schema/students";

function StudentList({ studentName }) {
	const students = Student.map(function (value, index) {
		// console.log([]);
	});
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
				<div class='modal-content'>
					<h4>Student Name</h4>
					<p>Student Info here</p>
				</div>
				<div class='modal-footer'>
					<a
						href='#!'
						className='modal-close waves-effect waves-green btn-flat'>
						close
					</a>
					<a
						href='#!'
						className='modal-close waves-effect waves-green btn-flat'>
						Send Student
					</a>
				</div>
			</div>
		</>
	);
}

export default StudentList;
