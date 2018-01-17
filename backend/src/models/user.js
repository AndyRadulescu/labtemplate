'use strict';

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  });

  user.associate = (models) => {
    console.log("-> user has many comments");
    user.hasMany(models.comment, { foreignKey: 'user_id' });
    console.log("-> user has many tickets");
    user.hasMany(models.ticket, { foreignKey: 'user_id' });
  }

  return user;
};