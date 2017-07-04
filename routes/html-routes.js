// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

// Index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "../views/index.html"));
  });

// About route loads about.html
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname + "../views/about.html"));
  });

// Survey route loads survey.html
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "../views/survey.html"));
  });

// Data-analysis route loads data-analysis.html
  app.get("/data-analysis", function(req, res) {
    res.sendFile(path.join(__dirname + "../views/data-analysis.html"));
  });
};

