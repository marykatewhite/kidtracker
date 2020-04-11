import React from "react";

function StudentCardComponent({ studentName }) {
	return (
		<div className='row'>
			<div className='col s12 m7'>
				<div className='card'>
					<div className='card-image'>
						{/* <img uri={{'https://via.placeholder.com/150'}}/> */}
						<span className='card-title'>{studentName}</span>
					</div>
					<div className='card-content'>
						<ul>
							<li>D.O.B</li>
							<li>Allergies</li>
							<li>Parents</li>
							<li>Parent phone</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StudentCardComponent;
