
<<<<<<< HEAD
=======
// Dependencies
// =============================================================
var User = require("../models/user.js");
>>>>>>> 79daa27f8bd3c745e8ef09d1eaad57e60b2456e0

module.exports = function(app) {

   app.get("/:race/:age/:state/:education/:gender", function(req,res) {
// db.User.findAll(
//     where: {
//         age: req.params.age,
//         state: req.params.states,
//         gender: req.params.gender,
//         education: req.params.education,
//         race: req.params.race;  
//     }

    res.send("this thing worked!");
//);

  });

}


