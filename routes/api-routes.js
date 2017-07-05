
module.exports = function(app) {

   app.get("/data-analysis/:race/:age/:state/:education/:gender", (req, res) => {
    db.User.findAll(
        where: {
            age: req.params.age,
            state: req.params.state,
            gender: req.params.gender,
            education: req.params.education,
            race: req.params.race;  
        });

  });

  app.post("/survey/new", (req, res) => {

    res.send("you have successfully posted you stuff holmes!");

  });

}