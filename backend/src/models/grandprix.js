'use strict';
module.exports = (sequelize, DataTypes) => {
  var grandprix = sequelize.define('grandprix', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    number_km: DataTypes.INTEGER,
    difficulty: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return grandprix;
};