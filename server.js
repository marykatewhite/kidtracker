const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const server = require("http").createServer(app);
const moment = require("moment");
var io = require("socket.io")(server);

var time = moment().format("h:mm a");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

io.on("connection", (socket) => {
	console.log(socket.id, "is connected");

	socket.on("disconnect", () => {
		console.log("A user disconnected");
	});

	socket.on("chat message", (msg) => {
		console.log(socket.id, "says", msg, "at", time);
		// io.emit('chat message', msg, socket.id, time);

		io.emit("chat message", msg, time);
	});
});

server.listen(PORT, function () {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
