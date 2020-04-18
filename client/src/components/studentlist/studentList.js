import React from "react";

import "./studentList.css";

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
				<li className='collection-item transparent z-depth-0'>
					<div className='studentname'>
						Alvin
						<a href='#!' className='secondary-content'>
							<i className='material-icons icon-creamyyy'>more</i>
						</a>
					</div>
				</li>
			</ul>
		</>
	);
}

export default StudentList;
