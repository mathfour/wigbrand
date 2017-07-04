'use strict';

module.exports = {
    up: function (queryInterface, DataTypes, done) {
        return queryInterface.createTable('survey',
                {
                    id: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
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
                }).then(function () {
                    queryInterface.sequelize.query("INSERT INTO survey (state, age, race, gender, q1, q7, q24) VALUES ('Texas', 42, 'white', 'female', 5, 4, 3), ('Louisiana', 19, 'hispanic', 'male', 1, 2,5)");
            done();
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('survey');
    }
};
