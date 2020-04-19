import React from "react";

// const styles = {};

function Chat() {




        return (

            <div>


                <ul id="messages" className="messages"></ul>
                <form action="">
                    <input id="m" 
                    type="text"
                    placeholder="Enter message here"
                    autocomplete="off" />
                    <button>Send</button>
                </form>



                {/* <div className="chat-container">

                <header className="chat-header">Chat Box</header>
                <form>
                    <button id="teacher-dropdown">To...</button>
                    {/* // Insert dropdown here with teacher list */}

                {/* <input
                        id="msg"
                        type="text"
                        placeholder="Enter Message"
                        required
                    />
                    <button id="send-button">Send</button>

                    <div id="chat-messages"></div>

                </form>
            </div > */}

            </div>


        );

    }

    export default Chat;