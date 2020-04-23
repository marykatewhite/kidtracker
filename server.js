const express = require("express");
const path = require("path");


var http = require("http");

const PORT = process.env.PORT || 3001;
const app = express();

const server = require("http").createServer(app);
const moment = require("moment");
var io = require("socket.io")(server);
var passport = require("passport");
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
// const UserDetail = require('./models/teacherModel');
const routes = require("./routes/classRoutes.js");

var time = moment().format("h:mm a");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// PASSPORT STUFF
// https://www.sitepoint.com/local-authentication-using-passport-node-js/

// Creating express app and configuring middleware needed for authentication
/* MONGOOSE SETUP */
// Finally, we add passportLocalMongoose as a plugin to our Schema. This will work part of the magic we talked about earlier. Then, we create a model from that schema. The first parameter is the name of the collection in the database. The second one is the reference to our Schema, and the third one is the name we’re assigning to the collection inside Mongoose.
mongoose.connect("mongodb://localhost/kidtracker", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const Schema = mongoose.Schema;
const UserDetail = new Schema({
	username: String,
	password: String,
});
UserDetail.plugin(passportLocalMongoose);
const UserDetails = mongoose.model("userInfo", UserDetail, "userInfo");
/* PASSPORT LOCAL AUTHENTICATION */
passport.use(UserDetails.createStrategy());
passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());

// Send every request to the React app
app.use(routes);

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
