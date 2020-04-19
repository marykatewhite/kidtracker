import React from "react";

import "./class.css";

function classList({ teacherName }) {
	return (
		<>
			<div className='col s12 '>
				<h2 className='header'></h2>
				<div className='card horizontal transparent z-depth-0'>
					<div className='card-stacked center'>
						<div className='card-content teachername'>
							<p>{teacherName}</p>
						</div>
						<div className='card-action'>
							<a class='waves-effect waves-light btn center'>
								<i class='material-icons right'>send</i>Send class
							</a>
						</div>
					</div>
				</div>
			</div>
			;
		</>
	);
}

export default classList;
