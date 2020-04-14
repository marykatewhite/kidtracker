import React from "react";

function classList({ teacherName }) {
	return (
		<>
			<div class='card blue-grey darken-1'>
				<div class='card-content white-text'>
					<span class='card-title'>{teacherName}'s Class</span>
				</div>
			</div>
		</>
	);
}

export default classList;
