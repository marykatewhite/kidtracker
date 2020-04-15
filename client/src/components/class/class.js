import React from "react";

import "./class.css";

function classNameList({ teacherName }) {
	return (
		<>
			<div className='col s12 m7' id='classComponent'>
				<div className='row'>
					<div className='col s10'>
						<h4 className='header' id='classNamecomptitle'>
							{teacherName}'s class
						</h4>
					</div>
					<div className='col s2'>
						<h4>
							<a
								href='#'
								data-target='slide-out'
								className='sidenav-trigger btn-floating btn-large waves-effect waves-dark btn grey'
							>
								<i className='material-icons left'>chat</i>Send
							</a>
						</h4>
					</div>
				</div>
			</div>
			;
		</>
	);
}

export default classNameList;
