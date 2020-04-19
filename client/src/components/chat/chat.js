import React from "react";

function Chat() {
	return (
		<div className='container'>
			<div className='chat-container'>
				<header className='chat-header'>
					<strong> Chat Box</strong>
					{/* <a href="index.html" className="btn">Leave Room</a> */}
				</header>
				<main className='chat-main'>
					<div className='chat-sidebar'>
						{/* <h3><i className="fas fa-comments"></i> Room Name:</h3>
                        <h2 id="room-name"></h2> */}
						<strong>Users</strong>
						<ul id='users'></ul>
					</div>
					<div className='chat-messages'></div>
				</main>
				<div className='chat-form-container'>
					<form id='chat-form'>
						{/* <input
                            id="toUser"
                            type="text"
                            placeholder="recipient"
                            required
                            autocomplete="off"
                        /> */}
						<input
							id='msg'
							type='text'
							placeholder='Enter Message'
							required
							autocomplete='off'
						/>
						<button className='btn'>
							<i className='fas fa-paper-plane'></i> Send
						</button>
					</form>
				</div>
			</div>

			<script src='/socket.io/socket.io.js'></script>
			<script src='./main.js'></script>
		</div>
	);
}

export default Chat;
