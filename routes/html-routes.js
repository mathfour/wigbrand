const path = require("path");

module.exports = function(app) {

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });

    app.get("/about", (req, res) => {
        res.sendFile(path.join(__dirname, "../views/about.html"));
    });

    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../views/survey.html"));
    });

    app.get("/data-analysis", (req, res) => {
        res.sendFile(path.join(__dirname, "../views/data-analysis.html"));
    });
}