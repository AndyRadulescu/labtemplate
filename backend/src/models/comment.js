'use strict';

module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define('comment', {
    body: DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) {
          console.log(models);
          comment.belongsTo(models.user, { foreignKey: 'userId' })
        }
      }
    });
  return comment;
};