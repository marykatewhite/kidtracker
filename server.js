const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const server = require('http').createServer(app);
var io = require('socket.io')(http);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./client/public/index.html"));
});


io.on('connection', function (socket) {
	console.log('Socket Connected.  All systems go.');
  });


server.listen(PORT, function () {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
