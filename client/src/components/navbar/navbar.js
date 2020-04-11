import React from "react";
import "./navbar.css";

function Navbar() {
	return (
		<nav>
			<div className='nav-wrapper'>
				<img
					src='./branding/rollcalllogohorizontal.png'
					alt='Roll Call'
					id='navlogo'
				/>
			</div>
		</nav>
	);
}

export default Navbar;
