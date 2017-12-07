'use strict';
module.exports = (sequelize, DataTypes) => {
  var ticket = sequelize.define('ticket', {
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ticket;
};