'use strict';
module.exports = (sequelize, DataTypes) => {
  var grandprixteam = sequelize.define('grandprixteam', {
    team_id: DataTypes.INTEGER,
    grandprix_id: DataTypes.INTEGER
  });

  grandprixteam.associate = (models) => {
    console.log("-> many yo many");
    grandprixteam.belongsTo(models.team, {
      foreignKey: 'team_id'
    });
    grandprixteam.belongsTo(models.grandprix, {
      foreignKey: 'grandprix_id'
    });
  }
  return grandprixteam;
};