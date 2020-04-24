import React, { Component } from "react";
import "./login.css";
import io from 'socket.io-client';



class Login extends Component {

	state = {
		username: ""
	}


	setUser = () => {
		let name = document.getElementById('email').value;
		this.setState({ username: name });
		console.log('Oh, your name is ', name);

	}



	componentDidUpdate = () => {
		console.log('username state is: ', this.state.username);
	}





	render() {

		return (
			<form className='col s12 offset-s3' >
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
							id="loginbutton"
							className='btn waves-effect waves-light'
							type='submit'
							name='action'
							onClick={this.setUser}
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
