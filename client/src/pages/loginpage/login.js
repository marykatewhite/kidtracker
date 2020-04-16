import React from "react";
import Login from "../../components/login/login";

import "./login.css";

function LoginPage() {
	return (
		<>
			<div className='row'>
				<div className='col s12'>
					<div id='logo'>
						<img
							src='./branding/rollcalllogosquare.png'
							alt='Roll Call'
							id='squarelogo'
						/>
					</div>
					<Login />
				</div>
			</div>
		</>
	);
}

export default LoginPage;
