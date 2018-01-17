'use strict';
module.exports = (sequelize, DataTypes) => {
  var ticket = sequelize.define('ticket', {
    price: DataTypes.INTEGER,
    type: DataTypes.STRING
  });
  ticket.associate = (models) => {
    console.log("-> ticket belongs to grandprix");
    ticket.belongsTo(models.grandprix, { foreignKey: 'grandprix_id', onDelete: 'CASCADE' });
    console.log("-> comment belongs to user");
    ticket.belongsTo(models.user, { foreignKey: 'user_id', onDelete: 'CASCADE' });
  }
  return ticket;
};