// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
<<<<<<< HEAD
app.use(express.static('public'));

=======
app.use(express.static("./public"));
>>>>>>> 79daa27f8bd3c745e8ef09d1eaad57e60b2456e0

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
<<<<<<< HEAD
=======

>>>>>>> 79daa27f8bd3c745e8ef09d1eaad57e60b2456e0
require("./routes/html-routes.js")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});