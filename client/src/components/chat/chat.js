import React from "react";
import "./style.css";

function Chat({ teacherName }) {
	return (
		<div className='chattydiv'>
			<div className='row'>
				<div className='card transparent z-depth-0'>
					<div className='card-content white-text'>
						<span className='card-title' id='userName'>
							{teacherName}
						</span>

						<div className='card transparent z-depth-0'>
							<div className='card-content white-text'>
								<span className='card-title center'>Messages</span>

								<ul id='messages' className='messages'></ul>
							</div>
						</div>
						<div className='chatContainer'>
							<form action=''>
								<span id='nm'>Mr.Smith's className</span>
								<input
									id='m'
									type='text'
									placeholder='Enter message here'
									autoComplete='off'
									className='input-field green-text'
								/>
								<button type='submit' className='btn waves-effect waves grey'>
									Send
								</button>
								<div />
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Chat;
