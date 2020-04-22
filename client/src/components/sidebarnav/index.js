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
					<ul className='collapsible'>
						<li>
							<div className='collapsible-header'>
								<i className='material-icons'>assignment_ind</i>Teachers
							</div>
							{/* <!-- we need a for loop to cycle through all possible teachers in the database to populate this dropdown --> */}
							<ul className='collapsible-body transparent z-depth-0'>
								<li>
									<a>Teacher 1</a>
								</li>
								<li>
									<a>Teacher 2</a>
								</li>
								<li>
									<a>Teacher 3</a>
								</li>
							</ul>
						</li>
					</ul>
					<div className='chatContainer' id='chatwindow'>
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
