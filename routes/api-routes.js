
const db = require("../models");

module.exports = function(app) {

   app.get("/data-analysis/:race/:age/:state/:education/:gender", (req, res) => {

     db.User.findAll({})
        .then(function(data) {
          res.send(data);
        });

    //  res.send(`${req.params.race}${req.params.age}${req.params.state}${req.params.education}${req.params.gender}`);

   });
    

  app.post("/survey/new", (req, res) => {

    res.send("you have successfully posted you stuff holmes!");
    // bmc: dude, you're cracking me up!

  });


};