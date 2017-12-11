'use strict';

module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define('comment', {
    body: DataTypes.STRING
  });
  comment.associate = (models) => {
    console.log(models);
    comment.belongsTo(models.user, { foreignKey: 'userId', onDelete: 'CASCADE' })
  }
  return comment;
};