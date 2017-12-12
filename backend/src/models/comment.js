'use strict';

module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define('comment', {
    body: DataTypes.STRING
  });
  comment.associate = (models) => {
    console.log("-> comment belongs to user");
    comment.belongsTo(models.user, { foreignKey: 'user_id', onDelete: 'CASCADE' });
  }
  return comment;
};