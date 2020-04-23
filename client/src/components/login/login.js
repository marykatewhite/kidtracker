import React, { Component } from "react";
import "./login.css";

class Login extends Component {

	state = {
		username: ""
	}


	setUser = () => {

		// socket.emit('set user name', $('#email').val());

	}


	render() {

		return (
			<form className='col s12 offset-s3'>
				<div className='row'>
					<div className='input-field col s6'>
						<label for='email'>Email</label>
						<input id='email' type='email' className='validate' />
					</div>
				</div>
				<div className='row'>
					<div className='input-field col s6'>
						<label for='password'>Password</label>
						<input id='password' type='password' className='validate' />
					</div>
				</div>
				<div className='row'>
					<div className='col s6'>
						<button
							className='btn waves-effect waves-light'
							type='submit'
							name='action'
						>
							Submit
					</button>
					</div>
				</div>
			</form>
		);
	}

}

export default Login;
