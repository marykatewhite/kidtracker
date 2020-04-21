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
