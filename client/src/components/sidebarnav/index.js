import React from "react";
import M from "materialize-css/dist/js/materialize";
import "materialize-css/dist/css/materialize.min.css";
import Chat from "../../components/chat/chat";
import ClassList from "../../components/class/class";
import "./style.css";

function SideNav() {
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
							<i className='material-icons right'>send</i>Send className
						</a>
					</div>
				</header>
				<ul id='slide-out' className='sidenav'>
					<li>
						<div className='user-view'>
							<a href='#name'>
								<span className='green-text name'>First Name Last Name</span>
							</a>
							<a href='#email'>
								<span className='green-text email'>email@email.com</span>
							</a>
						</div>
					</li>
					<a
						class='dropdown-trigger btn center'
						href='#dropdown'
						data-target='dropdown1'>
						Drop Me!
					</a>
					<ul id='dropdown1' class='dropdown-content'>
						<option value='' disabled selected>
							Select a teacher:
						</option>
						<li>
							<option value='1'>Teacher 1</option>
						</li>
						<li class='divider' tabindex='-1'></li>
						<li>
							<option value='2'>Teacher 2</option>
						</li>
						<li>
							<option value='3'>Teacher 3</option>
						</li>
						<li>
							<a href='#!'>
								<i class='material-icons'>cloud</i>five
							</a>
						</li>
					</ul>

					<div className='input-field col s12'>
						<select>
							{/* <!-- we need a for loop to cycle through all possible teachers in the database to populate this dropdown --> */}
							<ul id='dropdown1' class='dropdown-content'></ul>
							<option value='' disabled selected>
								Select a teacher:
							</option>
							<option value='1'>Teacher 1</option>
							<option value='2'>Teacher 2</option>
							<option value='3'>Teacher 3</option>
						</select>
					</div>

					<div class='chatContainer' id='chatwindow'>
						<div className='col s12'>
							<Chat />
						</div>
					</div>
				</ul>
			</div>
		</>
	);
}

export default SideNav;
