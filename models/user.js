// Dependencies
// ============================================================

// DataTypes (capital) references the standard library
//var DataTypes = require("DataTypes");
// DataTypes (lowercase) references our connection to the DB.
//var DataTypes = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {


// Creates a "User" model that matches up with DB
  var User = sequelize.define("survey", {
    // ID: {
    //   type: DataTypes.INTEGER
    // },
    state: {
      type: DataTypes.TEXT
    },
    age: {
      type: DataTypes.INTEGER
    },
    race: {
      type: DataTypes.TEXT
    },
    gender: {
      type: DataTypes.TEXT
    },
    education: {
      type: DataTypes.TEXT
    },
    q1: {
      type: DataTypes.INTEGER
    },
    q2: {
      type: DataTypes.INTEGER
    },
    q3: {
      type: DataTypes.INTEGER
    },
    q4: {
      type: DataTypes.INTEGER
    },
    q4: {
      type: DataTypes.INTEGER
    },
    q5: {
      type: DataTypes.INTEGER
    },
    q5: {
      type: DataTypes.INTEGER
    },
    q6: {
      type: DataTypes.INTEGER
    },
    q7: {
      type: DataTypes.INTEGER
    },
    q8: {
      type: DataTypes.INTEGER
    },
    q9: {
      type: DataTypes.INTEGER
    },
    q10: {
      type: DataTypes.INTEGER
    },
    q11: {
      type: DataTypes.INTEGER
    },
    q12: {
      type: DataTypes.INTEGER
    },
    q13: {
      type: DataTypes.INTEGER
    },
    q14: {
      type: DataTypes.INTEGER
    },
    q15: {
      type: DataTypes.INTEGER
    },
    q16: {
      type: DataTypes.INTEGER
    },
    q17: {
      type: DataTypes.INTEGER
    },
    q18: {
      type: DataTypes.INTEGER
    },
    q19: {
      type: DataTypes.INTEGER
    },
    q20: {
      type: DataTypes.INTEGER
    },
    q21: {
      type: DataTypes.INTEGER
    },
    q22: {
      type: DataTypes.INTEGER
    },
    q23: {
      type: DataTypes.INTEGER
    },
    q24: {
      type: DataTypes.INTEGER
    },
    q25: {
      type: DataTypes.INTEGER
    }
  });

}
// Syncs with DB
//User.sync();

// Makes the User Model available for other files (will also create a table)
