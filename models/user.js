// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "User" model that matches up with DB
var User = sequelize.define("user", {
  ID: {
    type: Sequelize.INTEGER
  },
  state: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  gender: {
    type: Sequelize.STRING
  },
  education: {
    type: Sequelize.STRING
  },
  q1: {
    type: Sequelize.INTEGER
  },
  q2: {
    type: Sequelize.INTEGER
  },
  q3: {
    type: Sequelize.INTEGER
  },
  q4: {
    type: Sequelize.INTEGER
  },
  q4: {
    type: Sequelize.INTEGER
  },
  q5: {
    type: Sequelize.INTEGER
  },
  q5: {
    type: Sequelize.INTEGER
  },
  q6: {
    type: Sequelize.INTEGER
  },
  q7: {
    type: Sequelize.INTEGER
  },
  q8: {
    type: Sequelize.INTEGER
  },
  q9: {
    type: Sequelize.INTEGER
  },
  q10: {
    type: Sequelize.INTEGER
  },
  q11: {
    type: Sequelize.INTEGER
  },
  q12: {
    type: Sequelize.INTEGER
  },
  q13: {
    type: Sequelize.INTEGER
  },
  q14: {
    type: Sequelize.INTEGER
  },
  q15: {
    type: Sequelize.INTEGER
  },
  q16: {
    type: Sequelize.INTEGER
  },
  q17: {
    type: Sequelize.INTEGER
  },
  q18: {
    type: Sequelize.INTEGER
  },
  q19: {
    type: Sequelize.INTEGER
  },
  q20: {
    type: Sequelize.INTEGER
  },
  q21: {
    type: Sequelize.INTEGER
  },
  q22: {
    type: Sequelize.INTEGER
  },
  q23: {
    type: Sequelize.INTEGER
  },
  q24: {
    type: Sequelize.INTEGER
  },
  q25: {
    type: Sequelize.INTEGER
  }
});

// Syncs with DB
User.sync();

// Makes the User Model available for other files (will also create a table)
module.exports = User;
