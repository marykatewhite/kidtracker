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
                    <button type="submit">Send</button>
                </form>


               

            </div>
        );

    }

    export default Chat;