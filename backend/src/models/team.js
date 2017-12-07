'use strict';
module.exports = (sequelize, DataTypes) => {
  var team = sequelize.define('team', {
    team_name: DataTypes.STRING,
    team_points: DataTypes.INTEGER,
    pilot: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return team;
};