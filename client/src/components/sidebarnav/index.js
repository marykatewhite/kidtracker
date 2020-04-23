// import React from "react";
import React, { Component } from "react";

import M from "materialize-css/dist/js/materialize";
import "materialize-css/dist/css/materialize.min.css";
import Chat from "../../components/chat/chat";
import ClassList from "../../components/class/class";
import "./style.css";
import teachers from "../../teachers.json"




class SideNav extends Component {

	state = {
		data: []
	};



	makeDropdown = () => {

		let listArr = [];

		for (var i = 0; i < teachers.length; i++) {
			var lastname = teachers[i].caregiverlastname;
			listArr.push(lastname);
		}
		this.setState({ data: listArr });
	}


	render() {


		const items = this.state.data.map(teacher => {
			return <li key={teacher}><a> {teacher}</a></li>;
		});


		return (

			<>
				<div className='sideNavContainer'>
					<header className='nav transparent z-depth-0'>
						<div className='row'>
							<div className='col s6'>
								<ClassList teacherName='Mr.Smith' />
							</div>
						</div>

						<div className='col s12'>
							<a
								href='#'
								data-target='slide-out'
								className='waves-effect waves-light btn sidenav-trigger show-on-large transparent'>
								<i className='material-icons right'>send</i>Send Class
						</a>
						</div>
					</header>
					<ul id='slide-out' className='sidenav'>
						<li>
							<div className='user-view'>
								<a href='#name'>
									<p className='text-name'>First Name Last Name</p>
								</a>
								<a href='#email'>
									<p className='text-email'>email@email.com</p>
								</a>
							</div>
						</li>
						<ul className='collapsible'>
							<li>
								<div className='collapsible-header center'>

									<div className='dropdownHeader' id="dropdownheader" onClick={this.makeDropdown}>
										<p>
											Teachers <i className='material-icons right'>arrow_downward</i>
										</p>
									</div>
								</div>

								<ul>{items}</ul>

							</li>
						</ul>
						<div className='chatContainer' id='chatwindow'>
							<div className='col s12'>
								<Chat />
							</div>
						</div>
					</ul>
				</div >
			</>
		);
	}

}


export default SideNav;
