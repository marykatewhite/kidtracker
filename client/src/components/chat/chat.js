import React from "react";

// const styles = {};

function Chat() {
    return (

        <div>
        <div className="chat-container">

            <header className="chat-header">Chat Box</header>
            <form>
                <button id="teacher-dropdown">To...</button>
                {/* // Insert dropdown here with teacher list */}

                <input
                    id="msg"
                    type="text"
                    placeholder="Enter Message"
                    required
                />
                <button id="send-button">Send</button>

                <div className="chat-messages"></div>

            </form>
        </div >
        <script src="/socket.io/socket.io.js"></script>
	<script>
		var socket = io();
	  </script>

</div>



    

    );
}

export default Chat;