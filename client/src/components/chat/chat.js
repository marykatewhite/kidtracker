import React from "react";
import "./style.css";

function Chat({ teacherName }) {
	return (
		<div className='chattydiv'>
			<div className='row'>
				<div className='card transparent z-depth-0'>
					<div class='card-content white-text'>
						<span class='card-title' id='userName'>
							{teacherName}
						</span>

  <a id="teacherlistbutton" class='dropdown-trigger btn' href='#' data-target='teacherlist'>To...</a>

  <ul id='teacherlist' class='dropdown-content'>
							<li><a href="#!">one</a></li>
							<li><a href="#!">two</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!">three</a></li>
							<li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
							<li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
						</ul>



						<div className='card transparent z-depth-0'>
							<div class='card-content white-text'>
								<span class='card-title'>Messages</span>

								<ul id='messages' className='messages'></ul>
							</div>
						</div>
						<form action=''>
							<span id='nm'>Mr.Smith's class</span>
							<input
								id='m'
								type='text'
								placeholder='Enter message here'
								autocomplete='off'
								className='input-field green-text'
							/>
							<button type='submit' className='btn waves-effect waves grey'>
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Chat;
