import React from "react";
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
							class='waves-effect waves-light btn sidenav-trigger show-on-large transparent'>
							<i class='material-icons right'>send</i>Send class
						</a>
					</div>
				</header>
				<ul id='slide-out' class='sidenav'>
					<Chat />
					<ul>
						<li>
							<a className='sidenav-close'>Close Chat Window</a>
						</li>
					</ul>
				</ul>
			</div>
		</>
	);
}

export default SideNav;
