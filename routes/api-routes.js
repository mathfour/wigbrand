

module.exports = function(app) {

   app.get("/data-analysis/:race/:age/:state/:education/:gender", function(req,res) {
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


