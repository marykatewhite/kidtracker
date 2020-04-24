const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();



const server = require("http").createServer(app);
const moment = require("moment");
var io = require("socket.io")(server);
const mongoose = require("mongoose");
const routes = require("./routes/classRoutes.js");

var time = moment().format("h:mm a");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/kidtracker", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Send every request to the React app
app.use(routes);

// Define any API routes before this runs
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

io.on("connection", (socket) => {

	let username = "john";

	const user = {
		id: socket.id,
		name: username
	};

	console.log(user.name, 'is connected as ID:', user.id);





	socket.on("disconnect", () => {
		console.log(socket.id, " disconnected");
	});

	socket.on("chat message", (msg) => {
		console.log(socket.id, "says", msg, "at", time);
		io.emit("chat message", msg, time);
	});


	socket.on("set user name", (data) => {

		console.log('Here is your name from Server: ', data);
	});



});

server.listen(PORT, function () {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
