import React from "react";

import "./class.css";

function ClassList({ teacherName }) {
	return (
		<>
			<div className='col s12 m7' id='classComponent'>
				<div className='row'>
					<div className='col s10'>
						<h4 className='header' id='classNamecomptitle'>
							{teacherName}'s class
						</h4>
					</div>
				</div>
			</div>
		</>
	);
}

export default ClassList;
