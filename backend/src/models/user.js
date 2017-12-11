'use strict';

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  });

  user.associate = (models) => {
    console.log(models);
    user.hasMany(models.comment, { foreignKey: 'userId' })
  }

  return user;
};