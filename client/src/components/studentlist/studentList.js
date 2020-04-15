import React from "react";

import "./studentList.css";

function StudentList({ studentName }) {
	return (
		<>
			<ul className='collection with-header' id='studentCollection'>
				<li className='collection-header'>
					<h4>Students</h4>
				</li>
				<div className='row'>
					<li className='collection-item s12 studentComponent'>
						<div className='col s6'>Alvin</div>
					</li>
				</div>
			</ul>
		</>
	);
}

export default StudentList;
