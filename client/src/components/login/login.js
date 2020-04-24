import React, { Component } from "react";
import "./login.css";

import io from 'socket.io-client';
import UserStore from "../../stores/UserStore";



class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}

	}

	setInputValue(property, val) {
		this.setState({
			[property]: val
		})
	}


	resetForm() {
		this.setState({
			username: '',
			password: ''
		})
	}

	async doLogin() {
		if (!this.state.username) {
			return;
		}
		if (!this.state.password) {
			return;
		}
		try {
			let res = await fetch('login', {
				method: 'post',
				headers: {
					'Acccept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: this.state.username,
					password: this.state.password
				})
			});

			let result = await res.json();
			if (result && result.sucess) {
				UserStore.isLoggedIn = true;
				UserStore.username = result.username;				
			}
			else if (result && result.success === false) {
				this.resetForm();
				alert(result.msg);
			}
		}
		catch(e) {
			console.log('error')
		}
	}



	render() {

		return (
			<form className='col s12 offset-s3' id="loggyform">
				<div className='row'>
					<div className='input-field col s6'>
						<label for='email'>Email</label>
						<input 
						id='email'
						type='email' 
						className='validate'
						onChange={ (val) => this.setInputValue('username', val) } 
						/>
					</div>
				</div>
				<div className='row'>
					<div className='input-field col s6'>
						<label for='password'>Password</label>
						<input 
						id='password'
						type='password' 
						className='validate' 
						onChange={ (val) => this.setInputValue('password', val) }
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col s6'>
						<button
							id="loginbutton"
							className='btn waves-effect waves-light'
							type='submit'
							name='action'
							onClick={ () => this.doLogin() }
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
