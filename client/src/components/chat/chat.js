import React from "react";
import "./style.css";

function Chat({ teacherName }) {
	return (
		<div className='chattydiv'>
			<div className='row'>
				<div className='card transparent z-depth-0'>
					<div className='card-content white-text'>
						<span className='card-title' id='userName'></span>
						<div className=' messages-header card transparent z-depth-0'>
							<div className='card-content white-text'>
								<span className='card-title center'>Messages</span>
								<ul id='messages' className='messages'></ul>
							</div>
						</div>
						<div className='chatContainer'>
							<form action=''>
								<div className='chatportal'>
									<input
										id='m'
										type='text'
										placeholder='Enter message here'
										autoComplete='off'
										className='input-field'
									/>
									<button type='submit' className='sendButton'>
										Send
									</button>
								</div>
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
