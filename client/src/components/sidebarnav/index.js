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
				<nav className='nav transparent z-depth-0'>
					<ClassList teacherName='Mr.Butt' />
					<a
						href='#'
						data-target='slide-out'
						class='sidenav-trigger show-on-large right'>
						<i class='material-icons'>send</i>
					</a>
				</nav>
				<ul id='slide-out' class='sidenav'>
					<Chat />
				</ul>
			</div>
		</>
	);
}

export default SideNav;
